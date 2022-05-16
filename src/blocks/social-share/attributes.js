/**
 * BLOCK: UAGB Social Share Attributes
 */

const itemCount = 3;

const socials = [];

for ( let i = 1; i <= itemCount; i++ ) {
	socials.push( {
		type: 'facebook',
		image_icon: 'icon',
		icon: 'fab fa-facebook',
		image: '',
		icon_color: '#3a3a3a',
		icon_hover_color: '',
		icon_bg_color: '',
		icon_bg_hover_color: '',
	} );
}

const attributes = {
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	current_url: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		}
	},
	social_count: {
		type: 'number',
		default: itemCount,
	},
	socials: {
		type: 'array',
		default: socials,
	},
	gap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		}
	},
	gapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		}
	},
	gapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		}
	},
	size: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	sizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		}
	},
	sizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		}
	},
	sizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		}
	},
	bgSize: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-bg-size'
		}
	},
	bgSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-unit'
		}
	},
	bgSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-mobile'
		}
	},
	bgSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-tablet'
		}
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		},
		default: 0,
	},
	borderRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		},
	},
	borderRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		},
	},
	social_layout: {
		type: 'string',
		default: 'horizontal',
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	parent_icon_color: {
		type: 'string',
		default: '#3a3a3a',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	parent_icon_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		},
		default: '',
	},
	parent_icon_bg_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color'
		},
		default: '',
	},
	parent_icon_bg_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color'
		},
		default: '',
	},
};

export default attributes;
