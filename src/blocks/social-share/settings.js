/**
 * BLOCK: Social Share - Settings.
 */

import lazyLoader from '@Controls/lazy-loader';
import React, { Suspense } from 'react';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import renderSVG from '@Controls/renderIcon';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTabsControl from '@Components/tabs';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import presets from './presets';
import UAGPresets from '@Components/presets';
const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		stack,
		social_layout,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		bgSize,
		iconColor,
		iconHoverColor,
		iconBgColor,
		iconBgHoverColor,
	} = attributes;

	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) } initialOpen={ false }>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: social_layout,
						label: 'social_layout',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'horizontal',
							label: __(
								'Horizontal',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'vertical',
							label: __(
								'Vertical',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: align,
						label: 'align',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-center'
									) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG(
										'fa fa-align-right'
									) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				{ 'horizontal' === social_layout && (
					<>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Stack On',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: stack,
								label: 'stack',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'none',
									label: __(
										'None',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'desktop',
									label: __(
										'Desktop',
										'ultimate-addons-for-gutenberg'
									),

								},
								{
									value: 'tablet',
									label: __(
										'Tablet',
										'ultimate-addons-for-gutenberg'
									),

								},
								{
									value: 'mobile',
									label: __(
										'Mobile',
										'ultimate-addons-for-gutenberg'
									),

								},
							] }
							showIcons={ false }
							help={ __(
								'Note: Choose on what breakpoint the Icons will stack.',
								'ultimate-addons-for-gutenberg'
							) }
						/>
					</>
				) }
			</UAGAdvancedPanelBody>
		);
	};

	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<ResponsiveSlider
					label={ __( 'Size', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: size,
							label: 'size',
						},
						tablet: {
							value: sizeTablet,
							label: 'sizeTablet',
						},
						mobile: {
							value: sizeMobile,
							label: 'sizeMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					unit={ {
						value: sizeType,
						label: 'sizeType',
					} }
					setAttributes={ setAttributes }
				/>
				<Range
					label={ __(
						'Background Size',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ bgSize }
					onChange={ ( value ) => setAttributes( { bgSize: value } ) }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					help={ __(
						'Note: Background Size option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
				/>
				<ResponsiveSlider
					label={ __(
						'Border Radius',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: borderRadius,
							label: 'borderRadius',
						},
						tablet: {
							value: borderRadiusTablet,
							label: 'borderRadiusTablet',
						},
						mobile: {
							value: borderRadiusMobile,
							label: 'borderRadiusMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					help={ __(
						'Note: Border Radius option is useful when one adds background color to the icons.',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
				/>
				<ResponsiveSlider
					label={ __(
						'Gap between Items',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						desktop: {
							value: gap,
							label: 'gap',
						},
						tablet: {
							value: gapTablet,
							label: 'gapTablet',
						},
						mobile: {
							value: gapMobile,
							label: 'gapMobile',
						},
					} }
					min={ 0 }
					max={ 100 }
					displayUnit={ false }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};
	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { presets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};

	const iconColorSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Icon Color', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
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
							<AdvancedPopColorControl
								label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ iconColor ? iconColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { iconColor: value } )
								}
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ iconBgColor ? iconBgColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { iconBgColor: value } )
								}
							/>
						</>
					}
					hover={
						<>
							<AdvancedPopColorControl
								label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
								colorValue={ iconHoverColor ? iconHoverColor : '' }
								onColorChange={ ( value ) =>
									setAttributes( { iconHoverColor: value } )
								}
							/>
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={
									iconBgHoverColor ? iconBgHoverColor : ''
								}
								onColorChange={ ( value ) =>
									setAttributes( { iconBgHoverColor: value } )
								}
							/>
						</>
					}
					disableBottomSeparator={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<Suspense fallback={ lazyLoader() }>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ generalSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{iconColorSettings()}
						{ spacingSettings() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</Suspense>
	);
};

export default React.memo( Settings );
