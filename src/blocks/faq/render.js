/**
 * BLOCK: FAQ
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useLayoutEffect, memo, useMemo } from '@wordpress/element';

import styles from './editor.lazy.scss';
const ALLOWED_BLOCKS = [ 'uagb/faq-child' ];

const faq = [];
const faqCount = 2;

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	// const blockProps = useBlockProps();
	
	
	const { attributes, deviceType } = props;
	const { equalHeight, block_id } = attributes;
	
	const getFaqChildTemplate = useMemo( () => {
		const childFaq = [];
		
		for ( let i = 0; i < faqCount; i++ ) {
			childFaq.push( [ 'uagb/faq-child', faq[ i ] ] );
		}
		
		return childFaq;
	}, [ faqCount, faq ] );
	
	const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';
	const blockProps = useBlockProps({
		className: `uagb-faq__outer-wrap uagb-editor-preview-mode-${deviceType.toLowerCase()} uagb-block-${block_id} uagb-faq-icon-${attributes.iconAlign} uagb-faq-layout-${attributes.layout} uagb-faq-expand-first-${attributes.expandFirstItem} uagb-faq-inactive-other-${attributes.inactiveOtherItems} ${equalHeightClass}`,
	});
	console.log({ getFaqChildTemplate })
	const innerBlocksProps = useInnerBlocksProps(blockProps, { template: { getFaqChildTemplate }, templateLock: false, allowedBlocks: ALLOWED_BLOCKS, __experimentalMoverDirection: 'vertical' } );
	return (
		<div
			// className={ classnames(
			// 	'uagb-faq__outer-wrap',
			// 	`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
			// 	`uagb-block-${ block_id }`,
			// 	`uagb-faq-icon-${ attributes.iconAlign }`,
			// 	`uagb-faq-layout-${ attributes.layout }`,
			// 	`uagb-faq-expand-first-${ attributes.expandFirstItem }`,
			// 	`uagb-faq-inactive-other-${ attributes.inactiveOtherItems }`,
			// 	equalHeightClass
			// ) }
			{...blockProps}
			data-faqtoggle={ attributes.enableToggle }
			role="tablist"
			{...innerBlocksProps}
		>
			{/* <div {...innerBlocksProps} /> */}
			{/* <InnerBlocks
				template={ getFaqChildTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'vertical' }
			/> */}
		</div>
	);
};

export default memo( Render );
