/**
 * BLOCK: Slider Child
 */

import Settings from './settings';
import Render from './render';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import { STORE_NAME as storeName } from '@Store/constants';
import styling from './styling';
import { useEffect } from '@wordpress/element';

import { withSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const UAGBSlide = ( props ) => {
	const { isSelected, setAttributes, attributes, attributes : { globalBlockStyleId }, deviceType, editorStyles } = props;
	
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-slider-child-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ attributes, deviceType ] );

	useEffect( () => {
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles, deviceType] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } styling={styling} /> }
			<Render parentProps={ props } />
		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => { // eslint-disable-line no-shadow
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;
		const { getBlocks, getBlockIndex } = select( 'core/block-editor' );
	const {
		getBlockType,
	} = select( 'core/blocks' );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const slideIndex = getBlockIndex( props.clientId ); 
	const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
	const { 
		globalBlockStyleId,
		globalBlockStyleName
	} = props.attributes;

	const editorStyles = getGBSEditorStyles( globalBlockStyles,globalBlockStyleId,globalBlockStyleName );
	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		insertBlock,
		blockType: getBlockType( props.name ),
		replaceInnerBlocks,
		deviceType,
		isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( props.clientId, true ),
		slideIndex,
		editorStyles
	};
} );
export default compose( applyWithSelect )( UAGBSlide );
