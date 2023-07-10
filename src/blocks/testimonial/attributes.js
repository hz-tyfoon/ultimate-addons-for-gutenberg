/**
 * BLOCK: Testimonial - Attributes
 */

const itemCount = 3;

const testimonialBlock = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const descText =
		'I have been working with these guys for years now! With lots of hard work and timely communication, they made sure they delivered the best to me. Highly recommended!';
	const authorText = 'John Doe ';
	const companyText = 'Company Name';
	testimonialBlock.push( {
		description: descText,
		name: authorText,
		company: companyText,
		image: '',
	} );
}
import { getBorderAttributes } from '@Controls/generateAttributes';
const overallBorderAttributes = getBorderAttributes( 'overall' );
const attributes = {
	test_item_count: {
		type: 'number',
		default: itemCount,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	test_block: {
		type: 'array',
		default: testimonialBlock,
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	headingAlignTablet: {
		type: 'string',
		default: 'center',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-align-tablet',
		},
	},
	headingAlignMobile: {
		type: 'string',
		default: 'center',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-align-mobile',
		},
	},
	descColor: {
		type: 'string',
		default: '#333',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	companyColor: {
		type: 'string',
		default: '#888888',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	authorColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-color',
		},
		default: '#333',
	},
	iconimgStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-style',
		},
		default: 'circle',
	},
	imagePosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
		default: 'bottom',
	},
	imageAlignment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-align',
		},
		default: 'top',
	},

	nameFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-size-type',
		},
		default: 'px',
	},
	nameFontSize: {
		type: 'number',
		default: 20,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-font-size',
		},
	},
	nameFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-font-size-tablet',
		},
	},
	nameFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-font-size-mobile',
		},
	},
	nameFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-font-family',
		},
		default: 'Default',
	},
	nameFontWeight: {
		type: 'string',
		default: '500',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-font-weight',
		},
	},
	nameFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-font-style',
		},
	},
	nameLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-line-height-type',
		},
		default: 'em',
	},
	nameLineHeight: {
		type: 'number',
		default: 2,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-line-height',
		},
	},
	nameLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-line-height-tablet',
		},
	},
	nameLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-line-height-mobile',
		},
	},
	nameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	companyFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
		default: 'px',
	},
	companyFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	companyFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	companyFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	companyFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
		default: 'Default',
	},
	companyFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	companyFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	companyLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
		default: 'em',
	},
	companyLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	companyLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	companyLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	companyLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts',
		},
	},

	descFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
		default: 'px',
	},
	descFontSize: {
		type: 'number',
		default: 18,
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
	descFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
		default: '400',
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
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	descLineHeight: {
		type: 'number',
		default: 1.6,
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
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},

	nameSpace: {
		type: 'number',
		default: 5,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	nameSpaceMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-mobile',
		},
	},
	nameSpaceTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-tablet',
		},
	},
	descSpace: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
		default: 20,
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
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	authorSpace: {
		type: 'number',
		default: 5,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	imgVrPadding: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-vertical-padding',
		},
	},
	imgHrPadding: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-horizontal-padding',
		},
	},
	imgTopPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-padding',
		},
		default: 10,
	},
	imgBottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-padding',
		},
		default: 10,
	},
	iconImage: {
		type: 'object',
		default: {
			url: '',
			alt: 'InfoBox placeholder img',
		},
	},
	imageSize: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
		default: 'thumbnail',
	},
	imageWidth: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-width',
		},
		default: 60,
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
	columns: {
		type: 'number',
		default: 1,
	},
	tcolumns: {
		type: 'number',
		default: 1,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	pauseOnHover: {
		type: 'boolean',
		default: true,
	},
	infiniteLoop: {
		type: 'boolean',
		default: true,
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	arrowDots: {
		type: 'string',
		default: 'arrows_dots',
	},
	arrowSize: {
		type: 'number',
		default: 20,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'arrow-size',
		},
	},
	arrowBorderSize: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'arrow-border-size',
		},
	},
	arrowBorderSizeUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-unit',
		},
	},
	arrowBorderRadius: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'arrow-border-radius',
		},
	},
	arrowBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-unit',
		},
	},
	arrowColor: {
		type: 'string',
		default: '#333',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'arrow-color',
		},
	},
	rowGap: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	rowGapMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	rowGapTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	columnGap: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
	},
	columnGapMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gap-mobile',
		},
	},
	columnGapTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gap-tablet',
		},
	},
	contentPadding: {
		type: 'number',
		default: 5,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'content-padding',
		},
	},
	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'column-bg-type',
		},
	},
	backgroundImage: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'column-bg-image',
		},
	},
	backgroundPosition: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-position',
		},
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-size',
		},
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-repeat',
		},
	},
	backgroundColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-color',
		},
	},
	backgroundImageColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-image-color',
		},
	},
	borderStyle: {
		type: 'string',
		default: 'none',
	},
	borderWidth: {
		type: 'number',
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-opacity',
		},
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	imageWidthType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-width-type',
		},
		default: 'px',
	},
	arrowSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-size-type',
		},
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-unit',
		},
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-unit',
		},
	},
	descSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-unit',
		},
	},
	nameSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-type',
		},
	},
	borderHoverColor: {
		type: 'string',
	},
	overlayType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-overlay-type',
		},
		default: 'color',
	},
	backgroundAttachment: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-bg-attachment',
		},
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(6, 147, 227, 0.5) 0%, rgb(155, 81, 224, 0.5) 100%)',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-value',
		},
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
	nameTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-transform',
		},
	},
	nameDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'author-decoration',
		},
	},
	companyTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	companyDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
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
	paddingTop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	paddingBottom: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	paddingLeft: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	paddingRight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	paddingTopTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingRightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingBottomTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingLeftTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingTopMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	paddingRightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	paddingBottomMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	paddingLeftMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	imgspacingLink: {
		type: 'boolean',
	},
	spacingLink: {
		type: 'boolean',
	},
	imgpaddingTop: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-padding',
		},
	},
	imgpaddingRight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-padding',
		},
	},
	imgpaddingBottom: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-padding',
		},
	},
	imgpaddingLeft: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-padding',
		},
	},
	imgpaddingTopTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-padding-tablet',
		},
	},
	imgpaddingRightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-padding-tablet',
		},
	},
	imgpaddingBottomTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-tablet',
		},
	},
	imgpaddingLeftTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-padding-tablet',
		},
	},
	imgpaddingTopMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-top-padding-mobile',
		},
	},
	imgpaddingRightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-right-padding-mobile',
		},
	},
	imgpaddingBottomMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-mobile',
		},
	},
	imgpaddingLeftMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'image-left-padding-mobile',
		},
	},
	imgpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit',
		},
	},
	imgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-mobile',
		},
	},
	imgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-tablet',
		},
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'gradient-type',
		},
	},
	gradientColor1: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-color-1',
		},
	},
	gradientColor2: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-color-2',
		},
	},
	gradientType: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-type',
		},
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-1',
		},
	},
	gradientLocation2: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-2',
		},
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-angle',
		},
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'column-gradient-position',
		},
		default: 'center center',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	equalHeight: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'post-equal-height',
		},
	},
	...overallBorderAttributes,
	// letter spacing
	nameLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	nameLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	nameLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	nameLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
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
	companyLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	companyLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	companyLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	companyLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
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
};
export default attributes;
