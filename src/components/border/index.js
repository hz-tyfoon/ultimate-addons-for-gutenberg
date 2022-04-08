/**
 * Border component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import { SelectControl } from '@wordpress/components';
import UAGTabsControl from '@Components/tabs';

import styles from './editor.lazy.scss';

import React, { useLayoutEffect } from 'react';
const Border = ( props ) => {
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );
	const {
		setAttributes,
		borderColor,
		borderWidth,
		borderRadius,
		borderStyle,
		borderHoverColor,
	} = props;

	const tabOutputNormal = (
		<AdvancedPopColorControl
			label={ borderColor.title }
			colorValue={ borderColor.value }
			onColorChange={ ( value ) =>
				setAttributes( { [ borderColor.label ]: value } )
			}
		/>
	);
	const tabOutputHover = (
		<AdvancedPopColorControl
			label={ borderHoverColor.title }
			colorValue={ borderHoverColor.value }
			onColorChange={ ( value ) =>
				setAttributes( { [ borderHoverColor.label ]: value } )
			}
		/>
	);
	const advancedControls = (
		<>
			<h2>{ __( 'Border', 'ultimate-addons-for-gutenberg' ) }</h2>
			<div className="uag-border-type">
				<SelectControl
					label={ borderStyle.title }
					labelPosition="top"
					value={ borderStyle.value }
					onChange={ ( value ) =>
						setAttributes( {
							[ borderStyle.label ]: value,
						} )
					}
					options={ [
						{
							value: 'none',
							label: __(
								'None',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'solid',
							label: __(
								'Solid',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dotted',
							label: __(
								'Dotted',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'dashed',
							label: __(
								'Dashed',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'double',
							label: __(
								'Double',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'groove',
							label: __(
								'Groove',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'inset',
							label: __(
								'Inset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'outset',
							label: __(
								'Outset',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'ridge',
							label: __(
								'Ridge',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
				/>
			</div>

			{ 'none' !== borderStyle.value && (
				<div className="uag-border-width">
					<Range
						label={ borderWidth.title }
						value={ borderWidth.value }
						min={ 0 }
						max={ 100 }
						displayUnit={ false }
						setAttributes={setAttributes}
						data={{value:borderWidth.value, label: borderWidth.label}}
						onChange={false}
					/>
				</div>
			) }
			<div className="uag-border-radius">
				<Range
					label={ borderRadius.title }
					value={ borderRadius.value }
					data={{value:borderRadius.value, label: borderRadius.label}}
					min={ 0 }
					max={ 100 }
					displayUnit={ borderRadius?.displayUnit || false }
					unit={ borderRadius?.unit || false }
					units={ [
						{
							name: __(
								'Pixel',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: 'px',
						},
						{
							name: __(
								'%',
								'ultimate-addons-for-gutenberg'
							),
							unitValue: '%',
						},
					] }
					setAttributes={ setAttributes }
					onChange={false}
				/>
			</div>
			{ 'none' !== borderStyle.value && (
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
					normal={ tabOutputNormal }
					hover={ tabOutputHover }
					disableBottomSeparator={ props.disableBottomSeparator }
				/>
			) }
		</>
	);

	return (
		<div className="uag-border-select-control components-base-control">
			{ advancedControls }
		</div>
	);
};

export default Border;
