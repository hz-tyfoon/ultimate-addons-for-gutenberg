import { getBorderAttributes } from '@Controls/generateAttributes';

const borderAttributes = getBorderAttributes( 'overall' );
const iconBorderAttributes = getBorderAttributes( 'icon' );

const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'accordion',
	},
	inactiveOtherItems: {
		type: 'boolean',
		default: true,
	},
	expandFirstItem: {
		type: 'boolean',
		default: true,
	},
	enableSchemaSupport: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	enableSeparator: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'enable-separator',
		},
	},
	rowsGap: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	rowsGapTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	rowsGapMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	rowsGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-type',
		},
	},
	columnsGap: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
	},
	columnsGapTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gap-tablet',
		},
	},
	columnsGapMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gap-mobile',
		},
	},
	columnsGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-type',
		},
	},
	boxBgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'faq-bg-type',
		},
	},
	boxBgHoverType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'faq-bg-hover-type',
		},
	},
	boxBgColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-bg-color',
		},
	},
	boxBgHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-bg-hover-color',
		},
	},
	boxPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-mobile',
		},
		default: 'px',
	},
	boxPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-tablet',
		},
	},
	boxPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'faq-padding-type-desktop',
		},
	},
	vBoxPaddingMobile: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-mobile',
		},
	},
	hBoxPaddingMobile: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-mobile',
		},
	},
	vBoxPaddingTablet: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-tablet',
		},
	},
	hBoxPaddingTablet: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-tablet',
		},
	},
	vBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-vertical-padding-desktop',
		},
	},
	hBoxPaddingDesktop: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	borderHoverColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	borderRadius: {
		type: 'number',
		default: 2,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	borderColor: {
		type: 'string',
		default: '#D2D2D2',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'faq-horizontal-padding-desktop',
		},
	},
	questionTextColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	questionTextActiveColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	questionTextBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bg-color',
		},
	},
	questionTextActiveBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color',
		},
	},
	questionPaddingTypeDesktop: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-desktop',
		},
		default: 'px',
	},
	questionPaddingTypeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-tablet',
		},
		default: 'px',
	},
	questionPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-mobile',
		},
		default: 'px',
	},
	vquestionPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-mobile',
		},
		default: 10,
	},
	vquestionPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-tablet',
		},
		default: 10,
	},
	vquestionPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-padding-desktop',
		},
		default: 10,
	},
	hquestionPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-mobile',
		},
		default: 10,
	},
	hquestionPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-tablet',
		},
		default: 10,
	},
	hquestionPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-horizontal-padding-desktop',
		},
		default: 10,
	},
	answerTextColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	answerPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-desktop',
		},
	},
	answerPaddingTypeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-tablet',
		},
		default: 'px',
	},
	answerPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-type-mobile',
		},
		default: 'px',
	},
	vanswerPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-mobile',
		},
		default: 10,
	},
	vanswerPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-tablet',
		},
		default: 10,
	},
	vanswerPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-desktop',
		},
		default: 10,
	},
	hanswerPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-mobile',
		},
		default: 10,
	},
	hanswerPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-tablet',
		},
		default: 10,
	},
	hanswerPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-desktop',
		},
		default: 10,
	},
	iconColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconActiveColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	gapBtwIconQUestion: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-spacing',
		},
	},
	gapBtwIconQUestionTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-spacing-tablet',
		},
	},
	gapBtwIconQUestionMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-spacing-mobile',
		},
	},
	questionloadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},
	answerloadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
		default: false,
	},
	questionFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	questionFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	questionFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	questionTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	questionDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	questionFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	questionFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
	},
	questionFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	questionFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	questionLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	questionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	questionLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	questionLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	answerFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	answerFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	answerFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
		default: 'normal',
	},
	answerTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	answerDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	answerFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	answerFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
		default: 'px',
	},
	answerFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	answerFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	answerLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	answerLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
		default: 'em',
	},
	answerLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	answerLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	icon: {
		type: 'string',
		default: 'plus',
	},
	iconActive: {
		type: 'string',
		default: 'minus',
	},
	iconAlign: {
		type: 'string',
		default: 'row',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-align',
		},
	},
	iconSize: {
		type: 'number',
		default: 12,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	iconSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
	},
	iconBgSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bg-size',
		},
	},
	iconBgSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bg-size-tablet',
		},
	},
	iconBgSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bg-size-mobile',
		},
	},
	iconBgSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-type',
		},
	},
	columns: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'column-count',
		},
	},
	tcolumns: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'column-count-tablet',
		},
	},
	mcolumns: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'column-count-mobile',
		},
	},
	schema: {
		type: 'string',
		default: '',
	},
	enableToggle: {
		type: 'boolean',
		default: true,
	},
	equalHeight: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'equal-height',
		},
	},
	questionLeftPaddingTablet: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-tablet',
		},
	},
	questionBottomPaddingTablet: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-tablet',
		},
	},
	questionLeftPaddingDesktop: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-desktop',
		},
	},
	questionBottomPaddingDesktop: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-desktop',
		},
	},
	questionLeftPaddingMobile: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-left-padding-mobile',
		},
	},
	questionBottomPaddingMobile: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-padding-mobile',
		},
	},
	headingTag: {
		type: 'html',
		selector: 'span,p,h1,h2,h3,h4,h5,h6',
		default: 'span',
	},
	questionSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerSpacingLink: {
		type: 'boolean',
		default: false,
	},
	answerTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	answerRightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	answerBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	answerLeftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	answerTopPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	answerRightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	answerBottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	answerLeftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	answerTopPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	answerRightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	answerBottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	answerLeftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...borderAttributes,
	// letter spacing
	questionLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	questionLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	questionLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	questionLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	answerLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	answerLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	answerLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	answerLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	iconBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
	},
	...iconBorderAttributes,
};
export default attributes;
