import { useState, useEffect } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { Switch } from '@headlessui/react';
import { ExternalLinkIcon } from '@Scripts/IconComponents';
import { specClassNames, formatNumber } from '@Scripts/Helpers';
import ConfirmationPopup from '../../common/components/ConfirmationPopup';

const Welcome = () => {

	// If specAiAuthorizationStatus is not set in the local storage, set it.
	useEffect( () => {
		if ( spec_ai_react?.is_spec_authorized && ! localStorage.getItem( 'specAiAuthorizationStatus' ) ) {
			localStorage.setItem( 'specAiAuthorizationStatus', true );
		}
	}, [] );

	// Get the enable status of Spec AI, and set a state for the popup.
	const [ isSpecEnabled, setIsSpecEnabled ] = useState( spec_ai_react?.is_spec_enabled ? 'yes' : 'no' );
	const [ showPopup, setShowPopup ] = useState( false );

	// Set the credit details.
	const creditDetails = spec_ai_react.spec_credit_details;

	// Render the Spec AI Toggle Section.
	const renderSpecEnabler = () => {
		// Update the Spec AI option.
		const updateSpecEnabledStatus = () => {
			const invertedSpecEnabled = isSpecEnabled === 'yes' ? 'no' : 'yes';
			setIsSpecEnabled( invertedSpecEnabled );
			const settingsData = new FormData();
			settingsData.append( 'action', 'spec_ai_admin_settings_ajax' );
			settingsData.append( 'nonce', spec_ai_react.spec_settings_nonce );
			settingsData.append( 'enable_spec_ai', invertedSpecEnabled );
			fetch( spec_ai_react.ajax_url, {
				method: 'POST',
				credentials: 'same-origin',
				body: settingsData,
			} )
			.then( ( resp ) => resp.json() )
			.then( ( data ) => {
				if ( data.success ) {
					setIsSpecEnabled( data.data?.enabled ? 'yes' : 'no' );
				}
			} )
			.catch( () => {} );
		};

		return (
			<section className='w-full flex gap-8 mt-3 items-center'>
				<div className='flex flex-col gap-1'>
					<h2 className='text-slate-800 text-xl font-medium text-left'>
						{ __( 'Enable Spec AI', 'ultimate-addons-for-gutenberg' ) }
					</h2>
					<p className='text-slate-500 text-base font-normal text-left'>
						{ __( 'You can use AI to help you come up with new ideas, or to help you polish and perfect your existing content.', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</div>
				<Switch
					checked={ 'yes' === isSpecEnabled }
					onChange={ updateSpecEnabledStatus }
					className={ specClassNames( [
						'yes' === isSpecEnabled ? 'bg-spec' : 'bg-slate-200',
						'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
					] ) }
					>
					<span
						aria-hidden="true"
						className={ specClassNames( [
							'yes' === isSpecEnabled ? 'translate-x-5' : 'translate-x-0',
							'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
						] ) }
					/>
				</Switch>
			</section>
		);
	};			

	// Render the welcome card.
	const renderWelcomeCard = () => (
		<section className='rounded-lg bg-white p-12 pt-8 gap-3 overflow-hidden shadow-sm flex flex-col justify-between h-full'>
			<div className='flex flex-col gap-3'>
				<h2 className='text-slate-800 text-2xl font-medium text-left'>
					{ __( 'Welcome to Spec AI!', 'ultimate-addons-for-gutenberg' ) }
				</h2>
				<p className='text-slate-500 text-sm pb-3'>
					{ __( 'Spec is here to save your day, now you can say goodbye to writers\' block, blank screen anxiety and Lorem Ipsum. With the power of AI in your fingertips!', 'ultimate-addons-for-gutenberg' ) }
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
			{ renderSpecEnabler() }
		</section>
	);

	// Render the credits card.
	const renderCreditsCard = () => (
		<section className='box-border flex flex-col gap-4 p-6 rounded-lg bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
			<div className='flex gap-2 items-center justify-start w-full'>
				<h3 className='text-sm font-semibold text-slate-500'>
					{ __( 'Words Remaining', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<a
					className='flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-violet-50 text-slate-500'
					href={ spec_ai_react?.spec_credit_topup_url }
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
						{ formatNumber( creditDetails.remaining ) }
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
			<div className='spec-ai__data-bar'>
				<div className='spec-ai__data-bar--progress' style={ {
					width: `${ creditDetails.percentage }%`,
				} } />
			</div>
		</section>
	);

	// Render the knowledge base card.
	const renderKnowledgeBaseCard = () => (
		<section className='box-border rounded-lg p-6 pr-10 bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
			<h3 className='text-slate-800 text-xl font-medium pb-2'>
				{ __(
					'Knowledge Base',
					'ultimate-addons-for-gutenberg'
				) }
			</h3>
			<p className='text-slate-500 text-sm pb-2 pr-2'>
				{ __(
					'Learn everything you need to know about Spec with our comprehensive documentation.',
					'ultimate-addons-for-gutenberg'
				) }
			</p>
			<a className='text-base text-spec focus:text-spec focus-visible:text-spec-hover active:text-spec-hover hover:text-spec-hover underline' href='https://wpspectra.com/docs/' target='_blank' rel='noreferrer'>
				{ __(
					'Learn Now',
					'ultimate-addons-for-gutenberg'
				) }
			</a>
			<a className='text-base text-spec focus:text-spec focus-visible:text-spec-hover active:text-spec-hover hover:text-spec-hover no-underline' href='https://wpspectra.com/docs/' target='_blank' rel='noreferrer'> → </a>
		</section>
	);

	// Render the community card.
	const renderCommunityCard = () => {
		return (
			<section className='box-border rounded-lg p-6 pr-10 bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
				<h3 className='text-slate-800 text-xl font-medium pb-2'>
					{ __(
						'Join the Community',
						'ultimate-addons-for-gutenberg'
					) }
				</h3>
				<p className='text-slate-500 text-sm pb-2 pr-2'>
					{ __(
						'Got a question about Spec, want to share your awesome project or just say hi? Join our wonderful community!',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<a className='text-base text-spec focus:text-spec focus-visible:text-spec-hover active:text-spec-hover hover:text-spec-hover underline' href='https://www.facebook.com/groups/wpspectra' target='_blank' rel='noreferrer'>
					{ __(
						'Join Now',
						'ultimate-addons-for-gutenberg'
					) }
				</a>
				<a className='text-base text-spec focus:text-spec focus-visible:text-spec-hover active:text-spec-hover hover:text-spec-hover no-underline' href='https://www.facebook.com/groups/wpspectra' target='_blank' rel='noreferrer'> → </a>
			</section>
		);
	};

	// Render the community card.
	const renderRevokeCard = () => {

		// Function to revoke access.
		const revokeAccess = () => {
			setShowPopup( true );
		};

		return (
			<section className='box-border rounded-lg p-6 bg-white shadow-sm overflow-hidden transition hover:shadow-hover'>
				<h3 className='text-green-500 text-xl font-medium pb-2'>
					{ __(
						'Spec is Authorized',
						'ultimate-addons-for-gutenberg'
					) }
					<Dashicon icon='yes' className='text-2xl leading-7'/>
				</h3>
				<p className='text-slate-500 text-sm pb-2 pr-2'>
					{ __(
						'You now have unlimited access to Spec! You can revoke access anytime from here.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<button
					className='text-base text-slate-400 focus:text-slate-400 focus-visible:text-spec-hover active:text-spec-hover hover:text-spec-hover'
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
			<main className='py-[2.43rem]'>
				<div className='max-w-3xl mx-auto px-6 lg:max-w-7xl'>
					<div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-5 xl:gap-10'>
						{/* Left column */}
						<div className='grid grid-cols-1 gap-4 lg:col-span-2 h-full'>
							{ renderWelcomeCard() }
						</div>

						{/* Right column */}
						<div className='space-y-4 flex h-full flex-col justify-start lg:space-y-5 xl:space-y-10'>
							{ renderCreditsCard() }
							{ renderKnowledgeBaseCard() }
							{ renderCommunityCard() }
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
						__( 'You will need to re-authorize Spec to use it again.', 'ultimate-addons-for-gutenberg' )
					}`,
				},
				popupAccept: {
					label: __( 'Revoke', 'ultimate-addons-for-gutenberg' ),
					callback: () => {
						localStorage.removeItem( 'specAiAuthorizationStatus' );
						window.location.assign( `${ spec_ai_react.admin_url }?revoke_spec_authorization_token=definitely` );
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
