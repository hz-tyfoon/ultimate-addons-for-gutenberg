import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const getLoopImage = (context, attributes) => {
	// Check if not in loop.
	if (!attributes?.loopData?.enable || !context?.postId) {
		return {};
	}

	// Get featured image.
	const [featuredImage] = useEntityProp(
		'postType',
		context.postType,
		'featured_media',
		context.postId
	);

	const mediaData = useSelect(
		(select) => {
			const { getMedia } = select(coreStore);
			return {
				media:
					featuredImage &&
					getMedia(featuredImage, {
						context: 'view',
					}),
			};
		},
		[featuredImage, context.postType]
	);

	// Set post featured image.
	if (mediaData.media?.source_url) {
		return {
			url: mediaData.media.source_url,
			alt: mediaData.media.alt_text
				? mediaData.media.alt_text
				: __('Post featured image', 'ultimate-addons-for-gutenberg'),
		};
	}

	return {};
};
export default getLoopImage;
