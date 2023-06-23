import { useLayoutEffect, memo } from '@wordpress/element';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import MapComponent from './mapComponent';
const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	const YOUR_API_KEY_HERE = uagb_blocks_info.google_api_key;
	
	props = props.parentProps;

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		className,
		attributes: { zoom, address, language, height, latitude, longitude, infoWindow, title, description, },
		deviceType
	} = props;

	const encoded_address = encodeURI( address );
	const lang_par = language ? language : 'en';

	const url = `https://maps.google.com/maps?q=${ encoded_address }&z=${ getFallbackNumber( zoom, 'zoom', blockName ) }&hl=${ lang_par }&t=m&output=embed&iwloc=near`;

	return (
		<div
			className={ classnames(
				className,
				'uagb-google-map__wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`
			) }
		>
			{ ! YOUR_API_KEY_HERE  && 
				( <iframe
					className="uagb-google-map__iframe"
					title={ __( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) + address }
					src={ url }
					width="640"
					height={ height }
					loading="lazy"
				></iframe> 
			) }
			{ YOUR_API_KEY_HERE && (
				<MapComponent apiKey={YOUR_API_KEY_HERE} height={height} zoom={getFallbackNumber(zoom, 'zoom', blockName)} latitude={latitude} longitude={longitude} language={lang_par} infoWindow={infoWindow} title={title} description={description}/>
			) }
		</div>
	);
};

export default memo( Render );
