/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		fontFamily,
		fontWeight,
		gap,
		gapTablet,
		gapMobile,
		stack,
		align,
		fontStyle,
		fontTransform,
		fontDecoration,

		alignTablet,
		alignMobile,
		fontSizeType,
		fontSize,
		fontSizeMobile,
		fontSizeTablet,
		lineHeightType,
		lineHeight,
		lineHeightMobile,
		lineHeightTablet,

		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		//Mobile
		topMobilePadding,
		rightMobilePadding,
		bottomMobilePadding,
		leftMobilePadding,
		//Tablet
		topTabletPadding,
		rightTabletPadding,
		bottomTabletPadding,
		leftTabletPadding,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,

		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginType,

		// letter spacing
		fontLetterSpacing,
		fontLetterSpacingTablet,
		fontLetterSpacingMobile,
		fontLetterSpacingType,
	} = attributes;

	const selectors = {};
	const tabletSelectors = {};
	const mobileSelectors = {};

	selectors[ '.uagb-buttons__outer-wrap .uagb-buttons-repeater:not(.wp-block-button__link)' ] = {
		// For Backword user.
		'font-family': fontFamily,
		'font-style': fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),
	};

	selectors[ '.uagb-buttons__outer-wrap .uagb-button__wrapper .uagb-buttons-repeater.wp-block-button__link' ] = {
		// For new user.
		'font-family': fontFamily,
		'font-style': fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),	
		'margin-left': generateCSSUnit( leftMargin, marginType ),
		'margin-right': generateCSSUnit( rightMargin, marginType ),
		'margin-top': generateCSSUnit( topMargin, marginType ),
		'margin-bottom': generateCSSUnit( bottomMargin, marginType ),
		'letter-spacing': generateCSSUnit( fontLetterSpacing, fontLetterSpacingType ),
	};
	selectors[ ' .uagb-buttons-repeater.wp-block-button__link' ] = {
		// For new user.
		'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
		'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
		'padding-top': generateCSSUnit( topPadding, paddingUnit ),
		'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
	};
	if ( 'desktop' === stack ) {
		selectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
		};
		tabletSelectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapMobile, 'px' ),
		};
	} else if ( 'tablet' === stack ) {
		selectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'row',
			'column-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
			'row-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
		};
		tabletSelectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapTablet, 'px' ),
			'column-gap': generateCSSUnit( gapTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapMobile, 'px' ),
			'column-gap': generateCSSUnit( gapMobile, 'px' ),
		};
	} else if ( 'mobile' === stack ) {
		selectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'row',
			'column-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
			'row-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
		};
		tabletSelectors[
			'.uagb-buttons__outer-wrap .block-editor-block-list__layout'
		] = {
			'flex-direction': 'row',
			'column-gap': generateCSSUnit( gapTablet, 'px' ),
			'row-gap': generateCSSUnit( gapTablet, 'px' ),
		};
		mobileSelectors[
			'.uagb-buttons__outer-wrap .block-editor-block-list__layout'
		] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapMobile, 'px' ),
			'column-gap': generateCSSUnit( gapMobile, 'px' ),
		};
	} else if ( 'none' === stack ) {
		selectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
		};
		tabletSelectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gapTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-buttons__outer-wrap .block-editor-block-list__layout' ] = {
			'column-gap': generateCSSUnit( gapMobile, 'px' ),
		};
	}

	if ( align !== 'full' ) {
		selectors[ '.uagb-editor-preview-mode-desktop .block-editor-inner-blocks' ] = {
			'text-align': align,
		};
	} else {
		selectors[ '.uagb-editor-preview-mode-desktop .block-editor-block-list__layout' ] = {
			'width': '100%',
		};
		selectors[ ' .block-editor-block-list__block' ] = {
			'width': '100%',
		};
	}
	if ( alignTablet !== 'full' ) {
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-inner-blocks' ] = {
			'text-align': alignTablet,
		};
	} else {
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
		};
		tabletSelectors[ '.uagb-editor-preview-mode-tablet .block-editor-block-list__layout' ] = {
			'width': '100%',
		};
		tabletSelectors[ ' .block-editor-block-list__block ' ] = {
			'width': '100%',
		};
	}
	if ( alignMobile !== 'full' ) {
		mobileSelectors[ '.uagb-editor-preview-mode-mobile .block-editor-inner-blocks' ] = {
			'text-align': alignMobile,
		};
	} else {
		mobileSelectors[ '.uagb-editor-preview-mode-mobile .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( getFallbackNumber( gap, 'gap', blockName ), 'px' ),
		};
		mobileSelectors[ '.uagb-editor-preview-mode-mobile .block-editor-block-list__layout' ] = {
			'width': '100%',
		};
		mobileSelectors[ ' .block-editor-block-list__block ' ] = {
			'width': '100%',
		};
	}

	tabletSelectors[
		'.uagb-buttons__outer-wrap .uagb-button__wrapper .uagb-buttons-repeater.wp-block-button__link'
	] = {
		'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
		'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
		'margin-top': generateCSSUnit( topMarginTablet, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginTablet, marginType ),
		'letter-spacing': generateCSSUnit( fontLetterSpacingTablet, fontLetterSpacingType ),
	};
	tabletSelectors[
		' .uagb-buttons-repeater.wp-block-button__link'
	] = {
		'padding-left': generateCSSUnit( leftTabletPadding, tabletPaddingUnit ),
		'padding-right': generateCSSUnit( rightTabletPadding, tabletPaddingUnit ),
		'padding-top': generateCSSUnit( topTabletPadding, tabletPaddingUnit ),
		'padding-bottom': generateCSSUnit( bottomTabletPadding, tabletPaddingUnit ),
	};

	mobileSelectors[
		'.uagb-buttons__outer-wrap .uagb-button__wrapper .uagb-buttons-repeater.wp-block-button__link'
	] = {
		'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
		'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
		'margin-top': generateCSSUnit( topMarginMobile, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginMobile, marginType ),
		'letter-spacing': generateCSSUnit( fontLetterSpacingMobile, fontLetterSpacingType ),
	};

	mobileSelectors[
		' .uagb-buttons-repeater.wp-block-button__link'
	] = {
		'padding-left': generateCSSUnit( leftMobilePadding, mobilePaddingUnit ),
		'padding-right': generateCSSUnit( rightMobilePadding, mobilePaddingUnit ),
		'padding-top': generateCSSUnit( topMobilePadding, mobilePaddingUnit ),
		'padding-bottom': generateCSSUnit( bottomMobilePadding, mobilePaddingUnit ),
	};

	const base_selector = ` .uagb-block-${ clientId.substr( 0, 8 ) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( tabletSelectors, `${ base_selector }`, true, 'tablet' );

	styling_css += generateCSS( mobileSelectors, `${ base_selector }`, true, 'mobile' );

	return styling_css;
}

export default styling;
