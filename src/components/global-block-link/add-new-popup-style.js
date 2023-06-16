import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';

const AddNewPopupStyle = ( props ) => {
    const {
        closeModal,
        setAttributes,
        globalBlockStyles,
        updateGlobalBlockStyles,
        setGenerate,
        setTempStyleName,
        tempStyleName,
        uniqueID,
        setUniqueID,
        openModal,
        attributes : { globalBlockStyleId },
        isOpen
    } = props;

    const AddNewButton = ! globalBlockStyleId ? (
        <Button
            className="spectra-gbs-button components-base-control"
            onClick={ () => {
                openModal();
                setUniqueID( new Date().getTime().toString() );
            } }
            variant="primary"
        >
            { __( 'Add New', 'ultimate-addons-for-gutenberg' ) }
        </Button>
    ) : null;


    return <>
        { AddNewButton }
        { 'open' === isOpen && <Modal
            title={__( 'Save as a Global Block Style', 'ultimate-addons-for-gutenberg' )} onRequestClose={closeModal}
            className="spectra-global-block-style-name-modal"
        >
            <p> {__( 'Enter a word or two to make a unique global block style & you\'ll be able to add this global style to multiple areas on your site.', 'ultimate-addons-for-gutenberg' )}</p>
            <div className="button-input-wrap">
                <UAGTextControl
                    placeholder={__(
                        'Style Name',
                        'ultimate-addons-for-gutenberg'
                    )}
                    value={tempStyleName}
                    onChange={( value ) => {
                        setTempStyleName( value?.toString() );
                    }}
                    showHeaderControls={false}
                />
                <Button
                    onClick={() => {

                        if ( ! tempStyleName || '' === tempStyleName ) {
                            // eslint-disable-next-line no-alert, no-undef
                            alert( __( 'Please enter a style name', 'ultimate-addons-for-gutenberg' ) );
                            return;
                        }

                        setGenerate( true );

                        setAttributes( {  globalBlockStyleName: tempStyleName, globalBlockStyleId: uniqueID } );

                        const spectraGlobalStyles = [
                            ...globalBlockStyles,
                            {
                                value: uniqueID,
                                label: tempStyleName,
                            }
                        ];
                        
                        closeModal();
                        updateGlobalBlockStyles( spectraGlobalStyles );
                    }}
                    variant="primary"
                >
                    {__( 'Save', 'ultimate-addons-for-gutenberg' )}
                </Button>
            </div>
        </Modal>}
    </>
}
export default AddNewPopupStyle;