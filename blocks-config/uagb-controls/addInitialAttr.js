import { useEffect } from '@wordpress/element';
const addInitialAttr = ( ChildComponent ) => {
	const WrappedComponent = ( props ) => {
		const { name, setAttributes, clientId } = props;

		useEffect( () => {
			const listOfClassMigrate = [
				'uagb/advanced-heading',
				'uagb/blockquote',
				'uagb/buttons',
				'uagb/call-to-action',
				'uagb/column',
				'uagb/columns',
				'uagb/icon-list',
				'uagb/marketing-button',
				'uagb/image-gallery',
				'uagb/info-box',
				'uagb/lottie',
				'uagb/restaurant-menu',
				'uagb/section',
				'uagb/social-share',
				'uagb/content-timeline',
				'uagb/table-of-contents',
				'uagb/team',
				'uagb/testimonial',
			];

			const listOfChildMigrate = [
				'uagb/buttons',
				'uagb/icon-list',
				'uagb/restaurant-menu',
				'uagb/social-share',
                'uagb/content-timeline',
			];

			const listOfIsHtml = [ 'uagb/cf7-styler', 'uagb/gf-styler' ];

			const listOfEditorInnerblocksPreview = [ 'uagb/countdown' ];

			const listOfAllTaxonomyStore = [ 'uagb/post-carousel', 'uagb/post-grid', 'uagb/post-masonry' ];

			if ( listOfAllTaxonomyStore.includes( name ) ) {
				setAttributes( { allTaxonomyStore: undefined } );
			}
			
            // editorInnerblocksPreview: This attribute is used to display innerblocks preview for 'Replace with Content' mode.
			if ( listOfEditorInnerblocksPreview.includes( name ) ) {
				setAttributes( {
					editorInnerblocksPreview: false,
				} );
			}

			if ( listOfIsHtml.includes( name ) ) {
				setAttributes( { isHtml: false } );
			}

			if ( listOfChildMigrate.includes( name ) ) {
				setAttributes( { childMigrate: true } );
			}

			if ( listOfClassMigrate.includes( name ) ) {
				setAttributes( { classMigrate: true } );
			}

			setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		}, [] );

		return <ChildComponent { ...props } />;
	};

	return WrappedComponent;
};
export default addInitialAttr;
