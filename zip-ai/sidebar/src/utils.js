import apiFetch from '@wordpress/api-fetch';

// The OpenAI Responder
export const OpenAiResponder = async (
	userMessage,
	systemMessage = '',
	openAiKey = '',
	useSystemRole = true,
	previousMessages = []
) => {

	const messageArray = [ { role: 'system', content: 'You are Zip - a content writer that writes content for a website. You will only generate content for what you are asked.' } ];

	// Attach the system message to the user message if any.
	if ( systemMessage.length ) {
		userMessage = `${ systemMessage }\n\n\n${ userMessage }`;
	}

	// Add the previous messages to the message array.
	if ( previousMessages.length ) {
		previousMessages.forEach( ( chat ) => {
			messageArray.push( { role: chat.role, content: chat.message } );
		} );
	}

	// Add the user message to the message array.
	messageArray.push( { role: 'user', content: userMessage } );

	const postData = {
		user_message: userMessage,
		use_system_role: useSystemRole,
		message_array: messageArray,
	};

	if( openAiKey ) {
		postData.user_key = openAiKey;
	}

	return apiFetch( {
		path: 'zip_ai/generate',
		method: 'POST',
		data: postData,
	} );
};

// The OpenAI response parser.
export const getResponse = ( data ) => {
	let response = {};
	if ( data?.error ) {
		response = {
			success : false,
			message : data.error?.message || 'Something went wrong.',
		};
	} else if ( data?.choices?.[0]?.message?.content ) {
		response = {
			success : true,
			message : data.choices[0].message.content,
		};
	}
	return response;
};
