<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selectors = UAGB_Block_Helper::get_social_share_child_selectors( $attr, $id, true );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => '',
	'mobile'  => '',
);

return UAGB_Helper::generate_all_css(
	$combined_selectors,
	'.uagb-block-' . $id,
	array(
		'globalBlockStyleName' => $attr['globalBlockStyleName'],
		'globalBlockStyleId'   => $attr['globalBlockStyleId'],
	)
);