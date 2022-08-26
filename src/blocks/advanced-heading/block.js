/**
 * BLOCK: Heading
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import './format'

registerBlockType( 'uagb/advanced-heading', {
	title: __( 'Heading', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add heading, sub heading and a separator using one block.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( 'creative heading', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'heading', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/advanced-heading', {
						headingTitle: attribute.content,
						headingAlign: attribute.align,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/advanced-heading', {
						headingTitle: attribute.value,
						headingDesc: attribute.citation,
					} );
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( attribute ) => {
					return createBlock( 'core/heading', {
						content: attribute.headingTitle,
						align: attribute.headingAlign,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( attribute ) => {
					return createBlock( 'core/quote', {
						value: attribute.headingTitle,
						citation: attribute.headingDesc,
					} );
				},
			},
		],
	},
} );
