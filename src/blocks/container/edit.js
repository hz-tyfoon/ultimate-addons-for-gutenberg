/**
 * BLOCK: Container
 */
import styling from './styling';
import { useEffect, useLayoutEffect, useMemo } from '@wordpress/element';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { migrateBorderAttributes } from '@Controls/generateAttributes';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect, useDispatch, select } from '@wordpress/data';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import styles from './editor.lazy.scss';
import UAGB_Block_Icons from '@Controls/block-icons';
import ReactHtmlParser from 'react-html-parser';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import { containerWrapper } from './containerWrapper';

const UAGBContainer = ( props ) => {
	const {
		isSelected,
		attributes,
		attributes: {
			borderStyle,
			borderWidth,
			borderColor,
			borderHoverColor,
			borderRadius,
			variationSelected,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
		},
		clientId,
		setAttributes,
		name,
		deviceType
	} = props;

	const {
		innerBlocks, // eslint-disable-line no-unused-vars
		blockType, // eslint-disable-line no-unused-vars
		isParentOfSelectedBlock,
		variations,
		defaultVariation,
		// eslint-disable-next-line no-shadow
	} = useSelect( ( select ) => {
		const { getBlocks } = select( 'core/block-editor' );
		const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

		return {
			innerBlocks: getBlocks( clientId ),
			blockType: getBlockType( props.name ),
			defaultVariation:
				typeof getDefaultBlockVariation === 'undefined' ? null : getDefaultBlockVariation( props.name ),
			variations: typeof getBlockVariations === 'undefined' ? null : getBlockVariations( props.name ),
			isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( clientId, true ),
		};
	} );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		const isBlockRootParentID = select( 'core/block-editor' ).getBlockParents( clientId );

		const parentBlocks = select( 'core/block-editor' ).getBlocksByClientId( isBlockRootParentID );

		let hasSliderParent = false;

		const sliderBlocks = [ 'uagb/slider', 'uagb/slider-child' ];
		const parentBlocksNames = [];

		if ( parentBlocks && parentBlocks?.length > 0 ) {

			for ( const parent in parentBlocks ) {
				const parentName = parentBlocks[parent]?.name;
				// For Slider.
				if ( sliderBlocks.includes( parentName ) ) {
					hasSliderParent = true;
				}

				// For Container Root.
				parentBlocksNames.push( parentName );
			}

			if ( ! parentBlocksNames.includes( 'uagb/container' ) ) {
				setAttributes( { isBlockRootParent: true } );
			} else {
				setAttributes( { isBlockRootParent: false } );
			}
		} else {
			setAttributes( { isBlockRootParent: true } );
		}
		
		setAttributes( { hasSliderParent } );

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let element;
		if ( iframeEl ) {
			element = iframeEl.contentDocument.getElementById( 'block-' + clientId );
		} else {
			element = document.getElementById( 'block-' + clientId );
		}
		// Add Close Button for Variation Selector.
		const variationPicker = element?.querySelector(
			'.uagb-container-variation-picker .block-editor-block-variation-picker'
		);
		const closeButton = document.createElement( 'button' );
		closeButton.onclick = function () {
			if ( defaultVariation.attributes ) {
				setAttributes( defaultVariation.attributes );
			}
		};
		closeButton.setAttribute( 'class', 'uagb-variation-close' );
		closeButton.innerHTML = '×';
		if ( variationPicker ) {
			const variationPickerLabel = variationPicker.querySelector( '.components-placeholder__label' );
			variationPicker.insertBefore( closeButton, variationPickerLabel );
		}

		// border
		if ( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ) {
			migrateBorderAttributes(
				'container',
				{
					label: 'borderWidth',
					value: borderWidth,
				},
				{
					label: 'borderRadius',
					value: borderRadius,
				},
				{
					label: 'borderColor',
					value: borderColor,
				},
				{
					label: 'borderHoverColor',
					value: borderHoverColor,
				},
				{
					label: 'borderStyle',
					value: borderStyle,
				},
				setAttributes,
				attributes
			);
		}

		if ( 0 !== select( 'core/block-editor' ).getBlockParents( clientId ).length ) {
			// if there is no parent for container when child container moved outside root then do not show variations.
			setAttributes( { variationSelected: true } );
		}
	}, [] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map(
			(
				[ name, attributes, innerBlocks = [] ] // eslint-disable-line no-shadow
			) => createBlock( name, attributes, createBlocksFromInnerBlocksTemplate( innerBlocks ) )
		);
	};

	if ( ! variationSelected && 0 === select( 'core/block-editor' ).getBlockParents( clientId ).length ) {
		return (
			<div className="uagb-container-variation-picker">
				<BlockVariationPicker
					icon={ UAGB_Block_Icons.container }
					label={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
					instructions={ ReactHtmlParser(
						sprintf(
							// translators: %s: closing </br> tag.
							__(
								'Customizable containers with endless creation possibilities.%sSelect a container layout to start with.',
								'ultimate-addons-for-gutenberg'
							),
							`</br>` 
						)
					) }
					variations={ variations }
					onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
				/>
			</div>
		);
	}

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default compose(
	containerWrapper,
	AddStaticStyles,
)( UAGBContainer );
