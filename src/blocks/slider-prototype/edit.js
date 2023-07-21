/**
 * BLOCK: Slider
 */
import { useLayoutEffect, useMemo } from '@wordpress/element';
import { withSelect, useDispatch } from '@wordpress/data';
import styling from './styling';
import Render from './render';
//  Import CSS.
import './style.scss';
import { compose } from '@wordpress/compose';
import styles from './editor.lazy.scss';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import AddStaticStyles from '@Controls/AddStaticStyles';

const UAGBSliderPrototype = ( props ) => {
	const {
		attributes,
		clientId,
		name,
		deviceType,
	} = props;

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<Render parentProps={ props } />
		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => {
	// eslint-disable-line no-shadow
	const { insertBlock } = useDispatch( 'core/block-editor' );

	const { getSelectedBlock, getBlockParents } = select( 'core/block-editor' );
	const selectedBlock = getSelectedBlock();
	const parentBlockIds = getBlockParents( selectedBlock?.clientId );
	const blockParents = select( 'core/block-editor' ).getBlocksByClientId( parentBlockIds );

	return {
		insertBlock,
		block: ( select( 'core/block-editor' ) || select( 'core/editor' ) ).getBlock( props.clientId ),
		blockParents,
	};
} );

export default compose(
	applyWithSelect,
	AddStaticStyles,
)( UAGBSliderPrototype );

