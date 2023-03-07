import { __ } from '@wordpress/i18n';
const PreviewImage = ( { image, isChildren = false } ) => {
	if ( ! image ) {
		// eslint-disable-next-line no-console
		console.error(
			__( 'Please add preview image.', 'ultimate-addons-for-gutenberg' )
		);
	}

	let imgUrl = uagb_blocks_info.uagb_url;
	imgUrl += '/assets/images/block-previews/';
	if ( isChildren ) {
		imgUrl += 'children/';
	}
	imgUrl += image + '.svg';
	return <img width="100%" src={ imgUrl } alt="" />;
};

export default PreviewImage;
