import { select, subscribe, dispatch } from '@wordpress/data';
import { createBlock, parse, serialize } from '@wordpress/blocks';
import isInvalid from './isInvalid';
// Flag to Detect if At Least One Block was Recovered.
let recoveryDone = false;

// Create Recovery CSS to Hide All Errornous Blocks.
const createRecoveryCSS = () => {
	const recoveryCSS = document.createElement('style');
	recoveryCSS.setAttribute('id', 'uagb-recovery-styles');
	recoveryCSS.innerHTML = '.has-warning[data-type^="uagb/"] { opacity: 0 !important; }';
	document.body.appendChild(recoveryCSS);
};

// Destroy the Recovery CSS to Restore the Editor to its Original State.
const destroyRecoveryCSS = () => {
	const recoveryCSS = document.querySelector('#uagb-recovery-styles');
	if (recoveryCSS) {
		document.body.removeChild(recoveryCSS);
	}
};

// Start Block Recovery for all Spectra Blocks.
const initBlockRecovery = (blocks) => {
	const curBlocks = [...blocks];
	let isRecovered = false;

	const recoverInnerBlocks = (innerBlocks) => {
		innerBlocks.forEach((block) => {
			if (isInvalid(block)) {
				isRecovered = true;
				const newBlock = recoverBlock(block);
				for (const key in newBlock) {
					block[key] = newBlock[key];
				}
			}

			if (block.innerBlocks.length) {
				recoverInnerBlocks(block.innerBlocks);
			}
		});
	};

	recoverInnerBlocks(curBlocks);
	return [curBlocks, isRecovered];
};

// Create Replacement Blocks Based on the Fixed Variant.
const recoverBlocks = (allBlocks) =>
	allBlocks.map((block) => {
		const curBlock = block;
		
		if ('core/block' === block.name) {
			const {
				attributes: { ref },
			} = block;
			const reusableBlockPosts = select('core').getEntityRecords('postType', 'wp_block');

			let reusableBlockPost = null;

			if (reusableBlockPosts) {
				reusableBlockPosts?.forEach((post) => {
					if (ref === post?.id) {
						reusableBlockPost = post?.content?.raw;
					}
				});
			}

			if (null === reusableBlockPost) {
				return curBlock;
			}

			const parsedBlocks = parse(reusableBlockPost) || [];

			const [recoveredBlocks, isRecovered] = initBlockRecovery(parsedBlocks);

			if (isRecovered) {
				recoveryDone = true;
				return {
					blocks: recoveredBlocks,
					isReusable: true,
					ref,
				};
			}
		}
		// console.log(curBlock)
		if (curBlock.innerBlocks && curBlock.innerBlocks.length) {
			const newInnerBlocks = recoverBlocks(curBlock.innerBlocks);
			if (newInnerBlocks.some((innerBlock) => innerBlock.recovered)) {
				curBlock.innerBlocks = newInnerBlocks;
				curBlock.replacedClientId = curBlock.clientId;
				curBlock.recovered = true;
			}
		}
		// console.log(curBlock)
		// console.log(isInvalid(curBlock))
		if (isInvalid(curBlock)) {
			recoveryDone = true;
			// console.log(curBlock)
			const newBlock = recoverBlock(curBlock);
			// console.log(curBlock)
			// console.log(newBlock)
			newBlock.replacedClientId = curBlock.clientId;
			newBlock.recovered = true;
			// console.log(newBlock)
			return newBlock;
		}

		return curBlock;
	});

// Recover Current Block.
const recoverBlock = ({ name, attributes, innerBlocks }) => createBlock(name, attributes, innerBlocks);

// const replaceRecoverBlock = ( recoveredBlocks ) => {
	
// 	recoveredBlocks.forEach((block) => {
// 		if (block.isReusable && block.ref) {
// 			dispatch('core')
// 				.editEntityRecord('postType', 'wp_block', block.ref, {
// 					content: serialize(block.blocks),
// 				})
// 				.then();
// 		}

// 		if (block.recovered && block.replacedClientId) {
// 			// console.log(block.replacedClientId)
// 			console.log(block)
// 			// console.log(select('core/edit-site').getSelectedBlock())
// 			dispatch('core/block-editor').replaceBlock(block.replacedClientId, block);
// 			// dispatch(preferencesStore).toggle(block.replacedClientId, block);
// 		}
// 	});
// }

// Start with the Automatic Block Recovery Process.
const autoBlockRecovery = () => {
	createRecoveryCSS();
	setTimeout(() => {
		const unsubscribe = subscribe(() => {
			let templateBlocks, postContent;
			// console.log(select('core/edit-site').getEditedPostType())
			if (select('core/edit-site').getCurrentTemplateTemplateParts() ){
				const templates = select('core').getEntityRecords('postType', 'wp_template_part');
				// Process the retrieved templates
				if (templates && templates.length > 0) {
					// templates.map((templateParts) => {
					postContent = templates[0]?.content?.raw;
						templateBlocks = parse(postContent);
					// 	if (uagb_blocks_info.is_site_editor){
					// 		unsubscribe();
					// 		const recoveredBlocks = recoverBlocks(templateBlocks);
					// 		// console.log(recoveredBlocks)
					// 		// replaceRecoverBlock(recoveredBlocks);
					// 	}
					// });
				} else {
					console.log('No templates found.');
				}
			}
			if (select('core').getEntityRecords('postType', 'wp_block') !== null) {
				unsubscribe();
				// const recoveredBlocks = recoverBlocks(select('core/block-editor').getBlocks());
				const recoveredBlocks = recoverBlocks(templateBlocks);
				// replaceRecoverBlock(recoveredBlocks);
				recoveredBlocks.forEach((block) => {
					if (block.isReusable && block.ref) {
						dispatch('core')
							.editEntityRecord('postType', 'wp_block', block.ref, {
								content: serialize(block.blocks),
							})
							.then();
					}

					if (block.recovered && block.replacedClientId) {
						// console.log(block.replacedClientId)
						console.log(block)
						// console.log(select('core/edit-site').getSelectedBlock())
						dispatch('core/block-editor').replaceBlock(block.replacedClientId, block);
						// dispatch(preferencesStore).toggle(block.replacedClientId, block);
					}
				});
				if (recoveryDone) {
					//eslint-disable-next-line no-console
					console.log(
						'%cSpectra Auto Recovery Enabled: All Spectra Blocks on this page have been recovered!',
						'border-radius: 6px; width: 100%; margin: 16px 0; padding: 16px; background-color: #007CBA; color: #fff; font-weight: bold; text-shadow: 2px 2px 2px #0063A1;'
					);
				}
				destroyRecoveryCSS();
			}
		});
	}, 0);
};

export default autoBlockRecovery;