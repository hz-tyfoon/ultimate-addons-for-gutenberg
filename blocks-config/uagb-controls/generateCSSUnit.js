function generateCSSUnit( value, unit ) {
	if( isNaN( value ) || value === '' || null === value ){
		return '';
	}

	return value + unit;
}

export default generateCSSUnit;

