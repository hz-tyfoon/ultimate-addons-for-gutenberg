<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.3.5
 *
 * @package uagb
 */

$block_slug = 'uagb/price-table';
$block_data = array(
	'doc'              => 'price-table',
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'price-table',
	'title'            => __( 'Price Table', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Editable price table block', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'price-table' ),
	'deprecated'       => false,
	'dynamic_assets'   => array( 'dir' => 'price-table' ),
);
