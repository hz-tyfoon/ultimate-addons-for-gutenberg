/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function styling( props ) {
	const {attributes} = props
	const {
		align,
		alignTablet,
		alignMobile,
		layout,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		// Number
		numberFontFamily,
		numberFontWeight,
		numberFontStyle,
		numberFontSize,
		numberColor,
		numberTransform,
		numberDecoration,
		numberFontSizeType,
		numberFontSizeMobile,
		numberFontSizeTablet,
		numberLineHeight,
		numberLineHeightType,
		numberLineHeightMobile,
		numberLineHeightTablet,
		numberTopMargin,
		numberRightMargin,
		numberLeftMargin,
		numberBottomMargin,
		numberTopMarginTablet,
		numberRightMarginTablet,
		numberLeftMarginTablet,
		numberBottomMarginTablet,
		numberTopMarginMobile,
		numberRightMarginMobile,
		numberLeftMarginMobile,
		numberBottomMarginMobile,
		numberMarginUnit,
		numberMarginUnitTablet,
		numberMarginUnitMobile,
		// prefix
		prefixRightDistance,
		prefixRightDistanceTablet,
		prefixRightDistanceMobile,
		suffixLeftDistance,
		suffixLeftDistanceTablet,
		suffixLeftDistanceMobile,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground,
		// Block Margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		// Block Padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		// Box Shadow
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
		// Icon, Image
		iconColor,
		iconBackgroundColor,
		iconHoverColor,
		iconBackgroundHoverColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeType,
		iconSizeTypeTablet,
		iconSizeTypeMobile,
		iconWrapBorderHColor,
		imageWidthType,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		imageWidthUnit,
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		// Icon Padding
		iconTopPadding,
		iconRightPadding,
		iconLeftPadding,
		iconBottomPadding,
		iconTopPaddingTablet,
		iconRightPaddingTablet,
		iconLeftPaddingTablet,
		iconBottomPaddingTablet,
		iconTopPaddingMobile,
		iconRightPaddingMobile,
		iconLeftPaddingMobile,
		iconBottomPaddingMobile,
		iconPaddingUnit,
		iconPaddingUnitTablet,
		iconPaddingUnitMobile,
	} = attributes;

	const blockName = props.name.replace( 'uagb/', '' );

	// <---------- FALLBACKS ---------->

	// Circle, circle stroke and bar size.
	const circleSizeFallback        = getFallbackNumber( circleSize, 'circleSize', blockName );
	const circleStrokeSizeFallback  = getFallbackNumber( circleStokeSize, 'circleStokeSize', blockName );
	const barSizeFallback           = getFallbackNumber( barSize, 'barSize', blockName );

	// Prefix spacing fallbacks.
	const prefixRightDistanceFallback       = getFallbackNumber( prefixRightDistance, 'prefixRightDistance', blockName );
	const prefixRightDistanceFallbackTablet = isNaN( prefixRightDistanceTablet ) ? prefixRightDistance : prefixRightDistanceTablet;
	const prefixRightDistanceFallbackMobile = isNaN( prefixRightDistanceMobile ) ? prefixRightDistanceTablet : prefixRightDistanceMobile;

	// Suffix spacing fallbacks.
	const suffixLeftDistanceFallback       = getFallbackNumber( suffixLeftDistance, 'suffixLeftDistance', blockName );
	const suffixLeftDistanceFallbackTablet = isNaN( suffixLeftDistanceTablet ) ? suffixLeftDistance : suffixLeftDistanceTablet;
	const suffixLeftDistanceFallbackMobile = isNaN( suffixLeftDistanceMobile ) ? suffixLeftDistanceTablet : suffixLeftDistanceMobile;
	
	// Icon size fallbacks.
	const iconSizeFallback       = getFallbackNumber( iconSize, 'iconSize', blockName );
	const iconSizeFallbackTablet = isNaN( iconSizeTablet ) ? iconSize : iconSizeTablet;
	const iconSizeFallbackMobile = isNaN( iconSizeMobile ) ? iconSizeTablet : iconSizeMobile;

	// Image size fallbacks.
	const imageWidthFallback = getFallbackNumber( imageWidth, 'imageWidth', blockName );
	const imageWidthFallbackTablet = isNaN( imageWidthTablet ) ? imageWidthFallback : imageWidthTablet;
	const imageWidthFallbackMobile = isNaN( imageWidthMobile ) ? imageWidthFallbackTablet : imageWidthMobile;

	// Border.
	const iconWrapCSS = generateBorderCSS( props.attributes, 'iconWrap' );
	const iconWrapCSSTablet = generateBorderCSS( props.attributes, 'iconWrap', 'tablet' );
	const iconWrapCSSMobile = generateBorderCSS( props.attributes, 'iconWrap', 'mobile' );

	// Icon-Image Common Padding.
	const iconAndImagePadding = {
		'padding-top': generateCSSUnit(
			iconTopPadding,
			iconPaddingUnit
		),
		'padding-right': generateCSSUnit(
			iconRightPadding,
			iconPaddingUnit
		),
		'padding-bottom': generateCSSUnit(
			iconBottomPadding,
			iconPaddingUnit
		),
		'padding-left': generateCSSUnit(
			iconLeftPadding,
			iconPaddingUnit
		),
	};

	const iconAndImagePaddingTablet = {
		'padding-top': generateCSSUnit(
			iconTopPaddingTablet,
			iconPaddingUnitTablet
		),
		'padding-right': generateCSSUnit(
			iconRightPaddingTablet,
			iconPaddingUnitTablet
		),
		'padding-bottom': generateCSSUnit(
			iconBottomPaddingTablet,
			iconPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			iconLeftPaddingTablet,
			iconPaddingUnitTablet
		),
	};

	const iconAndImagePaddingMobile = {
		'padding-top': generateCSSUnit(
			iconTopPaddingMobile,
			iconPaddingUnitMobile
		),
		'padding-right': generateCSSUnit(
			iconRightPaddingMobile,
			iconPaddingUnitMobile
		),
		'padding-bottom': generateCSSUnit(
			iconBottomPaddingMobile,
			iconPaddingUnitMobile
		),
		'padding-left': generateCSSUnit(
			iconLeftPaddingMobile,
			iconPaddingUnitMobile
		),
	};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}

	const selectors = {
		'.wp-block-uagb-counter':{
			'text-align': align,
			'margin-top': generateCSSUnit(
				blockTopMargin,
				blockMarginUnit
			),
			'margin-right': generateCSSUnit(
				blockRightMargin,
				blockMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				blockBottomMargin,
				blockMarginUnit
			),
			'margin-left': generateCSSUnit(
				blockLeftMargin,
				blockMarginUnit
			),
			'padding-top': generateCSSUnit(
				blockTopPadding,
				blockPaddingUnit
			),
			'padding-right': generateCSSUnit(
				blockRightPadding,
				blockPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				blockBottomPadding,
				blockPaddingUnit
			),
			'padding-left': generateCSSUnit(
				blockLeftPadding,
				blockPaddingUnit
			),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__icon':{
			'background-color': iconBackgroundColor,
			...iconAndImagePadding,
			...iconWrapCSS,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap':{
			...iconAndImagePadding,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img':{
			...iconWrapCSS,
		},
		'.wp-block-uagb-counter:hover .wp-block-uagb-counter__image-wrap img':{
			'border-color': iconWrapBorderHColor,
		},
		'.wp-block-uagb-counter:hover .wp-block-uagb-counter__icon':{
			'background-color': iconBackgroundHoverColor,
			'border-color': iconWrapBorderHColor,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__icon svg':{
			'width': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'fill': iconColor,
		},
		'.wp-block-uagb-counter:hover .wp-block-uagb-counter__icon svg':{
			'fill': iconHoverColor,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__title':{
			'font-family': headingFontFamily,
			'font-style' : headingFontStyle,
			'text-decoration': headingDecoration,
			'text-transform': headingTransform,
			'font-weight': headingFontWeight,
			'font-size': generateCSSUnit(
				headingFontSize,
				headingFontSizeType
			),
			'line-height': generateCSSUnit(
				headingLineHeight,
				headingLineHeightType
			),
			'color': headingColor,
			'margin-top': generateCSSUnit(
				headingTopMargin,
				headingMarginUnit
			),
			'margin-right': generateCSSUnit(
				headingRightMargin,
				headingMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				headingBottomMargin,
				headingMarginUnit
			),
			'margin-left': generateCSSUnit(
				headingLeftMargin,
				headingMarginUnit
			),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number': {
			'font-family': numberFontFamily,
			'font-style' : numberFontStyle,
			'text-decoration': numberDecoration,
			'text-transform': numberTransform,
			'font-weight': numberFontWeight,
			'font-size': generateCSSUnit(
				numberFontSize,
				numberFontSizeType
			),
			'line-height': generateCSSUnit(
				numberLineHeight,
				numberLineHeightType
			),
			'color': numberColor,
			'margin-top': generateCSSUnit(
				numberTopMargin,
				numberMarginUnit
			),
			'margin-right': generateCSSUnit(
				numberRightMargin,
				numberMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				numberBottomMargin,
				numberMarginUnit
			),
			'margin-left': generateCSSUnit(
				numberLeftMargin,
				numberMarginUnit
			),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix': {
			'margin-right': generateCSSUnit(
				prefixRightDistanceFallback,
				'px'
			)
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix': {
			'margin-left': generateCSSUnit(
				suffixLeftDistanceFallback,
				'px'
			)
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container': {
			'width': generateCSSUnit( circleSizeFallback, 'px' ),
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle': {
			'stroke-width': generateCSSUnit( circleStrokeSizeFallback, 'px' ),
			'stroke': circleForeground,
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg #bar': {
			'stroke': circleBackground
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container': {
			'background': barForeground,
			'margin-top'   : generateCSSUnit( numberTopMargin, numberMarginUnit ),
			'margin-right' : generateCSSUnit( numberRightMargin, numberMarginUnit ),
			'margin-bottom': generateCSSUnit( numberBottomMargin, numberMarginUnit ),
			'margin-left'  : generateCSSUnit( numberLeftMargin, numberMarginUnit ),
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number': {
			'height': generateCSSUnit( barSizeFallback, 'px' ),
			'background': barBackground,
		}
	}



	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors['.wp-block-uagb-counter'] = {
		'text-align': alignTablet,
		'margin-top': generateCSSUnit(
			blockTopMarginTablet,
			blockMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			blockRightMarginTablet,
			blockMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			blockBottomMarginTablet,
			blockMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			blockLeftMarginTablet,
			blockMarginUnitTablet
		),
		'padding-top': generateCSSUnit(
			blockTopPaddingTablet,
			blockPaddingUnitTablet
		),
		'padding-right': generateCSSUnit(
			blockRightPaddingTablet,
			blockPaddingUnitTablet
		),
		'padding-bottom': generateCSSUnit(
			blockBottomPaddingTablet,
			blockPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			blockLeftPaddingTablet,
			blockPaddingUnitTablet
		),
    }

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon'] = {
		...iconAndImagePaddingTablet,
		...iconWrapCSSTablet,
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap'] = {
		...iconAndImagePaddingTablet,
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img'] = {
		...iconWrapCSSTablet,
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon svg'] = {
		'width': generateCSSUnit( iconSizeFallbackTablet, iconSizeTypeTablet ),
		'height': generateCSSUnit( iconSizeFallbackTablet, iconSizeTypeTablet ),
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title'] = {
        'font-size': generateCSSUnit(
            headingFontSizeTablet,
            headingFontSizeType
        ),
        'line-height': generateCSSUnit(
            headingLineHeightTablet,
            headingLineHeightType
        ),
		'margin-top': generateCSSUnit(
			headingTopMarginTablet,
			headingMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			headingRightMarginTablet,
			headingMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			headingBottomMarginTablet,
			headingMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			headingLeftMarginTablet,
			headingMarginUnitTablet
		),
    }

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = {
		'font-size': generateCSSUnit(
			numberFontSizeTablet,
			numberFontSizeType
		),
		'line-height': generateCSSUnit(
			numberLineHeightTablet,
			numberLineHeightType
		),
		'margin-top': generateCSSUnit(
			numberTopMarginTablet,
			numberMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			numberRightMarginTablet,
			numberMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			numberBottomMarginTablet,
			numberMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			numberLeftMarginTablet,
			numberMarginUnitTablet
		),
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = {
		'margin-right': generateCSSUnit(
			prefixRightDistanceFallbackTablet,
			'px'
		)
	}

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = {
		'margin-left': generateCSSUnit(
			suffixLeftDistanceFallbackTablet,
			'px'
		)
	}

	tablet_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container'] = {
		'margin-top'   : generateCSSUnit( numberTopMarginTablet, numberMarginUnitTablet ),
		'margin-right' : generateCSSUnit( numberRightMarginTablet, numberMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( numberBottomMarginTablet, numberMarginUnitTablet ),
		'margin-left'  : generateCSSUnit( numberLeftMarginTablet, numberMarginUnitTablet ),
	}



	mobile_selectors['.wp-block-uagb-counter'] = {
		'text-align': alignMobile,
		'margin-top': generateCSSUnit(
			blockTopMarginMobile,
			blockMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			blockRightMarginMobile,
			blockMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			blockBottomMarginMobile,
			blockMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			blockLeftMarginMobile,
			blockMarginUnitMobile
		),
		'padding-top': generateCSSUnit(
			blockTopPaddingMobile,
			blockPaddingUnitMobile
		),
		'padding-right': generateCSSUnit(
			blockRightPaddingMobile,
			blockPaddingUnitMobile
		),
		'padding-bottom': generateCSSUnit(
			blockBottomPaddingMobile,
			blockPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			blockLeftPaddingMobile,
			blockPaddingUnitMobile
		),
    }

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon'] = {
		...iconAndImagePaddingMobile,
		...iconWrapCSSMobile,
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap'] = {
		...iconAndImagePaddingMobile,
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img'] = {
		...iconWrapCSSMobile,
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon svg'] = {
		'width': generateCSSUnit( iconSizeFallbackMobile, iconSizeTypeMobile ),
		'height': generateCSSUnit( iconSizeFallbackMobile, iconSizeTypeMobile ),
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title'] = {
        'font-size': generateCSSUnit(
            headingFontSizeMobile,
            headingFontSizeType
        ),
        'line-height': generateCSSUnit(
            headingLineHeightMobile,
            headingLineHeightType
        ),
		'margin-top': generateCSSUnit(
			headingTopMarginMobile,
			headingMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			headingRightMarginMobile,
			headingMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			headingBottomMarginMobile,
			headingMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			headingLeftMarginMobile,
			headingMarginUnitMobile
		),
    }

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = {
		'font-size': generateCSSUnit(
			numberFontSizeMobile,
			numberFontSizeType
		),
		'line-height': generateCSSUnit(
			numberLineHeightMobile,
			numberLineHeightType
		),
		'margin-top': generateCSSUnit(
			numberTopMarginMobile,
			numberMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			numberRightMarginMobile,
			numberMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			numberBottomMarginMobile,
			numberMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			numberLeftMarginMobile,
			numberMarginUnitMobile
		),
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = {
		'margin-right': generateCSSUnit(
			prefixRightDistanceFallbackMobile,
			'px'
		)
	}

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = {
		'margin-left': generateCSSUnit(
			suffixLeftDistanceFallbackMobile,
			'px'
		)
	}

	mobile_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container'] = {
		'margin-top'   : generateCSSUnit( numberTopMarginMobile, numberMarginUnitMobile ),
		'margin-right' : generateCSSUnit( numberRightMarginMobile, numberMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( numberBottomMarginMobile, numberMarginUnitMobile ),
		'margin-left'  : generateCSSUnit( numberLeftMarginMobile, numberMarginUnitMobile ),
	}

	if ( imageWidthType ) {

		// Image
		selectors[ ' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image' ] = {
			'width': generateCSSUnit( imageWidthFallback, imageWidthUnit ),
		};

		tablet_selectors[ ' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image' ] = {
			'width': generateCSSUnit( imageWidthFallbackTablet, imageWidthUnitTablet ),
		};

		mobile_selectors[ ' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image' ] = {
			'width': generateCSSUnit( imageWidthFallbackMobile, imageWidthUnitMobile ),
		};
	}

	// In case of 'Bar' layout, we need to add margin to '.wp-block-uagb-counter-bars-container' element and remove the margin from the inner-element.
	if ( layout === 'bars' ) {

		const num_container = '.wp-block-uagb-counter .wp-block-uagb-counter__number';

		selectors[ num_container ]['margin-top']    = 'unset';
		selectors[ num_container ]['margin-bottom'] = 'unset';
		selectors[ num_container ]['margin-left']   = 'unset';
		selectors[ num_container ]['margin-right']  = 'unset';

		tablet_selectors[ num_container ]['margin-top']    = 'unset';
		tablet_selectors[ num_container ]['margin-bottom'] = 'unset';
		tablet_selectors[ num_container ]['margin-left']   = 'unset';
		tablet_selectors[ num_container ]['margin-right']  = 'unset';

		mobile_selectors[ num_container ]['margin-top']    = 'unset';
		mobile_selectors[ num_container ]['margin-bottom'] = 'unset';
		mobile_selectors[ num_container ]['margin-left']   = 'unset';
		mobile_selectors[ num_container ]['margin-right']  = 'unset';

		const bar_container = '.wp-block-uagb-counter .wp-block-uagb-counter-bars-container';
		const bar_container_hover = '.wp-block-uagb-counter:hover .wp-block-uagb-counter-bars-container';

		selectors[ bar_container ] = {
			'box-shadow': generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
			boxShadowColor + ' ' +	boxShadowPositionCSS,
		};

		selectors[ bar_container_hover ] = {
			'box-shadow': '',
		};

		const boxShadowBlurHoverTemp = isNaN( boxShadowBlurHover ) ? '' : boxShadowBlurHover;
		const boxShadowColorHoverTemp = boxShadowColorHover ? boxShadowColorHover : '';

		if( '' !== boxShadowColorHoverTemp || '' !== boxShadowBlurHoverTemp ) {

			const boxShadowBlurHoverCSSUnit = ( '' === boxShadowBlurHoverTemp ) ? '' : generateCSSUnit( boxShadowBlurHoverTemp, 'px' );
	
			selectors[ bar_container_hover ]['box-shadow'] = generateCSSUnit( boxShadowHOffsetHover, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffsetHover, 'px' ) +	' ' +
														boxShadowBlurHoverCSSUnit + ' ' +	generateCSSUnit( boxShadowSpreadHover, 'px' ) + ' ' +
														boxShadowColorHoverTemp + ' ' +	boxShadowPositionCSSHover;
		}

	}


	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);


	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}
