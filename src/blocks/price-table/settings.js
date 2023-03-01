import React from 'react';

import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import { Icon, } from '@wordpress/components';
// Extend component
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	const { attributes, setAttributes } = props;
	const {
        //text align
        textAlign,
        textAlignTablet,
        textAlignMobile,

        //title typography
        titleLoadGoogleFonts,
        titleFontFamily,
        titleFontWeight,
        titleFontStyle,
        titleFontSize,
        titleFontSizeType,
        titleFontSizeTablet,
        titleFontSizeMobile,
        titleTransform,
        titleDecoration,
        titleLineHeight,
        titleLineHeightType,
        titleLineHeightTablet,
        titleLineHeightMobile,
        titleLetterSpacing,
        titleLetterSpacingType,
        titleLetterSpacingTablet,
        titleLetterSpacingMobile,

        // title color
        titleFontColor,

    } = attributes;

    let loadTitleGoogleFonts = '';

    if ( titleLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ sconfig }></WebfontLoader>
		);
	}

    const generalPanel = () => {

		return (
			<UAGAdvancedPanelBody
				title={ __( 'Content', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: textAlign,
							label: 'textAlign',
						},
						tablet: {
							value: textAlignTablet,
							label: 'textAlignTablet',
						},
						mobile: {
							value: textAlignMobile,
							label: 'textAlignMobile',
						},
					} }
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
									icon={ renderSVG( 'fa fa-align-center' ) }
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
									icon={ renderSVG( 'fa fa-align-right' ) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
					responsive={true}
				/>
			</UAGAdvancedPanelBody>
		);
	};

    const titleStylePanel = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ true }
			>
				<TypographyControl
						label={ __(
							'Typography',
							'ultimate-addons-for-gutenberg'
						) }
						attributes={ attributes }
						setAttributes={ setAttributes }
						loadGoogleFonts={ {
							value: titleLoadGoogleFonts,
							label: 'titleLoadGoogleFonts',
						} }
						fontFamily={ {
							value: titleFontFamily,
							label: 'titleFontFamily',
						} }
						fontWeight={ {
							value: titleFontWeight,
							label: 'titleFontWeight',
						} }
						fontStyle={ {
							value: titleFontStyle,
							label: 'titleFontStyle',
						} }
						transform={ {
							value: titleTransform,
							label: 'titleTransform',
						} }
						decoration={ {
							value: titleDecoration,
							label: 'titleDecoration',
						} }
						fontSizeType={ {
							value: titleFontSizeType,
							label: 'titleFontSizeType',
						} }
						fontSize={ {
							value: titleFontSize,
							label: 'titleFontSize',
						} }
						fontSizeMobile={ {
							value: titleFontSizeMobile,
							label: 'titleFontSizeMobile',
						} }
						fontSizeTablet={ {
							value: titleFontSizeTablet,
							label: 'titleFontSizeTablet',
						} }
						lineHeightType={ {
							value: titleLineHeightType,
							label: 'titleLineHeightType',
						} }
						lineHeight={ {
							value: titleLineHeight,
							label: 'titleLineHeight',
						} }
						lineHeightMobile={ {
							value: titleLineHeightMobile,
							label: 'titleLineHeightMobile',
						} }
						lineHeightTablet={ {
							value: titleLineHeightTablet,
							label: 'titleLineHeightTablet',
						} }
						letterSpacing={ {
							value: titleLetterSpacing,
							label: 'titleLetterSpacing',
						} }
						letterSpacingTablet={ {
							value: titleLetterSpacingTablet,
							label: 'titleLetterSpacingTablet',
						} }
						letterSpacingMobile={ {
							value: titleLetterSpacingMobile,
							label: 'titleLetterSpacingMobile',
						} }
						letterSpacingType={ {
							value: titleLetterSpacingType,
							label: 'titleLetterSpacingType',
						} }
					/>
				<AdvancedPopColorControl
					label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
					colorValue={ titleFontColor ? titleFontColor : '' }
					data={ {
						value: titleFontColor,
						label: 'titleFontColor',
					} }
					setAttributes={ setAttributes }
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<div>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ generalPanel() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ titleStylePanel() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
            { loadTitleGoogleFonts }
		</div>
	);
};
export default React.memo( Settings );
