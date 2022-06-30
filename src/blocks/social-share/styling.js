/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		social_layout,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		bgSize,
		stack,
		iconColor,
		iconHoverColor,
		iconBgColor,
		iconBgHoverColor,
	} = props.attributes;

	const bgSizeFallback = getFallbackNumber( bgSize, 'bgSize', blockName );
	const sizeFallback = getFallbackNumber( size, 'size', blockName );
	const gapFallback = getFallbackNumber( gap, 'gap', blockName );

	const gapTabletFallback = isNaN( gapTablet ) ? gapFallback : gapTablet;
	const gapMobileTabletFallback = isNaN( gapMobile ) ? gapTabletFallback : gapMobile;

	const selectors = {
		' a.uagb-ss__link': {
			'color': iconColor,
		},
		' a.uagb-ss__link svg': {
			'fill': iconColor,
		},
		' .uagb-ss-repeater:hover a.uagb-ss__link': {
			'color': iconHoverColor,
		},
		' .uagb-ss-repeater:hover a.uagb-ss__link svg': {
			'fill': iconHoverColor,
		},
		' .uagb-ss__wrapper': {
			'background': iconBgColor,
		},
		' .uagb-ss__wrapper:hover': {
			'background': iconBgHoverColor,
		},
	};
	const tabletSelectors = {};
	const mobileSelectors = {};

	selectors[ '.uagb-social-share__layout-vertical .uagb-ss__wrapper' ] = {
		'padding': generateCSSUnit( bgSizeFallback, 'px' ),
		'margin-left': 0,
		'margin-right': 0,
		'margin-bottom': generateCSSUnit( gapFallback, 'px' ),
	};
	tabletSelectors[ '.uagb-social-share__layout-vertical .uagb-ss__wrapper' ] = {
		'margin-left': 0,
		'margin-right': 0,
		'margin-bottom': generateCSSUnit( gapTablet, 'px' ),
	};
	mobileSelectors[ '.uagb-social-share__layout-vertical .uagb-ss__wrapper' ] = {
		'margin-left': 0,
		'margin-right': 0,
		'margin-bottom': generateCSSUnit( gapMobile, 'px' ),
	};

	selectors[
		'.uagb-social-share__layout-vertical.uagb-social-share__outer-wrap'
	] = {
		'flex-direction': 'column',
	};

	selectors[ '.uagb-social-share__layout-horizontal .uagb-ss__wrapper' ] = {
		'padding': generateCSSUnit( bgSizeFallback, 'px' ),
		'margin-left': generateCSSUnit( gapFallback / 2, 'px' ),
		'margin-right': generateCSSUnit( gapFallback / 2, 'px' ),
	};

	tabletSelectors[ '.uagb-social-share__layout-horizontal .uagb-ss__wrapper' ] = {
		'margin-left': generateCSSUnit( gapTabletFallback / 2, 'px' ),
		'margin-right': generateCSSUnit( gapTabletFallback / 2, 'px' ),
	};
	mobileSelectors[ '.uagb-social-share__layout-horizontal .uagb-ss__wrapper' ] = {
		'margin-left': generateCSSUnit( gapMobileTabletFallback / 2, 'px' ),
		'margin-right': generateCSSUnit( gapMobileTabletFallback / 2, 'px' ),
	};

	selectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
	};
	tabletSelectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
		'border-radius': generateCSSUnit( borderRadiusTablet, 'px' ),
	};
	mobileSelectors[ ' .uagb-ss__wrapper.uagb-ss-repeater ' ] = {
		'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
	};

	selectors[ ' .uagb-ss__source-image' ] = {
		'width': generateCSSUnit( sizeFallback, sizeType ),
	};

	selectors[ ' .uagb-ss__source-wrap' ] = {
		'width': generateCSSUnit( sizeFallback, sizeType ),
	};

	selectors[ ' .uagb-ss__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeFallback, sizeType ),
		'height': generateCSSUnit( sizeFallback, sizeType ),
	};

	selectors[ ' .uagb-ss__source-icon' ] = {
		'width': generateCSSUnit( sizeFallback, sizeType ),
		'height': generateCSSUnit( sizeFallback, sizeType ),
		'font-size': generateCSSUnit( sizeFallback, sizeType ),
	};

	let alignment = 'center';
	if ( align === 'left' ){
		alignment = 'flex-start';
	}else if( align === 'right' ){
		alignment = 'flex-end'
	}else{
		alignment = 'center';
	}

	selectors[ '.uagb-social-share__outer-wrap .block-editor-inner-blocks' ] = {
		'text-align': align,
	};
	selectors[ '.uagb-social-share__outer-wrap .block-editor-inner-blocks .block-editor-block-list__layout' ] = {
		'justify-content': alignment,
		'-webkit-box-pack': alignment,
		'-ms-flex-pack': alignment,
		'-webkit-box-align': alignment,
		'-ms-flex-align': alignment,
		'align-items': alignment,
	};
	selectors[
		'.uagb-social-share__outer-wrap'
	] = {
		'justify-content': alignment,
		'-webkit-box-pack': alignment,
		'-ms-flex-pack': alignment,
		'-webkit-box-align': alignment,
		'-ms-flex-align': alignment,
		'align-items': alignment,
	};

	if ( 'horizontal' === social_layout ) {
		if ( 'desktop' === stack ) {
			selectors[
				'.uagb-social-share__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};

			selectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapFallback, 'px' ),
			};
			tabletSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapTablet, 'px' ),
			};
			mobileSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapMobile, 'px' ),
			};

			selectors[ '.uagb-social-share__outer-wrap' ] = {
				'flex-direction': 'column',
				'justify-content': alignment,
				'-webkit-box-pack': alignment,
				'-ms-flex-pack': alignment,
				'-webkit-box-align': alignment,
				'-ms-flex-align': alignment,
				'align-items': alignment,
			};
		} else if ( 'tablet' === stack ) {
			tabletSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapTablet, 'px' ),
			};

			tabletSelectors[
				'.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};
			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};
			tabletSelectors[
				'.uagb-social-share__layout-horizontal .uagb-ss__wrapper'
			] = {
				'margin-left': 0,
				'margin-right': 0,
			};
		} else if ( 'mobile' === stack ) {
			mobileSelectors[ ' .uagb-ss__wrapper' ] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( gapMobile, 'px' ),
			};

			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'flex-direction': 'column',
			};

			mobileSelectors[
				'.uagb-social-share__layout-horizontal .uagb-ss__wrapper'
			] = {
				'margin-left': 0,
				'margin-right': 0,
			};
		}
	}

	mobileSelectors[ ' .uagb-ss__source-image' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
	};

	mobileSelectors[ ' .uagb-ss__source-wrap' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
		'line-height': generateCSSUnit( sizeMobile, sizeType ),
	};

	mobileSelectors[ ' .uagb-ss__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
	};

	mobileSelectors[ ' .uagb-ss__source-icon' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
		'font-size': generateCSSUnit( sizeMobile, sizeType ),
		'line-height': generateCSSUnit( sizeMobile, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-image' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-wrap' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
		'line-height': generateCSSUnit( sizeTablet, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
	};

	tabletSelectors[ ' .uagb-ss__source-icon' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
		'font-size': generateCSSUnit( sizeTablet, sizeType ),
		'line-height': generateCSSUnit( sizeTablet, sizeType ),
	};

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
