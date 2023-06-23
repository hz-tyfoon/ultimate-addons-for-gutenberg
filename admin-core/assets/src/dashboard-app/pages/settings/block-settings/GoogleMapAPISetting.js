import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';

export default function GoogleMapAPISetting() {
	const dispatch = useDispatch();
	const googleAPIKey = useSelector( ( state ) => state.googleAPIKey );
	const updateGoogleAPIKey = ( e ) => {
		const value = e.target.value;

		dispatch( { type: 'UPDATE_GOOGLE_API_KEY', payload: value } );
		const formData = new window.FormData();

		formData.append( 'action', `uag_google_api_key` );
		formData.append( 'security', uag_react.google_api_key_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
				<div className="mr-16 w-full">
					<h3 className="p-0 mb-2 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{__( 'Google Map API Key', 'ultimate-addons-for-gutenberg' )}
					</h3>
					<div className="w-9/12">
						<p className="mt-2 w-9/12 text-sm text-slate-500">{__( 'Note: This setting is required if you wish to use Google Map in your website. Need help to get Google map API key? ', 'ultimate-addons-for-gutenberg' )}
							<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noreferrer">
								{__( 'Read more. ', 'ultimate-addons-for-gutenberg' )}
							</a>
						</p>
						<div className="mt-4 flex w-full">
							<div className="mr-5 h-10 relative flex-1">
								<input
									className={`w-full h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field }`}
									type="text"
									value={googleAPIKey}
									onChange={updateGoogleAPIKey}
									placeholder={__( 'Google API Key', 'ultimate-addons-for-gutenberg' )}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
