import { useEffect } from '@wordpress/element';
const addInitialAttr = ( ChildComponent )=> {
	const WrappedComponent = ( props ) => {
        const { name } = props;

		useEffect( () => {

            if( name === 'uagb/advanced-heading' || name === 'uagb/blockquote') {
                setAttributes( { classMigrate: true } );
            }

            setAttributes( { block_id: clientId.substr( 0, 8 ) } );
        }, [] );

		return <ChildComponent { ...props } />
	}

    return WrappedComponent;
}
export default addInitialAttr;