import { useEffect, useMemo } from '@wordpress/element';
import styling from './styling';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import { GoogleMapsWrapper } from './wrapper';

const UAGBGoogleMap = ( props ) => {
	const {
		isSelected,
		attributes,
		setAttributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		name,
		clientId,
		deviceType
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( {
			block_id: clientId.substr( 0, 8 ),
		} );
	}, [] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	AddStaticStyles,
	GoogleMapsWrapper
)( UAGBGoogleMap );
