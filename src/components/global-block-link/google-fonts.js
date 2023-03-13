import WebfontLoader from '@Components/typography/fontloader';
import { STORE_NAME as storeName } from '@Store/constants';
import { useSelect, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const SpectraLoadGlobaGoogleFonts = (props) => {

    const {
        globalBlockStylesFontFamilies
    } = props;
    
    const renderFonts = globalBlockStylesFontFamilies.map( ( family ) => {
        const hconfig = {
            google: {
                families: [
                    family,
                ],
            },
        };
    
        return (
            <WebfontLoader key={family} config={ hconfig }></WebfontLoader>
        );
    } );



	return (
        <div className='spectra-gbs-fonts'>
        {renderFonts}
        </div>
    );
};

export default compose(
	withSelect( ( spectraGbsSelect ) => {

		const globalBlockStylesFontFamilies = spectraGbsSelect( storeName ).getGlobalBlockStylesFontFamilies();
        
		return {
            globalBlockStylesFontFamilies
		};	
	} )
)( SpectraLoadGlobaGoogleFonts );