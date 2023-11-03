/**
 * Zip Chat - Component - The filters for the AI text.
 */

import { useState, useEffect, useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	newTextFeatures,
	updateTextFeatures,
	updateAdditionalTextFeatures,
} from './helpers/aiFeatures';
import RenderFilter from './helpers/RenderFilter';
import { generateNewText } from './helpers/generateNewText';
import { ChatLog, getLastAiMessage } from './helpers/RenderChatLog';

const ContentFilters = ( props ) => {
	const {
		generationRef,
		currentText,
		setUserInput,
		refreshFilters,
		setRefreshFilters,
		generating,
		setGenerating,
		setAiResponseError,
		setValidForSaving,
	} = props;

	const { chatLog, setChatLog } = useContext( ChatLog );

	const generateContent = ( { textCommand, oneClickCommand } ) => {
		const textContent = getLastAiMessage( chatLog, currentText );
		generateNewText( {
			textContent,
			textCommand,
			setGenerating,
			setText: setUserInput,
			setRefreshFilters,
			setAiResponseError,
			chatLog,
			setChatLog,
			oneClickCommand,
			setValidForSaving,
		} );
	}

	// Fetch the list of features possible for AI Text Generation.
	const createTextButtons = newTextFeatures( setUserInput, generationRef );
	const updateTextButtons = updateTextFeatures( generateContent );
	const updateAdditionalTextButtons = updateAdditionalTextFeatures( generateContent );

	// Set a state to use the required filter for the current situation.
	const [ aiFilters, setAiFilters ] = useState( ( currentText || chatLog?.length ) ? updateTextButtons : createTextButtons );

	const clipboardFilter = ( navigator?.clipboard && ! chatLog?.length ) && {
		feature: __( 'Paste from clipboard', 'ultimate-addons-for-gutenberg' ),
		clickEvent: async () => {
			setGenerating( true );
			const clipboardContent = await navigator.clipboard
			.readText()
			.then( ( clipBoardText ) => ( clipBoardText ) )
			.catch( () => ( '' ) );
			if ( clipboardContent ) {
				chatLog.push( {
					id: 0,
					from: 'content',
					message: clipboardContent,
				} );
				setChatLog( [ ...chatLog ] );
				setRefreshFilters( true );
			}
			setGenerating( false );
		},
	};

	const [ additionalFilters, setAdditionalFilters ] = useState( ( currentText || chatLog?.length ) ? updateAdditionalTextButtons : [] );
	/// Update the required filters whenever needed.
	useEffect( () => {
		if ( refreshFilters ) {
			setRefreshFilters( false );
			setAiFilters( ( currentText || chatLog?.length ) ? updateTextButtons : createTextButtons );
			setAdditionalFilters( ( currentText || chatLog?.length ) ? updateAdditionalTextButtons : [] );
		}
	}, [ refreshFilters ] );

	// Render the required filter buttons
	return (
		<div className='spectra-open-ai-modal__filters'>
			<div className='spectra-open-ai-modal__filters--section'>
				{ aiFilters.filters.map( ( aiFilter, index ) => (
					<RenderFilter key={ index } filter={ {...aiFilter, disabled: generating } } />
				) ) }
				{ clipboardFilter && ( <RenderFilter filter={ { ...clipboardFilter, disabled: generating } } /> ) }
			</div>
			{ additionalFilters?.filters?.length > 0 && (
				<div className='spectra-open-ai-modal__filters--sub-section'>
					{ additionalFilters.filters.map( ( additionalFilter, index ) => (
						<RenderFilter type='select' key={ index } filter={ {...additionalFilter, disabled: generating } } />
					) ) }
				</div>
			) }
		</div>
	);
}

export default ContentFilters;
