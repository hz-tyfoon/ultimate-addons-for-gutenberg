import { useEffect } from '@wordpress/element';
const addInitialAttr = ( ChildComponent )=> {
	const WrappedComponent = ( props ) => {
        const { name, setAttributes, clientId } = props;

		useEffect( () => {
            const listOfClassMigrate = [ 'uagb/advanced-heading', 'uagb/blockquote', 'uagb/buttons', 'uagb/call-to-action', 'uagb/column', 'uagb/columns', 'uagb/icon-list', 'uagb/image-gallery' ];

            const listOfChildMigrate = [ 'uagb/buttons', 'uagb/icon-list' ];

            const listOfIsHtml = [ 'uagb/cf7-styler', 'uagb/gf-styler' ];

            const listOfEditorInnerblocksPreview = [ 'uagb/countdown' ]
          
            if ( listOfEditorInnerblocksPreview.includes( name ) ) {
                // editorInnerblocksPreview: This attribute is used to display innerblocks preview for 'Replace with Content' mode.
		        setAttributes( {
			       editorInnerblocksPreview: false,
		        } );
            }
            if( listOfIsHtml.includes( name ) ) {
                setAttributes( { isHtml: false } );
            }
            if( listOfChildMigrate.includes( name ) ) {
                setAttributes( { childMigrate: true } );
            }
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