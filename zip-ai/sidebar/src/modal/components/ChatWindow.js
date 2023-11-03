/**
 * Zip Chat - Component - The Chat Window.
 */

import { useState, useEffect, useContext, useRef } from '@wordpress/element';
import { ZipWPLogo, ExclamationMarkIcon } from '@Scripts/IconComponents';
import RenderChatLog, { ChatLog, ChatLoader } from './helpers/RenderChatLog';
import { __ } from '@wordpress/i18n';

const ChatWindow = ( props ) => {
	const {
		generating,
		updateContent,
		closeModal,
		aiResponseError,
		setGenerating,
		setAiResponseError,
		setUserInput,
		setRefreshFilters,
	} = props

	// Use the Chat Log.
	const { chatLog, setChatLog } = useContext( ChatLog );

	// Create a regeneration state specifically to show the loader only when needed.
	const [ regeneratingId, setRegeneratingId ] = useState( null );

	// Create an edit check state to restrict only one edit at a time.
	const [ editCheck, setEditCheck ] = useState( false );

	// Create the Chat Window ref.
	const chatWindowRef = useRef( null );

	// Scroll the last chat element into view whenver it has been changed.
	useEffect( () => {
		if ( chatWindowRef?.current ) {
			chatWindowRef.current.scrollTop = chatWindowRef.current?.scrollHeight;
		}
	}, [ chatWindowRef?.current?.lastChild, chatLog ] );

	// Update the AI Error bubble if and when needed.
	const renderErrorBubble = () => {
		const errorBubble = {
			type: 'error',
			icon: ExclamationMarkIcon(),
			message: aiResponseError,
			action: {
				execute: () => {
					const updatedChatLog = chatLog.filter( ( chatBubble ) => chatBubble.from !== 'error' );
					setAiResponseError( '' );
					setChatLog( updatedChatLog );
				},
				label: __( 'Dismiss', 'ultimate-addons-for-gutenberg' ),
			},
		};
		return ( <RenderChatLog { ...{ chatBubble: errorBubble } }/> );
	};

	// Render the required filter buttons.
	return (
		<div className='spectra-open-ai-modal__chat-window' ref={ chatWindowRef }>
			{ chatLog?.length || aiResponseError ? (
				<>
					{ chatLog?.length > 0 && chatLog.map( ( chatBubble, index ) => (
						<RenderChatLog key={ index } {...{
							chatBubble,
							updateContent,
							closeModal,
							setGenerating,
							regeneratingId,
							setRegeneratingId,
							aiResponseError,
							setAiResponseError,
							setUserInput,
							setRefreshFilters,
							editCheck,
							setEditCheck,
						} }/>
					) ) }
					{ ( generating && ! regeneratingId ) && ChatLoader }
					{ aiResponseError && renderErrorBubble() }
				</>
			) : (
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
						{ __( 'I can help you write content for your website. Just ask me for what you need.', 'ultimate-addons-for-gutenberg' ) }
					</h4>
				</div>
			) }
		</div>
	);
}

export default ChatWindow;
