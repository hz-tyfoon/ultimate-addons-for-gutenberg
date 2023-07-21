/**
 * BLOCK: Slider
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';

let sliderCommonData = {};
sliderCommonData = applyFilters( 'uagb/slider-prototype', addCommonDataToSpectraBlocks( sliderCommonData ) );
registerBlockType( 'uagb/slider-prototype', {
	...sliderCommonData,
	apiVersion: 2,
	attributes,
	title: __( 'Slider Prototype', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Create beautiful sliders with slider block.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.slider,
	keywords: [
		__( 'slider', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'flex', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="slider" /> : <Edit { ...{ ...props } } /> ),
	save,
} );
