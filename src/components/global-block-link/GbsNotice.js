import { __ } from '@wordpress/i18n';

const AddSliderChildControls = ( { globalBlockStyleId, globalBlockStyleName } ) => {
    if ( globalBlockStyleId && globalBlockStyleName ) {
        return (
            <div className="spectra-gbs-notice">
                <span className="spectra-gbs-notice-text">
                    {__( 'Global block style added', 'ultimate-addons-for-gutenberg' )}
                </span>
            </div>
        )
    }
    return null;
};

export default AddSliderChildControls;