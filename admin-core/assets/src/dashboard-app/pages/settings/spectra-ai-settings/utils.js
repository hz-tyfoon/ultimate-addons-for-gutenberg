export async function authenticateApiKey( openAiKey ) {
	const messageArray = [{ role: 'user', content: 'Spectra Testing' }];

	const response = await fetch( 'https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${openAiKey}`, // will get data saved by user.
			},
			body: JSON.stringify( {
				model: 'gpt-3.5-turbo', // we will provide option to choose this model later. for now keeping it as default.
				messages: messageArray,
			} ),
		} );

	return await response.json();
}
