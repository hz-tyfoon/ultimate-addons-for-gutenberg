/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import { useEffect, useState } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import { STORE_NAME as storeName } from '@Store/constants';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBImageGallery = ( props ) => {
	const {
		clientId,
		attributes,
		attributes:{ UAGHideDesktop, UAGHideTab, UAGHideMob, globalBlockStyleId },
		isSelected,
		setAttributes,
		editorStyles
	} = props;

	const deviceType = useDeviceType();
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
        addBlockEditorDynamicStyles( 'uagb-image-gallery-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );


	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	// Lightbox disabled by default for the block on every instance.
	const [ lightboxPreview, setLightboxPreview ] = useState( false );

	// Disable the Lightbox when the block isn't selected.
	useEffect( () => {
		if ( ! isSelected ) {
			setLightboxPreview( false );
		}
	}, [ isSelected ] );
	
	useEffect( () => {
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles, deviceType] );

	return (
		<>
			{isSelected && (
				<Settings
					{...{ ...props, lightboxPreview, setLightboxPreview }}
					styling={styling}
				/>
			)}
			<Render {...{ ...props, lightboxPreview, setLightboxPreview }} />
		</>
	);
};

export default compose(
	withSelect( ( select, props ) => {

		const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
		const { 
			globalBlockStyleId,
			globalBlockStyleName
		} = props.attributes;

		const editorStyles = getGBSEditorStyles( globalBlockStyles,globalBlockStyleId,globalBlockStyleName );

		return {
			editorStyles,
		};	
	} )
)( UAGBImageGallery );
