import React, { useLayoutEffect, useEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
const { getSelectedBlock } = select( 'core/block-editor' );
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, dispatch, useSelect } from '@wordpress/data';
import { Button, Modal  } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';
import UAGSelectControl from '@Components/select-control';
import apiFetch from '@wordpress/api-fetch';
import { store as spectraStore } from '@Store';
import { STORE_NAME as storeName } from '@Store/constants';

const GlobalBlockStyles = ( props ) => {
   // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const styling = props.styling;
	props = props.parentProps;

    const {
        attributes,
        setAttributes
    } = props;

    const isOpen = useSelect( ( spectraStoreSelect ) => {
        return spectraStoreSelect( storeName ).getGlobalBlockStylesPopupState();
    } );
    
    const globalBlockStyles = useSelect( ( spectraStoreSelect ) => {
        return spectraStoreSelect( storeName ).getGlobalBlockStyles();
    } );

    const globalBlockStylesFontFamilies = useSelect( ( spectraStoreSelect ) => {
        return spectraStoreSelect( storeName ).getGlobalBlockStylesFontFamilies();
    } );
    const [ uniqueID, setUniqueID ] = useState( false );
    const [ tempStyleName, setTempStyleName ] = useState( false );
    const [ saveToDatabase, setSaveToDatabase ] = useState( false );
    const [currentAttributesState, setCurrentAttributesState] = useState( attributes );
    const [ attributesChanged, setAttributesChanged ] = useState( false );



	const openModal = () => dispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'open' );
	const closeModal = () => dispatch( spectraStore ).toggleGlobalBlockStylesPopup( 'close' );
	const updateGlobalBlockStyles = (value) => dispatch( spectraStore ).updateGlobalBlockStyles( value );
    const updateGlobalBlockStylesFontFamilies = (value) => dispatch( spectraStore ).updateGlobalBlockStylesFontFamilies( value );

    const {
        globalBlockStyleName,
        globalBlockStyleId
    } = attributes;

    const selectedBlockData = getSelectedBlock();
    const {
        name,
    } = selectedBlockData;

    const blockName = name.replace( 'uagb/', '' );

	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )
    const currentBlockDefaultAttributes = allBlocksAttributes[blockName]

    useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { spectraBlockName: name } );
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

    const saveStylesToDatabase = () => {

        let styleProps = {};

        globalBlockStyles.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                styleProps = style?.props;
            }
            return style;
        } );
        const formData = new window.FormData();

        formData.append( 'action', 'uag_global_block_styles' );
        formData.append( 'security', uagb_blocks_info.uagb_ajax_nonce );
        formData.append( 'props', JSON.stringify( styleProps ) );
        formData.append( 'spectraGlobalStyles', JSON.stringify( globalBlockStyles ) ); 
        formData.append( 'blockName', name );
        formData.append( 'postId', select( 'core/editor' ).getCurrentPostId() );
        formData.append( 'globalBlockStyleId', globalBlockStyleId );

        

        apiFetch( {
            url: uagb_blocks_info.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( () => {
            
            Object.keys( currentBlockDefaultAttributes ).map( ( attribute ) => {

                if ( currentBlockDefaultAttributes[attribute]?.UAGCopyPaste ) {
                    setAttributes( {
                        [attribute] : currentBlockDefaultAttributes[attribute]?.default || undefined
                    } );
                    
                }
                return attribute;
            } );
            setSaveToDatabase( false );
        } );
    };

    const blockNameClass = name?.split( '/' )?.pop();

    const getBlockStyles = ( spectraGlobalStyles = globalBlockStyles) => {

        updateGoogleFontData( attributes );

        spectraGlobalStyles.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                
                const baseSelector = `.spectra-gbs-${blockNameClass}-${style?.label}`;
                const asArray = Object.entries( props.attributes );
                const filtered = asArray.filter( ( [key, value] ) => {
                    return currentBlockDefaultAttributes[key]?.default !== value;
                } );

                const justStrings = Object.fromEntries( filtered );
                console.log(justStrings);
                const newProps = {...props};
                if ( style?.props ) {
                    newProps.attributes = {
                        ...style?.props.attributes,
                        ...justStrings
                    }
                }
                console.log(newProps);
                const blockStyling = styling( newProps, baseSelector );
                style.editorStyles = blockStyling;
                style.props = newProps;
                setCurrentAttributesState(justStrings);
                let currentPostID = select( 'core/editor' ).getCurrentPostId()
                if (style?.post_ids) {
                    style.post_ids.push(currentPostID);
                } else {
                    style.post_ids = [currentPostID];
                }
                style.post_ids = [...new Set(style.post_ids)]
            }
            return style

        } );

        updateGlobalBlockStyles(spectraGlobalStyles);
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
        updateGlobalBlockStylesFontFamilies(output);
    };

    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ true }
        >
            {
                ( ! globalBlockStyleName || '' === globalBlockStyleName ) && (
                    <>
                        <Button
                            className="spectra-save-block-styles-button components-base-control"
                            onClick={ () => {
                                openModal();
                                setUniqueID( new Date().getTime().toString() );
                            } }
                            variant="primary"
                        >
                            { __( 'Save as a New Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                        <UAGSelectControl
                            label={ __(
                                'Link to Existing Style',
                                'ultimate-addons-for-gutenberg'
                            ) }
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
                                    setCurrentAttributesState(attributes);
                                    setSaveToDatabase( true );
                                }
                            }
                            layout="stack"
                            options={ globalBlockStyles }
                        />
                    </>
                )
            }
            { 'open' === isOpen && (
                    <Modal 
                        title={ __( 'Save as a Global Block Style', 'ultimate-addons-for-gutenberg' ) } onRequestClose={ closeModal }
                        className="spectra-global-block-style-name-modal"
                    >
                    <p> { __( 'You\'ll be able to add this global style to multiple areas on your site.', 'ultimate-addons-for-gutenberg' ) }</p>
                    <div className="button-input-wrap">
                        <UAGTextControl
                            placeholder={ __(
                                'Style Name',
                                'ultimate-addons-for-gutenberg'
                            ) }
                            value={ tempStyleName }
                            onChange={ ( value ) => {
                                setTempStyleName(value);
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
                                let spectraGlobalStyles = [
                                    ...globalBlockStyles,
                                    {
                                        value: uniqueID,
                                        label: tempStyleName,
                                    }
                                ]
                                dispatch( spectraStore ).updateGlobalBlockStyles( spectraGlobalStyles )
                                closeModal();
                                getBlockStyles(spectraGlobalStyles);

                            } }
                        >
                            <p> { __( 'Save', 'ultimate-addons-for-gutenberg' ) }</p>
                        </button>
                    </div>
				</Modal>
			) }
            {
                ( globalBlockStyleName && '' !== globalBlockStyleName ) && (
                    <>
                        <UAGSelectControl
							label={ __(
								'Linked Style',
								'ultimate-addons-for-gutenberg'
							) }
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
                                    setCurrentAttributesState(attributes);
                                    setSaveToDatabase( true );
                                }
                            }
							options={ globalBlockStyles }
                            layout="stack"
						/>
                        {
                            attributesChanged &&
                            <Button
                                className="spectra-save-block-styles-button components-base-control"
                                onClick={ () => {
                                    setAttributesChanged( false );
                                    getBlockStyles();
                                } }
                                variant="primary"
                            >
                                { __( 'Update Global Block Style', 'ultimate-addons-for-gutenberg' ) }
                            </Button>
                        }
                        <Button
                                className="spectra-save-block-styles-button components-base-control"
                                onClick={ () => {
                                    setAttributes( 
                                        { 
                                            globalBlockStyleId: '',
                                            globalBlockStyleName: '' 
                                        } 
                                    );
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

export default GlobalBlockStyles;