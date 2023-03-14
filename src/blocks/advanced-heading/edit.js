/**
 * BLOCK: Advanced Heading
 */
import styling from './styling';
import { useEffect } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import Settings from './settings';
import Render from './render';
import { STORE_NAME as storeName } from '@Store/constants';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

//  Import CSS.
import './style.scss';

const UAGBAdvancedHeading = ( props ) => {
	const deviceType = useDeviceType();
	const {
		attributes,
		editorStyles,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, globalBlockStyleId },
		isSelected,
		setAttributes,
		clientId
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
		const blockStyling = styling( props );
		addBlockEditorDynamicStyles(
			'uagb-adv-heading-style-' + clientId.substr( 0, 8 ),
			blockStyling
		);
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles, deviceType] );

	return (
			<>
			{ isSelected && <Settings parentProps={ props } styling={styling} /> }
				<Render parentProps={ props } />
			</>
	);
};

export default compose(
	withSelect( ( select, props ) => {

		const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
		const { 
			globalBlockStyleId,
			globalBlockStyleName
		} = props.attributes;
		
		const editorStyles = getGBSEditorStyles(globalBlockStyles,globalBlockStyleId,globalBlockStyleName);
		
		return {
			editorStyles,
		};	
	} )
)( UAGBAdvancedHeading );

