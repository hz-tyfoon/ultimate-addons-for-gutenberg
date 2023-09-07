import { __ } from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import UAGTextControl from '@Components/text-control';
import { useState } from '@wordpress/element';

const AddNewPopupStyle = ( props ) => {
    const {
        closeModal,
        setAttributes,
        globalBlockStyles,
        updateGlobalBlockStyles,
        setGenerate,
        uniqueID,
        setUniqueID,
        openModal,
        attributes : { globalBlockStyleId },
        isOpen
    } = props;

    const [ tempStyleName, setTempStyleName ] = useState( '' );
    const [ labelError, setLabelError ] = useState( null );

    const setLabelNull = () => setLabelError( null );

    const AddNewButton = ! globalBlockStyleId ? (
        <div className='gbs-update-save-add-btn'>
            <Button
                className="spectra-gbs-button components-base-control"
                onClick={ () => {
                    openModal();
                    setUniqueID( new Date().getTime().toString() );
                } }
                variant="secondary"
            >
                { __( 'Add New', 'ultimate-addons-for-gutenberg' ) }
            </Button>
        </div>
    ) : null;


    return <>
        { AddNewButton }
        { 'open' === isOpen && 
        <Modal
            onRequestClose={() => {
                closeModal();
                setTempStyleName( '' );
                setLabelNull();
            }}
            className="spectra-global-block-style-name-modal"
        >
            <div className='gbs-add-new-style-head'>
                <div>
                    <h3>{__( 'Save as Global Block Style', 'ultimate-addons-for-gutenberg' )}</h3>
                    <p> {__( 'Use the saved style anywhere on the website', 'ultimate-addons-for-gutenberg' )}</p>
                </div>
                <svg
                    className='popup-close-btn'
                    onClick={ closeModal }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    aria-hidden="true"
                    focusable="false">
                    <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
                </svg>
            </div>

            <div 
                className={`input-wrap ${ labelError ? 'gbs-error' : '' }`}
            >
                <UAGTextControl
                    placeholder={__(
                        'Name',
                        'ultimate-addons-for-gutenberg'
                    )}
                    value={tempStyleName}
                    onChange={( value ) => {
                        setTempStyleName( value?.toString() );
                    }}
                    label={__( 'Style Name', 'ultimate-addons-for-gutenberg' )}
                    showHeaderControls={false}
                />
                { labelError && <p className='gbs-error-msg'>{ labelError }</p> }
            </div>
            <div className='button-wrap'>
                <Button onClick={ closeModal } variant="secondary">
                    {__( 'Cancel', 'ultimate-addons-for-gutenberg' )}
                </Button>
                <Button
                    onClick={() => {
                        // Checking if the style name is empty.
                        if ( ! tempStyleName || '' === tempStyleName ) {
                            setLabelError( __( 'Please enter a style name', 'ultimate-addons-for-gutenberg' ) );
                            return;
                        }

                        // check label should be more then 3 characters and less then 50 characters.
                        if ( tempStyleName.length < 3 || tempStyleName.length > 50 ) {
                            setLabelError( __( 'Style name should be more then 3 characters and less then 50 characters', 'ultimate-addons-for-gutenberg' ) );
                            return;
                        }                        

                        // Checking if the style name already exists.
                        if ( globalBlockStyles.find( ( style ) => style.label === tempStyleName ) ) {
                            setLabelError( __( 'Style name already exists', 'ultimate-addons-for-gutenberg' ) );
                            return;
                        }

                        // Check label should not contain special characters.
                        const hasSpecialCharacter = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
                        if ( hasSpecialCharacter.test( tempStyleName ) ) {
                            setLabelError( __( 'Style name should not contain special characters', 'ultimate-addons-for-gutenberg' ) );
                            return;
                        }

                        setGenerate( true );

                        const styleNameClass = tempStyleName?.replace( /\s+/g, '-' )?.toLowerCase() + uniqueID;

                        setAttributes( {  globalBlockStyleName: tempStyleName, globalBlockStyleId: styleNameClass } );

                        const spectraGlobalStyles = [
                            ...globalBlockStyles,
                            {
                                value: styleNameClass,
                                label: tempStyleName,
                            }
                        ];
                        
                        closeModal();
                        setTempStyleName( '' );
                        updateGlobalBlockStyles( spectraGlobalStyles );
                        setLabelNull();
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