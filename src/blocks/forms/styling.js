/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		formPaddingTop,
		formPaddingRight,
		formPaddingBottom,
		formPaddingLeft,
		formPaddingTopTab,
		formPaddingRightTab,
		formPaddingBottomTab,
		formPaddingLeftTab,
		formPaddingTopMob,
		formPaddingRightMob,
		formPaddingBottomMob,
		formPaddingLeftMob,
		formPaddingUnit,
		formPaddingUnitTab,
		formPaddingUnitMob,
		buttonAlign,
		buttonAlignTablet,
		buttonAlignMobile,
		submitColor,
		submitColorHover,
		submitBgColor,
		submitBgColorHover,
		toggleWidthSize,
		toggleWidthSizeTablet,
		toggleWidthSizeMobile,
		btnBorderHColor,
		submitTextFontFamily,
		submitTextFontWeight,
		submitTextFontSize,
		submitTextFontSizeType,
		submitTextFontSizeTablet,
		submitTextFontSizeMobile,
		submitTextLineHeightType,
		submitTextLineHeight,
		submitTextLineHeightTablet,
		submitTextLineHeightMobile,
		labelFontFamily,
		labelFontWeight,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelLineHeightType,
		labelLineHeight,
		labelLineHeightTablet,
		labelLineHeightMobile,
		inputFontFamily,
		inputFontWeight,
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputLineHeightType,
		inputLineHeight,
		inputLineHeightTablet,
		inputLineHeightMobile,
		toggleColor,
		toggleActiveColor,
		toggleDotColor,
		toggleDotActiveColor,
		toggleBorderStyle,
		toggleBorderWidth,
		toggleBorderRadius,
		toggleBorderColor,
		checkBoxToggleBorderHColor,
		labelColor,
		labelHoverColor,
		inputColor,
		bgColor,
		bgHoverColor,
		bgActiveColor,
		inputplaceholderColor,
		inputplaceholderHColor,
		inputplaceholderActiveColor,
		inputactiveColor,
		fieldBorderHColor,
		fieldGap,
		fieldGapTablet,
		fieldGapMobile,
		formStyle,
		overallAlignment,
		toggleSize,
		toggleSizeTablet,
		toggleSizeMobile,

		paddingBtnTop,
		paddingBtnRight,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		submitTextTransform,
		submitTextDecoration,
		labelTransform,
		labelDecoration,
		inputTransform,
		inputDecoration,
		fieldGapType,
		paddingFieldTop,
		paddingFieldRight,
		paddingFieldBottom,
		paddingFieldLeft,
		paddingFieldTopTablet,
		paddingFieldRightTablet,
		paddingFieldBottomTablet,
		paddingFieldLeftTablet,
		paddingFieldTopMobile,
		paddingFieldRightMobile,
		paddingFieldBottomMobile,
		paddingFieldLeftMobile,
		paddingFieldUnit,
		paddingFieldUnitmobile,
		paddingFieldUnitTablet,
		toggleSizeType,
		submitTextFontStyle,
		labelFontStyle,
		inputFontStyle,

		labelGap,
		labelGapTablet,
		labelGapMobile,
		labelGapUnit,

		displayLabels,
		labelLetterSpacing,
		labelLetterSpacingTablet,
		labelLetterSpacingMobile,
		labelLetterSpacingType,
		inputLetterSpacing,
		inputLetterSpacingTablet,
		inputLetterSpacingMobile,
		inputLetterSpacingType,
		submitLetterSpacing,
		submitLetterSpacingTablet,
		submitLetterSpacingMobile,
		submitLetterSpacingType,
	} = props.attributes;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	const fieldGapFallback = getFallbackNumber( fieldGap, 'fieldGap', blockName );
	const labelGapFallback = getFallbackNumber( labelGap, 'labelGap', blockName );

	// Used for Calculations, needs to be numeric.
	const toggleSizeNumber = getFallbackNumber( toggleSize, 'toggleSize', blockName );
	const toggleSizeNumberTablet = isNaN( toggleSizeTablet ) ? toggleSizeNumber : toggleSizeTablet;
	const toggleSizeNumberMobile = isNaN( toggleSizeMobile ) ? toggleSizeNumberTablet : toggleSizeMobile;
	const toggleSizeTabletFallback = getFallbackNumber( toggleSizeTablet, 'toggleSizeTablet', blockName );
	const toggleSizeMobileFallback = getFallbackNumber( toggleSizeMobile, 'toggleSizeMobile', blockName );

	// Used for Calculations, needs to be numeric.
	const toggleWidthSizeNumber = getFallbackNumber( toggleWidthSize, 'toggleWidthSize', blockName );
	const toggleWidthSizeNumberTablet = isNaN( toggleWidthSizeTablet ) ? toggleWidthSizeNumber : toggleWidthSizeTablet;
	const toggleWidthSizeNumberMobile = isNaN( toggleWidthSizeMobile ) ? toggleWidthSizeNumberTablet : toggleWidthSizeMobile;

	const inputBorder = generateBorderCSS( props.attributes, 'field' );
	const inputBorderTablet = generateBorderCSS( props.attributes, 'field', 'tablet' );
	const inputBorderMobile = generateBorderCSS( props.attributes, 'field', 'mobile' );

	const toggleBorder = generateBorderCSS( props.attributes, 'checkBoxToggle' );
	const toggleBorderTablet = generateBorderCSS( props.attributes, 'checkBoxToggle', 'tablet' );
	const toggleBorderMobile = generateBorderCSS( props.attributes, 'checkBoxToggle', 'mobile' );

	const submitBorder = generateBorderCSS( props.attributes, 'btn' );
	const submitBorderTablet = generateBorderCSS( props.attributes, 'btn', 'tablet' );
	const submitBorderMobile = generateBorderCSS( props.attributes, 'btn', 'mobile' );


	selectors = {
		'.uagb-forms__outer-wrap': {
			'padding-top': generateCSSUnit( formPaddingTop, formPaddingUnit ),
			'padding-right': generateCSSUnit( formPaddingRight, formPaddingUnit ),
			'padding-bottom': generateCSSUnit( formPaddingBottom, formPaddingUnit ),
			'padding-left': generateCSSUnit( formPaddingLeft, formPaddingUnit ),
		},
		' form.uagb-forms-main-form, form.uagb-forms-main-form .uagb-forms-input, form.uagb-forms-main-form textarea': {
			'text-align': overallAlignment,
		},
		' .uagb-forms-input-label': {
			'display': displayLabels ? 'block' : 'none',
		},

		' .uagb-forms-main-form .uagb-forms-field-set': {
			'margin-bottom': generateCSSUnit( fieldGapFallback, fieldGapType ),
		},
		' .uagb-forms-main-form .uagb-forms-input-label': {
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'line-height': generateCSSUnit(
				labelLineHeight,
				labelLineHeightType
			),
			'font-family': labelFontFamily,
			'font-style': labelFontStyle,
			'text-transform': labelTransform,
			'text-decoration': labelDecoration,
			'font-weight': labelFontWeight,
			'color': labelColor,
			'margin-bottom': generateCSSUnit( labelGapFallback, labelGapUnit ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			'color': inputplaceholderColor,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' .uagb-forms-main-form input': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			'color': inputplaceholderColor,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' .uagb-forms-main-form select': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			'color': inputplaceholderColor,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' .uagb-forms-main-form .uagb-forms-input:focus': {
			'outline': ' none !important',
			'border': '2px solid ' + inputactiveColor,
			'background-color': `${ bgActiveColor } !important`,
		},
		' .uagb-forms-main-form .uagb-forms-input:focus::placeholder': {
			'color': `${ inputplaceholderActiveColor } !important`
		},
		' .uagb-forms-main-form .uagb-forms-phone-flex': {
			'height': `calc(${
				inputLineHeight ? generateCSSUnit( inputLineHeight, inputLineHeightType ) : '2em'
			} + ${
				generateCSSUnit( paddingFieldTop, paddingFieldUnit )
			} + ${
				generateCSSUnit( paddingFieldBottom, paddingFieldUnit )
			})`,
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap': {
			'text-align': buttonAlign,
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': {
			'color': submitColor,
			'font-size': generateCSSUnit(
				submitTextFontSize,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeight,
				submitTextLineHeightType
			),
			'font-family': submitTextFontFamily,
			'font-style': submitTextFontStyle,
			'text-transform': submitTextTransform,
			'text-decoration': submitTextDecoration,
			'font-weight': submitTextFontWeight,
			'background-color': submitBgColor,
			...submitBorder,
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'letter-spacing': generateCSSUnit( submitLetterSpacing, submitLetterSpacingType ),
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button:hover': {
			'color': submitColorHover,
			'background-color': submitBgColorHover,
			'border-color': btnBorderHColor,
		},
		' .uagb-switch': {
			// 20 is the min size of the toggle.
			// Space around the toggle dot is calculated as 1/6th the size of the toggle dot.
			'height': generateCSSUnit(
				parseInt( 20 + toggleWidthSizeNumber + ( toggleBorderWidth * 2 ) + ( ( 20 + toggleWidthSizeNumber ) / 3 ) ),
				'px'
			),
			'width': generateCSSUnit(
				parseInt( ( ( 20 + toggleWidthSizeNumber ) * 2.5 ) + ( toggleBorderWidth * 2 ) + ( ( 20 + toggleWidthSizeNumber ) / 3 ) ),
				'px'
			),
		},
		' .uagb-switch input:checked + .uagb-slider': {
			'background-color': toggleActiveColor,
			'border-color': checkBoxToggleBorderHColor,
		},
		' .uagb-switch input:checked + .uagb-slider:before': {
			'background-color': toggleDotActiveColor,
		},
		' .uagb-switch input:focus + .uagb-slider': {
			'box-shadow': '0 0 1px' + toggleActiveColor,
		},
		' .uagb-slider:before': {
			'height': generateCSSUnit( 20 + toggleWidthSizeNumber, 'px' ),
			'width': generateCSSUnit( 20 + toggleWidthSizeNumber, 'px' ),
			'top': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumber ) / 6 ), 'px' ),
			'bottom': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumber ) / 6 ), 'px' ),
			'left': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumber ) / 6 ), 'px' ),
			'background-color': toggleDotColor,
		},
		' .uagb-slider.round': {
			'border-radius': generateCSSUnit( 20 + toggleWidthSizeNumber, 'px' ),
		},
		' .uagb-switch input:checked + .uagb-slider:before ': {
			'transform': `translateX(${ generateCSSUnit(
				parseInt( ( ( ( 20 + toggleWidthSizeNumber ) * 2.5 ) - ( 20 + toggleWidthSizeNumber ) ) ),
				'px'
			) })`,
			'background-color': toggleDotActiveColor,
		},
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'background-color': toggleDotActiveColor,
			'border-color': `${ checkBoxToggleBorderHColor } !important`,
			'box-shadow': `inset 0 0 0 4px ${ toggleActiveColor }`,
			'font-size': 'calc(' + toggleSizeNumber + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'background-color': toggleColor,
			'width': generateCSSUnit( toggleSizeNumber, toggleSizeType ),
			'height': generateCSSUnit( toggleSizeNumber, toggleSizeType ),
		},
		' .uagb-forms-radio-wrap > label': {
			'color': inputColor,
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			'color': toggleDotActiveColor,
			'background-color': toggleActiveColor,
			'border-color': `${ checkBoxToggleBorderHColor } !important`,
			'font-size': 'calc(' + toggleSizeNumber + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'background-color': toggleColor,
			'border-radius': generateCSSUnit( toggleBorderRadius, 'px' ),
			'width': generateCSSUnit( toggleSizeNumber, 'px' ),
			'height': generateCSSUnit( toggleSizeNumber, 'px' ),
		},
		' .uagb-forms-checkbox-wrap > label': {
			'color': inputColor,
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			'color': toggleDotActiveColor,
			'background-color': toggleActiveColor,
			'border-color': `${ checkBoxToggleBorderHColor } !important`,
			'font-size': 'calc(' + toggleSizeNumber + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'border-radius': generateCSSUnit( toggleBorderRadius, 'px' ),
			'background-color': toggleColor,
			'width': generateCSSUnit( toggleSizeNumber, 'px' ),
			'height': generateCSSUnit( toggleSizeNumber, 'px' ),
		},
		' .uagb-forms-accept-wrap > label': {
			'color': inputColor,
		},
		// Hover Colors
		' .uagb-forms-field-set:hover .uagb-forms-input-label': {
			'color': labelHoverColor,
		},
		' .uagb-forms-field-set:hover .uagb-forms-input': {
			'background-color': bgHoverColor,
			'border-color': fieldBorderHColor,
		},
		' .uagb-forms-field-set:hover .uagb-forms-input::placeholder': {
			'color': inputplaceholderHColor,
		},
	};

	if ( 'boxed' === formStyle ) {
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			...inputBorder,
			'background-color': bgColor,
			'color': inputColor,
			'padding-top': generateCSSUnit( paddingFieldTop, paddingFieldUnit ),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottom,
				paddingFieldUnit
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeft,
				paddingFieldUnit
			),
			'padding-right': generateCSSUnit(
				paddingFieldRight,
				paddingFieldUnit
			),
		};
		tabletSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			...inputBorderTablet,
			'padding-top': generateCSSUnit(
				paddingFieldTopTablet,
				paddingFieldUnitTablet
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomTablet,
				paddingFieldUnitTablet
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftTablet,
				paddingFieldUnitTablet
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightTablet,
				paddingFieldUnitTablet
			),
		};
		mobileSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			...inputBorderMobile,
			'padding-top': generateCSSUnit(
				paddingFieldTopMobile,
				paddingFieldUnitmobile
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomMobile,
				paddingFieldUnitmobile
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftMobile,
				paddingFieldUnitmobile
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightMobile,
				paddingFieldUnitmobile
			),
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'
		] = toggleBorder;
		selectors[
			' .uagb-forms-main-form .uagb-forms-accept-wrap input[type=checkbox] + label:before'
		] = toggleBorder;
		selectors[
			' .uagb-forms-main-form .uagb-forms-radio-wrap input[type=radio] + label:before'
		] = toggleBorder;
		selectors[ ' .uagb-slider ' ] = {
			...toggleBorder,
			'background-color': toggleColor,
		};

		mobileSelectors[
			' .uagb-forms-main-form .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'
		] = toggleBorderMobile;
		mobileSelectors[
			' .uagb-forms-main-form .uagb-forms-accept-wrap input[type=checkbox] + label:before'
		] = toggleBorderMobile;
		mobileSelectors[
			' .uagb-forms-main-form .uagb-forms-radio-wrap input[type=radio] + label:before'
		] = toggleBorderMobile;
		mobileSelectors[ ' .uagb-slider ' ] = toggleBorderMobile;

		tabletSelectors[
			' .uagb-forms-main-form .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'
		] = toggleBorderTablet;
		tabletSelectors[
			' .uagb-forms-main-form .uagb-forms-accept-wrap input[type=checkbox] + label:before'
		] = toggleBorderTablet;
		tabletSelectors[
			' .uagb-forms-main-form .uagb-forms-radio-wrap input[type=radio] + label:before'
		] = toggleBorderTablet;
		tabletSelectors[ ' .uagb-slider ' ] = toggleBorderTablet;
		// Label Hovev Colors
	} else if ( 'underlined' === formStyle ) {
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'border': 0,
			'outline': 0,
			'border-radius': 0,
			'background': 'transparent',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			...inputBorder,
			'color': inputColor,
			'padding-top': generateCSSUnit( paddingFieldTop, paddingFieldUnit ),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottom,
				paddingFieldUnit
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeft,
				paddingFieldUnit
			),
			'padding-right': generateCSSUnit(
				paddingFieldRight,
				paddingFieldUnit
			),
		};
		tabletSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'padding-top': generateCSSUnit(
				paddingFieldTopTablet,
				paddingFieldUnitTablet
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomTablet,
				paddingFieldUnitTablet
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftTablet,
				paddingFieldUnitTablet
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightTablet,
				paddingFieldUnitTablet
			),
			...inputBorderTablet
		};
		mobileSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'padding-top': generateCSSUnit(
				paddingFieldTopMobile,
				paddingFieldUnitmobile
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomMobile,
				paddingFieldUnitmobile
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftMobile,
				paddingFieldUnitmobile
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightMobile,
				paddingFieldUnitmobile
			),
			...inputBorderMobile
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'
		] = {
			'border-bottom':
				generateCSSUnit( toggleBorderWidth, 'px' ) +
				' ' +
				toggleBorderStyle +
				' ' +
				toggleBorderColor,
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-accept-wrap input[type=checkbox] + label:before'
		] = {
			'border-bottom':
				generateCSSUnit( toggleBorderWidth, 'px' ) +
				' ' +
				toggleBorderStyle +
				' ' +
				toggleBorderColor,
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-radio-wrap input[type=radio] + label:before'
		] = {
			'border-bottom':
				generateCSSUnit( toggleBorderWidth, 'px' ) +
				' ' +
				toggleBorderStyle +
				' ' +
				toggleBorderColor,
		};
		selectors[ ' .uagb-slider ' ] = {
			'background-color': toggleColor,
			'border-bottom':
				generateCSSUnit( toggleBorderWidth, 'px' ) +
				' ' +
				toggleBorderStyle +
				' ' +
				toggleBorderColor,
		};
	}

	tabletSelectors = {
		'.uagb-forms__outer-wrap': {
			'padding-top': generateCSSUnit( formPaddingTopTab, formPaddingUnitTab ),
			'padding-right': generateCSSUnit( formPaddingRightTab, formPaddingUnitTab ),
			'padding-bottom': generateCSSUnit( formPaddingBottomTab, formPaddingUnitTab ),
			'padding-left': generateCSSUnit( formPaddingLeftTab, formPaddingUnitTab ),
		},
		' .uagb-forms-main-form .uagb-forms-field-set': {
			'margin-bottom': generateCSSUnit( fieldGapTablet, fieldGapType ),
		},
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeNumberTablet + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'width': generateCSSUnit( toggleSizeTabletFallback, toggleSizeType ),
			'height': generateCSSUnit( toggleSizeTabletFallback, toggleSizeType ),
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeNumberTablet + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeTabletFallback, 'px' ),
			'height': generateCSSUnit( toggleSizeTabletFallback, 'px' ),
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeNumberTablet + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeTabletFallback, 'px' ),
			'height': generateCSSUnit( toggleSizeTabletFallback, 'px' ),
		},
		' .uagb-switch' : {
			'height': generateCSSUnit(
				parseInt( 20 + toggleWidthSizeNumberTablet + ( toggleBorderWidth * 2 ) + ( ( 20 + toggleWidthSizeNumberTablet ) / 3 ) ),
				'px'
			),
			'width': generateCSSUnit(
				parseInt( ( ( 20 + toggleWidthSizeNumberTablet ) * 2.5 ) + ( toggleBorderWidth * 2 ) + ( ( 20 + toggleWidthSizeNumberTablet ) / 3 ) ),
				'px'
			),
		},
		' .uagb-switch .uagb-slider:before' : {
			'height': generateCSSUnit( 20 + toggleWidthSizeNumberTablet, 'px' ),
			'width': generateCSSUnit( 20 + toggleWidthSizeNumberTablet, 'px' ),
			'top': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumberTablet ) / 6 ), 'px' ),
			'bottom': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumberTablet ) / 6 ), 'px' ),
			'left': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumberTablet ) / 6 ), 'px' ),
			'background-color': toggleDotColor,
		},
		' .uagb-slider.round': {
			'border-radius': generateCSSUnit( 20 + toggleWidthSizeNumberTablet, 'px' ),
		},
		' .uagb-switch input:checked + .uagb-slider:before ' : {
			'transform': `translateX(${ generateCSSUnit(
				parseInt( ( ( ( 20 + toggleWidthSizeNumberTablet ) * 2.5 ) - ( 20 + toggleWidthSizeNumberTablet ) ) ),
				'px'
			) })`,
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': {
			'padding-top': generateCSSUnit(
				paddingBtnTopTablet,
				tabletPaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomTablet,
				tabletPaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftTablet,
				tabletPaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightTablet,
				tabletPaddingBtnUnit
			),
			...submitBorderTablet
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': { // eslint-disable-line no-dupe-keys
			'font-size': generateCSSUnit(
				submitTextFontSizeTablet,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeightTablet,
				submitTextLineHeightType
			),
			'letter-spacing': generateCSSUnit( submitLetterSpacingTablet, submitLetterSpacingType ),
		},
		' .uagb-forms-main-form .uagb-forms-input-label': {
			'font-size': generateCSSUnit(
				labelFontSizeTablet,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightTablet,
				labelLineHeightType
			),
			'margin-bottom': generateCSSUnit( labelGapTablet, labelGapUnit ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit(
				inputFontSizeTablet,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightTablet,
				inputLineHeightType
			),
			'letter-spacing': generateCSSUnit( inputLetterSpacingTablet, inputLetterSpacingType ),
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap': {
			'text-align': buttonAlignTablet,
		},
	};

	mobileSelectors = {
		'.uagb-forms__outer-wrap': {
			'padding-top': generateCSSUnit( formPaddingTopMob, formPaddingUnitMob ),
			'padding-right': generateCSSUnit( formPaddingRightMob, formPaddingUnitMob ),
			'padding-bottom': generateCSSUnit( formPaddingBottomMob, formPaddingUnitMob ),
			'padding-left': generateCSSUnit( formPaddingLeftMob, formPaddingUnitMob ),
		},
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeNumberMobile + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'width': generateCSSUnit( toggleSizeMobileFallback, toggleSizeType ),
			'height': generateCSSUnit( toggleSizeMobileFallback, toggleSizeType ),
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeNumberMobile + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeMobileFallback, 'px' ),
			'height': generateCSSUnit( toggleSizeMobileFallback, 'px' ),
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeNumberMobile + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeMobileFallback, 'px' ),
			'height': generateCSSUnit( toggleSizeMobileFallback, 'px' ),
		},
		' .uagb-forms-main-form .uagb-forms-field-set': {
			'margin-bottom': generateCSSUnit( fieldGapMobile, fieldGapType ),
		},
		' .uagb-switch' : {
			'height': generateCSSUnit(
				parseInt(  20 + toggleWidthSizeNumberMobile + ( toggleBorderWidth * 2 ) + ( ( 20 + toggleWidthSizeNumberMobile ) / 3 ) ),
				'px'
			),
			'width': generateCSSUnit(
				parseInt(  ( ( 20 + toggleWidthSizeNumberMobile ) * 2.5 ) + ( toggleBorderWidth * 2 ) + ( ( 20 + toggleWidthSizeNumberMobile ) / 3 ) ),
				'px'
			),
		},
		' .uagb-switch .uagb-slider:before' : {
			'height': generateCSSUnit( 20 + toggleWidthSizeNumberMobile, 'px' ),
			'width': generateCSSUnit( 20 + toggleWidthSizeNumberMobile, 'px' ),
			'top': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumberMobile ) / 6 ), 'px' ),
			'bottom': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumberMobile ) / 6 ), 'px' ),
			'left': generateCSSUnit( parseInt( ( 20 + toggleWidthSizeNumberMobile ) / 6 ), 'px' ),
			'background-color': toggleDotColor,
		},
		' .uagb-slider.round': {
			'border-radius': generateCSSUnit( 20 + toggleWidthSizeNumberMobile, 'px' ),
		},
		' .uagb-switch input:checked + .uagb-slider:before ' : {
			'transform': `translateX(${ generateCSSUnit(
				parseInt( ( ( ( 20 + toggleWidthSizeNumberMobile ) * 2.5 ) - ( 20 + toggleWidthSizeNumberMobile ) ) ),
				'px'
			) })`,
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': { // eslint-disable-line no-dupe-keys
			'padding-top': generateCSSUnit(
				paddingBtnTopMobile,
				mobilePaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomMobile,
				mobilePaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftMobile,
				mobilePaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightMobile,
				mobilePaddingBtnUnit
			),
			'font-size': generateCSSUnit(
				submitTextFontSizeMobile,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeightMobile,
				submitTextLineHeightType
			),
			...submitBorderMobile,
			'letter-spacing': generateCSSUnit( submitLetterSpacingMobile, submitLetterSpacingType ),
		},
		' .uagb-forms-main-form .uagb-forms-input-label': {
			'font-size': generateCSSUnit(
				labelFontSizeMobile,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightMobile,
				labelLineHeightType
			),
			'margin-bottom': generateCSSUnit( labelGapMobile, labelGapUnit ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit(
				inputFontSizeMobile,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightMobile,
				inputLineHeightType
			),
			'letter-spacing': generateCSSUnit( inputLetterSpacingMobile, inputLetterSpacingType ),
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap': {
			'text-align': buttonAlignMobile,
		},
	};

	let stylingCss = '';
	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;
	stylingCss = generateCSS( selectors, base_selector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
