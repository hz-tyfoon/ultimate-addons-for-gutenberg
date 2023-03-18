/**
 * BLOCK: Icon List Child
 */

// Import classes
import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import { STORE_NAME as storeName } from '@Store/constants';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

let hideLabel;

const UAGBIconListChild = ( props ) => {

	const deviceType = useDeviceType();
	const { isSelected, setAttributes, clientId, attributes, attributes : { globalBlockStyleId }, editorStyles } = props;
	
	useEffect( ()=>{
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

	}, [] )

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-child' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles, deviceType] );

	return (
			<>
				{ isSelected && <Settings parentProps={ props } hideLabel={ hideLabel } styling={styling} /> }
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

		const editorStyles = getGBSEditorStyles( globalBlockStyles,globalBlockStyleId,globalBlockStyleName );

		return {
			editorStyles,
		};	
	} )
)( UAGBIconListChild );