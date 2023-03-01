const attributes = {
    block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
    content: {
        type: 'string',
    },
    titleription: {
        type: 'string',
    },
    support: {
        type: 'string',
    },
    email: {
        type: 'string',
    },
    price: {
        type: 'string',
    },
    textAlign: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	textAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	textAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	// title font family
    titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'title-load-google-fonts'
		}
	},
    titleFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'title-font-family'
		}
	},
	// title font weight
    titleFontWeight: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'title-font-weight'
		}
	},
	// title font style
    titleFontStyle: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'title-font-style'
		}
	},
	// title font color
    titleFontColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'title-font-color'
		}
	},
	//title font size
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-font-size'
		}
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'title-font-size-type'
		}
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-font-size-tablet'
		}
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-font-size-mobile'
		}
	},
	// title font transform
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'title-transform'
		}
	},
	//title font decoration
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'title-decoration'
		}
	},
	// title line height
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-line-height'
		}
	},
	titleLineHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'title-line-height-type'
		}
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-line-height-tablet'
		}
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-line-height-mobile'
		}
	},
	// title letter spacing
	titleLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing'
		}
	},
	titleLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing-tablet'
		}
	},
	titleLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing-mobile'
		}
	},
	titleLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'title-letter-spacing-type'
		}
	},
};

export default attributes;


