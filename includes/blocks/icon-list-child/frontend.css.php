<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selectors   = UAGB_Block_Helper::get_icon_list_child_selectors( $attr, $id, true )['desktop'];
$t_selectors = UAGB_Block_Helper::get_icon_list_child_selectors( $attr, $id, true )['tablet'];
$m_selectors = UAGB_Block_Helper::get_icon_list_child_selectors( $attr, $id, true )['mobile'];

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( 
	$combined_selectors,
	'.uagb-block-' . $id,
	array(
		'globalBlockStyleName' => $attr['globalBlockStyleName'],
		'globalBlockStyleId'   => $attr['globalBlockStyleId'],
	) 
);