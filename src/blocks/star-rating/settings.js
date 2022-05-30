// Import all of our Text Options requirements.
import TypographyControl from '@Components/typography';
// Import Web font loader for google fonts.
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { Icon, ToggleControl } from '@wordpress/components';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import Range from '@Components/range/Range.js';
import MultiButtonsControl from '@Components/multi-buttons-control';
import renderSVG from '@Controls/renderIcon';
import React from 'react';
import ResponsiveSlider from '@Components/responsive-slider';


import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;
	// Setup the attributes
	const {
		attributes,
		setAttributes,
		attributes: {
			rating,
			range,
			layout,
			layoutTablet,
			layoutMobile,
			align,
			size,
			sizeTablet,
			sizeMobile,
			gap,
			gapMobile,
			gapTablet,
			unmarkedColor,
			color,
			title,
			loadGoogleFonts,
			fontFamily,
			fontWeight,
			fontSizeType,
			fontSize,
			fontSizeMobile,
			fontSizeTablet,
			lineHeightType,
			lineHeight,
			lineHeightMobile,
			lineHeightTablet,
			titleColor,
			titleGap,
			titleGapMobile,
			titleGapTablet,
			fontStyle,
			fontTransform,
			fontDecoration,
			displayTitle,
		},
	} = props;

	let loadTitleGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [
					fontFamily + ( fontWeight ? ':' + fontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ hconfig }></WebfontLoader>
		);
	}

	let alignmentOptions = [
		{
			value: 'left',
			icon: <Icon icon={ renderSVG( 'fa fa-align-left' )
		} />,
			tooltip: __(
				'Left',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'center',
			icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
			tooltip: __(
				'Center',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'right',
			icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
			tooltip: __(
				'Right',
				'ultimate-addons-for-gutenberg'
			),
		},
		{
			value: 'full',
			icon: <Icon icon={ renderSVG( 'fa fa-align-justify' ) } />,
			tooltip: __(
				'Full',
				'ultimate-addons-for-gutenberg'
			),
		},
	];
	if ( 'stack' === layout ) {
		alignmentOptions = [
			{
				value: 'left',
				icon: <Icon icon={ renderSVG( 'fa fa-align-left' ) } />,
				tooltip: __(
					'Left',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'center',
				icon: <Icon icon={ renderSVG( 'fa fa-align-center' ) } />,
				tooltip: __(
					'Center',
					'ultimate-addons-for-gutenberg'
				),
			},
			{
				value: 'right',
				icon: <Icon icon={ renderSVG( 'fa fa-align-right' ) } />,
				tooltip: __(
					'Right',
					'ultimate-addons-for-gutenberg'
				),
			},
		];
		if ( 'full' === align ) {
			setAttributes( {
				align: 'left',
			} );
		}
	}

	const generalSettings = (
		<UAGAdvancedPanelBody>
			<ToggleControl
				label={ __( 'Enable Title', 'ultimate-addons-for-gutenberg' ) }
				checked={ displayTitle }
				onChange={ () =>
					setAttributes( { displayTitle: ! displayTitle } )
				}
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Range', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: range,
					label: 'range',
				} }
				options={ [
					{
						value: '5',
						label: __( '1-5', 'ultimate-addons-for-gutenberg' ),
					},
					{
						value: '10',
						label: __( '1-10', 'ultimate-addons-for-gutenberg' ),
					},
				] }
			/>
			<Range
				label={ __( 'Rating', 'ultimate-addons-for-gutenberg' ) }
				setAttributes={ setAttributes }
				value={ rating }
				onChange={ ( value ) => setAttributes( { rating: value } ) }
				min={ 0 }
				max={ range }
				step={ 0.1 }
				displayUnit={ false }
			/>
			{ ( displayTitle ) && (

				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Layout', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						desktop: {
							value: layout,
							label: 'layout',
						},
						tablet: {
							value: layoutTablet,
							label: 'layoutTablet',
						},
						mobile: {
							value: layoutMobile,
							label: 'layoutMobile',
						},
					} }
					options={ [
						{
							value: 'inline',
							label: __( 'Inline', 'ultimate-addons-for-gutenberg' ),
						},
						{
							value: 'stack',
							label: __( 'Stack', 'ultimate-addons-for-gutenberg' ),
						},
					] }
					responsive={true}
				/>

			) }
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Alignment', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					value: align,
					label: 'align',
				} }
				options={ alignmentOptions }
				showIcons={ true }
			/>
		</UAGAdvancedPanelBody>
	);
	const titleStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Title', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ titleColor }
				onColorChange={ ( value ) =>
					setAttributes( { titleColor: value } )
				}
			/>
			<TypographyControl
				label={ __( 'Typography', 'ultimate-addons-for-gutenberg' ) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: loadGoogleFonts,
					label: 'loadGoogleFonts',
				} }
				fontFamily={ { value: fontFamily, label: 'fontFamily' } }
				fontWeight={ { value: fontWeight, label: 'fontWeight' } }
				fontStyle={ {
					value: fontStyle,
					label: 'fontStyle',
				} }
				transform={ {
					value: fontTransform,
					label: 'fontTransform',
				} }
				decoration={ {
					value: fontDecoration,
					label: 'fontDecoration',
				} }
				fontSizeType={ { value: fontSizeType, label: 'fontSizeType' } }
				fontSize={ { value: fontSize, label: 'fontSize' } }
				fontSizeMobile={ {
					value: fontSizeMobile,
					label: 'fontSizeMobile',
				} }
				fontSizeTablet={ {
					value: fontSizeTablet,
					label: 'fontSizeTablet',
				} }
				lineHeightType={ {
					value: lineHeightType,
					label: 'lineHeightType',
				} }
				lineHeight={ { value: lineHeight, label: 'lineHeight' } }
				lineHeightMobile={ {
					value: lineHeightMobile,
					label: 'lineHeightMobile',
				} }
				lineHeightTablet={ {
					value: lineHeightTablet,
					label: 'lineHeightTablet',
				} }
			/>
			<ResponsiveSlider
				label={ __(
					'Gap Between Title And Stars',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: titleGap,
						label: 'titleGap',
					},
					tablet: {
						value: titleGapTablet,
						label: 'titleGapTablet',
					},
					mobile: {
						value: titleGapMobile,
						label: 'titleGapMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	);
	const starStyling = (
		<UAGAdvancedPanelBody
			title={ __( 'Star', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ color }
				onColorChange={ ( value ) => setAttributes( { color: value } ) }
			/>
			<AdvancedPopColorControl
				label={ __(
					'Unmarked Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={ unmarkedColor }
				onColorChange={ ( value ) =>
					setAttributes( { unmarkedColor: value } )
				}
			/>
			<ResponsiveSlider
				label={ __(
					'Size',
					'ultimate-addons-for-gutenberg'
				) }
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
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Gap Between Stars',
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
	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ generalSettings }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ starStyling }
						{ ( displayTitle && '' !== title ) && titleStyling }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			{ loadTitleGoogleFonts }
		</>
	);
};
export default React.memo( Settings );
