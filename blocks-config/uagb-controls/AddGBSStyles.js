import { useEffect } from '@wordpress/element';
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

		useEffect( () => {
			AddGBSStylesDom( globalBlockStyleId, editorStyles );
		}, [editorStyles] );

		useEffect( () => {
			const isGBSPresent = globalBlockStyles?.find( style => {
				return globalBlockStyleId && style?.value === globalBlockStyleId;
			} );

			if( initialStateFlag && ! isGBSPresent ){
				setAttributes( 
					{ 
						globalBlockStyleId: '',
						globalBlockStyleName: ''
					} 
				);
			}
		}, [globalBlockStyles] );

		// Filter the placeholder attribute.

		const modifiedAttr = { ...attributes };

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

		props = { ...props, ...{ attributes: updatedAttributes } };

		return <ChildComponent { ...props }/>
	}

    return WrapWithStyle;
}
export default AddGBSStyles;