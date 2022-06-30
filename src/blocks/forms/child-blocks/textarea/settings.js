import React from 'react';
import { __ } from '@wordpress/i18n';
import { ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import Range from '@Components/range/Range.js';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';

import { InspectorControls } from '@wordpress/block-editor';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes } = props;

	const { textareaRequired, rows, placeholder, autocomplete } = attributes;

	const textareaInspectorControls = () => {
		return (
			<UAGAdvancedPanelBody initialOpen={ true }>
				<SelectControl
					label={ __( 'Autocomplete', 'ultimate-addons-for-gutenberg' ) }
					value={ autocomplete }
					options={ [
						{ label: __( 'Off', 'ultimate-addons-for-gutenberg' ), value: 'off' },
						{ label: __( 'Address', 'ultimate-addons-for-gutenberg' ), value: 'street-address' },
					] }
					onChange={ ( value ) =>
						setAttributes( { autocomplete: value } )
					}
				/>
				<TextControl
					label={ __(
						'Placeholder',
						'ultimate-addons-for-gutenberg'
					) }
					value={ placeholder }
					onChange={ ( value ) =>
						setAttributes( { placeholder: value } )
					}
				/>
				<Range
					label={ __(
						'Number of lines',
						'ultimate-addons-for-gutenberg'
					) }
					setAttributes={ setAttributes }
					value={ rows }
					data={ {
						value: rows,
						label: 'rows',
					} }
					min={ 2 }
					max={ 10 }
					displayUnit={ false }
				/>
				<ToggleControl
					label={ __( 'Required', 'ultimate-addons-for-gutenberg' ) }
					checked={ textareaRequired }
					onChange={ () =>
						setAttributes( {
							textareaRequired: ! textareaRequired,
						} )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};

	return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ textareaInspectorControls() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.advance }></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
};
export default React.memo( Settings );
