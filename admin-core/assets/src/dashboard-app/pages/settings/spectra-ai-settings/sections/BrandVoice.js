import { useState, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch } from 'react-redux';
import { escapeHTML } from '@wordpress/escape-html';
import getApiData from '@Controls/getApiData';

const BrandVoice = ( props ) => {
	const {
		openAIOptions,
	} = props

	// Decleration of the dispatcher, and all the states needed.
	const dispatch = useDispatch();
	const existingBrandVoice = openAIOptions?.brand_voice || {};
	const [ brandTitle, setBrandTitle ] = useState( existingBrandVoice?.title );
	const [ brandInfo, setBrandInfo ] = useState( existingBrandVoice?.info );
	const [ brandWritingStyle, setBrandWritingStyle ] = useState( existingBrandVoice?.writing_style );
	const [ brandAudience, setBrandAudience ] = useState( existingBrandVoice?.audience );

	// SVG For Right Hand Side Spinner.
	const svgSpinner = (
		<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

	// Update the Label of the API Key Button. 
	const updateAPIButtonLabel = ( type = null ) => {
		switch ( type ) {
			case 'saving':
				setOpenAIKeyLabel( __( 'Saving', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'invalid':
				setOpenAIKeyLabel( __( 'Invalid Key' , 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'success':
				setOpenAIKeyLabel( __( 'Saved!', 'ultimate-addons-for-gutenberg' ) );
				break;
			case 'failed':
				setOpenAIKeyLabel( __( 'Failed to Save Key', 'ultimate-addons-for-gutenberg' ) );
				break;
			default:
				setOpenAIKeyLabel( __( 'Save Key', 'ultimate-addons-for-gutenberg' ) );
		}
	};


	// Handle linking the API Key on button click.
	const authenticateOpenAIKey = ( clickedButton ) => {
		// First escape the user's input.
		const finalAPIKey = escapeHTML( openAIKey );
		const updatedOpenAIOptions = { ...openAIOptions, key: finalAPIKey };
		// If the key was set to empty, remove it from the updated options.
		if ( ! finalAPIKey ) {
			delete updatedOpenAIOptions.key;
		}
		setOpenAIKey( finalAPIKey );
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
			}
			else{
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

	// Render a character counter for the previous sibling element.
	const characterCount = ( charLimit, currentVal ) => {
		const currentCount = currentVal?.length ? charLimit - currentVal.length : charLimit;
		return (
			<div className='absolute text-xs text-left text-slate-400 bg-white px-2 -bottom-0.5 right-4'>
				{ `${ currentCount } / ${ charLimit } Characters` }
			</div>
		);
	};

	// Prevent line breaks in the current textarea field.
	const preventLineBreaks = ( event, setCurrentState ) => {
		const currentValue = event.target.value?.replace(/[\r\n]+/g, '') || '';
		setCurrentState( currentValue );
	};

	// Render API Key Settings.
	const renderBrandVoiceForm = () => (
		<>
			{/* Buesiness Name */}
			<div className="mt-8 relative">
				<h4 className="font-medium text-sm text-slate-800">
					{ __( 'Business Name', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<input
					className="mt-3 h-10 w-full text-sm placeholder-slate-400 transition spectra-admin__input-field"
					type='text'
					aria-label='Brand Voice Title'
					placeholder='Site Title'
					value={ brandTitle }
					onChange={ ( event ) => setBrandTitle( event.target.value ) }
				/>
			</div>
			{/* Buesiness Description */}
			<div className="mt-8 relative">
				<h4 className="font-medium text-sm text-slate-800">
					{ __( 'Business Description', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<textarea
					className="mt-3 w-full text-sm resize-none placeholder-slate-400 transition spectra-admin__input-field"
					rows='8'
					maxLength='500'
					aria-label='Brand Voice Description'
					placeholder='Write something about your business...'
					value={ brandInfo }
					onChange={ ( event ) => preventLineBreaks( event, setBrandInfo ) }
				/>
				{ characterCount( 500, brandInfo ) }
			</div>
			{/* Writing Style */}
			<div className="mt-8 relative">
				<h4 className="font-medium text-sm text-slate-800">
					{ __( 'Writing Style', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<input
					className="mt-3 h-10 w-full text-sm placeholder-slate-400 transition spectra-admin__input-field"
					type='text'
					aria-label='Key'
					placeholder='Site Title'
					value={ brandWritingStyle }
					onChange={ ( event ) => setBrandWritingStyle( event.target.value ) }
				/>
			</div>
			{/* Visitors | Audience */}
			<div className="mt-8 relative">
				<h4 className="font-medium text-sm text-slate-800">
					{ __( 'Audience', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<input
					className="mt-3 h-10 w-full text-sm placeholder-slate-400 transition spectra-admin__input-field"
					type='text'
					aria-label='Key'
					placeholder='Site Title'
					value={ brandAudience }
					onChange={ ( event ) => setBrandAudience( event.target.value ) }
				/>
			</div>
			
		</>
	);

	return (
		<>
			<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">  
				<div className="mr-16 w-full flex items-center">
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Brand Voice', 'ultimate-addons-for-gutenberg' ) }
					</h3>
				</div>
				<div className="mr-16 mt-2 w-full flex items-start">
					<div className="w-9/12">
						<p className="text-sm text-slate-500">
							{ __( 'Give your Spectra AI a personal touch!', 'ultimate-addons-for-gutenberg' ) }
						</p>
						<p className="text-sm text-slate-500">
							{ __( 'Create a Brand Voice to make Spectra AI generate your content just the way you like it.', 'ultimate-addons-for-gutenberg' ) }
						</p>
						{ renderBrandVoiceForm() }
					</div>
				</div>
			</section>
		</>
	);
};

export default BrandVoice;
