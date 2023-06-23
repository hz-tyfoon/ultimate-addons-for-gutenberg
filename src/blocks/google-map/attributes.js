const attributes = {
	block_id: {
		type: 'string',
	},
	address: {
		type: 'string',
		default: 'Brainstorm Force',
	},
	height: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height',
		},
	},
	heightTablet: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height',
		},
	},
	heightMobile: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height',
		},
	},
	zoom: {
		type: 'number',
		default: 12,
	},
	language: {
		type: 'string',
		default: 'en',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	selectGoogleAPIKey: {
		type: 'string',
		default: 'default',
	},
	latitude: {
		type: 'number',
		default: 18.606449,
	},
	longitude: {
		type: 'number',
		default: 73.724480,
	},
	infoWindow: {
		type: 'string',
		default: 'none',
	},
	title: {
		type: 'string',
		default: 'Brainstorm Force',
	},
	description: {
		type: 'string',
		default: 'Vasant Utsav, Opp. Shell Petrol Pump, Rajiv Gandhi Infotech Park, Hinjewadi Phase 1, Pune, Maharashtra 411057',
	},
};

export default attributes;
