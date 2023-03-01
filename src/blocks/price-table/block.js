/**
 * BLOCK: Price Table
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType, } from '@wordpress/blocks';


registerBlockType( 'uagb/price-table', {
	title: __( 'Price Table', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add heading, description and services using one block.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.price_table,
	keywords: [
		__( 'price table', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'price', 'ultimate-addons-for-gutenberg' ),
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
} );
