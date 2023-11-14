import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import getApiData from '@Controls/getApiData';
import { uagbClassNames } from '@Helpers/Helpers';

const ZipAISettings = () => {

	// Get the current Zip AI status.
    const dispatch = useDispatch();
    const currentZipAiStatus = useSelector( ( state ) => state.zipAiStatus );
    const zipAiStatus = 'enabled' === currentZipAiStatus;

	// Update the Zip AI status.
    const updateZipAiStatus = () => {

		// Toggle the status.
        const status = currentZipAiStatus === 'disabled' ? 'enabled' : 'disabled';

		// Update the status in the store.
        dispatch( { type: 'UPDATE_ZIP_AI_STATUS', payload: status } );
        
		// Create an object with the security and value properties
        const data = {
            security: uag_react.zip_ai_status_nonce,
            value: status,
        };

		// Send the data to the server.
        const getApiDataFetch = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_zip_ai_status',
            data,
        } );

		// Update the notification.
		getApiDataFetch.then( ( response ) => {
			if ( response?.success ) {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: response?.data?.messsage || __( 'Successfully saved!' , 'ultimate-addons-for-gutenberg' ) } );
			} else {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to save setting', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
			}
		} );

    };

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">  
				<div className="mr-16 w-full flex items-center">
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Enable Zip AI', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<Switch
						checked={ zipAiStatus }
						onChange={ updateZipAiStatus }
						className={ uagbClassNames( [
							zipAiStatus ? 'bg-spectra' : 'bg-slate-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
						] ) }
					>
						<span
							aria-hidden="true"
							className={ uagbClassNames( [
								zipAiStatus ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							] ) }
						/>
					</Switch>
				</div>
				<div className="mr-16 mt-2 w-full flex items-start">
					<div className="w-9/12">
						<p className="text-sm text-slate-500">
							{ __( 'Load the Zip AI Library, with features like Zip AI Assistant, into Spectra.', 'ultimate-addons-for-gutenberg' ) }
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default ZipAISettings;
