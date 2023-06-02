import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function save( props ) {
	const blockName = 'google-map';
	const { block_id, zoom, address, language, height } = props.attributes;

	const url = 'https://maps.google.com/maps'
	url.searchParams.set( 'q', encodeURI( address ) );
	url.searchParams.set( 'z', getFallbackNumber( zoom, 'zoom', blockName ) );
	url.searchParams.set( 'hl', language ? language : 'en' );
	url.searchParams.set( 't', 'm' );
	url.searchParams.set( 'output', 'embed' );
	url.searchParams.set( 'iwloc', 'near' );

	return (
		<div className={ classnames( props.className, 'uagb-google-map__wrap', `uagb-block-${ block_id }` ) }>
			<iframe
				className="uagb-google-map__iframe"
				title={ __( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) + address }
				src={ url }
				width="640"
				height={ height }
				loading="lazy"
			></iframe>
		</div>
	);
}
