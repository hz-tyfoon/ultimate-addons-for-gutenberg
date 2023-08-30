import { useEffect, useMemo } from '@wordpress/element';
import { STORE_NAME as storeName } from '@Store/constants';
import { select } from '@wordpress/data';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import AddGBSStylesDom from './AddGBSStylesDom';
import { GBS_RANDOM_NUMBER } from '@Utils/Helpers';

const AddGBSStyles = ( ChildComponent )=> {
	const WrapWithStyle = ( props ) => {
		const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
		const initialStateFlag = select( storeName ).getState()?.initialStateSetFlag;
		
		const { 
			attributes,
			attributes : {
				globalBlockStyleId,
				globalBlockStyleName
			},
			setAttributes
		} = props;
		
		const editorStyles = getGBSEditorStyles( globalBlockStyles, globalBlockStyleId, globalBlockStyleName );
		const modifiedAttr = { ...attributes };

		const isGBSPresent = useMemo( () => globalBlockStyles?.find( style => {
			return globalBlockStyleId && style?.value === globalBlockStyleId;
		} ), [ globalBlockStyleId, globalBlockStyles ] );

		useEffect( () => {
			AddGBSStylesDom( globalBlockStyleId, editorStyles );
		}, [ editorStyles ] );

		useEffect( () => {
			if( initialStateFlag && ! isGBSPresent && globalBlockStyleId ){
				const resetObject = { globalBlockStyleId : '', globalBlockStyleName : '' };
				for ( const objectKeyReset in modifiedAttr ) {
					// Replace GBS_RANDOM_NUMBER with empty string.
					if( GBS_RANDOM_NUMBER === modifiedAttr?.[objectKeyReset] ){
						resetObject[objectKeyReset] = undefined;
					}
				}
				setAttributes( resetObject );
			}
		}, [ globalBlockStyles ] );

		// Filter the placeholder attribute.

		for ( const objectKey in modifiedAttr ) {
			// Replace GBS_RANDOM_NUMBER with empty string.
			if( GBS_RANDOM_NUMBER === modifiedAttr?.[objectKey] ){
				modifiedAttr[objectKey] = '';
			}
		}
		
		const updatedAttributes = {
			...attributes,
			...modifiedAttr
		};

		props = { ...props, ...{ attributes: updatedAttributes, isGBSPresent } };

		return <ChildComponent { ...props }/>
	}

    return WrapWithStyle;
}
export default AddGBSStyles;