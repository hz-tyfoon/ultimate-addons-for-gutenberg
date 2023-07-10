import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';

const overallBorderAttributes = getBorderAttributes( 'overall' );

const attributes = {
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	disableBullets: {
		type: 'boolean',
		default: false,
	},
	makeCollapsible: {
		type: 'boolean',
		default: false,
	},
	initialCollapse: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: 'angle-down',
	},
	iconSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	bulletColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'bullet-color',
		},
	},
	smoothScroll: {
		type: 'boolean',
		default: true,
	},
	smoothScrollOffset: {
		type: 'number',
		default: 30,
	},
	smoothScrollOffsetType: {
		type: 'string',
		default: 'px',
	},
	scrollToTop: {
		type: 'boolean',
		default: false,
	},
	scrollToTopColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'scroll-top-color',
		},
	},
	scrollToTopBgColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'scroll-top-bg-color',
		},
	},
	mappingHeaders: {
		type: 'array',
		default: Array( 6 ).fill( true ),
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	headerLinks: {
		type: 'html',
		default: '',
	},
	heading: {
		source: 'html',
		selector: '.uagb-toc__title',
		default: __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
	},
	headingTitle: {
		type: 'string',
		default: __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
	},
	customWidth: {
		type: 'boolean',
		default: true,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'custom-width',
		},
	},
	widthTypeDesktop: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'custom-width-type-desktop',
		},
	},
	widthTypeTablet: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'custom-width-type-tablet',
		},
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'custom-width-type-mobile',
		},
	},
	widthDesktop: {
		type: 'number',
		default: 100,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'custom-width-desktop',
		},
	},
	widthTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'custom-width-tablet',
		},
	},
	widthMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'custom-width-mobile',
		},
	},
	tColumnsDesktop: {
		type: 'number',
		default: 1,
	},
	tColumnsTablet: {
		type: 'number',
		default: 1,
	},
	tColumnsMobile: {
		type: 'number',
		default: 1,
	},

	// Color
	backgroundColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'bg-color',
		},
		default: '#fff',
	},
	linkColor: {
		type: 'string',
		default: '#54595F',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	linkHoverColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-hover-color',
		},
	},
	headingColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},

	// Padding
	contentLeftPadding: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	contentRightPadding: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	contentTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
		default: 15,
	},
	contentBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
		default: 15,
	},
	contentLeftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	contentRightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	contentTopPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	contentBottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	contentLeftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	contentRightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	contentTopPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	contentBottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	contentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit',
		},
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile',
		},
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet',
		},
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	vPaddingDesktop: {
		type: 'number',
		default: 30,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding',
		},
	},
	hPaddingDesktop: {
		type: 'number',
		default: 30,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding',
		},
	},
	vPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-tablet',
		},
	},
	hPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-tablet',
		},
	},
	vPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-padding-mobile',
		},
	},
	hPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-padding-mobile',
		},
	},
	leftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	rightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	topPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	bottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	leftPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	rightPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	topPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	leftPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	rightPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	topPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit',
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile',
		},
		default: 'px',
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet',
		},
	},
	// Margin
	vMarginDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-margin',
		},
	},
	hMarginDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-margin',
		},
	},
	vMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-margin-tablet',
		},
	},
	hMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-margin-tablet',
		},
	},
	vMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-vertical-margin-mobile',
		},
	},
	hMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-horizontal-margin-mobile',
		},
	},
	leftMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin',
		},
	},
	rightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin',
		},
	},
	topMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin',
		},
	},
	bottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	leftMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet',
		},
	},
	rightMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet',
		},
	},
	topMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet',
		},
	},
	bottomMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	leftMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile',
		},
	},
	rightMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile',
		},
	},
	topMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile',
		},
	},
	bottomMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	marginTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit',
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet',
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile',
		},
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	headingBottom: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headingBottomTablet: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headingBottomMobile: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headingBottomType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-type-desktop',
		},
	},
	paddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-desktop',
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-tablet',
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-padding-type-mobile',
		},
	},

	// Content Padding
	contentPaddingDesktop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-padding-desktop',
		},
	},
	contentPaddingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-padding-tablet',
		},
	},
	contentPaddingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-padding-mobile',
		},
	},
	contentPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit',
		},
	},
	contentPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet',
		},
	},
	contentPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile',
		},
		default: 'px',
	},

	// Border
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderRadius: {
		type: 'number',
		default: 6,
	},
	borderColor: {
		type: 'string',
	},
	borderHoverColor: {
		type: 'string',
	},

	// Link Font Family
	loadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
		default: false,
	},
	fontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	// Link Font Size
	fontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	fontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	fontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	// Link Line Height
	lineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	lineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	lineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},

	// Link Font Family
	headingLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google fonts',
		},
		default: false,
	},
	headingFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	headingFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
		default: '500',
	},
	// Link Font Size
	headingFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
		default: 20,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	headingFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	headingFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	// Link Line Height
	headingLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
		default: 'em',
	},
	headingLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	headingLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headingLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	emptyHeadingTeaxt: {
		type: 'string',
		default: __( 'Add a header to begin generating the table of contents', 'ultimate-addons-for-gutenberg' ),
	},

	fontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	fontDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
		default: 'underline',
	},

	headingFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	headingTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	headingDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	headingAlignment: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...overallBorderAttributes,
	headingLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'heading-letter-spacing',
		},
	},
	headingLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'heading-letter-spacing-tablet',
		},
	},
	headingLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'heading-letter-spacing-mobile',
		},
	},
	headingLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'heading-letter-spacing-type',
		},
	},
	letterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'list-letter-spacing',
		},
	},
	letterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'list-letter-spacing-tablet',
		},
	},
	letterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'list-letter-spacing-mobile',
		},
	},
	letterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'list-letter-spacing-type',
		},
	},
	markerView: {
		type: 'string',
		default: 'disc',
	},
	separatorStyle: {
		type: 'string',
		default: 'none',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-style',
		},
	},
	separatorHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-thickness',
		},
		default: 1,
	},
	separatorHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-height-type',
		},
	},
	separatorSpace: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	separatorSpaceTablet: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	separatorSpaceMobile: {
		type: 'number',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	separatorSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-width-type',
		},
	},
	separatorColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
	},
	separatorHColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-color-hover',
		},
	},
	overallAlign: {
		type: 'string',
		default: 'left',
	},
};

export default attributes;
