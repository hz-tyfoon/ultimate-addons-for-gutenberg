import { useState } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { Switch } from '@headlessui/react';
import { ExternalLinkIcon } from '@Scripts/IconComponents';
import { zipAiClassNames, formatNumber } from '@Scripts/Helpers';
import ConfirmationPopup from '@DashboardApp/common/components/ConfirmationPopup';

const Welcome = () => {

	// Get the enable status of Zip Chat, and set a state for the popup.
	const [ isZipChatEnabled, setIsZipChatEnabled ] = useState( zip_ai_react?.is_zip_chat_enabled ? 'enabled' : 'disabled' );
	const [ showPopup, setShowPopup ] = useState( false );

	// Set the credit details.
	const creditDetails = zip_ai_react.zip_ai_credit_details;

	// Set the credit level to low, and then compare the credit percentage with the credit threshold medium and high values using a switch case.
	let creditClass = 'bg-green-500';
	switch ( true ) {
		case creditDetails?.percentage >= creditDetails.threshold.high:
			creditClass = 'bg-red-500';
			break;
		case creditDetails?.percentage >= creditDetails.threshold.medium:
			creditClass = 'bg-amber-500';
			break;
	}

	// Update the Zip Chat value in the Zip AI Options.
	const updateZipChatEnabledStatus = () => {
		const invertedZipChatStatus = 'enabled' === isZipChatEnabled ? 'disabled' : 'enabled';
		setIsZipChatEnabled( invertedZipChatStatus );
		const settingsData = new FormData();
		settingsData.append( 'action', 'zip_ai_admin_settings_ajax' );
		settingsData.append( 'nonce', zip_ai_react.zip_ai_admin_nonce );
		settingsData.append( 'enable_zip_chat', invertedZipChatStatus );
		fetch( zip_ai_react.ajax_url, {
			method: 'POST',
			credentials: 'same-origin',
			body: settingsData,
		} )
		.then( ( resp ) => resp.json() )
		.then( ( data ) => {
			if ( ! data.success ) {
				throw new Error();
			}
		} )
		.catch( () => {
			setIsZipChatEnabled( isZipChatEnabled );
		} );
	};		

	// Render the welcome card.
	const renderWelcomeCard = () => (
		<section className='rounded-lg bg-white p-12 pt-8 gap-3 overflow-hidden shadow-sm flex flex-col justify-between h-full'>
			<div className='flex flex-col gap-3'>
				<h2 className='text-slate-800 text-2xl font-medium text-left'>
					{ __( 'Welcome to Zip AI!', 'ultimate-addons-for-gutenberg' ) }
				</h2>
				<p className='text-slate-500 text-sm pb-3'>
					{ __( 'Zip AI is your WordPress assistant, accessible right within your backend. Create persuasive content, generate custom code, and get answers to your WordPress queries in seconds. The possibilities are endless!', 'ultimate-addons-for-gutenberg' ) }
				</p>
			</div>
			{/* The botton padding for this iFrame wrapper is at a 16:9 ratio */}
			<div className='relative pb-[56.25%] h-0 w-full'>
				<iframe
					className='absolute top-0 left-0 w-full h-full rounded'
					src={ `https://www.youtube-nocookie.com/embed/GLNzTxArR6Y?showinfo=0&autoplay=0&mute=0&rel=0` }
					allow='autoplay'
					title='YouTube video player'
					frameBorder='0'
					allowFullScreen
				/>
			</div>
		</section>
	);

	// Render the credits card.
	const renderCreditsCard = () => (
		<section className='box-border flex-1 flex flex-col gap-4 p-6 rounded-lg bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
			<div className='flex gap-2 pb-4 items-start justify-between w-full'>
				<h3 className='text-sm font-semibold text-slate-500'>
					{ __( 'Words Written', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<a
					className='flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-violet-50 text-slate-500'
					href={ zip_ai_react?.zip_ai_credit_topup_url }
					target='_blank'
					rel='noreferrer noopener'
				>
					{ __( 'Get more Credits', 'ultimate-addons-for-gutenberg' ) }
					{ ExternalLinkIcon( {
						width: 12,
						height: 12,
					} ) }
				</a>
			</div>
			<div className='flex gap-2 items-center justify-between w-full'>
				<div className='flex items-end gap-1'>
					<span className='text-2xl leading-7 font-semibold text-slate-800'>
						{ formatNumber( creditDetails.used ) }
					</span>
					<span className='text-sm font-semibold text-slate-500'>
						{ sprintf(
							/* translators: %s: number of words */
							__( 'of %s', 'ultimate-addons-for-gutenberg' ),
							formatNumber( creditDetails.total )
						) }
					</span>
				</div>
			</div>
			<div className='zip-ai__data-bar bg-slate-200'>
				<div
					className={ zipAiClassNames( [
						'zip-ai__data-bar--progress',
						creditClass,
					] ) }
					style={ {
						width: `${ creditDetails.percentage }%`,
					} }
				/>
			</div>
		</section>
	);

	// Render the knowledge base card.
	const renderEnableCard = () => (
		<section className='box-border rounded-lg flex flex-col gap-4 p-6 bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
			<div className='flex w-full items-center justify-between'>
				<h3 className='text-slate-800 text-xl font-medium'>
					{ __(
						'Enable Zip AI',
						'ultimate-addons-for-gutenberg'
					) }
				</h3>
				<Switch
					checked={ 'enabled' === isZipChatEnabled }
					onChange={ updateZipChatEnabledStatus }
					className={ zipAiClassNames( [
						'enabled' === isZipChatEnabled ? 'bg-spec' : 'bg-slate-200',
						'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
					] ) }
					>
					<span
						aria-hidden="true"
						className={ zipAiClassNames( [
							'enabled' === isZipChatEnabled ? 'translate-x-5' : 'translate-x-0',
							'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
						] ) }
					/>
				</Switch>
			</div>
			<p className='text-slate-500 text-sm'>
				{ __(
					'You can easily enable or disable Zip AI from this section. Simply toggle the switch on or off with a single click.',
					'ultimate-addons-for-gutenberg'
				) }
			</p>
		</section>
	);

	// Render the community card.
	const renderRevokeCard = () => {

		// Function to revoke access.
		const revokeAccess = () => {
			setShowPopup( true );
		};

		return (
			<section className='box-border rounded-lg flex flex-col items-start gap-4 p-6 bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
				<h3 className='text-slate-800 text-xl font-medium'>
					{ __(
						'Zip is Authorized',
						'ultimate-addons-for-gutenberg'
					) }
					<Dashicon icon='yes' className='text-2xl leading-7 text-green-500'/>
				</h3>
				<p className='text-slate-500 text-sm'>
					{ __(
						'Your website is connected with Zip AI. You can revoke this connection at any time from here.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<button
					className='mt-2 w-auto text-base text-spec focus:text-spec focus-visible:text-spec-hover active:text-spec-hover hover:text-spec-hover border border-spec rounded-md px-4 py-2 transition duration-150 ease-in-out'
					onClick={ revokeAccess }
					target='_blank'
					rel='noreferrer'
				>
					{ __(
						'Revoke Access',
						'ultimate-addons-for-gutenberg'
					) }
				</button>
			</section>
		);
	};

	// Return the Welcome Page.
	return (
		<>
			<main className='py-10'>
				<div className='max-w-3xl mx-auto px-6 lg:max-w-7xl'>
					<div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-5 xl:gap-10'>
						{/* Left column */}
						<div className='grid grid-cols-1 gap-4 lg:col-span-2 h-full'>
							{ renderWelcomeCard() }
						</div>
						{/* Right column */}
						<div className='space-y-4 flex h-full flex-col justify-start lg:space-y-5 xl:space-y-10'>
							{ renderCreditsCard() }
							{ renderEnableCard() }
							{ renderRevokeCard() }
						</div>
					</div>
				</div>
			</main>
			{/* The Revoke Access Confirmation Popup */}
			<ConfirmationPopup { ...{
				showPopup,
				setShowPopup,
				popupContent: {
					title: __( 'Revoke Access', 'ultimate-addons-for-gutenberg' ),
					description: `${
						__( 'Are you sure you wish to revoke the authorization token?', 'ultimate-addons-for-gutenberg' )
					}\n${
						__( 'You will need to re-authorize Zip to use it again.', 'ultimate-addons-for-gutenberg' )
					}`,
				},
				popupAccept: {
					label: __( 'Revoke', 'ultimate-addons-for-gutenberg' ),
					callback: () => {
						localStorage.removeItem( 'zipAiAuthorizationStatus' );
						window.location.assign( `${ zip_ai_react.admin_url }?revoke_zip_ai_authorization_token=definitely&nonce=${ zip_ai_react.zip_ai_auth_nonce }` );
					},
				},
				popupCancel: {
					label: __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
					callback: () => {
						setShowPopup( false );
					}
				},
			} } />
		</>
	);
};

export default Welcome;
