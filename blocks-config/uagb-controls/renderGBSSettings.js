import GlobalBlockStyles from '@Components/global-block-link';

const renderGBSSettings = ( styling, setAttributes, attributes ) => {

	const isPro = uagb_blocks_info.spectra_pro_status;

    if ( ! isPro ) {
        return '';
    }

    return (
        <GlobalBlockStyles
            { ...{ setAttributes, styling, attributes  } }
        />
    )
};

export default renderGBSSettings;