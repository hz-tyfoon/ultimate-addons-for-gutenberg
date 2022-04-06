const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'default',
	},
	url: {
		type: 'string',
		default: '',
	},
	alt: {
		type: 'string',
		default: '',
	},
	caption: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
		default: '',
	},
	id: {
		type: 'integer',
		default: '',
	},
	href: {
		type: 'string',
		default: '',
	},
	rel: {
		type: 'string',
		default: '',
	},
	linkClass: {
		type: 'string',
		default: '',
	},
	linkDestination: {
		type: 'string',
		default: '',
	},
	title: {
		type: 'string',
		default: '',
	},
	width: {
		type: 'integer',
		default: '',
	},
	height: {
		type: 'integer',
		default: '',
	},
	linkTarget: {
		type: 'string',
		default: '',
	},
	sizeSlug: {
		type: 'string',
		default: '',
	},
	// image.
	imageTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	imageRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	imageLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	imageBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	imageTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imageMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imageMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imageMarginLink: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
	},
	// caption.
	captionText: {
		type: 'string',
		default: '',
	},
	captionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	captionColor: {
		type: 'string',
		isUAGStyle: true,
	},
	captionAlign: {
		type: 'string',
		default: 'center',
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	captionFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	captionTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	captionDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	captionFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	captionFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	captionTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	captionTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	captionMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	captionMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// heading.
	heading: {
		type: 'string',
		default: '',
	},
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		default: '#fff'
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// overlay.
	overlayPositionFromEdge: {
		type: 'number',
		default: 15,
	},
	overlayPositionFromEdgeUnit: {
		type: 'string',
		default: 'px',
	},
	overlayContentPosition: {
		type: 'string',
		default: 'center center',
	},
	overlayBackground: {
		type: 'string',
		default: '',
	},
	overlayOpacity: {
		type: 'float',
		default: 0.2,
	},
	overlayHoverOpacity: {
		type: 'number',
		default: 1,
	},
	overlayBorderWidth: {
		type: 'number',
		default: 2,
	},
	overlayBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	overlayBorderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	overlayBorderColor: {
		type: 'string',
		default: '#fff'
	},
	overlayBorderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	// seperator.
	seperatorStyle: {
		type: 'string',
		default: 'none',
	},
	seperatorColor: {
		type: 'string',
		default: '#fff',
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
	},
	seperatorWidth: {
		type: 'number',
		default: 30,
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
	},
	seperatorThicknessUnit: {
		type: 'string',
		default: 'px',
	},
	seperatorTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	seperatorMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	seperatorMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	seperatorMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// effect.
	imageHoverEffect: {
		type: 'string',
		default: 'static',
	},
	// image border.
	imageBorderWidth: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	imageBorderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'none',
	},
	imageBorderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	imageBorderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	imageBorderhoverColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	imageBoxShadowColor: {
		type: 'string',
		isUAGStyle: true,
	},
	imageBoxShadowHOffset: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	imageBoxShadowVOffset: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	imageBoxShadowBlur: {
		type: 'number',
		isUAGStyle: true,
	},
	imageBoxShadowSpread: {
		type: 'number',
		isUAGStyle: true,
	},
	imageBoxShadowPosition: {
		type: 'string',
		default: 'outset',
		isUAGStyle: true,
	},
	// mask
	maskShape: {
		type: 'string',
		default: 'none'
	},
	maskCustomShape: {
		type: 'object',
		default: {
			url: '',
			alt: 'mask shape',
		},
	},
	maskSize: {
		type: 'string',
		default: 'auto'
	},
	maskPosition: {
		type: 'string',
		default: 'center center'
	},
	maskRepeat: {
		type: 'string',
		default: 'no-repeat'
	}
};

export default attributes;
