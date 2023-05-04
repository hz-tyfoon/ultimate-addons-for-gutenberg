import { useEffect } from '@wordpress/element';
const addInitialAttr = ( ChildComponent )=> {
	const WrappedComponent = ( props ) => {
        const { setAttributes, clientId, name } = props;

		useEffect( () => {
            const listOfClassMigrate = [ 'uagb/advanced-heading', 'uagb/blockquote' ];
            
            if( listOfClassMigrate.includes( name ) ) {
                setAttributes( { classMigrate: true } );
            }

            setAttributes( { block_id: clientId.substr( 0, 8 ) } );
        }, [] );

		return <ChildComponent { ...props } />
	}

    return WrappedComponent;
}
export default addInitialAttr;