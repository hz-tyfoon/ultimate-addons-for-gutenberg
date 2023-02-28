import { memo } from '@wordpress/element';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import ResponsiveSlider from '@Components/responsive-slider';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls } from '@wordpress/block-editor';
import BoxShadowControl from '@Components/box-shadow';
import SpacingControl from '@Components/spacing-control';
import Background from '@Components/background';
import ResponsiveBorder from '@Components/responsive-border';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGTabsControl from '@Components/tabs';
import { ToolbarGroup } from '@wordpress/components';

const Settings = ( props ) => {
	props = props.parentProps;
	const {
		attributes: {
			block_id,
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
			rowGapDesktop,
			rowGapTablet,
			rowGapMobile,
			rowGapType,
			rowGapTypeTablet,
			rowGapTypeMobile,
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
			variationChange,
			lockTemplate,
			headingColor,
			color,
			linkColor,
			linkHoverColor,
		},
		setAttributes,
		deviceType,
	} = props;

	const backgroundSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Background', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
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
					backgroundSize={ {
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
					} }
					backgroundCustomSize={ {
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
					} }
					backgroundCustomSizeType={ {
						value: backgroundCustomSizeType,
						label: 'backgroundCustomSizeType',
					} }
					backgroundRepeat={ {
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
					} }
					backgroundAttachment={ {
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
					} }
					backgroundPosition={ {
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
					} }
					backgroundImage={ {
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
					} }
					imageResponsive={ true }
					backgroundColor={ {
						value: backgroundColor,
						label: 'backgroundColor',
					} }
					backgroundType={ {
						value: backgroundType,
						label: 'backgroundType',
					} }
					overlayType={ {
						value: overlayType,
						label: 'overlayType',
					} }
					gradientOverlay={ {
						value: true,
					} }
					customPosition={ {
						value: customPosition,
						label: 'customPosition',
					} }
					xPositionDesktop={ {
						value: xPositionDesktop,
						label: 'xPositionDesktop',
					} }
					xPositionTablet={ {
						value: xPositionTablet,
						label: 'xPositionTablet',
					} }
					xPositionMobile={ {
						value: xPositionMobile,
						label: 'xPositionMobile',
					} }
					xPositionType={ {
						value: xPositionType,
						label: 'xPositionType',
					} }
					xPositionTypeTablet={ {
						value: xPositionTypeTablet,
						label: 'xPositionTypeTablet',
					} }
					xPositionTypeMobile={ {
						value: xPositionTypeMobile,
						label: 'xPositionTypeMobile',
					} }
					yPositionDesktop={ {
						value: yPositionDesktop,
						label: 'yPositionDesktop',
					} }
					yPositionTablet={ {
						value: yPositionTablet,
						label: 'yPositionTablet',
					} }
					yPositionMobile={ {
						value: yPositionMobile,
						label: 'yPositionMobile',
					} }
					yPositionType={ {
						value: yPositionType,
						label: 'yPositionType',
					} }
					yPositionTypeTablet={ {
						value: yPositionTypeTablet,
						label: 'yPositionTypeTablet',
					} }
					yPositionTypeMobile={ {
						value: yPositionTypeMobile,
						label: 'yPositionTypeMobile',
					} }
					backgroundVideoType={ {
						value: false,
					} }
					{ ...props }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const borderSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Border', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveBorder
					setAttributes={ setAttributes }
					prefix={ 'block' }
					attributes={ props.attributes }
					deviceType={ deviceType }
					disableBottomSeparator={ true }
					disabledBorderTitle={ true }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const boxShadowSettings = () => {
		return (
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
									title: __(
										'Color',
										'ultimate-addons-for-gutenberg'
									),
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
									title: __(
										'Blur',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowSpread={ {
									value: boxShadowSpread,
									label: 'boxShadowSpread',
									title: __(
										'Spread',
										'ultimate-addons-for-gutenberg'
									),
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
									title: __(
										'Color',
										'ultimate-addons-for-gutenberg'
									),
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
									title: __(
										'Blur',
										'ultimate-addons-for-gutenberg'
									),
								} }
								boxShadowSpread={ {
									value: boxShadowSpreadHover,
									label: 'boxShadowSpreadHover',
									title: __(
										'Spread',
										'ultimate-addons-for-gutenberg'
									),
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
	};

	const spacingSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
			>
				<ResponsiveSlider
					label={ __( 'Row Gap', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: rowGapDesktop,
							label: 'rowGapDesktop',
							unit: {
								value: rowGapType,
								label: 'rowGapType',
							},
						},
						tablet: {
							value: rowGapTablet,
							label: 'rowGapTablet',
							unit: {
								value: rowGapTypeTablet,
								label: 'rowGapTypeTablet',
							},
						},
						mobile: {
							value: rowGapMobile,
							label: 'rowGapMobile',
							unit: {
								value: rowGapTypeMobile,
								label: 'rowGapTypeMobile',
							},
						},
					} }
					min={ 0 }
					max={ 200 }
					units={ [
						{
							name: __( 'PX', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'px',
						},
						{
							name: __( '%', 'ultimate-addons-for-gutenberg' ),
							unitValue: '%',
						},
						{
							name: __( 'VW', 'ultimate-addons-for-gutenberg' ),
							unitValue: 'vw',
						},
					] }
					setAttributes={ setAttributes }
				/>
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
					attributes={ props.attributes }
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
					attributes={ props.attributes }
					setAttributes={ setAttributes }
					link={ {
						value: marginLink,
						label: 'marginLink',
					} }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const getBlockControls = () => {
		return (
			<BlockControls>
				<ToolbarGroup
					controls={ [
						{
							icon: 'update',
							title: __( 'Change Variation' ),
							onClick: () =>
								setAttributes( {
									variationChange: ! variationChange,
								} ),
						},
					] }
				/>
				<ToolbarGroup
					controls={ [
						{
							icon: 'lock',
							title: __( 'Lock Template' ),
							onClick: () =>
								setAttributes( {
									lockTemplate: ! lockTemplate,
								} ),
						},
					] }
				/>
			</BlockControls>
		);
	};

	const textControls = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<AdvancedPopColorControl
					label={ __( 'Heading', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ headingColor ? headingColor : '' }
					data={ {
						value: headingColor,
						label: 'headingColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Text', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ color ? color : '' }
					data={ {
						value: color,
						label: 'color',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __( 'Link', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ linkColor ? linkColor : '' }
					data={ {
						value: linkColor,
						label: 'linkColor',
					} }
					setAttributes={ setAttributes }
				/>
				<AdvancedPopColorControl
					label={ __(
						'Link Hover Color',
						'ultimate-addons-for-gutenberg'
					) }
					colorValue={ linkHoverColor ? linkHoverColor : '' }
					data={ {
						value: linkHoverColor,
						label: 'linkHoverColor',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			{ getBlockControls() }
			<InspectorControls>
				<InspectorTabs
					defaultTab="style"
					tabs={ [ 'style', 'advance' ] }
				>
					<InspectorTab { ...UAGTabs.style }>
						{ textControls() }
						{ backgroundSettings() }
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
export default memo( Settings );
