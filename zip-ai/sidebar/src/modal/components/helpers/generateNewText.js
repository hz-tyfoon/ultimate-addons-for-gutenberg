import { OpenAiResponder } from '@Sidebar/utils';

// Function to generate new text and add it to the chat.
export const generateNewText = ( params ) => {
	const {
		startingText = '',
		textContent,
		textCommand,
		setGenerating,
		setText,
		setRefreshFilters,
		setAiResponseError,
		chatLog,
		setChatLog,
		fallbackChatlog = null,
		oneClickCommand = null,
		setValidForSaving = null,
	} = params;

	// Add a fallback for the chat log state, the ID counter, and create the chatlog to update.
	const olderChatLog = fallbackChatlog || chatLog || [];
	let currentId = chatLog.length;
	let updatedChatLog = [
		...chatLog,
		{
			id: currentId,
			from: 'user',
			message: oneClickCommand || ( ( chatLog?.length || startingText ) ? textCommand : textContent ),
		},
	];

	++currentId;
	setGenerating( true );
	setAiResponseError( '' );
	setChatLog( [ ...updatedChatLog ] );
	OpenAiResponder( textContent, textCommand, undefined, false ).then( ( result ) => {
		const response = result.data;
		setGenerating( false );
		if ( result.success ) {
			if ( response.message.startsWith( '"' ) && response.message.endsWith( '"' ) ) {
				response.message = response.message.slice( 1, -1 );
			}
			updatedChatLog = [
				...updatedChatLog,
				{
					id: currentId,
					from: 'ai',
					message: response.message.trim(),
				},
			]
			setText( '' );
			setChatLog( [ ...updatedChatLog ] );
			if ( 'function' === typeof setValidForSaving ) {
				setValidForSaving( true );
			}
		} else {
			setAiResponseError( response.message );
			setChatLog( [ ...olderChatLog ] );
		}
		// Refresh when the content generation is over.
		setRefreshFilters( true );
	} ).catch( () => {
		setGenerating( false );
	} );
	// Refresh when the content generation has started.
	setRefreshFilters( true );
};

// Function to regenerate the given text.
export const regenerateText = ( params ) => {
	const {
		chatBubble,
		regenerationCommand,
		setGenerating,
		setRegeneratingId,
		setAiResponseError,
		chatLog,
		setChatLog,
	} = params;

	// Create the previous messages array.
	const previousMessages = [];

	// Add the last AI message to the array if it exists.
	if ( chatLog[ chatBubble.id - 2 ]?.message ) {
		previousMessages.push( { role: 'assistant', message: chatLog[ chatBubble.id - 2 ].message } );
	}

	// Add the previous messages to the array.
	previousMessages.push(
		{ role: 'user', message: chatLog[ chatBubble.id - 1 ].message },
		{ role: 'assistant', message: chatBubble.variations[ 0 ] }
	);

	// Add the previously generated variations to the array.
	if ( chatBubble?.variations?.length && chatBubble.variations.length > 1 ) {
		chatBubble.variations.forEach( ( variation, index ) => {
			if ( index === 0 ) {
				return;
			}
			previousMessages.push(
				{ role: 'user', message: regenerationCommand },
				{ role: 'assistant', message: variation }
			);
		} );
	}

	setRegeneratingId( chatBubble.id );
	setGenerating( true );
	setAiResponseError( '' );
	OpenAiResponder( regenerationCommand, '', undefined, false, previousMessages ).then( ( result ) => {
		const response = result.data;
		setGenerating( false );
		setRegeneratingId( null );
		if ( result.success ) {
			if ( response.message.startsWith( '"' ) && response.message.endsWith( '"' ) ) {
				response.message = response.message.slice( 1, -1 );
			}
			// Find the current chat bubble.
			chatLog.forEach( ( iteratedBubble, index ) => {
				if ( chatBubble.id === iteratedBubble.id ) {
					chatLog[ index ].message = ( response.message.trim() );
					chatLog[ index ].variations.push( response.message.trim() );
					setChatLog( [ ...chatLog ] );
				}
			} );
		} else {
			setAiResponseError( response.message );
		}
	} ).catch( () => {
		setGenerating( false );
		setRegeneratingId( null );
	} );
}
