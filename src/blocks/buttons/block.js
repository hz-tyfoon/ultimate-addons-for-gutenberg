/**
 * BLOCK: Buttons
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import deprecated from './deprecated';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
import colourNameToHex from '@Controls/changeColorNameToHex';
let buttonsCommonData = {};
buttonsCommonData = applyFilters( 'uagb/buttons', addCommonDataToSpectraBlocks( buttonsCommonData ) );
registerBlockType( 'uagb/buttons', {
	...buttonsCommonData,
	title: __( 'Buttons', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add multiple buttons to redirect user to different webpages.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.buttons,
	keywords: [ __( 'buttons', 'ultimate-addons-for-gutenberg' ), __( 'uag', 'ultimate-addons-for-gutenberg' ) ],
	supports: {
		anchor: true,
	},
	getEditWrapperProps( attribute ) {
		return { 'data-btn-width': attribute.align };
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="buttons" /> : <Edit { ...props } /> ),
	save,
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/buttons'],
				transform: ( _attributes, innerBlocks ) => {
					const buttonsArray = [];
					innerBlocks.forEach( innerBlock => {			
						const buttonText = innerBlock.attributes.text;
						const buttonBlock = createBlock( 'uagb/buttons-child', {
							label: buttonText,
							color:colourNameToHex( innerBlock.attributes.textColor ),
							background:colourNameToHex( innerBlock.attributes.backgroundColor ),
						} );
						buttonsArray.push( buttonBlock );
					} );
					return createBlock( 'uagb/buttons', {}, buttonsArray );
				},
			},
		],
	},

	
} );
