/**
 * Zip Chat - Helper - The Chat Log helpers.
 */

import {
	createContext,
	useContext,
	useState,
	useEffect,
	useRef,
} from '@wordpress/element';
import { sprintf, __ } from '@wordpress/i18n';
import { generateNewText, regenerateText } from './generateNewText';
import {
	EditIcon,
	CopyIcon,
	CheckIcon,
	ClockIcon,
	RegenerateIcon,
	SmallArrowIcons,
} from '@Scripts/IconComponents';
import { Dashicon } from '@wordpress/components';
import { zipAiClassNames, copyToClipboard } from '@Scripts/Helpers';

// The common styling for all chat bubble SVGs.
const addChatBubbleSvgStyling = {
	color: '#64748b',
};

// Create the Chat Log, which will contain an array objects pertaining to each chat message.
export const ChatLog = createContext( {
	chatLog: [],
	setChatLog: () => {},
} );

// The Chat Loader Div Structure.
export const ChatLoader = (
	<div className='spectra-open-ai-modal__chat-loader'>
		<div className='spectra-open-ai-modal__chat-loader--dot dot-1'/>
		<div className='spectra-open-ai-modal__chat-loader--dot dot-2'/>
		<div className='spectra-open-ai-modal__chat-loader--dot dot-3'/>
	</div>
);

// Get the last AI generated message.
export const getLastAiMessage = ( chatLog, fallbackMessage ) => (
	chatLog?.filter( ( chat ) => ( chat.from === 'ai' || chat.from === 'content' ) )?.pop()?.message || fallbackMessage
);

// Render the Low Credit Notification.
export const LowCreditNotification = () => {
	const notificationRef = useRef( null );

	// Add the Notification Visibility class once the ref has been set.
	useEffect( () => {
		if ( notificationRef.current ) {
			setTimeout( () => {
				notificationRef.current.classList.add( 'spectra-open-ai-modal__notification--visible' );
			}, 1000 );
		}
	}, [ notificationRef ] );

	return (
		<div className='spectra-open-ai-modal__notification' ref={ notificationRef }>
			<div className='spectra-open-ai-modal__notification--content'>
				{ __( 'Your Credit Balance is low, top up soon!', 'ultimate-addons-for-gutenberg' ) }
				<Dashicon icon='external' />
			</div>
		</div>
	)
};

// Internal Helper Function to determine the copy icon to render.
const renderRequiredCopyIcon = ( icons, copyIconInUse, setCopyIconInUse ) => {
	let iconToUse;
	switch ( copyIconInUse ) {
		case 'progress':
			iconToUse = icons?.progress;
			break;
		case 'success':
			iconToUse = icons?.success;
			setTimeout( () => {
				setCopyIconInUse( 'default' );
			}, 750 );
			break;
		default:
			iconToUse = icons.default;
	}
	return iconToUse;
};



// Component that splits up the code block into title and content.
const StructuredCodeBlock = ( props ) => {
	const { message } = props;

	// State to determine the copy icon to use.
	const [ currentIcon, setCurrentIcon ] = useState( 'default' );

	// Return early if no message is found.
	if ( ! message ) {
		return null;
	}

	// Split the message into title and content.
	const messageArray = message.split( '\n' );
	const title = messageArray.shift();
	const content = messageArray.join( '\n' ).trim();

	// The Copy Icon to use.
	const copyIconSet = {
		default: CopyIcon( addChatBubbleSvgStyling ),
		progress: ClockIcon( addChatBubbleSvgStyling ),
		success: CheckIcon( addChatBubbleSvgStyling ),
	}

	return (
		<div className='spectra-open-ai-modal__chat-bubble--code-block'>
			<div className='spectra-open-ai-modal__chat-bubble--code-block-title'>
				{ title }
				<div className='spectra-open-ai-modal__chat-bubble--code-block-actions'>
					<button
						className='spectra-open-ai-modal__chat-bubble--code-block-button'
						onClick={ async () => {
							try {
								setCurrentIcon( 'progress' );
								await copyToClipboard( content );
								setCurrentIcon( 'success' );
							} catch ( error ) {
								console.error( error );  // eslint-disable-line no-console
								setCurrentIcon( 'default' );
							}
						} }
					>
						{ renderRequiredCopyIcon( copyIconSet, currentIcon, setCurrentIcon ) }
					</button>
				</div>
			</div>
			<div className='spectra-open-ai-modal__chat-bubble--code-block-content'>
				<code>{ content }</code>
			</div>
		</div>
	);
};

// Parse the message string to create a preformatted sections wherever needed.
export const parseAiMessage = ( aiGeneratedMessage ) => {
	// Return early if no message is found.
	if ( ! aiGeneratedMessage ) {
		return null;
	}

	// Function to format the inline code.
	const formatInlineCode = ( originalMessage ) => {
		// Return early if no inline code is found.
		if ( ! originalMessage.includes( '`' ) ) {
			return originalMessage;
		}

		// Start parsing the message whenever an inline code is found.
		const parsedMessage = [];
		const messageArray = originalMessage.split( '`' );
		messageArray.forEach( ( message, index ) => {
			if ( 0 === index % 2 ) {
				parsedMessage.push( message );
			} else {
				parsedMessage.push( <span className='spectra-open-ai-modal__chat-bubble--code'>{ message }</span> );
			}
		} );
		return parsedMessage;
	};

	// Start parsing the message whenever a code block is found.
	const messageArray = aiGeneratedMessage.split( '```' );

	// Return early if no code block is found.
	if ( 1 === messageArray.length ) {
		return formatInlineCode( aiGeneratedMessage );
	}

	const parsedMessage = [];
	messageArray.forEach( ( message, index ) => {
		if ( 0 === index % 2 ) {
			parsedMessage.push( formatInlineCode( message ) );
		}
		if ( 1 === index % 2 ) {
			parsedMessage.push( <StructuredCodeBlock { ...{ message } } /> );
		}
	} );
	return parsedMessage;
};

// Render the Chat Bubbles.
const RenderChatLog = ( props ) => {
	const {
		chatBubble,
		updateContent,
		closeModal,
		setGenerating,
		regeneratingId,
		setRegeneratingId,
		aiResponseError,
		setAiResponseError,
		setUserInput = null,
		setRefreshFilters = null,
		editCheck = null,
		setEditCheck = null,
	} = props;

	// Get the chatlog, required for regenerating content.
	const { chatLog, setChatLog } = useContext( ChatLog );

	// State to identify the current page of the chat bubble.
	const [ currentPage, setCurrentPage ] = useState( 0 );

	// State to identify if the user is copying the AI message.
	const [ copyIconInUse, setCopyIconInUse ] = useState( 'default' );

	// State to identify if the user is editing the User message.
	const [ editMode, setEditMode ] = useState( { enabled: false, value: chatBubble?.message } );

	// Condition to check if the chat bubble has multiple variations.
	const hasMultipleVariations = ( chatBubble?.variations?.length && chatBubble.variations.length > 1 );

	// Update the current chat bubble page whenever the chat bubble variations change.
	useEffect( () => {
		if ( ! regeneratingId && 'ai' === chatBubble?.from && hasMultipleVariations ) {
			setCurrentPage( chatBubble.variations.length - 1 );
		}
	}, [ regeneratingId ] );

	// Update the chat log whenever the current page changes.
	useEffect( () => {
		if ( 'ai' === chatBubble?.from && hasMultipleVariations ) {
			chatLog[ chatBubble.id ].message = chatBubble.variations[ currentPage ];
			setChatLog( [ ...chatLog ] );
		}
	}, [ currentPage ] );

	// Clean up the variants when the chat bubble is not the last AI message.
	useEffect( () => {
		if ( 'ai' === chatBubble?.from && chatBubble?.variations && chatBubble?.id !== chatLog?.length - 1 ) {
			chatLog[ chatBubble.id ].variations = [];
			setChatLog( [ ...chatLog ] );
		}
	}, [ chatLog?.length ] );

	// Set ther required variables for user specific elements.
	let userName, chatInteractions, chatAction = chatBubble?.action;

	// Check if the chat bubble is the last one.
	const isLastChatBubble = aiResponseError ? ( chatBubble?.id === chatLog?.length - 2 ) : ( chatBubble?.id === chatLog?.length - 1 );

	// Assign the required user specific elements.
	switch ( chatBubble?.from ) {
		case 'content':
			userName = __( 'Content:', 'ultimate-addons-for-gutenberg' );
			break;
		case 'user':
			userName = __( 'You:', 'ultimate-addons-for-gutenberg' );

			chatInteractions = editCheck ? undefined : [ {
				icon: EditIcon( addChatBubbleSvgStyling ),
				execute: () => {
					if ( null !== setEditCheck ) {
						setEditCheck( true );
					}
					editMode.enabled = true;
					setEditMode( { ...editMode } );
				},
			} ];
			break;
		case 'ai':
			userName = __( 'Zip:', 'ultimate-addons-for-gutenberg' );

			// Set the array of AI variations.
			if ( ! chatBubble?.variations?.length && chatBubble?.message && isLastChatBubble ) {
				chatBubble.variations = [ chatBubble?.message ];
			}

			// Set the chat interactions to an array.
			chatInteractions = [];

			// Add the use this button for AI variations.
			chatAction = {
				execute: async () => {
					if ( null !== updateContent ) {
						updateContent( chatBubble?.message );
					} else {
						try {
							await copyToClipboard( chatBubble?.message );
						} catch {}
					}
					closeModal();
				},
				label: ( null !== updateContent ) ? __( 'Use This', 'ultimate-addons-for-gutenberg' ) : __( 'Copy & Close', 'ultimate-addons-for-gutenberg' ),
			};

			// Add the chat interaction to copy the AI message.
			chatInteractions.push( {
				multiIcons: {
					default: CopyIcon( addChatBubbleSvgStyling ),
					progress: ClockIcon( addChatBubbleSvgStyling ),
					success: CheckIcon( addChatBubbleSvgStyling ),
				},
				execute: async () => {
					try {
						setCopyIconInUse( 'progress' );
						await copyToClipboard( chatBubble?.message );
						setCopyIconInUse( 'success' );
					} catch ( error ) {
						console.error( error );  // eslint-disable-line no-console
						setCopyIconInUse( 'default' );
					}
				},
			} );

			// Exit if the chat bubble is not the last one, or if it doesn't have any variations.
			if ( ! isLastChatBubble || ! chatBubble?.variations?.length ) {
				break;
			}

			// Add the chat interaction to regenerate the content.
			chatInteractions.push( {
					icon: RegenerateIcon( addChatBubbleSvgStyling ),
					execute: () => {
						regenerateText( {
							chatBubble,
							regenerationCommand: 'Rephrase the last assistant message, ensuring that it abides by the last user command.',
							setGenerating,
							setRegeneratingId,
							setAiResponseError,
							chatLog,
							setChatLog,
						} );
					},
				}
			);
			break;
	}

	// Render the edit chat bubble UI.
	const renderEditChatBubble = () => {

		// Find and update the current chatlog bubble, and delete all the following bubbles.
		const confirmEdit = () => {
			// Exit if the user input or refresh filters functions are not set.
			if ( null === setUserInput || null === setRefreshFilters ) {
				setEditMode( { enabled: false, value: chatBubble?.message } );
				if ( null !== setEditCheck ) {
					setEditCheck( false );
				}
				return;
			}

			// Set the required variables.
			const textContent = chatLog[ chatBubble.id - 1 ]?.message || '';
			const textCommand = editMode.value;
			const updatedChatLog = chatLog.slice( 0, chatBubble.id );

			// Update the chat log and generate the new text.
			generateNewText( {
				textContent,
				textCommand,
				setGenerating,
				setText: setUserInput,
				setRefreshFilters,
				setAiResponseError,
				chatLog: updatedChatLog,
				fallbackChatlog: chatLog,
				setChatLog,
			} );

			// Disable the edit mode and turn off the edit check.
			editMode.enabled = false;
			setEditMode( { ...editMode } );
			if ( null !== setEditCheck ) {
				setEditCheck( false );
			}
		};

		return (
			<div className='spectra-open-ai-modal__chat-editor'>
				<input
					className={ zipAiClassNames( [
						'spectra-open-ai-modal__chat-editor--input',
						! editMode?.value && 'spectra-open-ai-modal__chat-editor--input-error',
					] ) }
					type='text'
					value={ editMode.value }
					onChange={ ( event ) => {
						editMode.value = event.target.value;
						setEditMode( { ...editMode } );
					} }
					onKeyDown={ ( event ) => {
						if ( 'Enter' === event.key ) {
							editMode.value = event.target.value;
							setEditMode( { ...editMode } );
							confirmEdit();
						}
					} }
				/>
				<div className='spectra-open-ai-modal__chat-editor--actions'>
					<button
						className='spectra-open-ai-modal__chat-editor--action-primary'
						onClick={ () => { confirmEdit(); } }
						disabled={ editMode?.value?.trim() === '' }
					>
						{ __( 'Update', 'ultimate-addons-for-gutenberg' ) }
					</button>
					<button
						onClick={ () => {
							setEditMode( { enabled: false, value: chatBubble?.message } );
							setEditCheck( false );
						} }
					>
						{ __( 'Cancel', 'ultimate-addons-for-gutenberg' ) }
					</button>
				</div>
				<div className='spectra-open-ai-modal__chat-editor--info'>
					{ __( 'Note: All subsequent messages will be deleted after you update.', 'ultimate-addons-for-gutenberg' ) }
				</div>
			</div>
		);
	};

	// Render the content section of the chat bubble.
	const renderChatBubbleContent = () => (
		<>
			{/* Render the header area if and when needed. */}
			{ ( userName || chatInteractions ) && (
				<div className='spectra-open-ai-modal__chat-bubble--header'>
					{ userName && (
						<h3 className='spectra-open-ai-modal__chat-bubble--user'>
							{ userName }
						</h3>
					) }
					{ chatInteractions && (
						<div className={ zipAiClassNames( [
							'spectra-open-ai-modal__chat-bubble--interaction',
							'user' === chatBubble?.from && 'spectra-open-ai-modal__chat-bubble--interaction-on-hover',
						] ) }>
							{ chatInteractions.map( ( interaction, index ) => (
								<button
									key={ index }
									onClick={ () => interaction?.execute() }
									disabled={ chatBubble.id === regeneratingId }
								>
									{ ( 'ai' === chatBubble?.from && interaction?.multiIcons )
										? renderRequiredCopyIcon( interaction.multiIcons, copyIconInUse, setCopyIconInUse )
										: interaction?.icon
									}
								</button>
							) ) }
						</div>
					) }
				</div>
			) }
			{/* Render the edit area if needed, else render the content area. */}
			{ ( 'user' === chatBubble?.from && editMode?.enabled ) ? renderEditChatBubble() : (
				<>
					{/* Render the loader if the chat bubble ID matches, and it isn't a special type of chat message. */}
					{ ( ! chatBubble?.type && chatBubble.id === regeneratingId ) ? ChatLoader : (
						<>
							<p className='spectra-open-ai-modal__chat-bubble--message'>
								{/* If this was an AI message, Parse it with the preformatted text. */}
								{ 'ai' === chatBubble?.from
									? parseAiMessage( chatBubble?.message )
									: chatBubble?.message
								}
							</p>
							{ chatAction && (
								<div className='spectra-open-ai-modal__chat-bubble--footer'>
									<button
										className='spectra-open-ai-modal__chat-bubble--action'
										onClick={ () => { chatAction?.execute() } }
									>
										{ chatAction?.label || __( 'Click Here', 'ultimate-addons-for-gutenberg' ) }
									</button>
									{ ( isLastChatBubble && hasMultipleVariations ) ? (
										<div className='spectra-open-ai-modal__chat-bubble--pagination'>
											<button
												onClick={ () => { setCurrentPage( currentPage - 1 ) } }
												disabled={ currentPage === 0 }
											>
												{ SmallArrowIcons( addChatBubbleSvgStyling ).left }
											</button>
											<span>
												{ sprintf(
													// translators: %1$d is the current page, %2$d is the total number of pages.
													__( '%1$d / %2$d', 'ultimate-addons-for-gutenberg' ),
													( currentPage + 1 ),
													chatBubble.variations.length
												) }
											</span>
											<button
												onClick={ () => { setCurrentPage( currentPage + 1 ) } }
												disabled={ currentPage === chatBubble.variations.length - 1 }
											>
												{ SmallArrowIcons( addChatBubbleSvgStyling ).right }
											</button>
										</div>
									) : <></> }
								</div>
							) }
						</>
					) }
				</>
			) }
		</>
	);

	return (
		<div
			className={ zipAiClassNames( [
				'spectra-open-ai-modal__chat-bubble',
				chatBubble?.type && `spectra-open-ai-modal__chat-bubble--type-${ chatBubble.type }`,
				chatBubble?.icon && `spectra-open-ai-modal__chat-bubble--has-icon`,
			] ) }
		>
			{ chatBubble?.icon ? (
				<>
					<div className='spectra-open-ai-modal__chat-bubble--icon-wrapper'>
						{ chatBubble.icon }
					</div>
					<div className='spectra-open-ai-modal__chat-bubble--icon-content'>
						{ renderChatBubbleContent() }
					</div>
				</>
			) : renderChatBubbleContent() }
		</div>
	);
};

export default RenderChatLog;
