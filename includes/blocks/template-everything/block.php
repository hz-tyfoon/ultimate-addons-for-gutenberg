<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/template-everything';
$block_data = array(
	'doc'              => 'template-everything',
	'slug'             => '',
	'admin_categories' => array( 'creative' ),
	'link'             => 'template-everything',
	'title'            => __( 'Template Everything!', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Every Content Block you\'ll ever need - Choose from a wide variety of formations, or create your own!', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'template-everything' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'template-everything',
	),
);
