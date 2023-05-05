/**
 * BLOCK: Forms - Upload - Edit
 */

import { useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';

import Settings from './settings';
import Render from './render';

const UAGBFormsUploadEdit = ( props ) => {
	const { isSelected, clientId } = props;

	useEffect( () => {
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', 'uagb-style-forms-upload-' + clientId.substr( 0, 8 ) );
		document.head.appendChild( $style );
	}, [] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsUploadEdit );
