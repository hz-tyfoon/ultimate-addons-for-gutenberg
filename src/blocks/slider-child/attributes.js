const attributes = {
	block_id: {
		type: 'string',
		default: '0',
	},
	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'slider-bg-type',
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-image-desktop',
		},
	},
	backgroundImageTablet: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-image-tablet',
		},
	},
	backgroundImageMobile: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-image-mobile',
		},
	},
	backgroundPositionDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-position-desktop',
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-position-tablet',
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-position-mobile',
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-size-desktop',
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-size-tablet',
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-size-mobile',
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-desktop',
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-tablet',
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-mobile',
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-desktop',
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-tablet',
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-mobile',
		},
	},
	backgroundColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-color',
		},
	},
	backgroundOpacity: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-opacity',
		},
	},
	backgroundImageColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-image-color',
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bg-gradient-value',
		},
	},
	topPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-top-padding-desktop',
		},
		default: 20,
	},
	bottomPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-desktop',
		},
		default: 20,
	},
	leftPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-left-padding-desktop',
		},
		default: 20,
	},
	rightPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-right-padding-desktop',
		},
		default: 20,
	},
	topPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-top-padding-tablet',
		},
		default: 20,
	},
	bottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-tablet',
		},
		default: 20,
	},
	leftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-left-padding-tablet',
		},
		default: 20,
	},
	rightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-right-padding-tablet',
		},
		default: 20,
	},
	topPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-top-padding-mobile',
		},
		default: 20,
	},
	bottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-mobile',
		},
		default: 20,
	},
	leftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-left-padding-mobile',
		},
		default: 20,
	},
	rightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-right-padding-mobile',
		},
		default: 20,
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type',
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type-tablet',
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type-mobile',
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},
	topMarginDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-top-margin-desktop',
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-desktop',
		},
	},
	leftMarginDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-left-margin-desktop',
		},
	},
	rightMarginDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-right-margin-desktop',
		},
	},
	topMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-top-margin-tablet',
		},
	},
	bottomMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-tablet',
		},
	},
	leftMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-left-margin-tablet',
		},
	},
	rightMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-right-margin-tablet',
		},
	},
	topMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-top-margin-mobile',
		},
	},
	bottomMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-mobile',
		},
	},
	leftMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-left-margin-mobile',
		},
	},
	rightMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'slider-right-margin-mobile',
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type',
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type-tablet',
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type-mobile',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	isBlockRootParent: {
		type: 'boolean',
		default: false,
	},
	backgroundCustomSizeDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-desktop',
		},
		default: 100,
	},
	backgroundCustomSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-tablet',
		},
	},
	backgroundCustomSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-mobile',
		},
	},
	backgroundCustomSizeType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'background-custom-size-type',
		},
	},
	overlayType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'background-overlay-type',
		},
	},
	// Background image position.
	customPosition: {
		type: 'string',
		default: 'default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-position-type',
		},
	},
	xPositionDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-desktop',
		},
		default: '',
	},
	xPositionTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-tablet',
		},
	},
	xPositionMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-mobile',
		},
	},
	xPositionType: {
		type: 'string',
		default: 'px',
	},
	xPositionTypeTablet: {
		type: 'string',
		default: 'px',
	},
	xPositionTypeMobile: {
		type: 'string',
		default: 'px',
	},

	yPositionDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-desktop',
		},
		default: '',
	},
	yPositionTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-tablet',
		},
	},
	yPositionMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-mobile',
		},
	},
	yPositionType: {
		type: 'string',
		default: 'px',
	},
	yPositionTypeTablet: {
		type: 'string',
		default: 'px',
	},
	yPositionTypeMobile: {
		type: 'string',
		default: 'px',
	},
	gradientColor1: {
		type: 'string',
		default: '#06558a',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'gradient-color-1',
		},
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'gradient-color-2',
		},
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'gradient-color-type',
		},
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'gradient-type',
		},
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'gradient-location-1',
		},
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'gradient-location-2',
		},
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'gradient-angle',
		},
	},
};

export default attributes;
