import GlobalBlockStyles from '@Components/global-block-link';

const renderGBSSettings = (styling, setAttributes) => {

	const isPro = uagb_blocks_info.spectra_pro_status;

    if ( ! isPro ) {
        return '';
    }

    return (
        // <GlobalBlockStyles
        //     { ...{ setAttributes, styling  } }
        // />
        <GlobalBlockStyles
            setAttributes = {setAttributes}
            styling = {styling}
        />
    )
};

export default renderGBSSettings;