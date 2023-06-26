/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */

export function getImageSize( sizes ) {
	const sizeArr = [];
	for ( const size in sizes ) {
		if ( sizes.hasOwnProperty( size ) ) {
			const p = { value: size, label: size };
			sizeArr.push( p );
		}
	}
	return sizeArr;
}

export function getIdFromString( label ) {
	return label
		? label
				.toLowerCase()
				.replace( /[^a-zA-Z ]/g, '' )
				.replace( /\s+/g, '-' )
		: '';
}

export function getPanelIdFromRef( ref ) {
	if ( ref.current ) {
		const parentElement = ref.current.parentElement.closest( '.components-panel__body' );
		if ( parentElement && parentElement.querySelector( '.components-panel__body-title' ) ) {
			return getIdFromString( parentElement.querySelector( '.components-panel__body-title' ).textContent );
		}
	}
	return null;
}

export const uagbClassNames = ( classes ) => classes.filter( Boolean ).join( ' ' );

export const uagbDeepClone = ( arrayOrObject ) => JSON.parse( JSON.stringify( arrayOrObject ) );

// Function to check if a given string is a single word
export const isSingleWord = ( str ) => str.lastIndexOf( ' ' ) === -1;

// Function to check if the given string is the first word in the original string
export const isFirstWord = ( str, originalStr ) => str.length === originalStr.split( ' ' )[0].length;

// Function to trim text by max character length to the last complete word
export const trimTextToFullyVisibleWord = ( text, maxLength, useEllipsis = true ) => {
	// Return an empty string if the input text is empty or not provided
	if ( !text ) {
		return '';
	}

	const disallowedLastCharacters = [',', '.', ' ', "'"];

	// If the input text is already within the maxLength, return the original text
	if ( text.length <= maxLength ) {
		return text;
	}

	// Limit the caption based on the maxLength
	let limitedCaption = text.substr( 0, maxLength );

	// Check if the limited caption is a single word
	if ( isSingleWord( limitedCaption ) ) {
		// If the original text is a single word and the limited caption is the first word, return the original text
		if ( isSingleWord( text ) && isFirstWord( limitedCaption, text ) ) {
			return text;
		}
		limitedCaption = '';
	} else if ( limitedCaption.length !== text.length && text.charAt( limitedCaption.length ) !== ' ' ) {
		// If the limited caption is not the same as the original text and the end of the limited text is not a word,
		// trim the limited caption to the last complete word
		limitedCaption = limitedCaption.substr( 0, Math.min( limitedCaption.length, limitedCaption.lastIndexOf( ' ' ) ) );
	}

	// Remove any disallowed characters from the end of the limited caption
	if ( disallowedLastCharacters.includes( limitedCaption.charAt( limitedCaption.length - 1 ) ) ) {
		limitedCaption = limitedCaption.slice( 0, limitedCaption.length - 1 );
	}

	// Determine if an ellipsis is needed based on the useEllipsis flag and the length of the input text
	const needsEllipsis = useEllipsis && text.length > maxLength;
	return `${limitedCaption}${needsEllipsis ? '…' : ''}`;
};
