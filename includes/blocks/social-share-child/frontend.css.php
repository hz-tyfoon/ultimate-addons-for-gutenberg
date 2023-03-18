<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selectors = UAGB_Block_Helper::get_social_share_child_selectors( $attr, $id, true );

$base_selector = '.uagb-block-' . $id;

if ( '' !== $attr['globalBlockStyleName'] && '' !== $attr['globalBlockStyleId'] ) {
	$base_selector = UAGB_Block_Helper::get_gbs_selector( $block_name, $attr['globalBlockStyleName'] );
}

$desktop = UAGB_Helper::generate_css( $selectors, $base_selector );

$generated_css = array(
	'desktop' => $desktop,
	'tablet'  => '',
	'mobile'  => '',
);

return $generated_css;
