import { useEffect } from '@wordpress/element';
import { STORE_NAME as storeName } from '@Store/constants';
import { select } from '@wordpress/data';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';

const AddGBSStyles = ( ChildComponent )=> {
	const WrapWithStyle = ( props ) => {
		const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
		const { 
			globalBlockStyleId,
			globalBlockStyleName
		} = props?.attributes;
		
		// if ( ! globalBlockStyleId ) {
		// 	return <ChildComponent { ...props }/>
		// }

		const editorStyles = getGBSEditorStyles( globalBlockStyles, globalBlockStyleId, globalBlockStyleName );

		useEffect( () => {
			const isExistStyle = document.getElementById( 'spectra-gbs-' + globalBlockStyleId );
			if( ! isExistStyle ){
				const node = document.createElement( 'style' )
				node.setAttribute( 'id', 'spectra-gbs-' + globalBlockStyleId );
				node.textContent = editorStyles;
				document.head.appendChild( node )
			}else{
				isExistStyle.textContent = editorStyles
			}
		}, [editorStyles] );

		// Filter the placeholder attribute.

		const modifiedAttr = { ...props.attributes };

		for ( const objectKey in modifiedAttr ) {
			if( 0.001020304 === modifiedAttr?.[objectKey] ){
				modifiedAttr[objectKey] = '';
			}
		}
		
		const updatedAtributes = {
			...props.attributes,
			...modifiedAttr
		};

		props = { ...props, ...{ attributes: updatedAtributes } };

		return <ChildComponent { ...props }/>
	}

    return WrapWithStyle;
}
export default AddGBSStyles;