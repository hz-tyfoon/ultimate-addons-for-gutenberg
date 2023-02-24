import WebfontLoader from '@Components/typography/fontloader';
import { STORE_NAME as storeName } from '@Store/constants';
import { useSelect } from '@wordpress/data';

const SpectraLoadGlobaGoogleFonts = () => {

    const globalBlockStylesFontFamilies = useSelect( ( spectraStoreSelect ) => {
        return spectraStoreSelect( storeName ).getGlobalBlockStylesFontFamilies();
    } );

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

export default SpectraLoadGlobaGoogleFonts;