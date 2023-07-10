import { getBorderAttributes } from '@Controls/generateAttributes';
const btnBorderAttributes = getBorderAttributes( 'btn' );
const contentBorderAttributes = getBorderAttributes( 'content' );

const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	defaultTemplate: {
		type: 'boolean',
		default: false,
	},
	modalTrigger: {
		type: 'string',
		default: 'button',
	},
	triggerText: {
		type: 'string',
		default: 'Click Here',
	},
	icon: {
		type: 'string',
		default: 'up-right-from-square',
	},
	closeIcon: {
		type: 'string',
		default: 'xmark',
	},
	iconImage: {
		type: 'object',
		default: {
			url: `${ uagb_blocks_info.uagb_url }/admin/assets/images/placeholder.png`,
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	imageWidth: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width',
		},
		default: '',
	},
	imageWidthMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width-mobile',
		},
	},
	imageWidthTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width-tablet',
		},
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-width-type',
		},
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit',
		},
	},
	imageWidthUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-tablet',
		},
	},
	imageWidthUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-mobile',
		},
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-border-radius',
		},
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-unit',
		},
	},
	buttonText: {
		type: 'html',
		default: 'Click Here',
	},
	buttonIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	buttonIconPosition: {
		type: 'string',
		default: 'after',
	},
	buttonIconSpace: {
		type: 'number',
		default: 5,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	buttonIconSpaceTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	buttonIconSpaceMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	buttonIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type',
		},
	},
	modalAlign: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	modalAlignTablet: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	modalAlignMobile: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	modalWidth: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'modal-width',
		},
		default: 600,
	},
	modalWidthTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'modal-width',
		},
		default: 600,
	},
	modalWidthMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'modal-width',
		},
		default: 340,
	},
	modalWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-width-type',
		},
	},
	modalHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'modal-height',
		},
		default: 350,
	},
	modalHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'modal-height',
		},
		default: 350,
	},
	modalHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'modal-height',
		},
		default: 300,
	},
	modalHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-height-type',
		},
	},
	appearEffect: {
		type: 'string',
		default: 'uagb-effect-default',
	},
	closeIconSize: {
		type: 'number',
		default: 25,
	},
	closeIconPosition: {
		type: 'string',
		default: 'popup-top-right',
	},
	escPress: {
		type: 'boolean',
		default: false,
	},
	overlayClick: {
		type: 'boolean',
		default: false,
	},
	overlayColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overlay-bg-color',
		},
	},
	closeIconColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'close-icon-color',
		},
	},
	modalSpacingLink: {
		type: 'boolean',
		default: true,
	},
	paddingModalUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
		default: 'px',
	},
	mobilePaddingModalUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
		default: 'px',
	},
	tabletPaddingModalUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	paddingModalTop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	paddingModalBottom: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	paddingModalLeft: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	paddingModalRight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	paddingModalTopTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	paddingModalRightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	paddingModalBottomTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	paddingModalLeftTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	paddingModalTopMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	paddingModalRightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	paddingModalBottomMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	paddingModalLeftMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},

	iconSize: {
		type: 'number',
		default: 30,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	textColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	textLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	textFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	textFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	textFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	textTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	textDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	textFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	textLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	textFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	textFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	textFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	textLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	textLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	textLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	textLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	textLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	textLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	textLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},

	btnSpacingLink: {
		type: 'boolean',
		default: true,
	},
	paddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	paddingBtnTop: {
		type: 'number',
		default: 14,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	paddingBtnBottom: {
		type: 'number',
		default: 14,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	paddingBtnLeft: {
		type: 'number',
		default: 32,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	paddingBtnRight: {
		type: 'number',
		default: 32,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	paddingBtnTopTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	paddingBtnRightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	paddingBtnBottomTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	paddingBtnLeftTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	paddingBtnTopMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	paddingBtnRightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	paddingBtnBottomMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	paddingBtnLeftMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	btnLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	btnFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	btnFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	btnFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	btnTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	btnDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	btnFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	btnLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	btnFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	btnFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	btnFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	btnLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	btnLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet',
		},
	},
	btnLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile',
		},
	},
	btnLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing',
		},
	},
	btnLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing-tablet',
		},
	},
	btnLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing-mobile',
		},
	},
	btnLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing-type',
		},
	},

	btnLinkColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	btnLinkHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	btnBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	btnBgHoverColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-h-background',
		},
	},
	imgTagHeight: {
		type: 'number',
		default: 0,
	},
	imgTagWidth: {
		type: 'number',
		default: 0,
	},
	showBtnIcon: {
		type: 'boolean',
		default: false,
	},
	modalBoxHeight: {
		type: 'string',
		default: 'auto',
	},
	maxHeight: {
		type: 'number',
		default: '90',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-max-height-desktop',
		},
	},
	maxHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-max-height-tablet',
		},
	},
	maxHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-max-height-mobile',
		},
	},
	maxHeightType: {
		type: 'string',
		default: 'vh',
		UAGCopyPaste: {
			styleType: 'container-max-height-type',
		},
	},
	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-bg-type',
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-desktop',
		},
	},
	backgroundImageTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-tablet',
		},
	},
	backgroundImageMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-mobile',
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
			styleType: 'container-bg-position-desktop',
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-position-tablet',
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-position-mobile',
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-size-desktop',
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-size-tablet',
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-size-mobile',
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-desktop',
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-tablet',
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-mobile',
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-desktop',
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-tablet',
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-mobile',
		},
	},
	backgroundColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-color',
		},
	},
	backgroundOpacity: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-opacity',
		},
	},
	backgroundImageColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-image-color',
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value',
		},
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
	...btnBorderAttributes,
	btnBorderTopLeftRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-border-top-left-radius',
		},
	},
	btnBorderTopRightRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-border-top-right-radius',
		},
	},
	btnBorderBottomLeftRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-border-bottom-left-radius',
		},
	},
	btnBorderBottomRightRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-border-bottom-right-radius',
		},
	},
	...contentBorderAttributes,
	contentBorderTopLeftRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'content-border-top-left-radius',
		},
	},
	contentBorderTopRightRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'content-border-top-right-radius',
		},
	},
	contentBorderBottomLeftRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'content-border-bottom-left-radius',
		},
	},
	contentBorderBottomRightRadius: {
		type: 'number',
		default: 3,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'content-border-bottom-right-radius',
		},
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
		isGBSStyle : true,
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
	modalTriggerBgType: {
		type: 'string',
		default: 'color',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-background-type',
		},
	},
	modalTriggerBgHoverType: {
		type: 'string',
		default: 'color',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-hbackground-type',
		},
	},
};

export default attributes;
