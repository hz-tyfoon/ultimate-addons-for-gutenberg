<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.2.0
 *
 * @package uagb
 */

$block_name              = 'template-everything';
$border_css              = UAGB_Block_Helper::uag_generate_border_css( $attr, 'block' );
$border_css_tablet       = UAGB_Block_Helper::uag_generate_border_css( $attr, 'block', 'tablet' );
$border_css_mobile       = UAGB_Block_Helper::uag_generate_border_css( $attr, 'block', 'mobile' );
$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$box_shadow_position_css_hover = $attr['boxShadowPositionHover'];

if ( 'outset' === $attr['boxShadowPositionHover'] ) {
	$box_shadow_position_css_hover = '';
}
$bg_obj_desktop = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageDesktop'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatDesktop'],
	'backgroundPosition'       => $attr['backgroundPositionDesktop'],
	'backgroundSize'           => $attr['backgroundSizeDesktop'],
	'backgroundAttachment'     => $attr['backgroundAttachmentDesktop'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeDesktop'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'customPosition'           => $attr['customPosition'],
	'xPosition'                => $attr['xPositionDesktop'],
	'xPositionType'            => $attr['xPositionType'],
	'yPosition'                => $attr['yPositionDesktop'],
	'yPositionType'            => $attr['yPositionType'],
);
$bg_css_desktop = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_desktop );
// Tablet.
$left_padding_tablet   = '' !== $attr['leftPaddingTablet'] ? $attr['leftPaddingTablet'] : $attr['leftPaddingDesktop'];
$right_padding_tablet  = '' !== $attr['rightPaddingTablet'] ? $attr['rightPaddingTablet'] : $attr['rightPaddingDesktop'];
$top_padding_tablet    = '' !== $attr['topPaddingTablet'] ? $attr['topPaddingTablet'] : $attr['topPaddingDesktop'];
$bottom_padding_tablet = '' !== $attr['bottomPaddingTablet'] ? $attr['bottomPaddingTablet'] : $attr['bottomPaddingDesktop'];

$left_margin_tablet   = '' !== $attr['leftMarginTablet'] ? $attr['leftMarginTablet'] : $attr['leftMarginDesktop'];
$right_margin_tablet  = '' !== $attr['rightMarginTablet'] ? $attr['rightMarginTablet'] : $attr['rightMarginDesktop'];
$top_margin_tablet    = '' !== $attr['topMarginTablet'] ? $attr['topMarginTablet'] : $attr['topMarginDesktop'];
$bottom_margin_tablet = '' !== $attr['bottomMarginTablet'] ? $attr['bottomMarginTablet'] : $attr['bottomMarginDesktop'];

// Mobile.
$left_padding_mobile   = '' !== $attr['leftPaddingMobile'] ? $attr['leftPaddingMobile'] : $left_padding_tablet;
$right_padding_mobile  = '' !== $attr['rightPaddingMobile'] ? $attr['rightPaddingMobile'] : $right_padding_tablet;
$top_padding_mobile    = '' !== $attr['topPaddingMobile'] ? $attr['topPaddingMobile'] : $top_padding_tablet;
$bottom_padding_mobile = '' !== $attr['bottomPaddingMobile'] ? $attr['bottomPaddingMobile'] : $bottom_padding_tablet;

$left_margin_mobile   = '' !== $attr['leftMarginMobile'] ? $attr['leftMarginMobile'] : $left_margin_tablet;
$right_margin_mobile  = '' !== $attr['rightMarginMobile'] ? $attr['rightMarginMobile'] : $right_margin_tablet;
$top_margin_mobile    = '' !== $attr['topMarginMobile'] ? $attr['topMarginMobile'] : $top_margin_tablet;
$bottom_margin_mobile = '' !== $attr['bottomMarginMobile'] ? $attr['bottomMarginMobile'] : $bottom_margin_tablet;

$info_box_css = array_merge(
	array(
		'box-shadow'     =>
				UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
				' ' .
				UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
				' ' .
				UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
				' ' .
				UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
				' ' .
				$attr['boxShadowColor'] .
				' ' .
				$box_shadow_position_css,
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingDesktop'], $attr['paddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingDesktop'], $attr['paddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingDesktop'], $attr['paddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingDesktop'], $attr['paddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginDesktop'], $attr['marginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginDesktop'], $attr['marginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginDesktop'], $attr['marginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginDesktop'], $attr['marginType'] ),
	),
	$border_css
);
$info_box_css = array_merge( $info_box_css, $bg_css_desktop );
$selectors    = array(
	'.uagb-template-everything__wrap'                  => $info_box_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-template-everything__wrap > div'            => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['rowGapDesktop'], $attr['rowGapType'] ),
	),
	' :is(h1, h2, h3, h4, h5, h6)'                     => array(
		'color' => $attr['headingColor'],
	),
	' .wp-block-button__link'                          => array(
		'color' => $attr['linkColor'],
	),
	' .wp-block-button__link:hover'                    => array(
		'color' => $attr['linkHoverColor'],
	),
	' a .uagb-marketing-btn__title'                    => array(
		'color' => $attr['linkColor'],
	),
	' a'                                               => array(
		'color' => $attr['linkColor'],
	),
	' a:hover'                                         => array(
		'color' => $attr['linkHoverColor'],
	),
	' .wp-block-button__link:hover .uagb-button__link' => array(
		'color' => $attr['linkHoverColor'],
	),
	' .wp-block-button__link:hover .uagb-marketing-btn__title' => array(
		'color' => $attr['linkHoverColor'],
	),
	' p'                                               => array(
		'color' => $attr['color'],
	),
	' span'                                            => array(
		'color' => $attr['color'],
	),
	' blockquote'                                      => array(
		'color' => $attr['color'],
	),
);
$selectors['.uagb-template-everything__wrap:hover']['border-color'] = $attr['blockBorderHColor'];
if ( ( ( '' !== $attr['boxShadowBlurHover'] ) && ( null !== $attr['boxShadowBlurHover'] ) ) || '' !== $attr['boxShadowColorHover'] ) {

	$selectors[':hover']['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffsetHover'], 'px' ) .
																' ' .
																UAGB_Helper::get_css_value( $attr['boxShadowVOffsetHover'], 'px' ) .
																' ' .
																UAGB_Helper::get_css_value( $attr['boxShadowBlurHover'], 'px' ) .
																' ' .
																UAGB_Helper::get_css_value( $attr['boxShadowSpreadHover'], 'px' ) .
																' ' .
																$attr['boxShadowColorHover'] .
																' ' .
																$box_shadow_position_css_hover;

}

$bg_obj_tablet = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageTablet'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatTablet'],
	'backgroundPosition'       => $attr['backgroundPositionTablet'],
	'backgroundSize'           => $attr['backgroundSizeTablet'],
	'backgroundAttachment'     => $attr['backgroundAttachmentTablet'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeTablet'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'customPosition'           => $attr['customPosition'],
	'xPosition'                => $attr['xPositionTablet'],
	'xPositionType'            => $attr['xPositionTypeTablet'],
	'yPosition'                => $attr['yPositionTablet'],
	'yPositionType'            => $attr['yPositionTypeTablet'],
);
$bg_css_tablet = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_tablet );
$tablet_css    = array_merge(
	array(
		'padding-top'    => UAGB_Helper::get_css_value( $top_padding_tablet, $attr['paddingTypeTablet'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding_tablet, $attr['paddingTypeTablet'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_tablet, $attr['paddingTypeTablet'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_tablet, $attr['paddingTypeTablet'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $top_margin_tablet, $attr['marginTypeTablet'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $bottom_margin_tablet, $attr['marginTypeTablet'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $left_margin_tablet, $attr['marginTypeTablet'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $right_margin_tablet, $attr['marginTypeTablet'] ),
		'row-gap'        => UAGB_Helper::get_css_value( $attr['rowGapTablet'], $attr['rowGapTypeTablet'] ),
	),
	$border_css_tablet
);
$tablet_css    = array_merge( $tablet_css, $bg_css_tablet );

$t_selectors = array(
	'.uagb-template-everything__wrap'       => $tablet_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-template-everything__wrap > div' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['rowGapTablet'], $attr['rowGapTypeTablet'] ),
	),
);

$bg_obj_mobile = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageMobile'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatMobile'],
	'backgroundPosition'       => $attr['backgroundPositionMobile'],
	'backgroundSize'           => $attr['backgroundSizeMobile'],
	'backgroundAttachment'     => $attr['backgroundAttachmentMobile'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeMobile'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'customPosition'           => $attr['customPosition'],
	'xPosition'                => $attr['xPositionMobile'],
	'xPositionType'            => $attr['xPositionTypeMobile'],
	'yPosition'                => $attr['yPositionMobile'],
	'yPositionType'            => $attr['yPositionTypeMobile'],
);
$bg_css_mobile = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_mobile );
$mobile_css    = array_merge(
	array(
		'padding-top'    => UAGB_Helper::get_css_value( $top_padding_mobile, $attr['paddingTypeMobile'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding_mobile, $attr['paddingTypeMobile'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_mobile, $attr['paddingTypeMobile'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_mobile, $attr['paddingTypeMobile'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $top_margin_mobile, $attr['marginTypeMobile'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $bottom_margin_mobile, $attr['marginTypeMobile'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $left_margin_mobile, $attr['marginTypeMobile'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $right_margin_mobile, $attr['marginTypeMobile'] ),
	),
	$border_css_mobile
);
$mobile_css    = array_merge( $mobile_css, $bg_css_mobile );

$m_selectors = array(
	'.uagb-template-everything__wrap'       => $mobile_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-template-everything__wrap > div' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['rowGapMobile'], $attr['rowGapTypeMobile'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);
return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
