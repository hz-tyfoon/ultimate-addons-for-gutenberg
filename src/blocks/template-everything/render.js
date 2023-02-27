import classnames from 'classnames';
import React from 'react';
import { useDeviceType } from '@Controls/getPreviewType';

const ALLOWED_BLOCKS = [
	'uagb/advanced-heading',
	'uagb/image',
	'uagb/marketing-button',
	'uagb/blockquote',
	'uagb/buttons',
	'uagb/icon-list',
	'uagb/star-rating',
	'uagb/container',
];

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const Render = ( props ) => {
	props = props.parentProps;

	const deviceType = useDeviceType();

	const {
		attributes: { block_id, lockTemplate },
	} = props;

	const blockProps = useBlockProps( {
		className: classnames(
			`uagb-block-${ block_id }`,
			'uagb-template-everything__wrap',
			`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
		),
	} );

	return (
		<>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					templateLock={ lockTemplate ? 'all' : false }
				/>
			</div>
		</>
	);
};

export default React.memo( Render );
