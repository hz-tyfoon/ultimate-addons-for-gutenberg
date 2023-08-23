// SVG For Right Hand Side Spinner.
export const svgSpinner = (
    <svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export async function authentiCateApiKey( openAiKey ) {
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
