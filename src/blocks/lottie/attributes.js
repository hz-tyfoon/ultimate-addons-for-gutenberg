const attributes = {
	// eslint-disable-line no-unused-vars
	block_id: {
		type: 'string',
	},
	lottieSource: {
		type: 'string',
		default: 'library',
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	lottieURl: {
		type: 'string',
		default: '',
	},
	jsonLottie: {
		type: 'object',
	},
	// Controls.
	loop: {
		type: 'boolean',
		default: true,
	},
	speed: {
		type: 'number',
		default: 1,
	},
	reverse: {
		type: 'boolean',
		default: false,
	},
	playOnHover: {
		type: 'boolean',
		default: false,
	},
	playOn: {
		type: 'string',
		default: 'none',
	},
	// Style.
	height: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-height',
		},
	},
	heightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-height-tablet',
		},
	},
	heightMob: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-height-mobile',
		},
	},
	width: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-width',
		},
	},
	widthTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-width-tablet',
		},
	},
	widthMob: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-width-mobile',
		},
	},
	backgroundColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-bg-color',
		},
	},
	backgroundHColor: {
		type: 'string',
		default: '',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'lottie-bg-hover-color',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
};
export default attributes;