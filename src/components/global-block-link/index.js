import React, { useLayoutEffect, useEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, withSelect, withDispatch, dispatch } from '@wordpress/data';
import { Button, Modal  } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';
import apiFetch from '@wordpress/api-fetch';
import { store as spectraStore } from '@Store';
import { STORE_NAME as storeName } from '@Store/constants';
import { compose } from '@wordpress/compose';
import Select from 'react-select';
import UAGSelectControl from '@Components/select-control';

const GlobalBlockStyles = ( props ) => {
   // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const {
        globalBlockStyles,
        isOpen,
        globalBlockStylesFontFamilies,
        openModal,
        closeModal,
        updateGlobalBlockStyles,
        updateGlobalBlockStylesFontFamilies,
        attributes,
        attributes : {
            globalBlockStyleName,
            globalBlockStyleId
        },
        blockName
    } = props;

    const styling = props.styling;
	props = props.parentProps;

    const {
        setAttributes,
    } = props;

    const [ uniqueID, setUniqueID ] = useState( false );
    const [ bulkEdit, setBulkEdit ] = useState( false );
    const [ multiSelected, setMultiSelected ] = useState( [] );
    const [ updateLoader, setUpdateLoader ] = useState( false );

    const [ tempStyleName, setTempStyleName ] = useState( '' );
    const [ saveToDatabase, setSaveToDatabase ] = useState( false );
    const [currentAttributesState, setCurrentAttributesState] = useState( attributes );
    const [ attributesChanged, setAttributesChanged ] = useState( false );

    const blockNameStripped = blockName.replace( 'uagb/', '' );

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )
    const currentBlockDefaultAttributes = allBlocksAttributes[blockNameStripped]

    useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { spectraBlockName: blockName } );
	}, [] );

    useEffect( () => {
        if ( currentAttributesState !== attributes ) {
            setCurrentAttributesState( attributes );
            setAttributesChanged( true );
            
        } else {
            setAttributesChanged( false );
        }
		
	}, [attributes] );

    useEffect( () => {
        if ( saveToDatabase ) {
            saveStylesToDatabase();
        }
	}, [saveToDatabase] );

    useEffect( () => {
        generateBlockStyles();
	}, [globalBlockStyleId, globalBlockStyles] );

    const saveStylesToDatabase = ( bulkUpdateStyles = 'no', spectraGlobalStyles = globalBlockStyles ) => {

        let styleProps = {};

        spectraGlobalStyles.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                styleProps = style?.props;
            }
            return style;
        } );
        const formData = new window.FormData();

        formData.append( 'action', 'uag_global_block_styles' );
        formData.append( 'security', uagb_blocks_info.uagb_ajax_nonce );
        formData.append( 'props', JSON.stringify( styleProps ) );
        formData.append( 'spectraGlobalStyles', JSON.stringify( spectraGlobalStyles ) ); 
        formData.append( 'globalBlockStylesFontFamilies', JSON.stringify( globalBlockStylesFontFamilies ) ); 
        formData.append( 'blockName', blockName );
        formData.append( 'postId', select( 'core/editor' ).getCurrentPostId() );
        formData.append( 'globalBlockStyleId', globalBlockStyleId );
        formData.append( 'bulkUpdateStyles', bulkUpdateStyles );

        if ( bulkUpdateStyles ) {
            formData.append( 'multiSelected', JSON.stringify( multiSelected ) );
        }

        apiFetch( {
            url: uagb_blocks_info.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( ( data ) => {
            if ( data?.success ) {
    
                updateGlobalBlockStyles( data?.data );
                Object.keys( currentBlockDefaultAttributes ).map( ( attribute ) => {

                    if ( currentBlockDefaultAttributes[attribute]?.UAGCopyPaste ) {
                        setAttributes( {
                            [attribute] : currentBlockDefaultAttributes[attribute]?.default || undefined
                        } );
                        
                    }
                    return attribute;
                } );
            }
            setUpdateLoader( false );
            setSaveToDatabase( false );
        } );
    };

    const blockNameClass = blockName?.split( '/' )?.pop();

    const generateBlockStyles = ( newStyleID = globalBlockStyleId ) => {
        updateGoogleFontData( attributes );

        if ( ! newStyleID ) {
            return;
        }

        globalBlockStyles.map( ( style ) => {
            if ( newStyleID && style?.value === String( newStyleID ) ) {
    
                const styleNameClass = style?.label?.replace( /\s+/g, '-' )?.toLowerCase();
                const baseSelector = `.spectra-gbs-${blockNameClass}-${styleNameClass}`;
                const asArray = Object.entries( attributes );
                const filtered = asArray.filter( ( [key, value] ) => {
                    // if ( currentBlockDefaultAttributes[key]?.UAGCopyPaste ) {
                        return currentBlockDefaultAttributes[key]?.default !== value;
                    // }
                } );

                const justStrings = Object.fromEntries( filtered );
    
    
                const newProps = {...props};
                if ( style?.props ) {
                    newProps.attributes = {
                        ...style?.props.attributes,
                        ...justStrings
                    }
                }
    
                const blockStyling = styling( newProps, baseSelector );
                style.editorStyles = blockStyling;
                style.props = newProps;
                
                const currentPostID = select( 'core/editor' ).getCurrentPostId()
                
                if ( style?.post_ids ) {
                    style.post_ids.push( currentPostID );
                } else {
                    style.post_ids = [currentPostID];
                }
                style.post_ids = [...new Set( style.post_ids )]
            }
            return style

        } );
        
        updateGlobalBlockStyles( globalBlockStyles );
        setSaveToDatabase( true );
    };
    const updateGoogleFontData = ( attrs ) => {
        Object.keys( attrs ).map( ( attribute ) => {
            
            if ( attribute.includes( 'Family' ) && '' !== attrs[attribute] ) {
                globalBlockStylesFontFamilies.push( attrs[attribute] );
            }
            return attribute;
        } );

        const output = [];
        for( const item of globalBlockStylesFontFamilies ){
    
            if( !output.includes( item ) )
              output.push( item )
        }
        updateGlobalBlockStylesFontFamilies( output );
    };

    const selectLabel = ( ! globalBlockStyleName || '' === globalBlockStyleName ) ? __( 'Link to Existing Style',
        'ultimate-addons-for-gutenberg' ) : __( 'Linked Style',
        'ultimate-addons-for-gutenberg' );
    
    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ true }
        >
            {
                ( ! globalBlockStyleName || '' === globalBlockStyleName ) && (
                    <Button
                        className="spectra-gbs-button components-base-control"
                        onClick={ () => {
                            openModal();
                            setUniqueID( new Date().getTime().toString() );
                        } }
                        variant="primary"
                    >
                        { __( 'Save as a New Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                    </Button>
                )
            }
            { 'open' === isOpen && (
                    <Modal 
                        title={ __( 'Save as a Global Block Style', 'ultimate-addons-for-gutenberg' ) } onRequestClose={ closeModal }
                        className="spectra-global-block-style-name-modal"
                    >
                    <p> { __( 'Enter a word or two to make a unique global block style & you\'ll be able to add this global style to multiple areas on your site.', 'ultimate-addons-for-gutenberg' ) }</p>
                    <div className="button-input-wrap">
                        <UAGTextControl
                            placeholder={ __(
                                'Style Name',
                                'ultimate-addons-for-gutenberg'
                            ) }
                            value={ tempStyleName }
                            onChange={ ( value ) => {
                                setTempStyleName( value?.toString() );
                            } }
                            showHeaderControls={false}
                        />
                        <button 
                            onClick={ () => {
                                setAttributes( 
                                    { 
                                        globalBlockStyleName: tempStyleName,
                                        globalBlockStyleId: uniqueID 
                                    } 
                                )
                                const spectraGlobalStyles = [
                                    ...globalBlockStyles,
                                    {
                                        value: uniqueID,
                                        label: tempStyleName,
                                    }
                                ]
                                closeModal();
                                updateGlobalBlockStyles( spectraGlobalStyles );
                            } }
                        >
                            <p> { __( 'Save', 'ultimate-addons-for-gutenberg' ) }</p>
                        </button>
                    </div>
				</Modal>
			) }
            {
                ! bulkEdit &&

                <UAGSelectControl
                    label={ selectLabel }
                    data={ {
                        value: globalBlockStyleId,
                        label: 'globalBlockStyleId',
                    } }
                    onChange = {
                        ( value ) => {

                            let label = '';
                            for ( let i = 0; i < globalBlockStyles.length; i++ ) {
                                if ( globalBlockStyles[i]?.value === value ) {
                                    label = globalBlockStyles[i]?.label;
                                    break;
                                }
                            }

                            setAttributes( 
                                { 
                                    globalBlockStyleId: value,
                                    globalBlockStyleName: label 
                                } 
                            );

                            setUniqueID( value );
                        }
                    }
                    options={ globalBlockStyles }
                    layout="stack"
                />
            }
            { bulkEdit && (
                <>
                    <label htmlFor="select-label">{selectLabel}</label>
                    <Select
                        data={ {
                            value: globalBlockStyleId,
                            label: 'globalBlockStyleId',
                        } }
                        defaultValue={multiSelected}
                        onChange = {
                            ( value ) => {    
                                if ( bulkEdit ) {
                                    setMultiSelected( value );
                                }
                            }
                        }
                        options={ globalBlockStyles }
                        classNamePrefix={'spectra-multi-select'}
                        className={'spectra-multi-select components-base-control'}
                        isMulti={true}
                    />
                </>
            )
            }
            <Button
                className="spectra-gbs-button components-base-control"
                onClick={ () => {
                    setBulkEdit( true );
                    setMultiSelected( globalBlockStyles.filter( ( item ) => item.value && globalBlockStyleId?.includes( item.value ) ) );
                } }
                variant="primary"
            >
                { __( 'Bulk Edit', 'ultimate-addons-for-gutenberg' ) }
            </Button>
            { bulkEdit &&
                (
                    <>
                        <Button
                            className="spectra-gbs-button delete components-base-control"
                            onClick={ () => {
                                setMultiSelected( globalBlockStyles );
                            } }
                            variant="primary"
                        >
                            { __( 'Select All', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                        <Button
                            className="spectra-gbs-button delete components-base-control"
                            onClick={ () => {
                                setBulkEdit( false );
                                const toBeDeletedIDs = [];
                                for( const style in multiSelected ) {
                                    toBeDeletedIDs.push( multiSelected[style]?.value );
                                }
                                const filterGBS = globalBlockStyles.filter( ( style ) => {
                                    if ( style?.value && toBeDeletedIDs.includes( style?.value ) && 'None' !== style?.label ) {
                                        dispatch( 'core/block-editor' ).updateBlockAttributes( style?.props?.clientId, { 
                                            globalBlockStyleId: '',
                                            globalBlockStyleName: '' 
                                        } );
                                        return false;
                                    }
                                    return true;
                                } );
                                updateGlobalBlockStyles( filterGBS );
                                saveStylesToDatabase( 'bulkUpdateStyles', filterGBS );
                                setUniqueID( false );
                            } }
                            variant="primary"
                        >
                            { __( 'Delete Selected Styles', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                    </>
                )
            }
            {
                ( globalBlockStyleName && '' !== globalBlockStyleName ) && (
                    <>
                        {
                            attributesChanged &&
                            <Button
                                className={`spectra-gbs-button ${updateLoader ? 'loading' : ''} components-base-control`}
                                onClick={ () => {
                                    setUpdateLoader( true );
                                    generateBlockStyles();
                                } }
                                variant="primary"
                            >
                                { __( 'Update Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                            </Button>
                        }
                        <Button
                                className="spectra-gbs-button components-base-control"
                                onClick={ () => {
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: '',
                                            globalBlockStyleName: '' 
                                        } 
                                    );
                                    setUniqueID( false );
                                } }
                                variant="primary"
                        >
                            { __( 'Unlink Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                    </>
                )
            }
        </UAGAdvancedPanelBody>
    );
};

export default compose(
	withSelect( ( spectraGbsSelect ) => {

		const globalBlockStyles = spectraGbsSelect( storeName ).getGlobalBlockStyles();
		const isOpen = spectraGbsSelect( storeName ).getGlobalBlockStylesPopupState();
		const globalBlockStylesFontFamilies = spectraGbsSelect( storeName ).getGlobalBlockStylesFontFamilies();
        const { getSelectedBlock } = spectraGbsSelect( 'core/block-editor' );
        const selectedBlockData = getSelectedBlock();
        
        const {
            attributes,
            name,
            clientId
        } = selectedBlockData;

		return {
			globalBlockStyles,
            isOpen,
            globalBlockStylesFontFamilies,
            attributes,
            blockName : name,
            clientId
		};	
	} ),
    withDispatch( ( spectraGbsDispatch ) => ( {
		openModal: () => spectraGbsDispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'open' ),
		closeModal: () => spectraGbsDispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'close' ),
        updateGlobalBlockStyles: ( value ) => spectraGbsDispatch( spectraStore ).updateGlobalBlockStyles( value ),
        updateGlobalBlockStylesFontFamilies: ( value ) => spectraGbsDispatch( spectraStore ).updateGlobalBlockStylesFontFamilies( value )
	} ) ),
)( GlobalBlockStyles );