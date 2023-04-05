import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const FontLoader = ( { headLoadGoogleFonts, headFontFamily, headFontWeight, subHeadLoadGoogleFonts, subHeadFontFamily, subHeadFontWeight } ) => {

	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					headFontFamily +
						( headFontWeight ? ':' + headFontWeight : '' ),
				],
			},
		};

		loadHeadingGoogleFonts = (
			<WebfontLoader config={hconfig}></WebfontLoader>
		);
	}
	if ( subHeadLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [
					subHeadFontFamily +
						( subHeadFontWeight ? ':' + subHeadFontWeight : '' ),
				],
			},
		};

		loadSubHeadingGoogleFonts = (
			<WebfontLoader config={sconfig}></WebfontLoader>
		);
	}
	return (
		<>
			{loadHeadingGoogleFonts}
			{loadSubHeadingGoogleFonts}
		</>
	);
};

export default memo( FontLoader );
