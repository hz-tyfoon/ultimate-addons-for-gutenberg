/**
 * BLOCK: Template Everything
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import variations from './variations';
import './style.scss';

registerBlockType( 'uagb/template-everything', {
	title: __( 'Template Everything!', 'ultimate-addons-for-gutenberg' ),
	description: __(
		"Every Content Block you'll ever need - Choose from a wide variety of formations, or create your own!",
		'ultimate-addons-for-gutenberg'
	),
	apiVersion: 2,
	icon: UAGB_Block_Icons.template_everything,
	keywords: [
		__( 'Template Everything!', 'ultimate-addons-for-gutenberg' ),
		__( 'info box', 'ultimate-addons-for-gutenberg' ),
		__( 'template', 'ultimate-addons-for-gutenberg' ),
		__( 'block designs', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	example: {
		attributes: {
			isPreview: true,
		},
	},
	variations,
	edit,
	save,
} );
