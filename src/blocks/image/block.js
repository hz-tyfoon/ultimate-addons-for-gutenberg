/**
 * BLOCK: Image
 */

import edit from './edit';
import save from './save';
import attributes from './attributes'
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import './style.scss';
import { registerBlockType } from '@wordpress/blocks';


registerBlockType( 'uagb/image', {
	title: __( 'Image', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block let\'s you add an Image.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.image,
	keywords: [
		__( 'image', 'ultimate-addons-for-gutenberg' ),
		__( 'advance image', 'ultimate-addons-for-gutenberg' ),
		__( 'caption', 'ultimate-addons-for-gutenberg' ),
		__( 'overlay image', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	supports: {
		anchor: true,
		color: {
			__experimentalDuotone: 'img',
			text: false,
			background: false
		},
	},
	getEditWrapperProps( { align } ) {
		return {
			'data-align': align,
		};
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
} );
