/**
 * BLOCK: Forms - Radio - Edit
 */

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';
import Settings from './settings';
import Render from './render';

const UAGBFormsRadioEdit = ( props ) => {
	// eslint-disable-next-line no-unused-vars
	const [ state, setState ] = useState( {
		optionsstate: [
			{
				optiontitle: __( 'Option Name 1', 'ultimate-addons-for-gutenberg' ),
			},
		],
	} );

	return (
		<>
			{ props.isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsRadioEdit );
