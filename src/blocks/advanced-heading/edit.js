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
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

//  Import CSS.
import './style.scss';

const UAGBAdvancedHeading = ( props ) => {
	const deviceType = useDeviceType();
	const {
		editorStyles,
		attributes : {
			UAGHideDesktop, 
			UAGHideTab, 
			UAGHideMob,
			globalBlockStyleId
		}
	} = props
	
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
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles] );

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

export default compose(
	withSelect( ( select, props ) => {

		const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
		const { 
			globalBlockStyleId,
			globalBlockStyleName
		} = props.attributes;
		
		let editorStyles = '';
		for ( const style of globalBlockStyles ) {
			if ( style?.value === globalBlockStyleId && style?.label === globalBlockStyleName ) {
				editorStyles = style?.editorStyles
				break;
			}
		}
		return {
			editorStyles: editorStyles,
		};	
	} )
)( UAGBAdvancedHeading );

