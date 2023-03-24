import { getBorderAttributes } from '@Controls/generateAttributes';

const inputBorderAttributes = getBorderAttributes( 'container' )

const attributes = {
	block_id: {
		type: 'string',
	},
	// Container wrapper tag name and link are not required in PHP as it is only used in render and save.
	htmlTag: {
		type: 'string',
		default: 'div',
	},
	htmlTagLink: {
		type: 'object',
	},
	contentWidth: {
		type: 'string',
		default: 'alignfull',
		UAGCopyPaste: {
			styleType: 'content-width'
		}
	},
	innerContentWidth: {
		type: 'string',
		default: 'alignwide',
		UAGCopyPaste: {
			styleType: 'inner-content-width'
		}
	},
	widthDesktop: {
		type: 'number',
		default: 100,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-width-desktop'
		}
	},
	widthTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-width-tablet'
		}
	},
	widthMobile: {
		type: 'number',
		default: 100,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-width-mobile'
		}
	},
	widthType: {
		type: 'string',
		default: '%',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-width-type'
		}
	},
	innerContentCustomWidthDesktop: {
		type: 'number',
		default: uagb_blocks_info.content_width,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'inner-container-custom-width-desktop'
		},
	},
	innerContentCustomWidthTablet: {
		type: 'number',
		default: 1024,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'inner-container-custom-width-tablet'
		},
	},
	innerContentCustomWidthMobile: {
		type: 'number',
		default: 767,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'inner-container-custom-width-mobile'
		},
	},
	innerContentCustomWidthType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'inner-container-custom-width-type'
		},
	},
	minHeightDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-min-height-desktop'
		},
	},
	minHeightTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-min-height-tablet'
		},

	},
	minHeightMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-min-height-mobile'
		},

	},
	minHeightType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-min-height-type'
		},
	},
	directionDesktop: {
		type: 'string',
		default: 'column',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-direction-desktop'
		},
	},
	directionTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-direction-tablet'
		},
	},
	directionMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-direction-mobile'
		},
	},
	alignItemsDesktop: {
		type: 'string',
		default: 'center',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-align-items-desktop'
		},
	},
	alignItemsTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-align-items-tablet'
		},
	},
	alignItemsMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-align-items-mobile'
		},
	},
	justifyContentDesktop: {
		type: 'string',
		default: 'center',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-justify-content-desktop'
		},
	},
	justifyContentTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-justify-content-tablet'
		},
	},
	justifyContentMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-justify-content-mobile'
		},
	},
	wrapDesktop: {
		type: 'string',
		default: 'nowrap',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-wrap-desktop'
		},
	},
	wrapTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-wrap-tablet'
		},
	},
	wrapMobile: {
		type: 'string',
		default: 'wrap',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-wrap-mobile'
		},
	},
	alignContentDesktop: {
		type: 'string',
		default: '',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-align-content-desktop'
		},
	},
	alignContentTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-align-content-tablet'
		},
	},
	alignContentMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-align-content-mobile'
		},
	},

	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-bg-type'
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-image-desktop'
		},
	},
	backgroundImageTablet: {
		type: 'object',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-image-tablet'
		},
	},
	backgroundImageMobile: {
		type: 'object',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-image-mobile'
		},
	},
	backgroundPositionDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-position-desktop'
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-position-tablet'
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-position-mobile'
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-size-desktop'
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-size-tablet'
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-size-mobile'
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-desktop'
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-tablet'
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-mobile'
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-desktop'
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-tablet'
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-mobile'
		},
	},
	backgroundColor: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-color'
		},
	},
	backgroundOpacity: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-opacity'
		},
	},
	backgroundImageColor: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-image-color'
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value'
		},
	},

	borderStyle: {
		type: 'string',
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
	borderHoverColor: {
		type: 'string',
	},
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position'
		},
	},

	boxShadowColorHover: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position-hover'
		},
	},

	topPaddingDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	bottomPaddingDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	leftPaddingDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-left-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	rightPaddingDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-right-padding-desktop'
		},
		default: uagb_blocks_info.container_global_padding
	},
	topPaddingTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	bottomPaddingTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	leftPaddingTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-left-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	rightPaddingTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-right-padding-tablet'
		},
		default: uagb_blocks_info.container_global_padding
	},
	topPaddingMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	bottomPaddingMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	leftPaddingMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-left-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	rightPaddingMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-right-padding-mobile'
		},
		default: uagb_blocks_info.container_global_padding
	},
	paddingType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-padding-type'
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-padding-type-tablet'
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-padding-type-mobile'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},

	topMarginDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-margin-desktop'
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-desktop'
		},
	},
	leftMarginDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-left-margin-desktop'
		},
	},
	rightMarginDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-right-margin-desktop'
		},
	},
	topMarginTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-right-margin-tablet'
		},
	},
	topMarginMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-right-margin-mobile'
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-margin-type'
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-margin-type-tablet'
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-margin-type-mobile'
		},
	},
	marginLink: {
		type: 'boolean',
		default: true,
	},
	variationSelected: {
		type: 'boolean',
		default: false,
	},
	rowGapDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-row-gap-desktop'
		},
		default: uagb_blocks_info.container_elements_gap
	},
	rowGapTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-row-gap-tablet'
		},
	},
	rowGapMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-row-gap-mobile'
		},
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-row-gap-type'
		},
	},
	rowGapTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-row-gap-type-tablet'
		},
	},
	rowGapTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-row-gap-type-mobile'
		},
	},
	columnGapDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-column-gap-desktop'
		},
		default: uagb_blocks_info.container_elements_gap
	},
	columnGapTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-column-gap-tablet'
		},
	},
	columnGapMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-column-gap-mobile'
		},
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-column-gap-type'
		},
	},
	columnGapTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-column-gap-type-tablet'
		},
	},
	columnGapTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-column-gap-type-mobile'
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
	bottomType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-bottom-type'
		},
	},
	bottomColor: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-color'
		},
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-height'
		},
	},
	bottomHeightTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-height-tablet'
		},
	},
	bottomHeightMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-height-mobile'
		},
	},
	bottomWidth: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-width'
		},
		default: 100,
	},
	topType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-top-type'
		},
	},
	topColor: {
		type: 'string',
		default: '#333',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-color'
		},
	},
	topHeight: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-height'
		},
	},
	topHeightTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-height-tablet'
		},
	},
	topHeightMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-height-mobile'
		},
	},
	topWidth: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'container-top-width'
		},
		default: 100,
	},
	topFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-top-flip'
		},
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-bottom-flip'
		},
	},
	topInvert: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-top-invert'
		},
	},
	bottomInvert: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'container-bottom-invert'
		},
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-top-content-above-shape'
		},
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-bottom-content-above-shape'
		},
	},
	widthSetByUser: {
		type: 'boolean',
		default: false,
	},
	backgroundCustomSizeDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-desktop'
		},
		default: 100,
	},
	backgroundCustomSizeTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-tablet'
		},
	},
	backgroundCustomSizeMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-mobile'
		},
	},
	backgroundCustomSizeType: {
		type: 'string',
		default: '%',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-custom-size-type'
		}
	},
	overlayType:{
		type: 'string',
		default: 'none',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-overlay-type'
		}
	},
	// Background image position.
	customPosition:{
		type: 'string',
		default: 'default',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-position-type'
		}
	},
	xPositionDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-desktop'
		},
		default: ''
	},
	xPositionTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-tablet'
		},
	},
	xPositionMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-mobile'
		},
	},
	xPositionType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-type-desktop'
		},
	},
	xPositionTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-type-tablet'
		},
	},
	xPositionTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-x-position-type-mobile'
		},
	},

	yPositionDesktop: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-desktop'
		},
		default: ''
	},
	yPositionTablet: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-tablet'
		},
	},
	yPositionMobile: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-mobile'
		},
	},
	yPositionType: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-type-desktop'
		},
	},
	yPositionTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-type-tablet'
		},
	},
	yPositionTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'background-image-y-position-type-mobile'
		},
	},

	backgroundVideoColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bg-video-color'
		},
		default: '#FFFFFF75',
	},
	backgroundVideo: {
		type: 'object',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'bg-video'
		},
	},
	backgroundVideoOpacity: {
		type: 'number',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'bg-video-opacity'
		},
		default: 0.5,
	},
	textColor: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
		default: 'inherit',
	},
	linkColor: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	linkHoverColor: {
		type: 'string',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	// responsive code
	innerContentCustomWidthTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'inner-content-custom-width-type-tablet'
		},
	},
	innerContentCustomWidthTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'inner-content-custom-width-type-mobile'
		},
	},

	widthTypeTablet: {
		type: 'string',
		default: '%',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'width-type-tablet'
		},
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'width-type-mobile'
		},
	},
	minHeightTypeTablet: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'min-height-type-tablet'
		},
	},
	minHeightTypeMobile: {
		type: 'string',
		default: 'px',
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'min-height-type-mobile'
		},
	},
	// correct formating
	topHeightType: {
		type: 'string',
		default: 'px',
	},
	topHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	topHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	bottomHeightType: {
		type: 'string',
		default: 'px',
	},
	bottomHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	bottomHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	overflow: {
		type: 'string',
		default: 'visible'
	},
	topDividerWidthType: {
		type: 'string',
		default: '%',
	},
	bottomDividerWidthType: {
		type: 'string',
		default: '%',
	},
	topDividerHeightType: {
		type: 'string',
		default: 'px',
	},
	bottomDividerHeightType: {
		type: 'string',
		default: 'px',
	},
	equalHeight: {
		type: 'boolean',
		default: false,
		isGBSAttribute: true,
		UAGCopyPaste: {
			styleType: 'equal-height'
		},
		
	},
	...inputBorderAttributes
};

export default attributes;
