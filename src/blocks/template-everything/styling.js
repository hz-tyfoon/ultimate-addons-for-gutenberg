/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {

	const { attributes } = props;
	let {
		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		gradientValue,
		blockBorderHColor,
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
		paddingTypeTablet,
		paddingTypeMobile,
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
		marginTypeTablet,
		marginTypeMobile,

		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapTypeTablet,
		rowGapType,
		rowGapTypeMobile,
		headingColor,
		color,
		linkColor,
		linkHoverColor,
		block_id

	} = attributes;

	const borderCSS = generateBorderCSS( attributes, 'block' );
	const borderCSSTablet = generateBorderCSS( attributes, 'block', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'block', 'mobile' );

	topPaddingTablet = 'undefined' !== typeof topPaddingTablet ? topPaddingTablet : topPaddingDesktop;
	topPaddingMobile = 'undefined' !== typeof topPaddingMobile ? topPaddingMobile : topPaddingTablet;

	bottomPaddingTablet = 'undefined' !== typeof bottomPaddingTablet ? bottomPaddingTablet : bottomPaddingDesktop;
	bottomPaddingMobile = 'undefined' !== typeof bottomPaddingMobile ? bottomPaddingMobile : bottomPaddingTablet;

	leftPaddingTablet = 'undefined' !== typeof leftPaddingTablet ? leftPaddingTablet : leftPaddingDesktop;
	leftPaddingMobile = 'undefined' !== typeof leftPaddingMobile ? leftPaddingMobile : leftPaddingTablet;

	rightPaddingTablet = 'undefined' !== typeof rightPaddingTablet ? rightPaddingTablet : rightPaddingDesktop;
	rightPaddingMobile = 'undefined' !== typeof rightPaddingMobile ? rightPaddingMobile : rightPaddingTablet;

	topMarginTablet = 'undefined' !== typeof topMarginTablet ? topMarginTablet : topMarginDesktop;
	topMarginMobile = 'undefined' !== typeof topMarginMobile ? topMarginMobile : topMarginTablet;

	bottomMarginTablet = 'undefined' !== typeof bottomMarginTablet ? bottomMarginTablet : bottomMarginDesktop;
	bottomMarginMobile = 'undefined' !== typeof bottomMarginMobile ? bottomMarginMobile : bottomMarginTablet;

	leftMarginTablet = 'undefined' !== typeof leftMarginTablet ? leftMarginTablet : leftMarginDesktop;
	leftMarginMobile = 'undefined' !== typeof leftMarginMobile ? leftMarginMobile : leftMarginTablet;

	rightMarginTablet = 'undefined' !== typeof rightMarginTablet ? rightMarginTablet : rightMarginDesktop;
	rightMarginMobile = 'undefined' !== typeof rightMarginMobile ? rightMarginMobile : rightMarginTablet;

	const selectors = {
		'.uagb-template-everything__wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block ': {
			'margin-bottom': generateCSSUnit( rowGapDesktop, rowGapType ),
		},
		' .wp-block': {
			'color': color,
		},
		' span': {
			'color': color,
		},
		' p': {
			'color': color,
		},
		' .uagb-heading-text': {
			'color': headingColor,
		},
		' .uagb-marketing-btn__title': {
			'color': linkColor,
		},
		' a': {
			'color': linkColor,
		},
		' a:hover': {
			'color': linkHoverColor,
		},
		' .uagb-marketing-btn__link:hover .uagb-marketing-btn__title': {
			'color': linkHoverColor,
		},
		' .wp-block-button__link': {
			'color': linkColor,
		},
		' .wp-block-button__link:hover': {
			'color': linkHoverColor,
		},
	};
	
	const backgroundAttributesDesktop = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageDesktop,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatDesktop,
        'backgroundPosition': backgroundPositionDesktop,
        'backgroundSize': backgroundSizeDesktop,
        'backgroundAttachment': backgroundAttachmentDesktop,
		'backgroundCustomSize' : backgroundCustomSizeDesktop,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'customPosition': customPosition,
		'xPosition': xPositionDesktop,
		'xPositionType': xPositionType,
		'yPosition': yPositionDesktop,
		'yPositionType': yPositionType,
    };

	const newBlockBackgroundCSSDesktop = generateBackgroundCSS( backgroundAttributesDesktop );

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}

	const blockCSS = {
		'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
		'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
		'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
		'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ),
		'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
		'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
		...newBlockBackgroundCSSDesktop,
		'box-shadow':
		generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
		generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
		boxShadowColor + ' ' +	boxShadowPositionCSS,
		...borderCSS,
	}

	selectors['.uagb-template-everything__wrap'] = blockCSS;
	selectors['.uagb-template-everything__wrap:hover'] = {
		'border-color': blockBorderHColor,
	};

	boxShadowBlurHover = isNaN( boxShadowBlurHover ) ? '' : boxShadowBlurHover;
	boxShadowColorHover = boxShadowColorHover ? boxShadowColorHover : '';

	if( '' !== boxShadowColorHover || '' !== boxShadowBlurHover ) {

		const boxShadowBlurHoverCSSUnit = ( '' === boxShadowBlurHover ) ? '' : generateCSSUnit( boxShadowBlurHover, 'px' );

		selectors['.uagb-template-everything__wrap:hover']['box-shadow'] = generateCSSUnit( boxShadowHOffsetHover, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffsetHover, 'px' ) +	' ' +
													boxShadowBlurHoverCSSUnit + ' ' +	generateCSSUnit( boxShadowSpreadHover, 'px' ) + ' ' +
													boxShadowColorHover + ' ' +	boxShadowPositionCSSHover;
	}

	const backgroundAttributesTablet = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageTablet,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatTablet,
        'backgroundPosition': backgroundPositionTablet,
        'backgroundSize': backgroundSizeTablet,
        'backgroundAttachment': backgroundAttachmentTablet,
		'backgroundCustomSize' : backgroundCustomSizeTablet,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'customPosition': customPosition,
		'xPosition': xPositionTablet,
		'xPositionType': xPositionTypeTablet,
		'yPosition': yPositionTablet,
		'yPositionType': yPositionTypeTablet,
    };

	const infoBoxBackgroundCSSTablet = generateBackgroundCSS( backgroundAttributesTablet );

	const tablet_selectors = {
		'.uagb-template-everything__wrap' : {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingTypeTablet ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingTypeTablet ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingTypeTablet ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingTypeTablet ),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginTypeTablet )+' !important',
			'margin-left': generateCSSUnit( leftMarginTablet, marginTypeTablet ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginTypeTablet ),
			...infoBoxBackgroundCSSTablet,
			...borderCSSTablet
		},
		'.uagb-template-everything__wrap > .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block ': {
			'margin-bottom': generateCSSUnit( rowGapTablet, rowGapTypeTablet ),
		},
	};

	const backgroundAttributesMobile = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageMobile,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatMobile,
        'backgroundPosition': backgroundPositionMobile,
        'backgroundSize': backgroundSizeMobile,
        'backgroundAttachment': backgroundAttachmentMobile,
		'backgroundCustomSize' : backgroundCustomSizeMobile,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'customPosition': customPosition,
		'xPosition': xPositionMobile,
		'xPositionType': xPositionTypeMobile,
		'yPosition': yPositionMobile,
		'yPositionType': yPositionTypeMobile,
    };

	const containerBackgroundCSSMobile = generateBackgroundCSS( backgroundAttributesMobile );

	const mobile_selectors = {
		'.uagb-template-everything__wrap' : {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingTypeMobile ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingTypeMobile ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingTypeMobile ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingTypeMobile ),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginTypeMobile ),
			'margin-left': generateCSSUnit( leftMarginMobile, marginTypeMobile ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginTypeMobile ),
			...containerBackgroundCSSMobile,
			...borderCSSMobile
		},
		'.uagb-template-everything__wrap .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block ': {
			'margin-bottom': generateCSSUnit( rowGapMobile, rowGapTypeMobile ),
		},
	};

	const id = `.editor-styles-wrapper .uagb-block-${ block_id }`;
	let styling_css = generateCSS( selectors, id );


	styling_css += generateCSS(
		tablet_selectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}

export default styling;
