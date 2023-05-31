/**
 * BLOCK: Price List
 */

import Settings from './settings';
import Render from './render';
import addInitialAttr from '@Controls/addInitialAttr';
import { compose } from '@wordpress/compose';

const UAGBRestaurantMenuChild = ( props ) => {
	const { isSelected } = props;
	
	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBRestaurantMenuChild );
