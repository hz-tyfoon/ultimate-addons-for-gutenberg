
import { GradientPicker } from '@wordpress/components';

const GradientSettings = ( props ) => {
	const { setAttributes, backgroundGradient } = props;

	const onGradientChange = ( value ) => {
		setAttributes( { [ backgroundGradient.label ]: value } );
	};

	return (
		<GradientPicker
			value={ backgroundGradient.value }
			onChange={ onGradientChange }
		/>
	);
}

export default GradientSettings;
