/**
 * BLOCK: UAGB Team Block Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	tag: {
		type: 'string',
		default: 'h3',
	},
	title: {
		selector: 'h1,h2,h3,h4,h5,h6,span,div',
		default: 'John Doe',
	},
	prefix: {
		selector: 'div.uagb-team__prefix',
		default: 'Designation',
	},
	description_text: {
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	titleColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	prefixColor: {
		type: 'string',
		default: '#888888',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	descColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	socialColor: {
		type: 'string',
		default: '#333',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	socialHoverColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	titleFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	titleTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	titleFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	titleLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
	},
	prefixFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	prefixFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	prefixTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	prefixDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
		},
	},
	prefixFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
		default: 'px',
	},
	prefixLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
		default: 'em',
	},
	prefixFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
		default: 15,
	},
	prefixFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	prefixFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	prefixLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	prefixLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	prefixLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	descFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	descFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
		default: 'normal',
	},
	descTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	descDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	descFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
		default: 'px',
	},
	descLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
		default: 'em',
	},
	descFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	descFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	descFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	descLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	descLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	descLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	socialFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
		default: 20,
	},
	socialFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
		default: 'px',
	},
	socialFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	socialFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	image: {
		type: 'object',
		default: null,
	},
	imgStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-style',
		},
		default: 'normal',
	},
	imgPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
		default: 'above',
	},
	imgAlign: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-align',
		},
		default: 'top',
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	imgWidth: {
		type: 'number',
		default: 100,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width',
		},
	},
	imgWidthMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width-mobile',
		},
	},
	imgWidthTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width-tablet',
		},
	},
	titleSpace: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
		default: 6,
	},
	titleSpaceMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	titleSpaceTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	prefixSpace: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin',
		},
		default: 11,
	},
	prefixSpaceTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-tablet',
		},
	},
	prefixSpaceMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-mobile',
		},
	},
	descSpace: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
		default: 18,
	},
	descSpaceTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	descSpaceMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	imgLeftMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-margin',
		},
	},
	imgRightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-margin',
		},
	},
	imgTopMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-margin',
		},
	},
	imgBottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin',
		},
		default: 15,
	},
	socialEnable: {
		type: 'boolean',
		default: true,
	},
	socialSpace: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin',
		},
		default: 20,
	},
	socialSpaceTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet',
		},
	},
	socialSpaceMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile',
		},
	},
	socialTarget: {
		type: 'boolean',
		default: false,
	},
	twitterIcon: {
		type: 'string',
		default: 'twitter',
	},
	fbIcon: {
		type: 'string',
		default: 'facebook',
	},
	linkedinIcon: {
		type: 'string',
		default: 'linkedin',
	},
	pinIcon: {
		type: 'string',
		default: 'pinterest',
	},
	twitterLink: {
		type: 'string',
		default: '#',
	},
	fbLink: {
		type: 'string',
		default: '#',
	},
	linkedinLink: {
		type: 'string',
		default: '#',
	},
	pinLink: {
		type: 'string',
		default: '#',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts',
		},
		default: false,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
		default: false,
	},
	imageLeftMargin: {
		type: 'number',
		default: 20,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-margin',
		},
	},
	imageRightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-margin',
		},
		default: 20,
	},
	imageTopMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-margin',
		},
	},
	imageBottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin',
		},
	},
	imageMarginTopTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-margin-tablet',
		},
	},
	imageMarginRightTablet: {
		type: 'number',
		default: 'auto',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-margin-tablet',
		},
	},
	imageMarginBottomTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-tablet',
		},
	},
	imageMarginLeftTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-margin-tablet',
		},
		default: 'auto',
	},
	imageMarginTopMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-margin-mobile',
		},
	},
	imageMarginRightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-margin-mobile',
		},
		default: 'auto',
	},
	imageMarginBottomMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-mobile',
		},
	},
	imageMarginLeftMobile: {
		type: 'number',
		default: 'auto',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-margin-mobile',
		},
	},
	imageMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-margin-unit',
		},
		default: 'px',
	},
	tabletImageMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-tablet',
		},
		default: 'px',
	},
	mobileImageMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-mobile',
		},
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	// letter spacing
	titleLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	titleLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	titleLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	titleLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	prefixLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-prefix-letter-spacing',
		},
	},
	prefixLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-prefix-letter-spacing-tablet',
		},
	},
	prefixLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-prefix-letter-spacing-mobile',
		},
	},
	prefixLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-prefix-letter-spacing-type',
		},
	},
	descLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	descLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	descLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	descLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
};

export default attributes;
