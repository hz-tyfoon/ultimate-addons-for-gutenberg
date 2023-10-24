/**
 * Spec React Helpers.
 */


// Format a number to append K or M.
export const formatNumber = ( number ) => {
	if ( number >= 1000000 ) {
		return ( number / 1000000 ).toFixed( 1 ).replace( /\.0$/, '' ) + 'M';
	}
	if ( number >= 1000 ) {
		return ( number / 1000 ).toFixed( 1 ).replace( /\.0$/, '' ) + 'K';
	}
	return number;
};

// Convert array of classes to a single string.
export const specClassNames = ( classes ) => ( classes.filter( Boolean ).join( ' ' ) );
