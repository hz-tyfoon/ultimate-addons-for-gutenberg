/**
 * BLOCK: Template Everything - Save Block
 */

import classnames from 'classnames';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes: { block_id },
	} = props;

	const blockProps = useBlockProps.save( {
		className: classnames(
			`uagb-block-${ block_id }`,
			'uagb-template-everything__wrap'
		),
	} );
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
