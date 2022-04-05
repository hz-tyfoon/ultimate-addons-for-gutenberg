/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import hexToRgba from '@Controls/hexToRgba';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

function styling( props ) {
	const { attributes, deviceType } = props;
	const {
		block_id,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		backgroundType,
		backgroundImage,
		backgroundColor,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		gradientValue,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		columnGapDesktop,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		contentWidth,
		innerContentWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
	} = attributes;

	const editPostLayout = document.getElementsByClassName( 'edit-post-layout' )[0];
	const editorStylesWrapper = document.getElementsByClassName( 'editor-styles-wrapper' )[0];
	let editorWidth = '100vw';
	let editorContentWidth = attributes[`innerContentCustomWidth${deviceType}`] + 'px';

	if ( editPostLayout && editorStylesWrapper ) {
		const editorStylesWrapperWidth = editorStylesWrapper.clientWidth;
		const editPostLayoutWidth = editPostLayout.clientWidth;

		const differenceInPercent = 100 - ( editorStylesWrapperWidth / editPostLayoutWidth ) * 100;
		const differenceCustomWidth = ( attributes[`innerContentCustomWidth${deviceType}`] * differenceInPercent ) / 100;
		editorWidth = 100 - differenceInPercent + 'vw';
		editorContentWidth = attributes[`innerContentCustomWidth${deviceType}`] - differenceCustomWidth + 'px';
	}

	const selectors = {
		' .uagb-container__shape-top svg' : {
			'width': 'calc( ' + topWidth + '% + 1.3px )',
			'height': generateCSSUnit( topHeight, 'px' )
		},
		' .uagb-container__shape-top .uagb-container__shape-fill' : {
			'fill': hexToRgba( maybeGetColorForVariable( topColor ), 100 ),
		},
		' .uagb-container__shape-bottom svg' : {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit( bottomHeight, 'px' )
		},
		' .uagb-container__shape-bottom .uagb-container__shape-fill' : {
			'fill': hexToRgba( maybeGetColorForVariable( bottomColor ), 100 ),
		},
	};

	const backgroundAttributes = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImage,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeat,
        'backgroundPosition': backgroundPosition,
        'backgroundSize': backgroundSize,
        'backgroundAttachment': backgroundAttachment,
    };

	const containerBackgroundCSS = generateBackgroundCSS( backgroundAttributes );

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	const containerCSS = {
		'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
		'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
		'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
		'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ),
		'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
		'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
		'border-style': borderStyle,
		'border-color': borderColor,
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
		'border-width': generateCSSUnit( borderWidth, 'px' ),
		...containerBackgroundCSS,
		'box-shadow':
		generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
		generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
		boxShadowColor + ' ' +	boxShadowPositionCSS,
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
	}

	selectors[' > .wp-block-uagb-container'] = containerCSS;
	selectors[' > .wp-block-uagb-container:hover'] = {
		'border-color': borderHoverColor,
	};

	selectors[' > .wp-block-uagb-container > .block-editor-inner-blocks > .block-editor-block-list__layout'] = {
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction' : directionDesktop,
		'align-items' : alignItemsDesktop,
		'justify-content' : justifyContentDesktop,
		'flex-wrap' : wrapDesktop,
		'align-content' : alignContentDesktop,
		'row-gap' : generateCSSUnit( rowGapDesktop, rowGapType ),
		'column-gap' : generateCSSUnit( columnGapDesktop, columnGapType ),
	}
	selectors['.block-editor-block-list__block'] = {
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction' : directionDesktop,
		'align-items' : alignItemsDesktop,
		'justify-content' : justifyContentDesktop,
		'flex-wrap' : wrapDesktop,
		'align-content' : alignContentDesktop,
	}

	const widthSelectorsDesktop = {
		[`.is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${ props.clientId } `] : {
			'max-width' : generateCSSUnit( widthDesktop, widthType ),
			'width' : generateCSSUnit( widthDesktop, widthType ),
		}
	};

	if ( ( 'alignfull' === contentWidth || 'default' === contentWidth ) && 'alignwide' === innerContentWidth ) {

		widthSelectorsDesktop[`.is-root-container > .block-editor-block-list__block > .wp-block-uagb-container.uagb-block-${ block_id }`] = {
			'--inner-content-custom-width' : editorContentWidth,
			'--padding-left' : ( attributes[`leftPadding${deviceType}`] || 0 ) + paddingType,
			'--padding-right' : ( attributes[`rightPadding${deviceType}`] || 0 ) + paddingType,
			'--column-gap' : ( attributes[`columnGap${deviceType}`] || 0 ) + columnGapType,
			'padding-left': `calc( ( ${editorWidth} - var( --inner-content-custom-width ) ) / 2 + var( --padding-left ) )`,
			'padding-right': `calc( ( ${editorWidth} - var( --inner-content-custom-width ) ) / 2 + var( --padding-right ) )`,
		};
	}

	const widthSelectorsTablet = {
		[`.is-root-container > .block-editor-block-list__block .uagb-editor-preview-mode-tablet.block-editor-block-list__block#block-${ props.clientId } `] : {
			'max-width' : generateCSSUnit( widthTablet, widthType ),
			'width' : generateCSSUnit( widthTablet, widthType ),
		},
	};

	const widthSelectorsMobile = {
		[`.is-root-container > .block-editor-block-list__block .uagb-editor-preview-mode-mobile.block-editor-block-list__block#block-${ props.clientId } `] : {
			'max-width' : generateCSSUnit( widthMobile, widthType ),
			'width' : generateCSSUnit( widthMobile, widthType ),
		},
	};

	const tablet_selectors = {
		' > .wp-block-uagb-container' : {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingType ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingType ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingType ),
			'margin-top': generateCSSUnit( topMarginTablet, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginType ),
			'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
			'min-height' : generateCSSUnit( minHeightTablet, minHeightType ),
		},
		' > .wp-block-uagb-container > .block-editor-inner-blocks > .block-editor-block-list__layout' : {
			'flex-direction' : directionTablet,
			'align-items' : alignItemsTablet,
			'justify-content' : justifyContentTablet,
			'flex-wrap' : wrapTablet,
			'align-content' : alignContentTablet,
			'row-gap' : generateCSSUnit( rowGapTablet, rowGapType ),
			'column-gap' : generateCSSUnit( columnGapTablet, columnGapType ),
		},
		'.block-editor-block-list__block' : {
			'min-height' : generateCSSUnit( minHeightTablet, minHeightType ),
			'flex-direction' : directionTablet,
			'align-items' : alignItemsTablet,
			'justify-content' : justifyContentTablet,
			'flex-wrap' : wrapTablet,
			'align-content' : alignContentTablet,
		},
		' .uagb-container__shape-top svg' : {
			'height': generateCSSUnit( topHeightTablet, 'px' )
		},
		' .uagb-container__shape-bottom svg' : {
			'height': generateCSSUnit( bottomHeightTablet, 'px' )
		},
	};

	const mobile_selectors = {
		' > .wp-block-uagb-container' : {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingType ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingType ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingType ),
			'margin-top': generateCSSUnit( topMarginMobile, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginType ),
			'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
			'min-height' : generateCSSUnit( minHeightMobile, minHeightType ),
		},
		' > .wp-block-uagb-container > .block-editor-inner-blocks > .block-editor-block-list__layout' : {
			'flex-direction' : directionMobile,
			'align-items' : alignItemsMobile,
			'justify-content' : justifyContentMobile,
			'flex-wrap' : wrapMobile,
			'align-content' : alignContentMobile,
			'row-gap' : generateCSSUnit( rowGapMobile, rowGapType ),
			'column-gap' : generateCSSUnit( columnGapMobile, columnGapType ),
		},
		'.block-editor-block-list__block' : {
			'min-height' : generateCSSUnit( minHeightMobile, minHeightType ),
			'flex-direction' : directionMobile,
			'align-items' : alignItemsMobile,
			'justify-content' : justifyContentMobile,
			'flex-wrap' : wrapMobile,
			'align-content' : alignContentMobile,
		},
		' .uagb-container__shape-top svg' : {
			'height': generateCSSUnit( topHeightMobile, 'px' )
		},
		' .uagb-container__shape-bottom svg' : {
			'height': generateCSSUnit( bottomHeightMobile, 'px' )
		},
	};

	if ( 'default' === contentWidth ) {
		selectors['.block-editor-block-list__block'].width = generateCSSUnit( widthDesktop, widthType );
		selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit( widthDesktop, widthType );

		tablet_selectors['.block-editor-block-list__block'].width = generateCSSUnit( widthTablet, widthType );
		tablet_selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit( widthTablet, widthType );

		mobile_selectors['.block-editor-block-list__block'].width = generateCSSUnit( widthMobile, widthType );
		mobile_selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit( widthMobile, widthType );
	}

	const base_selector = `.editor-styles-wrapper #block-${ props.clientId }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( widthSelectorsDesktop, '.editor-styles-wrapper ' );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		widthSelectorsTablet,
		'.editor-styles-wrapper ',
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	styling_css += generateCSS(
		widthSelectorsMobile,
		'.editor-styles-wrapper ',
		true,
		'mobile'
	);

	return styling_css;
}

export default styling;
