/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from '@Controls/generateCSS';
 import generateCSSUnit from '@Controls/generateCSSUnit';
 import { getFallbackNumber } from '@Controls/getAttributeFallback';

 function styling( props, baseSelector = false ) {

	const blockName = props.name.replace( 'uagb/', '' );
    
    const {
        block_id,
        height,
        heightTablet,
        heightMobile,
    } = props.attributes;

    const heightFallback = getFallbackNumber( height, 'height', blockName );
    const heightTabletFallback = getFallbackNumber( heightTablet, 'heightTablet', blockName );
    const heightMobileFallback = getFallbackNumber( heightMobile, 'heightMobile', blockName );

    let tabletSelectors = {};
	let mobileSelectors = {};

    const selectors = {
        ' .uagb-google-map__iframe': {
            'height': generateCSSUnit( heightFallback, 'px' ),
        },
    };

    tabletSelectors = {
        ' .uagb-google-map__iframe': {
            'height': generateCSSUnit( heightTabletFallback, 'px' ),
        },
    };

    mobileSelectors = {
        ' .uagb-google-map__iframe': {
            'height': generateCSSUnit( heightMobileFallback, 'px' ),
        },
    };

    let base_selector = `.editor-styles-wrapper .uagb-block-${ block_id }`;

    // For Global Styles.
	if ( baseSelector ) {
		base_selector = `.editor-styles-wrapper ${baseSelector}`;
	}
    
	let stylingCss = generateCSS( selectors, base_selector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;

 }

export default styling;
