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
	const [ brandTitle, setBrandTitle ] = useState( existingBrandVoice?.title || uag_react.site_details?.name || '' );
	const [ brandInfo, setBrandInfo ] = useState( existingBrandVoice?.info || uag_react.site_details?.description || ''  );
	const [ brandWritingStyle, setBrandWritingStyle ] = useState( existingBrandVoice?.writing_style );
	const [ brandAudience, setBrandAudience ] = useState( existingBrandVoice?.audience );
	const [ confirmDeletion, setConfirmDeletion ] = useState( false );
	const clearRef = useRef( null );

	// SVG For Right Hand Side Spinner.
	const svgSpinner = (
		<svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
			<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	);

	// Handle linking the API Key on button click.
	const saveBrandVoice = ( clickedButton ) => {
		// First escape the user's input.
		const updatedOpenAIOptions = {
			...openAIOptions,
			brand_voice: {
				title: escapeHTML( brandTitle ),
				description: escapeHTML( brandInfo ),
				tone: escapeHTML( brandWritingStyle ),
				visitor: escapeHTML( brandAudience ),
			},
		};
		const theButton = clickedButton.target;
		theButton.disabled = true;
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
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Brand Voice Saved!', 'ultimate-addons-for-gutenberg' ) } );
				setTimeout( () => {
					theButton.disabled = false;
				}, 1000 );
			}
			else{
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Save Brand Voice', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
				setTimeout( () => {
					theButton.disabled = false;
				}, 1000 );
			}
		} ).catch( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Save Brand Voice', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
			dispatch( { type: 'UPDATE_OPEN_AI_OPTIONS', payload: { ...openAIOptions } } );
			setTimeout( () => {
				theButton.disabled = false;
			}, 1000 );
		} );
	};

	// Handle linking the API Key on button click.
	const clearBrandVoice = ( clickedButton ) => {
		if ( ! confirmDeletion && clearRef?.current ) {
			setConfirmDeletion( true );
			clearRef.current.textContent = __( 'Are You Sure?', 'ultimate-addons-for-gutenberg' );
			return;
		}
		if ( clearRef?.current ) {
			setConfirmDeletion( false );
			clearRef.current.textContent = __( 'Clear Brand Voice', 'ultimate-addons-for-gutenberg' );
		}
		// First escape the user's input.
		const updatedOpenAIOptions = {
			...openAIOptions,
			brand_voice: {
				title: escapeHTML( '' ),
				description: escapeHTML( '' ),
				tone: escapeHTML( '' ),
				visitor: escapeHTML( '' ),
			},
		};
		const theButton = clickedButton.target;
		theButton.disabled = true;
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
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Brand Voice Cleared', 'ultimate-addons-for-gutenberg' ) } );
				setBrandTitle( uag_react.site_details?.name || '' );
				setBrandInfo( uag_react.site_details?.description || '' );
				setTimeout( () => {
					theButton.disabled = false;
				}, 1000 );
			}
			else{
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Clear Brand Voice', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
				setTimeout( () => {
					theButton.disabled = false;
				}, 1000 );
			}
		} ).catch( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Clear Brand Voice', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
			dispatch( { type: 'UPDATE_OPEN_AI_OPTIONS', payload: { ...openAIOptions } } );
			setTimeout( () => {
				theButton.disabled = false;
			}, 1000 );
		} );
	};

	// Render a character counter for the previous sibling element.
	const characterCount = ( charLimit, currentVal ) => {
		const currentCount = currentVal?.length ? charLimit - currentVal.length : charLimit;
		return (
			<div className='absolute text-xs text-left text-slate-300 bg-white px-2 -bottom-0.5 right-4 transition spectra-admin__input-field--border-stats'>
				{ `${ currentCount } / ${ charLimit } Characters Left` }
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
					placeholder={ __( 'The name of your business…', 'ultimate-addons-for-gutenberg' ) }
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
					rows='10'
					maxLength='500'
					aria-label='Brand Voice Description'
					placeholder={ __( 'Write something about your business…', 'ultimate-addons-for-gutenberg' ) }
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
					placeholder={ __( 'Set the tone to be used by your Brand Voice…', 'ultimate-addons-for-gutenberg' ) }
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
					placeholder={ __( 'Let your Brand Voice know who your target audience is…', 'ultimate-addons-for-gutenberg' ) }
					value={ brandAudience }
					onChange={ ( event ) => setBrandAudience( event.target.value ) }
				/>
			</div>
			{/* Save Brand Voice and Clear Brand Voice */}
			<div className="mt-8 relative flex gap-4">
				<button
					type='button'
					className='bg-spectra text-white hover:bg-spectra-hover focus:bg-spectra-hover disabled:opacity-25 disabled:hover:bg-spectra flex items-center w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all'
					disabled={ ! ( brandTitle && brandInfo && brandWritingStyle && brandAudience ) }
					onClick={ ( event ) => saveBrandVoice( event ) }
				>
					{ __( 'Save Brand Voice', 'ultimate-addons-for-gutenberg' ) }
				</button>
				{ ( brandTitle || brandInfo || brandWritingStyle || brandAudience ) && (
					<button
						type='button'
						className='bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 flex items-center w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all'
						ref={ clearRef }
						onClick={ ( event ) => clearBrandVoice( event ) }
					>
						{ __( 'Clear Brand Voice', 'ultimate-addons-for-gutenberg' ) }
					</button>
				) }
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
