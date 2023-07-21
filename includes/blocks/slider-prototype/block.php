<?php
/**
 * Block Information.
 *
 * @since 2.3.0
 *
 * @package uagb
 */

$block_slug = 'uagb/slider-prototype';
$block_data = array(
	'doc'                 => 'slider',
	'slug'                => '',
	'admin_categories'    => array( 'content' ),
	'link'                => 'slider',
	'title'               => __( 'Slider Prototype', 'ultimate-addons-for-gutenberg' ),
	'description'         => __( 'Create a Slider.', 'ultimate-addons-for-gutenberg' ),
	'default'             => true,
	'extension'           => false,
	'priority'            => Spectra_Block_Prioritization::get_block_priority( 'slider' ),
	'deprecated'          => false,
	'static_dependencies' => array(
		'uagb-glide-js'  => array(
			'type' => 'js',
		),
		'uagb-glide-css' => array(
			'type' => 'css',
		),
	),
	'dynamic_assets'      => array(
		'dir' => 'slider-prototype',
	),
);
