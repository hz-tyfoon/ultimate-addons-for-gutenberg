import React, { useLayoutEffect, useEffect } from 'react';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import styles from './editor.lazy.scss';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import { select, withSelect, withDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';
// import UAGTextControl from '@Components/text-control';
import apiFetch from '@wordpress/api-fetch';
import { store as spectraStore } from '@Store';
import { STORE_NAME as storeName } from '@Store/constants';
import { compose } from '@wordpress/compose';
import UAGSelectControl from '@Components/select-control';
import { useDeviceType } from '@Controls/getPreviewType';
import AddNewPopupStyle from './add-new-popup-style';
import { isEmptyObject } from '@Utils/Helpers';
import { clearCurrentAttributes, getLabel, getGlobalBlockStylesOptions, getNewAttributes } from './utils';

const GlobalBlockStyles = ( props ) => {
    console.log( 'GlobalBlockStyles', props );
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
        globalBlockStylesFontFamilies,
        updateGlobalBlockStyles,
        updateGlobalBlockStylesFontFamilies,
        attributes,
        attributes : { globalBlockStyleId },
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
            console.log( 'saveStylesToDatabase', data );
            if ( data?.success ) {
                updateGlobalBlockStyles( data?.data );
                clearCurrentAttributes( currentBlockDefaultAttributes, setAttributes );
            }
            
            setUpdateLoader( false );
            setPanelLoader( false );
            setSaveToDatabase( false );
        } );
    };

    const generateBlockStyles = ( newStyleID = globalBlockStyleId ) => {
        updateGoogleFontData( attributes );

        if ( ! newStyleID ) {
            return;
        }

        // console.log( 'globalBlockStyles 11', globalBlockStyles );
        
        globalBlockStyles.map( ( style ) => {

            if ( newStyleID && style?.value === String( newStyleID ) ) {
                const styleNameClass = style?.label?.replace( /\s+/g, '-' )?.toLowerCase();
                const baseSelector = `.spectra-gbs-${styleNameClass}`;

                const newAttributes = getNewAttributes( style, attributes, currentBlockDefaultAttributes );
                const blockStyling = styling( newAttributes, clientId, blockName, deviceType, baseSelector );
                style.editorStyles = blockStyling;
                style.attributes = newAttributes;
                style.clientId = clientId;
                style.blockName = blockName;
                
                // Save the Post IDs of the Pages where GBS is used.
                if ( style?.post_ids ) {
                    style.post_ids.push( currentPostID );
                } else {
                    style.post_ids = [ currentPostID ];
                }
                
                style.post_ids = [ ...new Set( style.post_ids ) ] // Make array values unique.
            }
            return style
        } );

        updateGlobalBlockStyles( globalBlockStyles );
        setSaveToDatabase( true );
        setGenerate( false );
    };

    const updateGoogleFontData = ( attrs ) => {
        attrs = { ...attrs };
        Object.keys( attrs ).map( ( attribute ) => {
            
            if ( attribute.includes( 'Family' ) && '' !== attrs[attribute] ) {
                globalBlockStylesFontFamilies.push( attrs[attribute] );
            }
            return attribute;
        } );

        const output = [];
        for( const item of globalBlockStylesFontFamilies ){
            if( ! output.includes( item ) ){
                output.push( item );
            }
        }
        updateGlobalBlockStylesFontFamilies( output );
    };
    
    return (
        <UAGAdvancedPanelBody
            title={ __( 'Global Block Styles', 'ultimate-addons-for-gutenberg' ) }
            initialOpen={ false }
            className={ panelLoader ? 'loading' : '' }
        >
            <AddNewPopupStyle { ...{ ...props, setGenerate, setTempStyleName, tempStyleName, uniqueID, setUniqueID } } />
            
            <UAGSelectControl
                label={ getLabel( globalBlockStyleId ) }
                data={ {
                    value: globalBlockStyleId,
                    label: 'globalBlockStyleId',
                } }
                onChange = {
                    ( value ) => {
                        // console.log( 'select value', value );

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
                options={ getGlobalBlockStylesOptions( globalBlockStyles, blockName ) }
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