/**
 * Zip Chat - Component - The Authentication Window.
 */

import { useState } from '@wordpress/element';
import { ZipWPLogo } from '@Scripts/IconComponents';
import { __ } from '@wordpress/i18n';

const AuthWindow = ( props ) => {
	const {
		setIsAuthorized,
	} = props;

	// States required for the UI.
	const [ buttonLabel, setButtonLabel ] = useState( __( 'Authorize Zip', 'ultimate-addons-for-gutenberg' ) );
	const [ subHeading, setSubHeading ] = useState(  __( 'To assist you, I need your authorization.', 'ultimate-addons-for-gutenberg' ) );

	// The URL to authorize Zip AI.
	const zipAiAuthURL = `${ zip_ai_react.zip_ai_auth_middleware }?redirect_url=${ zip_ai_react.admin_php_url }?nonce=${ zip_ai_react.zip_ai_auth_nonce }&scs-authorize=true`;

	// Function to authorize Zip AI.
	const authorizeZipAi = ( event ) => {
		event.preventDefault();

		// Get he event target and disable it.
		const authButton = event.target;
		authButton.disabled = true;

		const positioning = {
			left: ( screen.width - 480 ) / 2,
			top: ( screen.height - 720 ) / 2,
		};

		// Redirect to the Zip AI Authorization URL.
		const authWindow = window.open( zipAiAuthURL, 'ZipAiAuthorization', `width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0` );

		// Create the formData for the AJAX request, with the typed in value as the search query.
		const zipAiAuthLooper = new FormData();
		zipAiAuthLooper.append( 'action', 'verify_zip_ai_authenticity' );
		zipAiAuthLooper.append( 'nonce', zip_ai_react.ajax_nonce );

		// Set a counter for timeout.
		let iterations = 0;

		// Update the texts.
		setButtonLabel( __( 'Authorizing…', 'ultimate-addons-for-gutenberg' ) );
		setSubHeading( __( 'Please wait while I try to get your token…', 'ultimate-addons-for-gutenberg' ) );

		// Set an interval to check if the option was updated.
		const authVerificationInterval = setInterval( () => {
			// Clear the interval if the window was closed, or automatically after 5 minutes.
			if ( authWindow.closed || 300 === iterations ) {
				// Close the auth window if it wasn't closed.
				if ( ! authWindow.closed ) {
					authWindow.close();
				}
				// Reset the texts and enable the button.
				clearInterval( authVerificationInterval );
				setButtonLabel( __( 'Authorize Zip', 'ultimate-addons-for-gutenberg' ) );
				setSubHeading( __( 'I was unable to fetch your token, please try again.', 'ultimate-addons-for-gutenberg' ) );
				authButton.disabled = false;
			}

			// Make the AJAX request to check if the option was updated.
			fetch( zip_ai_react.ajax_url, {
				method: 'POST',
				credentials: 'same-origin',
				body: zipAiAuthLooper,
			} )
			.then( ( resp ) => resp.json() )
			.then( ( data ) => {
				if ( data?.success && data?.data?.is_authorized ) {
					authWindow.close();
					localStorage.setItem( 'zipAiAuthorizationStatus', true );
					setIsAuthorized( true );
					setButtonLabel( __( 'Authorized!', 'ultimate-addons-for-gutenberg' ) );
					setSubHeading( __( 'Thank you, I am now at your service.', 'ultimate-addons-for-gutenberg' ) );
					authButton.disabled = false;
					clearInterval( authVerificationInterval );
				}
			} );
			iterations++;
		}, 500 );
	};

	return (
		<div className='spectra-open-ai-modal__chat-window'>
			<div className='spectra-open-ai-modal__chat-window--placeholder'>
				{ ZipWPLogo( {
					width: 48,
					height: 48,
					color: '#ff580e',
				} ) }
				<h3 className='spectra-open-ai-modal__chat-window--placeholder-heading'>
					{ __( 'Hi, I\'m Zip - Your AI Assistant', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<h4 className='spectra-open-ai-modal__chat-window--placeholder-subheading'>
					{ subHeading }
				</h4>
				<button
					className='spectra-open-ai-modal__input-prompt--button'
					onClick={ authorizeZipAi }
				>
					{ buttonLabel }
				</button>
			</div>
		</div>
	);
}

export default AuthWindow;
