import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { escapeHTML } from '@wordpress/escape-html';
import getApiData from '@Controls/getApiData';
import { OpenAiResponder, getResponse } from '@ProBlocks/extensions/ai/open-ai/utils';
import { uagbClassNames } from '@Utils/Helpers';

const BrandVoice = () => {
	// Decleration of the dispatcher, and all the states needed.
	const dispatch = useDispatch();
	const openAIOptions = useSelector( ( state ) => state.spectraOpenAIOptions );
	const existingKey = openAIOptions?.key || '';
	const existingBrandVoice = openAIOptions?.brand_voice || {};
	const [ brandTitle, setBrandTitle ] = useState( existingBrandVoice?.title || uag_react.site_details?.name || '' );
	const [ brandInfo, setBrandInfo ] = useState( existingBrandVoice?.description || uag_react.site_details?.description || '' );
	const [ brandWritingStyle, setBrandWritingStyle ] = useState( existingBrandVoice?.tone || '' );
	const [ brandAudience, setBrandAudience ] = useState( existingBrandVoice?.visitor || '' );
	const [ generatingContent, setGeneratingContent ] = useState( false );

	// Set the brand voice to display whenever the existing key is updated.
	useEffect( () => {
		setBrandTitle( existingKey ? (
			existingBrandVoice?.title || uag_react.site_details?.name || ''
		) : '' );
		setBrandInfo( existingKey ? (
			existingBrandVoice?.description || uag_react.site_details?.description || ''
		) : '' );
		setBrandWritingStyle( existingKey ? (
			existingBrandVoice?.tone || ''
		) : '' );
		setBrandAudience( existingKey ? (
			existingBrandVoice?.visitor || ''
		) : '' );
	}, [ existingKey ] );

	// SVG For Right Hand Side Spinner.
	const svgSpinner = () => (
		<svg className='animate-spin h-[18px] w-[18px] text-spectra' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
			<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
			<path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
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
			} else {
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
		const currentValue = event.target.value?.replace( /[\r\n]+/g, '' ) || '';
		setCurrentState( currentValue );
	};

	const generateAllFields = async () => {
		const systemMessage = `You are web content creator.\n\nYou will provide me data for my website with title ${ brandTitle }\n\nData should be in json format with 3 keys\n\n1. description = website description within 300 characters.\n2. tone = tone to be used for my audience to write content on by website in one word.\n3. visitor = type of visitor I should write content for within 20 words.`;
		const fallbackFields = {
			description: brandInfo,
			tone: brandWritingStyle,
			visitor: brandAudience,
		};
		setGeneratingContent( true );
		setBrandInfo( '' );
		setBrandWritingStyle( '' );
		setBrandAudience( '' );
		const generatedResponse = await OpenAiResponder( '', systemMessage, existingKey )
		.then( ( data ) => {
			const response = getResponse( data );
			if ( response.success ) {
				return JSON.parse( response.message );
			}
		} )
		.catch( () => {
			return '';
		} );
		if ( generatedResponse?.description && generatedResponse?.tone && generatedResponse?.visitor ) {
			setGeneratingContent( false );
			setBrandInfo( generatedResponse.description );
			setBrandWritingStyle( generatedResponse.tone );
			setBrandAudience( generatedResponse.visitor );
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Brand Voice Generated!', 'ultimate-addons-for-gutenberg' ) } );
		} else {
			setGeneratingContent( false );
			setBrandInfo( fallbackFields.description );
			setBrandWritingStyle( fallbackFields.tone );
			setBrandAudience( fallbackFields.visitor );
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: { message: __( 'Failed to Generate…', 'ultimate-addons-for-gutenberg' ), messageType: 'error' } } );
		}
	};

	// Render API Key Settings.
	const renderBrandVoiceForm = () => (
		<>
			{/* Buesiness Name */}
			<div className='mt-8 relative'>
				<h4 className='w-9/12 font-medium text-sm text-slate-800'>
					{ __( 'Business Name', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<div className='w-full flex items-center justify-start mt-3 gap-2'>
					<input
						className='h-10 w-9/12 text-sm placeholder-slate-400 transition spectra-admin__input-field'
						type='text'
						aria-label='Brand Voice Title'
						placeholder={ __( 'The name of your business…', 'ultimate-addons-for-gutenberg' ) }
						value={ brandTitle }
						onChange={ ( event ) => setBrandTitle( event.target.value ) }
					/>
					<button
						type='button'
						className='bg-none text-spectra hover:text-spectra-hover focus:text-spectra-hover disabled:hidden flex-1 flex items-center justify-start text-left gap-2 w-auto p-0 border border-transparent text-sm leading-4 font-medium focus:outline-none transition-all'
						onClick={ () => generateAllFields() }
						disabled={ ! brandTitle }
					>
						{ generatingContent ? (
							<>
								{ svgSpinner() }
								{ __( 'Generating…', 'ultimate-addons-for-gutenberg' ) }
							</>
						) : (
							<>
								<svg className='flex-shrink-0 stroke-spectra' width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
									<path d='M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50533 18.2589 8.71454Z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
									<path d='M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
								</svg>
								{ __( 'Generate the rest with AI', 'ultimate-addons-for-gutenberg' ) }
							</>
						) }
					</button>
				</div>
			</div>
			{/* Buesiness Description */}
			<div className='w-9/12 mt-8 relative'>
				<h4 className='font-medium text-sm text-slate-800'>
					{ __( 'Business Description', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<textarea
					className='mt-3 w-full text-sm resize-none placeholder-slate-400 disabled:cursor-wait transition spectra-admin__input-field'
					rows='10'
					maxLength='500'
					aria-label='Brand Voice Description'
					placeholder={ generatingContent ? __( 'Generating…', 'ultimate-addons-for-gutenberg' ) : __( 'Write something about your business…', 'ultimate-addons-for-gutenberg' ) }
					disabled={ generatingContent }
					value={ brandInfo }
					onChange={ ( event ) => preventLineBreaks( event, setBrandInfo ) }
				/>
				{ characterCount( 500, brandInfo ) }
			</div>
			{/* Writing Style */}
			<div className='w-9/12 mt-8 relative'>
				<h4 className='font-medium text-sm text-slate-800'>
					{ __( 'Writing Style', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<input
					className='mt-3 h-10 w-full text-sm placeholder-slate-400 disabled:cursor-wait transition spectra-admin__input-field'
					type='text'
					aria-label='Key'
					placeholder={ generatingContent ? __( 'Generating…', 'ultimate-addons-for-gutenberg' ) : __( 'Set the tone to be used by your Brand Voice…', 'ultimate-addons-for-gutenberg' ) }
					disabled={ generatingContent }
					value={ brandWritingStyle }
					onChange={ ( event ) => setBrandWritingStyle( event.target.value ) }
				/>
			</div>
			{/* Visitors | Audience */}
			<div className='w-9/12 mt-8 relative'>
				<h4 className='font-medium text-sm text-slate-800'>
					{ __( 'Ideal Website Visitor', 'ultimate-addons-for-gutenberg' ) }
				</h4>
				<input
					className='mt-3 h-10 w-full text-sm placeholder-slate-400 disabled:cursor-wait transition spectra-admin__input-field'
					type='text'
					aria-label='Key'
					placeholder={ generatingContent ? __( 'Generating…', 'ultimate-addons-for-gutenberg' ) : __( 'Let your Brand Voice know who your target audience is…', 'ultimate-addons-for-gutenberg' ) }
					disabled={ generatingContent }
					value={ brandAudience }
					onChange={ ( event ) => setBrandAudience( event.target.value ) }
				/>
			</div>
			{/* Save Brand Voice and Clear Brand Voice */}
			<div className='mt-8 relative flex gap-4'>
				<button
					type='button'
					className='bg-spectra text-white hover:bg-spectra-hover focus:bg-spectra-hover disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed flex items-center w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none transition-all'
					onClick={ ( event ) => saveBrandVoice( event ) }
					disabled={ ! existingKey || generatingContent }
				>
					{ __( 'Save Brand Voice', 'ultimate-addons-for-gutenberg' ) }
				</button>
			</div>
		</>
	);

	return (
		<>
			<section className={ uagbClassNames( [
				'block border-b border-solid border-slate-200 px-12 py-8 justify-between',
				! existingKey && 'opacity-50 pointer-events-none'
			] ) }>
				<div className='mr-16 w-full flex items-center '>
					<h3 className='p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900'>
						{ __( 'Brand Voice', 'ultimate-addons-for-gutenberg' ) }
					</h3>
				</div>
				<div className='mr-16 mt-2 w-full'>
					<div className='w-9/12'>
						<p className='text-sm text-slate-500'>
							{ __( 'Give your Spectra AI a personal touch!', 'ultimate-addons-for-gutenberg' ) }
						</p>
						<p className='text-sm text-slate-500'>
							{ __( 'Create a Brand Voice to make Spectra AI generate your content just the way you like it.', 'ultimate-addons-for-gutenberg' ) }
						</p>
					</div>
					{ renderBrandVoiceForm() }
				</div>
			</section>
		</>
	);
};

export default BrandVoice;
