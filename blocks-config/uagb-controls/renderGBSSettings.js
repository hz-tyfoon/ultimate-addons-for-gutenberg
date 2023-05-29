import GlobalBlockStyles from '@Components/global-block-link';

const renderGBSSettings = ( styling, setAttributes, attributes ) => {

    if ( ! uagb_blocks_info?.spectra_pro_status ) {
        return '';
    }

    return (
        <GlobalBlockStyles
            { ...{ setAttributes, styling, attributes  } }
        />
    )
};

export default renderGBSSettings;