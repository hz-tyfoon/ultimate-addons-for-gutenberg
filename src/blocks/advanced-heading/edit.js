/**
 * BLOCK: Advanced Heading
 */

import { useEffect } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import styling from './styling';
import DynamicCSSLoader from '../../components/dynamic-css-loader/CssLoader';
import DynamicFontLoader from '../../components/dynamic-font-loader/FontLoader';

const UAGBAdvancedHeading = ( props ) => {
	const deviceType = useDeviceType();
	const {
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, headLoadGoogleFonts, headFontFamily, headFontWeight, subHeadLoadGoogleFonts, subHeadFontFamily, subHeadFontWeight },
		isSelected,
		setAttributes,
		clientId,
		name
	} = props;

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } )

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = styling( attributes, clientId, name, deviceType );

	return (
			<>
			<DynamicCSSLoader {...{blockStyling}} />
			<DynamicFontLoader {...{headLoadGoogleFonts, headFontFamily, headFontWeight, subHeadLoadGoogleFonts, subHeadFontFamily, subHeadFontWeight}} />
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
			</>
	);
};
export default UAGBAdvancedHeading;
