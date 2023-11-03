/**
 * Zip Chat - The Modal Component.
 */

import { useState, useEffect, useRef } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { ZipWPLogo } from '@Scripts/IconComponents';
import GenerationWindow from './components/GenerationWindow';
import ContentFilters from './components/ContentFilters';
import AuthWindow from './components/AuthWindow';
import ChatWindow from './components/ChatWindow';
import { ChatLog } from './components/helpers/RenderChatLog';
import './styling.scss';

// React Component to Render the Zip AI Chat Sidebar.
const ZipChatSidebar = ( props ) => {
	const {
		setIsOpen,
		isRichText = true,
		updateContent,
		currentText = '',
	} = props;

	const currentPostId = zip_ai_react?.current_post_id;

	// Ref for the textarea used for generation.
	const generationRef = useRef( null );

	// The Stored Chat Log. This will be fetched from the Redux Context.
	const storedChatLog = JSON.parse( localStorage.getItem( `zipAiPreservedChatlog${ currentPostId }` ) ) || [];
	const zipAiAuthStatus = JSON.parse( localStorage.getItem( `zipAiAuthorizationStatus` ) ) || zip_ai_react?.is_zip_ai_authorized || false;

	// The Chat Log
	const [ chatLog, setChatLog ] = useState( storedChatLog );

	// The Zip AI Authorization Status.
	const [ isAuthorized, setIsAuthorized ] = useState( zipAiAuthStatus );

	// The AI Response Error, if any.
	const [ aiResponseError, setAiResponseError ] = useState( '' );

	// The text to use for Generation.
	const [ userInput, setUserInput ] = useState( '' );

	// Flag used to update filters based on content change.
	const [ refreshFilters, setRefreshFilters ] = useState( false );

	// Flag used to check whether content is being generated.
	const [ generating, setGenerating ] = useState( false );

	// Set the valid for saving number to 2 if the chatlog has a message from the content.
	const [ validForSaving, setValidForSaving ] = useState( storedChatLog.length > 0 );

	// UseEffect for the First Time Load.
	useEffect( () => {
		// Get the user of the last chat bubble if it exists.
		const lastChat = chatLog?.length ? {
			from: chatLog[ chatLog.length - 1 ]?.from,
			message: chatLog[ chatLog.length - 1 ]?.message,
		} : null;
		// Add the content bubble to the chatlog if needed.
		if ( currentText && 'content' !== lastChat?.from && currentText !== lastChat?.message ) {
			chatLog.push( {
				id: chatLog?.length ? chatLog[ chatLog.length - 1 ].id + 1 : 0,
				from: 'content',
				message: currentText,
			} );
			setChatLog( [ ...chatLog ] );
		}
	}, [] );

	// The Close Modal Function.
	const closeModal = () => {
		// Close the sidebar if the editor is not in rich text mode.
		if ( ! isRichText ) {
			dispatch( 'core/edit-post' ).closeGeneralSidebar( 'zip-ai-page-settings-panel' );
		}

		// If the chatlog has a content message at the end, remove it.
		if ( 'content' === chatLog[ chatLog.length - 1 ]?.from ) {
			chatLog.pop();
			setChatLog( [ ...chatLog ] );
		}

		// Save the chatlog only if required - i.e. at least 1 generation has happened.
		if ( validForSaving ) {

			// Save the chatlog to local storage. This will be replaced with the Redux Context.
			localStorage.setItem( `zipAiPreservedChatlog${ currentPostId }`, JSON.stringify( chatLog.slice( -20 ) ) );
		}
		return setIsOpen( false );
	}

	return (
		<ChatLog.Provider value={ { chatLog, setChatLog } }>
			<Modal
				title={ __( 'Zip - AI Assistant', 'ultimate-addons-for-gutenberg' ) }
				className='spectra-open-ai-modal'
				onRequestClose={ closeModal }
				shouldCloseOnClickOutside={ false }
				shouldCloseOnEsc={ false }
				icon={ ZipWPLogo( { color: '#ff580e' } ) }
			>
				{ isAuthorized ? (
					<>
						<ChatWindow { ...{
							generating,
							updateContent,
							closeModal,
							aiResponseError,
							setGenerating,
							setAiResponseError,
							setUserInput,
							setRefreshFilters,
						} }/>
						<ContentFilters { ...{
							generationRef,
							currentText,
							userInput,
							setUserInput,
							refreshFilters,
							setRefreshFilters,
							generating,
							setGenerating,
							setAiResponseError,
							isRichText,
							setValidForSaving,
						} }/>
					</>
				) : (
					<AuthWindow { ...{ setIsAuthorized } } />
				) }
				<GenerationWindow { ...{
					isAuthorized,
					generationRef,
					currentText,
					userInput,
					setUserInput,
					setRefreshFilters,
					generating,
					setGenerating,
					setAiResponseError,
					validForSaving,
					setValidForSaving,
				} }/>
			</Modal>
		</ChatLog.Provider>
	);
}

export default ZipChatSidebar;
