/**
 * BLOCK: Advanced Heading
 */
import styling from './styling';
import { useEffect } from '@wordpress/element';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
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
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
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

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
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
		
		let editorStyles = '';
		for ( const style of globalBlockStyles ) {
			if ( style?.value === globalBlockStyleId && style?.label === globalBlockStyleName ) {
				editorStyles = style?.editorStyles
				break;
			}
		}
		return {
			editorStyles,
		};	
	} )
)( UAGBAdvancedHeading );

