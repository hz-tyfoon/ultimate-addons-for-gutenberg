/**
 * BLOCK: UAGB Tabs Block Attributes
 */
import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';

const borderAttributes = getBorderAttributes( 'tab' );

const attributes = {
	block_id: {
		type: 'string',
	},
	tabHeaders: {
		type: 'array',
		default: [
			__( 'Tab 1', 'ultimate-addons-for-gutenberg' ),
			__( 'Tab 2', 'ultimate-addons-for-gutenberg' ),
			__( 'Tab 3', 'ultimate-addons-for-gutenberg' ),
		],
	},
	tabActive: {
		type: 'number',
		default: 0,
	},
	tabActiveFrontend: {
		type: 'number',
		default: 0,
	},
	tabsStyleD: {
		type: 'string',
		default: 'hstyle1',
		UAGCopyPaste: {
			styleType: 'tabs-style',
		},
	},
	tabsStyleT: {
		type: 'string',
		default: 'vstyle6',
		UAGCopyPaste: {
			styleType: 'tabs-style-tablet',
		},
	},
	tabsStyleM: {
		type: 'string',
		default: 'stack1',
		UAGCopyPaste: {
			styleType: 'tabs-style-mobile',
		},
	},
	headerBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bg-color',
		},
	},
	headerTextColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	bodyBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	bodyTextColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	borderRadius: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	borderColor: {
		type: 'string',
		default: '#e0e0e0',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	borderHoverColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bg-color',
		},
	},
	activeTabBgColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	activeTabTextColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color',
		},
	},
	tabTitleLeftMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin',
		},
	},
	tabTitleRightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin',
		},
	},
	tabTitleTopMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin',
		},
	},
	tabTitleBottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	tabTitleLeftMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet',
		},
	},
	tabTitleRightMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet',
		},
	},
	tabTitleTopMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet',
		},
	},
	tabTitleBottomMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	tabTitleLeftMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile',
		},
	},
	tabTitleRightMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile',
		},
	},
	tabTitleTopMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile',
		},
	},
	tabTitleBottomMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	tabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-unit-margin',
		},
	},
	mobiletabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile',
		},
	},
	tablettabTitleMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet',
		},
	},
	tabTitleMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin',
		},
	},
	tabBodyRightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin',
		},
	},
	tabBodyTopMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin',
		},
	},
	tabBodyBottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	tabBodyLeftMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet',
		},
	},
	tabBodyRightMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet',
		},
	},
	tabBodyTopMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet',
		},
	},
	tabBodyBottomMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	tabBodyLeftMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile',
		},
	},
	tabBodyRightMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile',
		},
	},
	tabBodyTopMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile',
		},
	},
	tabBodyBottomMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	tabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit',
		},
	},
	mobiletabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile',
		},
	},
	tablettabBodyMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet',
		},
	},
	tabBodyMarginLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyVertPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding',
		},
	},
	tabBodyHrPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding',
		},
	},
	tabTitleLeftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding',
		},
	},
	tabTitleRightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-right-padding',
		},
	},
	tabTitleTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-top-padding',
		},
	},
	tabTitleBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding',
		},
	},
	tabTitleLeftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-tablet',
		},
	},
	tabTitleRightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-right-padding-tablet',
		},
	},
	tabTitleTopPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-top-padding-tablet',
		},
	},
	tabTitleBottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-tablet',
		},
	},
	tabTitleLeftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-mobile',
		},
	},
	tabTitleRightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-right-padding-mobile',
		},
	},
	tabTitleTopPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-top-padding-mobile',
		},
	},
	tabTitleBottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-mobile',
		},
	},
	tabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit',
		},
	},
	mobiletabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-mobile',
		},
	},
	tablettabTitlePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-unit-tablet',
		},
	},
	tabTitlePaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabBodyLeftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	tabBodyRightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	tabBodyTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	tabBodyBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	tabBodyLeftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	tabBodyRightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	tabBodyTopPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	tabBodyBottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	tabBodyLeftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	tabBodyRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	tabBodyTopPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	tabBodyBottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	tabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit',
		},
	},
	mobiletabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile',
		},
	},
	tablettabBodyPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet',
		},
	},
	tabBodyPaddingLink: {
		type: 'boolean',
		default: false,
	},
	tabTitleVertPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding',
		},
	},
	tabTitleHrPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding',
		},
	},
	titleFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-unit-size',
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
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
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
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	titleTransform: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		default: 'none',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	tabAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	titleAlign: {
		type: 'string',
		default: 'center',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	showIcon: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
	},
	iconPosition: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'tab-icon-position',
		},
	},
	iconSpacing: {
		type: 'string',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing',
		},
	},
	iconSpacingTablet: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing',
		},
	},
	iconSpacingMobile: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'tab-icon-spacing',
		},
	},
	iconColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconSize: {
		type: 'number',
		default: 16,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	activeiconColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	titleFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...borderAttributes,
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
};

export default attributes;
