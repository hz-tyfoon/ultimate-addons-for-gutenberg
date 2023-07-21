/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';

const styling = ( clientId ) => {

	const getAssetURL = imageNumber => `url('https://spectra.test/wp-content/uploads/2023/07/poster${ imageNumber }.jpg')`;

	let selectors = {
		' .spectra-glide__slide--1': {
			background: getAssetURL( 1 ),
		},
		' .spectra-glide__slide--2': {
			background: getAssetURL( 2 ),
		},
		' .spectra-glide__slide--3': {
			background: getAssetURL( 3 ),
		},
		' .spectra-glide__slide--4': {
			background: getAssetURL( 4 ),
		},
		' .spectra-glide__slide--5': {
			background: getAssetURL( 5 ),
		},
		' .spectra-glide__slide--6': {
			background: getAssetURL( 6 ),
		},
		' .spectra-glide__slide--7': {
			background: getAssetURL( 7 ),
		},
	};


	let tabletSelectors = {};

	let mobileSelectors = {};

	const baseSelector = `.editor-styles-wrapper #block-${ clientId }`;

	let stylingCss = generateCSS( selectors, baseSelector );
	stylingCss += generateCSS( tabletSelectors, `${ baseSelector }`, true, 'tablet' );
	stylingCss += generateCSS( mobileSelectors, `${ baseSelector }`, true, 'mobile' );

	return stylingCss;
}

export default styling;
