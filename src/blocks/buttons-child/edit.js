/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import styling from './styling';

import React, { useEffect, useState,    } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';

const ButtonsChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	const initialState = {
		isURLPickerOpen: false,
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const { attributes, setAttributes } = props;
		const {
			vPadding,
			hPadding,
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
		} = attributes;

		if ( vPadding ) {
			if ( undefined === topPadding ) {
				setAttributes( { topPadding: vPadding } );
			}
			if ( undefined === bottomPadding ) {
				setAttributes( { bottomPadding: vPadding } );
			}
		}

		if ( hPadding ) {
			if ( undefined === rightPadding ) {
				setAttributes( { rightPadding: hPadding } );
			}
			if ( undefined === leftPadding ) {
				setAttributes( { leftPadding: hPadding } );
			}
		}
		const { borderStyle, borderWidth, borderRadius, borderColor, borderHoverColor } = props.attributes
		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'btn', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes
			);

		}
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-button-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-button-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	return (
			<>
			<Settings
				parentProps={ props }
				state={ state }
				setStateValue={ setStateValue }
				deviceType = { deviceType }
			/>
			<Render parentProps={ props } />
			</>

	);
};
export default ButtonsChildComponent;
