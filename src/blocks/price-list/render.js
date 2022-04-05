import classnames from 'classnames';
import PositionClasses from './classes';
import React, { useLayoutEffect, useMemo } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
const ALLOWED_BLOCKS = [ 'uagb/restaurant-menu-child' ];

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { className, attributes } = props;

	// Setup the attributes.
	const { isPreview, menu_item_count } = attributes;

	const getPriceListTemplate = useMemo( () => {
		const childList = [];

		for ( let i = 0; i < menu_item_count; i++ ) {
			childList.push( [ 'uagb/restaurant-menu-child', { id: i + 1 } ] );
		}

		return childList;
	}, [ menu_item_count ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/price-list.png`;

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				...PositionClasses( attributes )
			) }
		>
			<InnerBlocks
				template={ getPriceListTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'horizontal' }
			/>
		</div>
	);
};
export default React.memo( Render );
