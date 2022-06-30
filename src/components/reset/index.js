import { blocksAttributes } from '@Controls/getBlocksDefaultAttributes';
import { select } from '@wordpress/data';
import { Button, Tooltip, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const UAGReset = ( props ) => {

	const {
		onReset,
		attributeNames,
		setAttributes
	} = props;

	const { getSelectedBlock } = select( 'core/block-editor' );

	const getBlockResetValue = () => {
		const selectedBlockName = getSelectedBlock()?.name.replace( 'uagb/', '' );
		let defaultValues = false;

		if ( attributeNames ) {
			attributeNames.map( ( attributeName ) => {
				if ( attributeName ) {
					const blockDefaultAttributeValue = blocksAttributes[selectedBlockName][attributeName]?.default;
					defaultValues = {
						...defaultValues,
						[attributeName] : blockDefaultAttributeValue,
					}
				}

				return attributeName;
			} );
		}

		return defaultValues;
	}

	const getResetState = () => {
		const defaultValues = getBlockResetValue();
		const selectedBlockAttributes = getSelectedBlock()?.attributes;
		let resetDisableState = true;

		attributeNames.map( ( attributeName ) => {
			if ( selectedBlockAttributes?.[attributeName] !== defaultValues?.[attributeName] ) {
				resetDisableState = false;
			}
			return attributeName;
		} );

		return resetDisableState;
	};

	const resetDisableState = getResetState();

	const resetHandler = () => {
		const defaultValues = getBlockResetValue();

		if ( attributeNames ) {
			attributeNames.map( ( attributeName ) => {
				if ( attributeName ) {
					if ( setAttributes ) {
						setAttributes( { [ attributeName ]: defaultValues?.[attributeName] } )
					}
				}

				return attributeName;
			} );
		}

		if ( onReset ) {
			onReset( defaultValues );
		}
	};

	return (
		<Tooltip
			text={ __( 'Reset', 'ultimate-addons-for-gutenberg' )}
			key={ 'reset' }
		>
		<Button
			className="uagb-reset"
			isSecondary
			isSmall
			onClick={ ( e ) => {
				e.preventDefault();
				resetHandler();
			} }
			disabled = {resetDisableState}
		>
			<Dashicon icon="image-rotate" />
		</Button>
		</Tooltip>
	);
}

export default UAGReset;
