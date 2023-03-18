/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

function styling( props, baseSelector = false ) {
	const {
		icon_color,
		icon_hover_color,
		icon_bg_color,
		icon_bg_hover_color,
	} = props.attributes;

	const selectors = {
		'.uagb-ss-repeater a.uagb-ss__link': {
			'color': icon_color,
		},
		'.uagb-ss-repeater a.uagb-ss__link svg': {
			'fill': icon_color,
		},
		'.uagb-ss-repeater:hover a.uagb-ss__link': {
			'color': icon_hover_color,
		},
		'.uagb-ss-repeater:hover a.uagb-ss__link svg': {
			'fill': icon_hover_color,
		},
		'.uagb-ss-repeater.uagb-ss__wrapper': {
			'background': icon_bg_color,
		},
		'.uagb-ss-repeater.uagb-ss__wrapper:hover': {
			'background': icon_bg_hover_color,
		},
	};

	let stylingCss = '';
	let base_selector = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	// For Global Styles.
	if ( baseSelector ) {
		base_selector = `.editor-styles-wrapper ${baseSelector}`;
	}
	
	stylingCss = generateCSS( selectors, base_selector );

	return stylingCss;
}

export default styling;
