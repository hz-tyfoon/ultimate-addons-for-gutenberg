import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { memo } from '@wordpress/element';
const MapComponent = ( { apiKey, height, zoom, latitude, longitude, language } ) => {
	const position = {
		lat: latitude,
		lng: longitude
	}
	return (
		<LoadScript googleMapsApiKey={apiKey}>
			<GoogleMap
				mapContainerStyle={{ width: '100%', height }}
				center={{ lat: latitude, lng: longitude }}
				zoom={zoom}
				language={language}
			>
				<Marker
					position={position}
				/>
			</GoogleMap>
		</LoadScript>
	);
};

export default memo( MapComponent );