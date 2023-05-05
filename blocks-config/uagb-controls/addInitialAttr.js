import { useEffect } from '@wordpress/element';
const addInitialAttr = ( ChildComponent )=> {
	const WrappedComponent = ( props ) => {
        const { name, setAttributes, clientId } = props;

		useEffect( () => {

            if ( name === 'uagb/countdown' ) {
                // editorInnerblocksPreview: This attribute is used to display innerblocks preview for 'Replace with Content' mode.
		        setAttributes( {
			       editorInnerblocksPreview: false,
		        } );
            }
            if( name === 'uagb/cf7-styler' ) {
                setAttributes( { isHtml: false } );
            }
            if( name === 'uagb/buttons' ) {
                setAttributes( { childMigrate: true } );
            }
            if( name === 'uagb/advanced-heading' || 'uagb/blockquote' || 'uagb/buttons' || 'uagb/call-to-action' || 'uagb/column' || 'uagb/columns' ) {
                setAttributes( { classMigrate: true } );
            }

            setAttributes( { block_id: clientId.substr( 0, 8 ) } );
        }, [] );

		return <ChildComponent { ...props } />
	}

    return WrappedComponent;
}
export default addInitialAttr;