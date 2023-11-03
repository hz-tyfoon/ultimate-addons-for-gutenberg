/**
 * Zip Chat - Helper - Render the Filter Button.
 */

import { useState } from '@wordpress/element';
import { zipAiClassNames } from '@Scripts/Helpers';
import Select, { components } from 'react-select';

const RenderFilter = ( props ) => {
	const {
		filter: {
			icon = null,
			feature,
			clickEvent = null,
			classNames = [],
			disabled = false,
			options = [],
		},
		type = 'button',
	} = props;

	// A value state required for specifc filter types.
	const [ value, setValue ] = useState( null );

	// The Filter Button Render.
	const renderButton = () => (
		<button
			className={ zipAiClassNames( [
				'spectra-open-ai-modal__filters--label',
				...classNames,
			] ) }
			onClick={ clickEvent }
			disabled={ disabled }
		>
			{ icon }
			{ feature }
		</button>
	)

	// The Filter Select Render.
	const renderSelect = () => {

		// The Value Container for the Select Filters.
		const ValueContainer = ( { children, ...remainingProps } ) => (
			components.ValueContainer && (
				<components.ValueContainer { ...remainingProps }>
					{ !! children && ( icon ) }
					{ children }
				</components.ValueContainer>
			)
		);

		// Common colors used for the React Select styling.
		const dropdownColors = {
			primary: '#007cba',
			border: {
				default: '#e2e8f0',
				hover: '#aaa',
			},
			text: '#50575e',
			white: '#fff',
		};

		// Styles for the Select Filters.
		const styles = {
			// The Select Control Wrapper.
			container: ( provided ) => ( {
				...provided,
				maxWidth: '100%',
			} ),
			// The Select Control, with provided and destructured state.
			control: ( provided, { isDisabled } ) => ( {
				...provided,
				'minHeight': '30px',
				'height': '30px',
				'fontSize': '14px',
				'fontWeight': '400',
				'lineHeight': '16px',
				'cursor': isDisabled ? 'progress' : 'pointer',
				'opacity': isDisabled ? '0.5' : '1',
				'backgroundColor': dropdownColors.white,
				'color': dropdownColors.text,
				'border': `1px solid ${ dropdownColors.border.default }`,
				'borderRadius': '100px',
				'display': 'flex',
				'alignItems': 'center',
				'gap': '6px',
				'boxShadow': 'none',
				'&:hover': {
					borderColor: dropdownColors.border.hover,
				},
			} ),
			// The Value Side of the Select Control.
			valueContainer: ( provided ) => ( {
				...provided,
				height: '30px',
				padding: '0 8px',
				display: 'flex',
				gap:'6px',
				overflow: 'hidden',
			} ),
			// The Input Area of the Select Control.
			input: ( provided ) => ( {
				...provided,
				height: '30px',
				padding: 0,
				margin: 0,
			} ),
			// The Placeholder of the Select Control.
			placeholder: ( provided ) => ( {
				...provided,
				color: dropdownColors.text,
				fontSize: '14px',
				margin: 0,
			} ),
			// The Selected Value of the Select Control.
			singleValue: ( provided ) => ( {
				...provided,
				maxWidth: '100px',
			} ),
			// The Containers that wrap the indicators.
			indicatorsContainer: ( provided ) => ( {
				...provided,
				height: '30px',
			} ),
		};

		// Function to reset the dropdown value after using it in the click event.
		const updateDropdownValue = ( option ) => {
			clickEvent( option );
			setValue( null );
		};
		
		return (
			<div className='spectra-open-ai-modal__filters--select-div' >
				<Select
					placeholder={ feature }
					options={ options }
					value={ value }
					onChange={ ( option ) => updateDropdownValue( option ) }
					isDisabled={ disabled }
					isSearchable = { true }
					isMulti={ false }
					isOpen={ true }
					components = { {
						ValueContainer,
					} }
					styles={ styles }
				/>
			</div>
		);
	};

	// Render the required filter.
	switch ( type ) {
		case 'select':
			return renderSelect();
		default:
			return renderButton();
	}
};

export default RenderFilter;
