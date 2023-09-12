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
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	headingAlignTablet: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align-tablet',
		},
	},
	headingAlignMobile: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align-mobile',
		},
	},
	descColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	companyColor: {
		type: 'string',
		default: '#888888',
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	authorColor: {
		type: 'string',
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
		UAGCopyPaste: {
			styleType: 'author-font-size',
		},
	},
	nameFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size-tablet',
		},
	},
	nameFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size-mobile',
		},
	},
	nameFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-family',
		},
		default: 'Default',
	},
	nameFontWeight: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'author-font-weight',
		},
	},
	nameFontStyle: {
		type: 'string',
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
		UAGCopyPaste: {
			styleType: 'author-line-height',
		},
	},
	nameLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height-tablet',
		},
	},
	nameLineHeightMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	companyFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	companyFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	companyFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
		default: 'Default',
	},
	companyFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	companyFontStyle: {
		type: 'string',
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
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	companyLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	companyLineHeightMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	descFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	descFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	descFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
		default: '400',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	descFontStyle: {
		type: 'string',
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
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	descLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	descLineHeightMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	nameSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-mobile',
		},
	},
	nameSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-tablet',
		},
	},
	descSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
		default: 20,
	},
	descSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	descSpaceMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'author-bottom-margin',
		},
	},
	imgVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'image-vertical-padding',
		},
	},
	imgHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'image-horizontal-padding',
		},
	},
	imgTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding',
		},
		default: 10,
	},
	imgBottomPadding: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'image-width',
		},
		default: 60,
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-mobile',
		},
	},
	imageWidthTablet: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'arrow-size',
		},
	},
	arrowBorderSize: {
		type: 'number',
		default: 0,
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
		UAGCopyPaste: {
			styleType: 'arrow-color',
		},
	},
	rowGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	rowGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	rowGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	columnGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
	},
	columnGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-mobile',
		},
	},
	columnGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-tablet',
		},
	},
	contentPadding: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'content-padding',
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
		UAGCopyPaste: {
			styleType: 'column-bg-position',
		},
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'column-bg-size',
		},
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'column-bg-repeat',
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
		UAGCopyPaste: {
			styleType: 'column-bg-attachment',
		},
	},
	descTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	descDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	nameTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-transform',
		},
	},
	nameDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-decoration',
		},
	},
	companyTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	companyDecoration: {
		type: 'string',
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
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	paddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	paddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	paddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	paddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	paddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	paddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	paddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	paddingLeftMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'image-top-padding',
		},
	},
	imgpaddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding',
		},
	},
	imgpaddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding',
		},
	},
	imgpaddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding',
		},
	},
	imgpaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-tablet',
		},
	},
	imgpaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-tablet',
		},
	},
	imgpaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-tablet',
		},
	},
	imgpaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-tablet',
		},
	},
	imgpaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-mobile',
		},
	},
	imgpaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-mobile',
		},
	},
	imgpaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-mobile',
		},
	},
	imgpaddingLeftMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'container-bg-position-desktop',
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-tablet',
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-mobile',
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'container-bg-size-desktop',
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-tablet',
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-mobile',
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-desktop',
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-tablet',
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-mobile',
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-desktop',
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-tablet',
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-mobile',
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-color',
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bg-opacity',
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-image-color',
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value',
		},
	},
	backgroundCustomSizeDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-desktop',
		},
		default: 100,
	},
	backgroundCustomSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-tablet',
		},
	},
	backgroundCustomSizeMobile: {
		type: 'number',
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
	// Background image position.
	customPosition: {
		type: 'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'background-image-position-type',
		},
	},
	xPositionDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-desktop',
		},
		default: '',
	},
	xPositionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-tablet',
		},
	},
	xPositionMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'background-image-y-position-desktop',
		},
		default: '',
	},
	yPositionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-tablet',
		},
	},
	yPositionMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'gradient-color-1',
		},
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
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
		UAGCopyPaste: {
			styleType: 'gradient-type',
		},
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gradient-location-1',
		},
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'gradient-location-2',
		},
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gradient-angle',
		},
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
	vAlignContent: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'post-valign-content',
		},
	},
	...overallBorderAttributes,
	// letter spacing
	nameLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	nameLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	nameLetterSpacingMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	descLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	descLetterSpacingMobile: {
		type: 'number',
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
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	companyLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	companyLetterSpacingMobile: {
		type: 'number',
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
