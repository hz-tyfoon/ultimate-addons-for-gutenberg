/**
 * BLOCK: Forms - Radio - Edit
 */

import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';
import Settings from './settings';
import Render from './render';

const UAGBFormsRadioEdit = ( props ) => {
	const { isSelected, clientId } = props;
	// eslint-disable-next-line no-unused-vars
	const [ state, setState ] = useState( {
		optionsstate: [
			{
				optiontitle: __( 'Option Name 1', 'ultimate-addons-for-gutenberg' ),
			},
		],
	} );
	useEffect( () => {
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', 'uagb-style-forms-radio-' + clientId.substr( 0, 8 ) );
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
)( UAGBFormsRadioEdit );
