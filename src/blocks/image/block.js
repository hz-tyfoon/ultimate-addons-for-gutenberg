/**
 * BLOCK: Image
 */

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import './style.scss';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import deprecated from './deprecated';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let imageCommonData = {};
imageCommonData = applyFilters( 'uagb/image', addCommonDataToSpectraBlocks( imageCommonData ) );
registerBlockType( 'uagb/image', {
	...imageCommonData,
	title: __( 'Image', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add images on your webpage with multiple customization options.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.image,
	keywords: [
		__( 'image', 'ultimate-addons-for-gutenberg' ),
		__( 'advance image', 'ultimate-addons-for-gutenberg' ),
		__( 'caption', 'ultimate-addons-for-gutenberg' ),
		__( 'overlay image', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
		color: {
			__experimentalDuotone: 'img',
			text: false,
			background: false,
		},
		align: true,
	},

	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="image" /> : <Edit { ...props } /> ),
	save,
	__experimentalLabel: ( atts, { context } ) => {
		if ( context === 'list-view' && atts?.metadata?.name && atts.metadata.name ) {
			return atts.metadata.name;
		}

		return applyFilters( 'uag_loop_data_source_label', __( 'Image', 'ultimate-addons-for-gutenberg' ), atts );
	},
	usesContext: [ 'postId', 'postType' ],
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/image' ],
				transform: ( { url, sizeSlug } ) => {
					return createBlock( 'uagb/image', {
						url,
						sizeSlug,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/post-featured-image' ],
				transform: ( { sizeSlug } ) => {
					return createBlock( 'uagb/image', {
						useDynamicData: true,
						dynamicContentType: 'featured-image',
						sizeSlug,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/cover' ],
				transform: ( _attributes, innerBlocks ) => {
					const firstInnerBlockAttributes = innerBlocks[0]?.attributes || {};
					const hasCaption = Boolean( firstInnerBlockAttributes.content );
					return createBlock( 'uagb/image', {
						url:_attributes.url,
						alt:_attributes.alt,
						enableCaption: hasCaption,
						caption: hasCaption ? firstInnerBlockAttributes.content: '',
						captionFontWeight: firstInnerBlockAttributes?.style?.typography?.fontWeight || '',
						captionFontSize: parseInt( firstInnerBlockAttributes?.style?.typography?.fontSize || '' ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/media-text' ],
				transform: ( _attributes, innerBlocks ) => {
					const firstInnerBlockAttributes = innerBlocks[0]?.attributes || {};
					const hasCaption = Boolean( firstInnerBlockAttributes.content );
					// eslint-disable-next-line no-console
					console.log( innerBlocks[0] );
					return createBlock( 'uagb/image', {
						url:_attributes.mediaUrl,
						alt:_attributes.mediaAlt,
						enableCaption: hasCaption,
						caption: hasCaption ? firstInnerBlockAttributes.content: '',
						captionFontWeight: firstInnerBlockAttributes?.style?.typography?.fontWeight || '',
						captionFontSize: parseInt( firstInnerBlockAttributes?.style?.typography?.fontSize || '' ),
					} );
				},
			},

		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/image' ],
				transform: ( { url, sizeSlug } ) => {
					return createBlock( 'core/image', {
						url,
						sizeSlug,
					} );
				},
			},
		],
	},
} );
