import { useEffect } from '@wordpress/element';


import { useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
const getEditorBlocks = () => wp.data.select( 'core/block-editor' ).getBlocks();
/**
 * Search all blocks for uniqueIds
 *
 * @param {Array} blocks The blocks array
 * @return {Array} The array of uniqueIds
 */
export const getUniqueIdFromBlocks = ( blocks ) => blocks
	.reduce( ( result, block ) => {
		if (
			block.name &&
			( block.attributes && block.attributes.block_id )
		) {
			result.uniqueIds.push( block.attributes.block_id );
			result.clientIds.push( block.clientId );
		}

		if ( block.innerBlocks ) {
			const { uniqueIds, clientIds } = getUniqueIdFromBlocks( block.innerBlocks );
			result.uniqueIds = result.uniqueIds.concat( uniqueIds );
			result.clientIds = result.clientIds.concat( clientIds );
		}

		return result;
	}, { uniqueIds: [], clientIds: [] } );

/**
 * Generates a unique id based on the clientId
 *
 * @param {string} clientId The block clientId
 * @return {string} The uniqueId
 */
export const generateUniqueId = ( clientId ) => clientId.substr( 2, 9 ).replace( '-', '' );

/**
 * Checks if the array contains duplicates of the value
 *
 * @param {Array}  arr          The array to check the values
 * @param {any}    value        The value to check if has duplicates
 * @param {number} currentIndex The current index
 * @return {boolean} If the array has duplicates
 */
export const hasDuplicates = ( arr, value, currentIndex ) => (
	arr.filter( ( el ) => ( el === value ) ).length > 1 &&
	currentIndex === arr.lastIndexOf( value )
);

/**
 * It will enhance a block component with the attributes.uniqueId property
 *
 * @param {any} WrappedComponent The component to add the uniqueId
 * @return {function(*)} The wrapped component
 */
// export default ( WrappedComponent ) => ( ( props ) => {
// 	const { clientId, attributes } = props;
// 	const { updateBlockAttributes } = useDispatch( blockEditorStore );

// 	useEffect( () => {
// 		const { uniqueIds, clientIds } = getUniqueIdFromBlocks( getEditorBlocks() );

// 		if (
// 			! attributes.uniqueId ||
// 			hasDuplicates( uniqueIds, attributes.uniqueId, clientIds.indexOf( clientId ) )
// 		) {
// 			const uniqueId = generateUniqueId( clientId );

// 			updateBlockAttributes( clientId, { uniqueId } );
// 		}
// 	}, [ clientId ] );

// 	return ( <WrappedComponent { ...props } /> );
// } );




const addInitialAttr = ( ChildComponent ) => {
	const WrappedComponent = ( props ) => {
		// console.log( 'hoc props', props);

		const { name, setAttributes, clientId, attributes } = props;

		const { updateBlockAttributes } = useDispatch( blockEditorStore );

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


			/**
			 * Resolve issue of reusable block.
			 * As of now we are not providing for all block
			 * After tested few blocks we will implement this is all blocks.
			 */
			const REUSABLE_BLOCK_ISSUE_RESOLVED_BLOCKS = [ 
				// "uagb/advanced-heading",
				"uagb/blockquote",
				"uagb/buttons",
				"uagb/buttons-child",
				"uagb/call-to-action",
				"uagb/cf7-styler",
				"uagb/column",
				"uagb/columns",
				"uagb/container",
				"uagb/countdown",
				"uagb/counter",
				"uagb/faq",
				"uagb/faq-child",
				"uagb/forms",
				"uagb/forms-accept",
				"uagb/forms-checkbox",
				"uagb/forms-date",
				"uagb/forms-email",
				"uagb/forms-hidden",
				"uagb/forms-name",
				"uagb/forms-phone",
				"uagb/forms-radio",
				"uagb/forms-select",
				"uagb/forms-textarea",
				"uagb/forms-toggle",
				"uagb/forms-upload",
				"uagb/forms-url",
				"uagb/gf-styler",
				"uagb/google-map",
				"uagb/how-to",
				"uagb/how-to-step",
				"uagb/icon",
				"uagb/icon-list",
				"uagb/icon-list-child",
				"uagb/image",
				"uagb/image-gallery",
				"uagb/info-box",
				"uagb/inline-notice",
				"uagb/lottie",
				"uagb/marketing-button",
				"uagb/modal",
				"uagb/popup-builder",
				"uagb/post-button",
				"uagb/post-carousel",
				"uagb/post-excerpt",
				"uagb/post-grid",
				"uagb/post-image",
				"uagb/post-masonry",
				"uagb/post-meta",
				"uagb/post-taxonomy",
				"uagb/post-title",
				"uagb/restaurant-menu",
				"uagb/restaurant-menu-child",
				"uagb/review",
				"uagb/section",
				"uagb/separator",
				"uagb/slider",
				"uagb/slider-child",
				"uagb/social-share",
				"uagb/social-share-child",
				"uagb/star-rating",
				"uagb/table-of-contents",
				"uagb/tabs",
				"uagb/tabs-child",
				"uagb/taxonomy-list",
				"uagb/team",
				"uagb/testimonial",
				"uagb/content-timeline",
				"uagb/content-timeline-child",
				"uagb/post-timeline",
				"uagb/wp-search",
				"uagb/instagram-feed",
				"uagb/login",
				"uagb/loop-builder",
				"uagb/loop-wrapper",
				"uagb/register",
				"uagb/register-email",
				"uagb/register-first-name",
				"uagb/register-last-name",
				"uagb/register-password",
				"uagb/register-reenter-password",
				"uagb/register-terms",
				"uagb/register-username",
			];

			if( ! REUSABLE_BLOCK_ISSUE_RESOLVED_BLOCKS.includes( name ) ){
				const { uniqueIds, clientIds } = getUniqueIdFromBlocks(getEditorBlocks());
				if (
					!attributes.block_id ||
					hasDuplicates(uniqueIds, attributes.block_id, clientIds.indexOf(clientId))
				) {
					setAttributes( attributeObject );
				}
			}else{
				setAttributes( attributeObject );
			}

		}, [ clientId ] );

		return <ChildComponent { ...props } />;
	};

	return WrappedComponent;
};
export default addInitialAttr;
