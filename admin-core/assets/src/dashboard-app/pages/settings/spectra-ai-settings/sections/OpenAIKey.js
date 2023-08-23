import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';
import { uagbClassNames } from '@Utils/Helpers';

const OpenAIKey = ( props ) => {
	const {
		openAIOptions,
	} = props;

	// Decleration of all the states needed
	const dispatch = useDispatch();
	const existingKey = openAIOptions?.key || '';
	const [ openAIKey, setOpenAIKey ] = useState( existingKey );
	const [ openAIKeyLabel, setOpenAIKeyLabel ] = useState( existingKey ? __( 'Revoke Key', 'ultimate-addons-for-gutenberg' ) :  __( 'Save Key', 'ultimate-addons-for-gutenberg' ) );
	const [ linkingKey, setLinkingKey ] = useState( false );

	// SVG For Right Hand Side Spinner.
	const svgSpinner = (
		<svg className='animate-spin -mr-1 ml-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
			<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
			<path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'/>
		</svg>
	);

	// Update the Label of the API Key Button. 
	const updateAPIButtonLabel = ( type = null ) => {
		switch ( type ) {
			case 'saving':
				setOpenAIKeyLabel( existingKey
					? __( 'Revoking', 'ultimate-addons-for-gutenberg' )
					: __( 'Saving', 'ultimate-addons-for-gutenberg' )
				);
				break;
			case 'invalid':
				setOpenAIKeyLabel( __( 'Invalid Key' , 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'success':
				setOpenAIKeyLabel( existingKey
					? __( 'Revoked', 'ultimate-addons-for-gutenberg' )
					: __( 'Saved!', 'ultimate-addons-for-gutenberg' )
				);
				break;
			case 'failed':
				setOpenAIKeyLabel( existingKey
					? __( 'Failed to Revoke Key', 'ultimate-addons-for-gutenberg' )
					: __( 'Failed to Save Key', 'ultimate-addons-for-gutenberg' )
				);
				break;
			default:
				setOpenAIKeyLabel( existingKey
					? __( 'Revoke Key', 'ultimate-addons-for-gutenberg' )
					: __( 'Save Key', 'ultimate-addons-for-gutenberg' ) );
		}
	};


	// Handle linking the API Key on button click.
	const authenticateOpenAIKey = ( clickedButton ) => {
		// First escape the user's input.
		const updatedOpenAIOptions = { ...openAIOptions, key: openAIKey };
		const theButton = clickedButton.target;
		setLinkingKey( true );
		theButton.disabled = true;
		updateAPIButtonLabel( 'saving' );
		dispatch( { type: 'UPDATE_OPEN_AI_OPTIONS', payload: updatedOpenAIOptions } );
		const formData = {
			security: uag_react.open_ai_options_nonce,
			value: JSON.stringify( updatedOpenAIOptions ),
		};
		const getApiDataFetch = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_open_ai_options',
			data : formData,	
		} );
		getApiDataFetch.then( ( responseData ) => {
			if ( responseData.success ) {
				setLinkingKey( false );
				updateAPIButtonLabel( 'success' );
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Saved!', 'ultimate-addons-for-gutenberg' ) } );
				setTimeout( () => {
					updateAPIButtonLabel();
					theButton.disabled = false;
				}, 1000 );
				location.reload();
			} else {
				setLinkingKey( false );
				updateAPIButtonLabel( 'failed' );
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Save Key', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
				setTimeout( () => {
					updateAPIButtonLabel();
					setOpenAIKey( '' );
					theButton.disabled = false;
				}, 1000 );
			}
		} ).catch( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Save Key', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
			dispatch( { type: 'UPDATE_OPEN_AI_OPTIONS', payload: [] } );
			setLinkingKey( false );
			updateAPIButtonLabel( 'failed' );
			setTimeout( () => {
				updateAPIButtonLabel();
				setOpenAIKey( '' );
				theButton.disabled = false;
			}, 1000 );
		} );
	};

	// Handle the API Key removal on button click.
	const revokeOpenAIKey = ( clickedButton ) => {
		const updatedOpenAIOptions = openAIOptions;
		// If the key was set to empty, remove it from the updated options.
		delete updatedOpenAIOptions.key;
		const theButton = clickedButton.target;
		setLinkingKey( true );
		theButton.disabled = true;
		updateAPIButtonLabel( 'saving' );
		dispatch( { type: 'UPDATE_OPEN_AI_OPTIONS', payload: updatedOpenAIOptions } );
		const formData = {
			security: uag_react.open_ai_options_nonce,
			value: JSON.stringify( updatedOpenAIOptions ),
		};
		const getApiDataFetch = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_open_ai_options',
			data : formData,	
		} );
		getApiDataFetch.then( ( responseData ) => {
			if ( responseData.success ) {
				setLinkingKey( false );
				updateAPIButtonLabel( 'success' );
				setOpenAIKey( '' );
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Revoked Successfully', 'ultimate-addons-for-gutenberg' ) } );
				setTimeout( () => {
					updateAPIButtonLabel();
					theButton.disabled = false;
				}, 1000 );
				location.reload();
			} else {
				setLinkingKey( false );
				updateAPIButtonLabel( 'failed' );
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Revoke Key', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
				setTimeout( () => {
					updateAPIButtonLabel();
					theButton.disabled = false;
				}, 1000 );
			}
		} ).catch( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Revoke Key', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
			dispatch( { type: 'UPDATE_OPEN_AI_OPTIONS', payload: [] } );
			setLinkingKey( false );
			updateAPIButtonLabel( 'failed' );
			setTimeout( () => {
				updateAPIButtonLabel();
				theButton.disabled = false;
			}, 1000 );
		} );
	};

	// Render API Key Settings.
	const renderAPIKeyInput = () => (
		<>
			<div className='mt-4 grid grid-cols-[1fr_auto] w-full'>
				<input
					className={ uagbClassNames( [
						'mr-5 h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field',
						existingKey && 'spectra-admin__input-field--read-only',
					] ) }
					type='text'
					aria-label='Key'
					placeholder='sk-xxxxxxxxxxxxxxxxxx'
					value={ existingKey ? __( 'OpenAI Key Linked!', 'ultimate-addons-for-gutenberg' ) : openAIKey }
					onChange={ ( event ) => setOpenAIKey( event.target.value ) }
				/>
				<button
					type='button'
					className='bg-spectra text-white hover:bg-spectra-hover focus:bg-spectra-hover flex items-center w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all'
					disabled={ linkingKey || ! openAIKey }
					onClick={ ( event ) => existingKey ? revokeOpenAIKey( event ) : authenticateOpenAIKey( event ) }
				>
					{ openAIKeyLabel }
					{ linkingKey && svgSpinner }
				</button>
			</div>
		</>
	);

	return (
		<>
			<section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>  
				<div className='mr-16 w-full flex items-center'>
					<h3 className='p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900'>
						{ __( 'OpenAI API Key', 'ultimate-addons-for-gutenberg' ) }
					</h3>
				</div>
				<div className='mr-16 mt-2 w-full flex items-start'>
					<div className='w-9/12'>
						<p className='text-sm text-slate-500'>
						{ ReactHtmlParser(
							sprintf(
								// translators: %1$s: opening anchor tag for login, %2$s: closing anchor tag for login, %3$s: opening anchor for register, %4$s: closing anchor tag for register.
								__(
									'Connect your OpenAI account to Spectra to enhance your writing capabilities. You can get your API keys from your %1$sOpenAI account%2$s. If you don\'t have an account yet, you can %3$screate it for free%4$s in less than a minute.',
									'ultimate-addons-for-gutenberg'
								),
								'<a href="https://platform.openai.com/account/api-keys" class="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" target="_blank" rel="noreferrer">',
								'</a>',
								'<a href="https://platform.openai.com/signup" class="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" target="_blank" rel="noreferrer">',
								'</a>'
							)
						) }
						</p>
						{ renderAPIKeyInput() }
					</div>
				</div>
			</section>
		</>
	);
};

export default OpenAIKey;
