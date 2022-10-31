import React, {  useEffect } from 'react';

import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import Range from '@Components/range/Range.js';
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	BlockControls,
} from '@wordpress/block-editor';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { ToggleControl, 
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control';
import { boxShadowPresets, boxShadowHoverPresets } from './presets';
import UAGPresets from '@Components/presets';
import { createBlock } from '@wordpress/blocks';

const Settings = ( props ) => {

	props = props.parentProps;
	const { attributes, setAttributes, deviceType, insertBlock, block } = props;
	const {
		block_id,
		
		pauseOnHover,
		pauseOnInteraction,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		autoplay,
		autoplaySpeed,

		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		backgroundImageColor,
		gradientValue,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingTypeTablet,
		paddingTypeMobile,
		paddingLink,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginTypeTablet,
		marginTypeMobile,
		marginLink,
	
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		overlayType,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		backgroundVideoColor,
		backgroundVideo,

		textColor,
		linkColor,
		linkHoverColor,

	} = attributes;


	// This useEffect ensures that background size is set to cover, so as to ensure color takes up entire width and height,
	// in case bg type was set to Image before and given a custom width and height.
	useEffect( () => {
		if ( backgroundType === 'color' ) {
			setAttributes( {
				backgroundSizeDesktop: 'cover',
				backgroundSizeTablet: 'cover',
				backgroundSizeMobile: 'cover',
			} );
		}
	}, [backgroundType] );

	const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon='insert'
						label={__( 'Add Slide' )}
						onClick={ () => {

							insertBlock(
								createBlock( 'uagb/slider-child' ),
								block.innerBlocks.length,
								block.clientId
							);

							setAttributes( { slideItem: attributes.slideItem + 1 } );
							setAttributes( { activeSlide: attributes.slideItem + 2 } );

							setTimeout( function()  {

								const swiper = document.querySelector( '.uagb-swiper' ).swiper;

								if( swiper ) {
									swiper.update();
									swiper.updateSlidesClasses();
									swiper.slideTo( attributes.slideItem, false, false );
								}

							}, 100 );

						} }
					/>
				</ToolbarGroup>
			</BlockControls>
		);
	};

	const generalSettings = () => {

		const togglePauseOnHover = () => {
			setAttributes( { pauseOnHover: ! pauseOnHover } );
		};

		const togglePauseOnInteraction = () => {
			setAttributes( { pauseOnInteraction: ! pauseOnInteraction } );
		};
	
		const toggleInfiniteLoop = () => {
			setAttributes( { infiniteLoop: ! infiniteLoop } );
		};
	
		const toggleAutoplay = () => {
			setAttributes( { autoplay: ! autoplay } );
		};

		const sliderSettings = () => {
			return (
				<UAGAdvancedPanelBody
					title={ __( 'Slider', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ false }
				>
					<ToggleControl
						label={ __(
							'Pause On Hover',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ pauseOnHover }
						onChange={ togglePauseOnHover }
					/>
					<ToggleControl
						label={ __(
							'Pause On Interaction',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ pauseOnInteraction }
						onChange={ togglePauseOnInteraction }
					/>
					<ToggleControl
						label={ __( 'Autoplay' ) }
						checked={ autoplay }
						onChange={ toggleAutoplay }
					/>
					{ autoplay === true && (
						<Range
							label={ __(
								'Autoplay Speed (ms)',
								'ultimate-addons-for-gutenberg'
							) }
							setAttributes={ setAttributes }
							value={ autoplaySpeed }
							data={ {
								value: autoplaySpeed,
								label: 'autoplaySpeed',
							} }
							min={ 100 }
							max={ 15000 }
							displayUnit={ false }
						/>
					) }
					<ToggleControl
						label={ __(
							'Infinite Loop',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ infiniteLoop }
						onChange={ toggleInfiniteLoop }
					/>
					<Range
						label={ __(
							'Transition Speed (ms)',
							'ultimate-addons-for-gutenberg'
						) }
						setAttributes={ setAttributes }
						value={ transitionSpeed }
						data={ {
							value: transitionSpeed,
							label: 'transitionSpeed',
						} }
						min={ 100 }
						max={ 5000 }
						displayUnit={ false }
					/>
					<MultiButtonsControl
						setAttributes={ setAttributes }
						label={ __(
							'Show Arrows & Dots',
							'ultimate-addons-for-gutenberg'
						) }
						data={ {
							value: arrowDots,
							label: 'arrowDots',
						} }
						options={ [
							{
								value: 'arrows',
								label: __(
									'Arrows',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'dots',
								label: __(
									'Dots',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								value: 'arrows_dots',
								label: __(
									'Both',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
					/>
				</UAGAdvancedPanelBody>
			);
		};

		return (
			<>
				{ sliderSettings() }
			</>
		);
	};

	const backgroundSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<Background
					setAttributes={ setAttributes }
					backgroundGradient={ {
						value: gradientValue,
						label: 'gradientValue',
					} }
					backgroundImageColor={ {
						value: backgroundImageColor,
						label: 'backgroundImageColor',
					} }
					backgroundSize={{
						desktop: {
							value: backgroundSizeDesktop,
							label: 'backgroundSizeDesktop',
						},
						tablet: {
							value: backgroundSizeTablet,
							label: 'backgroundSizeTablet',
						},
						mobile: {
							value: backgroundSizeMobile,
							label: 'backgroundSizeMobile',
						},
					}}
					backgroundCustomSize={{
						desktop: {
							value: backgroundCustomSizeDesktop,
							label: 'backgroundCustomSizeDesktop',
						},
						tablet: {
							value: backgroundCustomSizeTablet,
							label: 'backgroundCustomSizeTablet',
						},
						mobile: {
							value: backgroundCustomSizeMobile,
							label: 'backgroundCustomSizeMobile',
						},
					}}
					backgroundCustomSizeType={{
						value: backgroundCustomSizeType,
						label: 'backgroundCustomSizeType'
					}}
					backgroundRepeat={{
						desktop: {
							value: backgroundRepeatDesktop,
							label: 'backgroundRepeatDesktop',
						},
						tablet: {
							value: backgroundRepeatTablet,
							label: 'backgroundRepeatTablet',
						},
						mobile: {
							value: backgroundRepeatMobile,
							label: 'backgroundRepeatMobile',
						},
					}}
					backgroundAttachment={{
						desktop: {
							value: backgroundAttachmentDesktop,
							label: 'backgroundAttachmentDesktop',
						},
						tablet: {
							value: backgroundAttachmentTablet,
							label: 'backgroundAttachmentTablet',
						},
						mobile: {
							value: backgroundAttachmentMobile,
							label: 'backgroundAttachmentMobile',
						},
					}}
					backgroundPosition={{
						desktop: {
							value: backgroundPositionDesktop,
							label: 'backgroundPositionDesktop',
						},
						tablet: {
							value: backgroundPositionTablet,
							label: 'backgroundPositionTablet',
						},
						mobile: {
							value: backgroundPositionMobile,
							label: 'backgroundPositionMobile',
						},
					}}
					backgroundImage={{
						desktop: {
							value: backgroundImageDesktop,
							label: 'backgroundImageDesktop',
						},
						tablet: {
							value: backgroundImageTablet,
							label: 'backgroundImageTablet',
						},
						mobile: {
							value: backgroundImageMobile,
							label: 'backgroundImageMobile',
						},
					}}
					imageResponsive={true}
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					overlayType={{
						value: overlayType,
						label: 'overlayType'
					}}
					gradientOverlay={{
						value: true,
					}}
					customPosition={{
						value: customPosition,
						label: 'customPosition'
					}}
					xPositionDesktop={{
						value: xPositionDesktop,
						label: 'xPositionDesktop'
					}}
					xPositionTablet={{
						value: xPositionTablet,
						label: 'xPositionTablet'
					}}
					xPositionMobile={{
						value: xPositionMobile,
						label: 'xPositionMobile'
					}}
					xPositionType={{
						value: xPositionType,
						label: 'xPositionType'
					}}
					xPositionTypeTablet={{
						value: xPositionTypeTablet,
						label: 'xPositionTypeTablet'
					}}
					xPositionTypeMobile={{
						value: xPositionTypeMobile,
						label: 'xPositionTypeMobile'
					}}
					yPositionDesktop={{
						value: yPositionDesktop,
						label: 'yPositionDesktop'
					}}
					yPositionTablet={{
						value: yPositionTablet,
						label: 'yPositionTablet'
					}}
					yPositionMobile={{
						value: yPositionMobile,
						label: 'yPositionMobile'
					}}
					yPositionType={{
						value: yPositionType,
						label: 'yPositionType'
					}}
					yPositionTypeTablet={{
						value: yPositionTypeTablet,
						label: 'yPositionTypeTablet'
					}}
					yPositionTypeMobile={{
						value: yPositionTypeMobile,
						label: 'yPositionTypeMobile'
					}}
					backgroundVideoType={ {
						value: true,
					} }
					backgroundVideo={ {
						value: backgroundVideo,
						label: 'backgroundVideo',
					} }
					backgroundVideoColor={ {
						value: backgroundVideoColor,
						label: 'backgroundVideoColor',
					} }
					onOpacityChange = { ( opacity ) => setAttributes( { backgroundVideoOpacity: opacity } ) }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const linkColorMarkup = (
		<AdvancedPopColorControl
			label={ __(
				'Link Color',
				'ultimate-addons-for-gutenberg'
			) }
			colorValue={ linkColor }
			data={ {
				value: linkColor,
				label: 'linkColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const linkHoverColorMarkup = (
		<AdvancedPopColorControl
			label={ __(
				'Link Hover Color',
				'ultimate-addons-for-gutenberg'
			) }
			colorValue={ linkHoverColor }
			data={ {
				value: linkHoverColor,
				label: 'linkHoverColor',
			} }
			setAttributes={ setAttributes }
		/>
	);

	const colorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<AdvancedPopColorControl
					label={ __(
						'Text Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ textColor }
					data={ {
						value: textColor,
						label: 'textColor',
					} }
					setAttributes={ setAttributes }
				/>
				<UAGTabsControl
						tabs={ [
							{
								name: 'normal',
								title: __(
									'Normal',
									'ultimate-addons-for-gutenberg'
								),
							},
							{
								name: 'hover',
								title: __(
									'Hover',
									'ultimate-addons-for-gutenberg'
								),
							},
						] }
						normal={ linkColorMarkup }
						hover={ linkHoverColorMarkup }
						disableBottomSeparator={ true }
					/>
			</UAGAdvancedPanelBody>
		);
	}

	const borderSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'container' }
					attributes={ attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle= { true }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const boxShadowSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>

				<UAGTabsControl
					tabs={ [
						{
							name: 'normal',
							title: __(
								'Normal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'hover',
							title: __(
								'Hover',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					normal={
						<>
							<UAGPresets
								setAttributes = { setAttributes }
								presets = { boxShadowPresets }
								presetInputType = 'radioImage'
							/>
							<BoxShadowControl
								blockId={ block_id }
								setAttributes={ setAttributes }
								label={ __(
									'Box Shadow',
									'ultimate-addons-for-gutenberg'
								) }
								boxShadowColor={ {
									value: boxShadowColor,
									label: 'boxShadowColor',
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowHOffset={ {
									value: boxShadowHOffset,
									label: 'boxShadowHOffset',
									title: __(
										'Horizontal',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowVOffset={ {
									value: boxShadowVOffset,
									label: 'boxShadowVOffset',
									title: __(
										'Vertical',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowBlur={ {
									value: boxShadowBlur,
									label: 'boxShadowBlur',
									title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowSpread={ {
									value: boxShadowSpread,
									label: 'boxShadowSpread',
									title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowPosition={ {
									value: boxShadowPosition,
									label: 'boxShadowPosition',
									title: __(
										'Position',
										'ultimate-addons-for-gutenberg'
									),
								} }
							/>
						</>
					}
					hover={
						<>
							<UAGPresets
								setAttributes = { setAttributes }
								presets = { boxShadowHoverPresets }
								presetInputType = 'radioImage'
							/>
							<BoxShadowControl
								blockId={ block_id }
								setAttributes={ setAttributes }
								label={ __(
									'Box Shadow',
									'ultimate-addons-for-gutenberg'
								) }
								boxShadowColor={ {
									value: boxShadowColorHover,
									label: 'boxShadowColorHover',
									title: __( 'Color', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowHOffset={ {
									value: boxShadowHOffsetHover,
									label: 'boxShadowHOffsetHover',
									title: __(
										'Horizontal',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowVOffset={ {
									value: boxShadowVOffsetHover,
									label: 'boxShadowVOffsetHover',
									title: __(
										'Vertical',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowBlur={ {
									value: boxShadowBlurHover,
									label: 'boxShadowBlurHover',
									title: __( 'Blur', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowSpread={ {
									value: boxShadowSpreadHover,
									label: 'boxShadowSpreadHover',
									title: __( 'Spread', 'ultimate-addons-for-gutenberg' ),
								} }
								boxShadowPosition={ {
									value: boxShadowPositionHover,
									label: 'boxShadowPositionHover',
									title: __(
										'Position',
										'ultimate-addons-for-gutenberg'
									),
								} }
							/>
						</>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	const spacingSettings = () => {
		return(
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<SpacingControl
					{ ...props }
					label={ __( 'Padding', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topPaddingDesktop,
						label: 'topPaddingDesktop',
					} }
					valueRight={ {
						value: rightPaddingDesktop,
						label: 'rightPaddingDesktop',
					} }
					valueBottom={ {
						value: bottomPaddingDesktop,
						label: 'bottomPaddingDesktop',
					} }
					valueLeft={ {
						value: leftPaddingDesktop,
						label: 'leftPaddingDesktop',
					} }
					valueTopTablet={ {
						value: topPaddingTablet,
						label: 'topPaddingTablet',
					} }
					valueRightTablet={ {
						value: rightPaddingTablet,
						label: 'rightPaddingTablet',
					} }
					valueBottomTablet={ {
						value: bottomPaddingTablet,
						label: 'bottomPaddingTablet',
					} }
					valueLeftTablet={ {
						value: leftPaddingTablet,
						label: 'leftPaddingTablet',
					} }
					valueTopMobile={ {
						value: topPaddingMobile,
						label: 'topPaddingMobile',
					} }
					valueRightMobile={ {
						value: rightPaddingMobile,
						label: 'rightPaddingMobile',
					} }
					valueBottomMobile={ {
						value: bottomPaddingMobile,
						label: 'bottomPaddingMobile',
					} }
					valueLeftMobile={ {
						value: leftPaddingMobile,
						label: 'leftPaddingMobile',
					} }
					unit={ {
						value: paddingType,
						label: 'paddingType',
					} }
					mUnit={ {
						value: paddingTypeMobile,
						label: 'paddingTypeMobile',
					} }
					tUnit={ {
						value: paddingTypeTablet,
						label: 'paddingTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: paddingLink,
						label: 'paddingLink',
					} }
				/>
				<SpacingControl
					{ ...props }
					label={ __( 'Margin', 'ultimate-addons-for-gutenberg' ) }
					valueTop={ {
						value: topMarginDesktop,
						label: 'topMarginDesktop',
					} }
					valueRight={ {
						value: rightMarginDesktop,
						label: 'rightMarginDesktop',
					} }
					valueBottom={ {
						value: bottomMarginDesktop,
						label: 'bottomMarginDesktop',
					} }
					valueLeft={ {
						value: leftMarginDesktop,
						label: 'leftMarginDesktop',
					} }
					valueTopTablet={ {
						value: topMarginTablet,
						label: 'topMarginTablet',
					} }
					valueRightTablet={ {
						value: rightMarginTablet,
						label: 'rightMarginTablet',
					} }
					valueBottomTablet={ {
						value: bottomMarginTablet,
						label: 'bottomMarginTablet',
					} }
					valueLeftTablet={ {
						value: leftMarginTablet,
						label: 'leftMarginTablet',
					} }
					valueTopMobile={ {
						value: topMarginMobile,
						label: 'topMarginMobile',
					} }
					valueRightMobile={ {
						value: rightMarginMobile,
						label: 'rightMarginMobile',
					} }
					valueBottomMobile={ {
						value: bottomMarginMobile,
						label: 'bottomMarginMobile',
					} }
					valueLeftMobile={ {
						value: leftMarginMobile,
						label: 'leftMarginMobile',
					} }
					unit={ {
						value: marginType,
						label: 'marginType',
					} }
					mUnit={ {
						value: marginTypeMobile,
						label: 'marginTypeMobile',
					} }
					tUnit={ {
						value: marginTypeTablet,
						label: 'marginTypeTablet',
					} }
					attributes={ attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	}

	return (
		<>
		{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ backgroundSettings() }
						{ colorSettings() }
						{ borderSettings() }
						{ boxShadowSettings() }
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
