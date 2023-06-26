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

// Trim text by max character length to the last complete word. 
export const trimTextToFullyVisibleWord = ( text, maxLength ) => {

	if( ! text ) {
		return '';
	}

	let needsEllipsis = true;
	let limitedCaption = text;

	const disallowedLastCharacters = [ ',', '.', ' ', "'" ]

	if ( needsEllipsis && text.length <= maxLength ) {
		// The caption is already below the limiter.
		needsEllipsis = false;
	} else if ( needsEllipsis ) {
		limitedCaption = limitedCaption.substr( 0, maxLength );
		if ( -1 === limitedCaption.lastIndexOf( ' ' ) ) {
			// There's only 1 word.
			if ( -1 === text.lastIndexOf( ' ' ) ) {
				// There's only 1 word in the original caption.
				if ( limitedCaption.length === text.split( ' ' )[ 0 ].length ) {
					// The limited caption is the same as the original.
					needsEllipsis = false;
				} else {
					// The limited caption differs from the original.
					limitedCaption = '';
				}
			} else if ( limitedCaption.length !== text.split( ' ' )[ 0 ].length ) {
				// There's more than 1 word in the original caption and...
				// The limited caption is smaller than 1 word in the original.
				limitedCaption = '';
			}
		} else if ( limitedCaption.length === text.length ) {
			// There is a space and...
			// The limited caption is the same as the original.
			needsEllipsis = false;
		} else if ( ' ' !== text.charAt( limitedCaption.length ) ) {
			// The limited caption differs from the original and...
			// The end of the limited text is not a word.
			limitedCaption = limitedCaption.substr(
				0,
				Math.min( limitedCaption.length, limitedCaption.lastIndexOf( ' ' ) )
			);
		}
	}

	if ( disallowedLastCharacters.includes( limitedCaption.charAt( limitedCaption.length - 1  ) ) ) {
		limitedCaption = limitedCaption.slice( 0, limitedCaption.length - 1 );
	}

	return `${ limitedCaption }${ needsEllipsis ? '…' : '' }`;
};
