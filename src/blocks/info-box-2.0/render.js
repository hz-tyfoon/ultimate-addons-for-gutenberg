import classnames from 'classnames';
import React from 'react';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [
	'uagb/advanced-heading',
	'uagb/blockquote',
	'uagb/buttons',
	'uagb/icon-list',
	'uagb/social-share',
	'uagb/star-rating'
];

import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {

	props = props.parentProps;

	const deviceType = useDeviceType();

	const { attributes } = props;
	const {
		block_id,
	} = attributes;

	return (
		<>
			<div
				className={ classnames(
					`uagb-block-${ block_id }`,
					`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
				) }
			>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		</>
	);
};

export default React.memo( Render );
