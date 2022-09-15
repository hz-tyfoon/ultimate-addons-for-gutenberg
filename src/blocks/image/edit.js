import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import styling from './styling';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/image/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/image/render" */ './render'
	)
);

//  Import CSS.
import './style.scss';


export default function UAGBImageEdit( props ) {
	const deviceType = useDeviceType();
	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-image-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props, deviceType ] );

	return (
		<React.Fragment>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</React.Fragment>
	);
}
