import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const AddStaticStyles = ( ChildComponent )=> {
	return ( props ) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect( () => {
			addBlockEditorDynamicStyles();
		}, [] );
	
		return <ChildComponent { ...props }/>
	}
}
export default AddStaticStyles;