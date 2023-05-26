import React, { useLayoutEffect, useEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { Button, Modal  } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';
import apiFetch from '@wordpress/api-fetch';
import { store as spectraStore } from '@Store';
import { STORE_NAME as storeName } from '@Store/constants';
import { compose } from '@wordpress/compose';
import UAGSelectControl from '@Components/select-control';
import { useDeviceType } from '@Controls/getPreviewType';

const GlobalBlockStyles = ( props ) => {
   // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    const deviceType = useDeviceType();

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
        styling,
        setAttributes,
        blockName,
        clientId
    } = props;

    const [ uniqueID, setUniqueID ] = useState( false );
    const [ updateLoader, setUpdateLoader ] = useState( false );
    const [ panelLoader, setPanelLoader ] = useState( false );
    const [ tempStyleName, setTempStyleName ] = useState( '' );
    const [ saveToDatabase, setSaveToDatabase ] = useState( false );
    const [ generate, setGenerate ] = useState( false );

    const blockNameStripped = blockName.replace( 'uagb/', '' );
    const currentPostID = select( 'core/editor' ).getCurrentPostId()
	const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes )
    const currentBlockDefaultAttributes = allBlocksAttributes[blockNameStripped]


    useEffect( () => {
        if ( saveToDatabase ) {
            saveStylesToDatabase();
        }
	}, [saveToDatabase] );

    useEffect( () => {
        if ( generate ) {
            generateBlockStyles();
        } 
	}, [globalBlockStyleId, globalBlockStyles] );

    const clearCurrentAttributes = () => {
        
        const saveAttr = {};
        for ( const attrKey in currentBlockDefaultAttributes ) {
            const attrObject = currentBlockDefaultAttributes[ attrKey ];
            if( attrObject?.isGBSStyle ){
                
                let value = '';
                
                switch ( attrObject.type ) {
                    case 'boolean':
                        value = false;
                        break;
                    case 'number':
                        value = 0.001020304;
                        break;
                    case 'object':
                        value = {};
                        break;
                    case 'array':
                        value = [];
                        break;
                }
                saveAttr[ attrKey ] = value;
            }

        }

        if( Object.keys( saveAttr ).length ){
            setAttributes( saveAttr );
        }
    }
    const saveStylesToDatabase = ( bulkUpdateStyles = 'no', spectraGlobalStyles = globalBlockStyles ) => {

        let styleAttributes = {};

        spectraGlobalStyles.map( ( style ) => {
            if ( ( style?.value === uniqueID ) || ( style?.value === globalBlockStyleId ) ) {
                styleAttributes = style?.attributes;
            }
            return style;
        } );
        const formData = new window.FormData();

        formData.append( 'action', 'uag_global_block_styles' );
        formData.append( 'security', uagb_blocks_info.uagb_ajax_nonce );
        formData.append( 'attributes', JSON.stringify( styleAttributes ) );
        formData.append( 'spectraGlobalStyles', JSON.stringify( spectraGlobalStyles ) ); 
        formData.append( 'globalBlockStylesFontFamilies', JSON.stringify( globalBlockStylesFontFamilies ) ); 
        formData.append( 'blockName', blockName );
        formData.append( 'postId', currentPostID );
        formData.append( 'globalBlockStyleId', globalBlockStyleId );
        formData.append( 'bulkUpdateStyles', bulkUpdateStyles );

        apiFetch( {
            url: uagb_blocks_info.ajax_url,
            method: 'POST',
            body: formData,
        } ).then( ( data ) => {
            if ( data?.success ) {
    
                updateGlobalBlockStyles( data?.data );
                clearCurrentAttributes();
            }
            
            setUpdateLoader( false );
            setPanelLoader( false );
            setSaveToDatabase( false );
        } );
    };

    // Function to check if an object is empty
    const isEmptyObject = ( obj ) => {
        return Object.keys( obj ).length === 0 && obj.constructor === Object;
    }

    const generateBlockStyles = ( newStyleID = globalBlockStyleId ) => {
        updateGoogleFontData( attributes );

        if ( ! newStyleID ) {
            return;
        }
        
        globalBlockStyles.map( ( style ) => {
            if ( newStyleID && style?.value === String( newStyleID ) ) {
    
                const styleNameClass = style?.label?.replace( /\s+/g, '-' )?.toLowerCase();
                const baseSelector = `.spectra-gbs-${styleNameClass}`;
                const asArray = Object.entries( attributes );
                const filtered = asArray.filter( ( [key, value] ) => {
                    if ( currentBlockDefaultAttributes[key]?.isGBSStyle ) {
                        return (
                            '0.001020304' !== value &&
                            '' !== value &&
                            {} !== value &&
                            [] !== value &&
                            false !== value &&
                            !isEmptyObject( value )
                          );
                    }
                    return false;
                } );

                const defaultAttributes = style?.attributes || attributes;
                const finalAttributes = Object.fromEntries( filtered );

                const newAttributes = {
                    ...defaultAttributes,
                    ...finalAttributes
                };
                for( const attribute in newAttributes ) {
                    if( 0.001020304 === newAttributes?.[attribute] ){
                        newAttributes[attribute] = '';
                    }
                }
                
                const blockStyling = styling( newAttributes, clientId, blockName, deviceType,baseSelector );
                style.editorStyles = blockStyling;
                style.attributes = newAttributes;
                style.clientId = clientId;
                
                // Save the Post IDs of the Pages where GBS is used.
                if ( style?.post_ids ) {
                    style.post_ids.push( currentPostID );
                } else {
                    style.post_ids = [currentPostID];
                }
                
                style.post_ids = [...new Set( style.post_ids )] // Make array values unique.

                // Save all the clientIds of the blocks where GBS is used.
                if ( style?.blocksLinked ) {
                    style.blocksLinked.push( clientId );
                } else {
                    style.blocksLinked = [clientId];
                }
                
                style.blocksLinked = [...new Set( style.blocksLinked )] // Make array values unique.
                

            }
            return style

        } );
        
        updateGlobalBlockStyles( globalBlockStyles );
        setSaveToDatabase( true );
        setGenerate( false );
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
            initialOpen={ false }
            className={ panelLoader ? 'loading' : '' }
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
                        { __( 'Add New', 'ultimate-addons-for-gutenberg' ) }
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
                        <Button
                            onClick={ () => {
                                setGenerate( true );
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
                            variant="primary"
                        >
                            { __( 'Save', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                    </div>
				</Modal>
			) }
            
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

                        globalBlockStyles.map( ( style ) => {
                            
                            if ( style?.value === value ) {
                                label = style?.label;
                                
                                // Save the Post IDs of the Pages where GBS is used.
                                if ( style?.post_ids ) {
                                    style.post_ids.push( currentPostID );
                                } else {
                                    style.post_ids = [currentPostID];
                                }
                        
                                style.post_ids = [...new Set( style.post_ids )] // Make array values unique.

                                // Save all the clientIds of the blocks where GBS is used.
                                if ( style?.blocksLinked ) {
                                    style.blocksLinked.push( clientId );
                                } else {
                                    style.blocksLinked = [clientId];
                                }
                                
                                style.blocksLinked = [...new Set( style.blocksLinked )] // Make array values unique.
                            

                            }
                            return style;
                        } );
                        updateGlobalBlockStyles( globalBlockStyles );
                        saveStylesToDatabase( 'bulkUpdateStyles', globalBlockStyles );
                        setAttributes( 
                            { 
                                globalBlockStyleId: value,
                                globalBlockStyleName: label 
                            } 
                        );
                        setPanelLoader( true );
                        setUniqueID( value );
                    }
                }
                options={ globalBlockStyles }
                layout="stack"
            />
            {
                ( globalBlockStyleId && '' !== globalBlockStyleId ) && (
                    <div className='spectra-gbs-buttons-wrap'>
                        <Button
                            className={`spectra-gbs-button ${updateLoader ? 'loading' : ''} components-base-control`}
                            onClick={ () => {
                                setUpdateLoader( true );
                                generateBlockStyles();
                            } }
                            variant="primary"
                        >
                            { __( 'Update Globally!', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
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
                            { __( 'Unlink Style', 'ultimate-addons-for-gutenberg' ) }
                        </Button>
                    </div>
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
            name,
            clientId
        } = selectedBlockData;

		return {
			globalBlockStyles,
            isOpen,
            globalBlockStylesFontFamilies,
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