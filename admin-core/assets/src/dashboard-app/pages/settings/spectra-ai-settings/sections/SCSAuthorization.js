import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const SCSAuthorization = () => {
	const [ isWorking, setIsWorking ] = useState( false );
	const isAuthorized = !! uag_react?.spec_auth_token;
	const specAuthURL = `https://store.brainstormforce.com/auth/?redirect_url=${ uag_react.admin_url }?nonce=${ uag_react.spec_auth_nonce }&scs-authorize=true`;
	const specRevokeURL = `${ uag_react.admin_url }?revoke_spec_authorization_token=definitely`;

	// SVG For Right Hand Side Spinner.
	const SvgSpinner = () => (
		<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

	// Function to authorize Spec.
	const authorizeSpec = ( event ) => {
		event.preventDefault();
		setIsWorking( true );
		window.location.assign( specAuthURL );
	};

	// Function to revoke Spec.
	const revokeSpec = ( event ) => {
		event.preventDefault();
		setIsWorking( true );
		window.location.assign( specRevokeURL );
	};

	return (
		<section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>  
			<div className='mr-16 w-full flex items-center'>
				<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
					{ __( 'Spec Authorization', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<div className='flex justify-right items-center'>
					<button
						type="button"
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
						onClick={ isAuthorized ? revokeSpec : authorizeSpec }
					>
						{ isAuthorized ? __( 'Revoke', 'ultimate-addons-for-gutenberg' ) : __( 'Authorize', 'ultimate-addons-for-gutenberg' ) }
						{ isWorking && <SvgSpinner /> }
					</button>
				</div>
			</div>
			<p className="mt-2 w-9/12 text-sm text-slate-500">
				{ isAuthorized
					? __( 'Your copy of Spec is authorized! Click on revoke to remove authorization from this website.', 'ultimate-addons-for-gutenberg' )
					: __( 'To get the full power of Spec, you must authorize your access.', 'ultimate-addons-for-gutenberg' )
				}
			</p>
		</section>
	);
};

export default SCSAuthorization;
