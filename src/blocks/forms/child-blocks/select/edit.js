/**
 * BLOCK: Forms - Select - Edit
 */

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';
import Settings from './settings';
import Render from './render';

const UAGBFormsSelectEdit = ( props ) => {
	const [ setState ] = useState( {
		optionsstate: [
			{
				optiontitle: __( 'Option Name 1', 'ultimate-addons-for-gutenberg' ),
			},
		],
	} );

	return (
		<>
			{ props.isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } setState={ setState } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsSelectEdit );
