/**
 * BLOCK: Forms - Toggle - Edit
 */

import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';
import Settings from './settings';
import Render from './render';

const UAGBFormsToggleEdit = ( props ) => {
	return (
		<>
			{ props.isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsToggleEdit );
