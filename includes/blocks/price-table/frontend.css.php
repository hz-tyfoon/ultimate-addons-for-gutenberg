<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selectors    = array(
    ' .box'        => array(
        'text-align' => $attr['textAlign'],
    ),
    ' .box__title' => array(
        'color'           => $attr['titleFontColor'],
        'font-family'     => $attr['titleFontFamily'],
        'font-size'       => UAGB_Helper::get_css_value($attr['titleFontSize'], $attr['titleFontSizeType']),
        'font-weight'     => $attr['titleFontWeight'],
        'font-style'      => $attr['titleFontStyle'],
        'text-transform'  => $attr['titleTransform'],
        'text-decoration' => $attr['titleDecoration'],
        'line-height'     => UAGB_Helper::get_css_value($attr['titleLineHeight'], $attr['titleLineHeightType']),
        'letter-spacing'  => UAGB_Helper::get_css_value($attr['titleLetterSpacing'], $attr['titleLetterSpacingType']),
    ),
);
$mobselectors = array(
    ' .uagb-user__title' => array(
        'text-align'      => $attr['textAlignTablet'],
        'font-family'     => $attr['titleFontFamily'],
        'font-size'       => UAGB_Helper::get_css_value($attr['titleFontSizeMobile'], $attr['titleFontSizeType']),
        'font-weight'     => $attr['titleFontWeight'],
        'font-style'      => $attr['titleFontStyle'],
        'text-transform'  => $attr['titleTransform'],
        'text-decoration' => $attr['titleDecoration'],
        'line-height'     => UAGB_Helper::get_css_value($attr['titleLineHeightMobile'], $attr['titleLineHeightType']),
        'letter-spacing'  => UAGB_Helper::get_css_value($attr['titleLetterSpacingMobile'], $attr['titleLetterSpacingType']),
    ),
);

$tabselectors       = array(
    ' .uagb-user__title' => array(
        'text-align'      => $attr['textAlignMobile'],
        'font-family'     => $attr['titleFontFamily'],
        'font-size'       => UAGB_Helper::get_css_value($attr['titleFontSizeTablet'], $attr['titleFontSizeType']),
        'font-weight'     => $attr['titleFontWeight'],
        'font-style'      => $attr['titleFontStyle'],
        'text-transform'  => $attr['titleTransform'],
        'text-decoration' => $attr['titleDecoration'],
        'line-height'     => UAGB_Helper::get_css_value($attr['titleLineHeightTablet'], $attr['titleLineHeightType']),
        'letter-spacing'  => UAGB_Helper::get_css_value($attr['titleLetterSpacingTablet'], $attr['titleLetterSpacingType']),
    ),
);
$combined_selectors = array(
    'desktop' => $selectors,
    'tablet'  => $tabselectors,
    'mobile'  => $mobselectors,
);
$base_selector      = '.uagb-block-';
return UAGB_Helper::generate_all_css($combined_selectors, $base_selector.$id);
