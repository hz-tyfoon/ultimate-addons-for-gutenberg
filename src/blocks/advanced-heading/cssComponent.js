import { memo } from '@wordpress/element';
import styling from './styling';
const CssComponent = ( { attributes, clientId, name, deviceType } ) => {
	const blockStyling = styling( attributes, clientId, name, deviceType );
    return <style>{blockStyling}</style>
}
export default memo( CssComponent );
