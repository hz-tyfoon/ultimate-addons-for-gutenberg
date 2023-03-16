import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export function getLoopImage(ChildComponent) {
	return (props) => {
		const { attributes, context } = props;
		
		if (
			!attributes?.loopData ||
			!attributes.loopData?.enable ||
			!context?.postId
		) {
			return <ChildComponent {...props} />;
		}

		// only for place holder.
		if (
			attributes.loopData?.type === 'place_holder' ||
			attributes.loopData?.type === 'author_avatar'
		) {
			const extraProps = {
				loopUrl:
					spectra_pro_blocks_info.spectra_pro_url +
					'assets/images/placeholder.png',
				loopAlt: __('Author avatar', 'ultimate-addons-for-gutenberg'),
			};

			if (attributes.loopData?.type === 'author_avatar') {
				extraProps['loopWidth'] = 100;
			}
			return <ChildComponent {...{ ...props, ...extraProps }} />;
		}

		// Get featured image.
		const [featuredImage] = useEntityProp(
			'postType',
			props.context.postType,
			'featured_media',
			props.context.postId
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

		const extraProps = {};
		// Set post featured image.
		if (mediaData?.media?.source_url) {
			(extraProps['loopUrl'] = mediaData.media.source_url),
				(extraProps['loopAlt'] = mediaData.media.alt_text
					? mediaData.media.alt_text
					: __(
							'Post featured image',
							'ultimate-addons-for-gutenberg'
					  ));
		}

		const newProps = { ...props, ...extraProps };
		return <ChildComponent {...newProps} />;
	};
}
