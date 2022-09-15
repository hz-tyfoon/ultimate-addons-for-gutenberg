/**
 * BLOCK: Column - Edit
 */

import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/column/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/column/render" */ './render' )
);
import {migrateBorderAttributes} from '@Controls/generateAttributes';

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const ColumnComponent = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {

		const { setAttributes, attributes } = props;

		const { backgroundOpacity, backgroundImageColor, backgroundType } = attributes;

		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		if ( 'image' === backgroundType ) {
			if ( 101 !== backgroundOpacity ) {
				const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
				setAttributes( { backgroundImageColor: color } );
				setAttributes( { backgroundOpacity: 101 } );
			}
		}
		const { borderStyle, borderWidth, borderRadius, borderColor, borderHoverColor } = props.attributes
		// border migration
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			const migrationAttributes = migrateBorderAttributes( 'column', {
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
			}
			);
			props.setAttributes( migrationAttributes )
		}

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-column-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-column-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } deviceType = { deviceType }/>
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default ColumnComponent;
