import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
const AddStaticStyles = ( ChildComponent )=> {
	return ( props ) => {
		const deviceType = useDeviceType();
		useEffect( () => {
			addBlockEditorDynamicStyles();
		}, [ deviceType ] );
	
		return <ChildComponent { ...props }/>
	}
}
export default AddStaticStyles;