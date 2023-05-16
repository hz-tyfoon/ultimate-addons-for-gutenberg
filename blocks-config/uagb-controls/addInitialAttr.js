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

			const attributeObject = { block_id: clientId.substr( 0, 8 ) };

			if ( listOfAllTaxonomyStore.includes( name ) ) {
				attributeObject.allTaxonomyStore = undefined;
			}
			
            // editorInnerblocksPreview: This attribute is used to display innerblocks preview for 'Replace with Content' mode.
			if ( listOfEditorInnerblocksPreview.includes( name ) ) {
				attributeObject.editorInnerblocksPreview = false;
			}

			if ( listOfIsHtml.includes( name ) ) {
				attributeObject.isHtml = false;
			}

			if ( listOfChildMigrate.includes( name ) ) {
				attributeObject.childMigrate = true;
			}

			if ( listOfClassMigrate.includes( name ) ) {
				attributeObject.classMigrate = true;
			}

			setAttributes( attributeObject );
		}, [] );

		return <ChildComponent { ...props } />;
	};

	return WrappedComponent;
};
export default addInitialAttr;
