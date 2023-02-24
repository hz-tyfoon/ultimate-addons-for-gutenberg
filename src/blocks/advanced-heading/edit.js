/**
 * BLOCK: Advanced Heading
 */
import styling from './styling';
import React, { useEffect } from 'react';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import { STORE_NAME as storeName } from '@Store/constants';
import { useSelect } from '@wordpress/data';

//  Import CSS.
import './style.scss';

const UAGBAdvancedHeading = ( props ) => {
	const deviceType = useDeviceType();
	
	const { 
		UAGHideDesktop, 
		UAGHideTab, 
		UAGHideMob,
		globalBlockStyleId,
		globalBlockStyleName
	} = props.attributes;
	
	const globalBlockStyles = useSelect( ( spectraStoreSelect ) => {
        return spectraStoreSelect( storeName ).getGlobalBlockStyles();
    } );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } )

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {
		console.log('in');
		console.log(globalBlockStyles);
		globalBlockStyles.map( ( style ) => {
			
			if ( style?.value === globalBlockStyleId && style?.label === globalBlockStyleName ) {
				console.log(style);
				addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, style?.editorStyles );
				
			}

			return style;

		} );

	}, [globalBlockStyleId, globalBlockStyleName, globalBlockStyles] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/advanced-heading.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings 
					parentProps={ props }
					styling={styling}
				/>
				<Render parentProps={ props } />
			</>
		)
	);
};
export default UAGBAdvancedHeading;
