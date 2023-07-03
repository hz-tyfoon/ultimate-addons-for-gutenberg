/**
 * BLOCK: UAGB How-To Schema Attributes
 */

import { __ } from '@wordpress/i18n';

const tools = [];

const materials = [];

tools.push( {
	add_required_tools: __( '- A Computer.', 'ultimate-addons-for-gutenberg' ),
} );

materials.push( {
	add_required_materials: __( '- A WordPress Website.', 'ultimate-addons-for-gutenberg' ),
} );

const attributes = {
	block_id: {
		type: 'string',
	},
	overallAlignment: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	toolsTitle: {
		type: 'html',
		default: __( 'Required Tools:', 'ultimate-addons-for-gutenberg' ),
	},
	materialTitle: {
		type: 'html',
		default: __( 'Things Needed?', 'ultimate-addons-for-gutenberg' ),
	},
	stepsTitle: {
		type: 'html',
		default: __( 'Steps to configure the How-to Schema:', 'ultimate-addons-for-gutenberg' ),
	},
	tools_count: {
		type: 'number',
		default: 1,
	},
	material_count: {
		type: 'number',
		default: 1,
	},
	tools: {
		type: 'array',
		default: tools,
	},
	materials: {
		type: 'array',
		default: materials,
	},
	showTotaltime: {
		type: 'boolean',
		default: true,
	},
	showEstcost: {
		type: 'boolean',
		default: true,
	},
	showTools: {
		type: 'boolean',
		default: true,
	},
	showMaterials: {
		type: 'boolean',
		default: true,
	},
	mainimage: {
		type: 'object',
		default: {
			url: '',
			title: '',
		},
	},
	estCost: {
		type: 'html',
		default: __( 'Total Cost:', 'ultimate-addons-for-gutenberg' ),
	},
	timeNeeded: {
		type: 'html',
		default: __( 'Total Time Needed :', 'ultimate-addons-for-gutenberg' ),
	},
	timeIn: {
		type: 'html',
		default: __( ' Minutes', 'ultimate-addons-for-gutenberg' ),
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	timeSpace: {
		type: 'number',
		default: 5,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin',
		},
	},
	costSpace: {
		type: 'number',
		default: 5,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	time: {
		type: 'string',
		default: '30',
	},
	cost: {
		type: 'string',
		default: '65',
	},
	headingTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: __( 'How To Configure How-To Schema In Spectra?', 'ultimate-addons-for-gutenberg' ),
	},
	currencyType: {
		type: 'html',
		default: ' USD',
	},
	headingDesc: {
		source: 'html',
		selector: 'p',
		default: __(
			'So to get started, you will just need to drag-n-drop the How-to Schema block in the Gutenberg editor. The How-to Schema block can be used on pages that contain a How-to in their title and describe steps to achieve certain requirements.',
			'ultimate-addons-for-gutenberg'
		),
	},
	headingAlign: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	descriptionAlign: {
		type: 'string',
		default: 'left',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-align',
		},
	},
	headingColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	showEstcostcolor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
	},
	showTotaltimecolor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-color',
		},
		default: '',
	},
	subHeadingColor: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
		default: '',
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headSpace: {
		type: 'number',
		default: 15,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	headFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	headFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	headTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	headDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	headFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
	},
	headLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
		default: 'em',
	},
	headFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	headFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	headFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	headLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	headLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	subHeadFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	subHeadFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	subHeadFontStyle: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
		default: 'normal',
	},
	subHeadTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	subHeadDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	subHeadFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	subHeadFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	subHeadLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	separatorSpace: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
		default: 15,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
		default: false,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
		default: false,
	},
	priceFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type',
		},
		default: 'px',
	},
	priceFontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size',
		},
	},
	priceFontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet',
		},
	},
	priceFontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile',
		},
	},
	priceFontFamily: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-family',
		},
		default: 'Default',
	},
	priceFontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-weight',
		},
	},
	priceFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-font-style',
		},
	},
	priceTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-transform',
		},
	},
	priceDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-decoration',
		},
	},
	priceLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type',
		},
		default: 'em',
	},
	priceLineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height',
		},
	},
	priceLineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet',
		},
	},
	priceLineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile',
		},
	},
	priceLoadGoogleFonts: {
		type: 'boolean',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts',
		},
		default: false,
	},
	row_gap: {
		type: 'number',
		default: 20,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	rowGapTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	rowGapMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	step_gap: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	schema: {
		type: 'html',
		default: '',
	},
	timeInMins: {
		type: 'number',
	},
	timeInHours: {
		type: 'number',
	},
	timeInDays: {
		type: 'number',
	},
	timeInMonths: {
		type: 'number',
	},
	timeInYears: {
		type: 'number',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	// letter spacing
	headLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	headLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	headLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	priceLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	priceLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	priceLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	priceLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	subHeadLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	subHeadLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	subHeadLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	subHeadLetterSpacingType: {
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
