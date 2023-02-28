/**
 * BLOCK: Template Everything.
 */
import styling from './styling';
import React, { useEffect, useCallback, useLayoutEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import { __experimentalBlockVariationPicker } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { withNotices } from '@wordpress/components';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import './style.scss';
import styles from './editor.lazy.scss';

const UAGBTemplateEverything = ( props ) => {
	const deviceType = useDeviceType();

	const {
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		isSelected,
		setAttributes,
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles(
			'uagb-template-everything-style-' + clientId.substr( 0, 8 ),
			blockStyling
		);
	}, [ props.attributes ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles(
			'uagb-template-everything-style-' + clientId.substr( 0, 8 ),
			blockStyling
		);
	}, [ deviceType ] );

	const {
		innerBlocks, // eslint-disable-line no-unused-vars
		blockType, // eslint-disable-line no-unused-vars
		variations,
		hasInnerBlocks,
		defaultVariation,
	} = useSelect( ( select ) => {
		const { getBlocks } = select( 'core/block-editor' );
		const {
			getBlockType,
			getBlockVariations,
			getDefaultBlockVariation,
		} = select( 'core/blocks' );

		return {
			innerBlocks: getBlocks( clientId ),
			hasInnerBlocks:
				select( 'core/block-editor' ).getBlocks( clientId ).length > 0,

			blockType: getBlockType( props.name ),
			defaultVariation:
				typeof getDefaultBlockVariation === 'undefined'
					? null
					: getDefaultBlockVariation( props.name ),
			variations:
				typeof getBlockVariations === 'undefined'
					? null
					: getBlockVariations( props.name ),
		};
	} );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const createBlocksFromInnerBlocksTemplate = useCallback(
		( innerBlocksTemplate ) => {
			return innerBlocksTemplate.map( (
				[ name, attributes, innerBlocks = [] ] // eslint-disable-line no-shadow
			) =>
				createBlock(
					name,
					attributes,
					createBlocksFromInnerBlocksTemplate( innerBlocks )
				)
			);
		}
	);
	const blockVariationPickerOnSelect = useCallback(
		( nextVariation = defaultVariation ) => {
			if ( nextVariation.attributes ) {
				props.setAttributes( nextVariation.attributes );
			}

			if ( nextVariation.innerBlocks ) {
				replaceInnerBlocks(
					clientId,
					createBlocksFromInnerBlocksTemplate(
						nextVariation.innerBlocks
					)
				);
			}
			props.setAttributes( { variationChange: false } );
		}
	);

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/template-everything.svg`;

	if (
		( ! props.attributes.isPreview && ! hasInnerBlocks ) ||
		( props.attributes.variationChange && hasInnerBlocks )
	) {
		return (
			<div className="uagb-template-everything_variations">
				<__experimentalBlockVariationPicker
					label={ __(
						'Template Everything!',
						'ultimate-addons-for-gutenberg'
					) }
					instructions={ __(
						'Select a variation to start with.',
						'ultimate-addons-for-gutenberg'
					) }
					variations={ variations }
					allowSkip
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
				/>
			</div>
		);
	}

	return props.attributes.isPreview ? (
		<img width="100%" src={ previewImageData } alt="" />
	) : (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};
const addAdvancedClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		return (
			<BlockListBlock
				{ ...props }
				className={ props.attributes.className }
			/>
		);
	};
}, 'addAdvancedClasses' );

wp.hooks.addFilter(
	'editor.BlockListBlock',
	'uagb/template-everything',
	addAdvancedClasses
);

export default compose(
	withNotices,
	addAdvancedClasses
)( UAGBTemplateEverything );
