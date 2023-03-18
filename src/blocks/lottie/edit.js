/**
 * BLOCK: Lottie Edit
 */

import styling from './styling';
import { useEffect,useState,useRef } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import { STORE_NAME as storeName } from '@Store/constants';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBLottie = ( props ) => {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, loop, reverse, globalBlockStyleId },
		clientId,
		editorStyles
	} = props;
	const lottieplayer = useRef();
	const [ state, setState ] = useState( { direction: 1, loopState: true } );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
		
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-lottie-style-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props, deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	const loopLottie = () => {
		const { loopState } = state;
		setAttributes( { loop: ! loop } );
		setState( { loopState: ! loopState } );
	};

	const reverseDirection = () => {
		const { direction } = state;
		setAttributes( { reverse: ! reverse } );
		setState( { direction: direction * -1 } );
	};

	useEffect( () => {
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles, deviceType] );

	return (
		<>
			<Render lottieplayer={ lottieplayer } parentProps={ props } />
			<Settings
				parentProps={ props }
				loopLottie={ loopLottie }
				reverseDirection={ reverseDirection }
				styling={styling}
			/>
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
)( UAGBLottie );
