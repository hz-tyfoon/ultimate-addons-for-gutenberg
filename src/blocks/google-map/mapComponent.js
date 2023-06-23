import { LoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { memo } from '@wordpress/element';
const MapComponent = ({ apiKey, height, zoom, latitude, longitude, language, infoWindow, title, description } ) => {
	const position = {
		lat: latitude,
		lng: longitude
	}
	const onLoad = infoWindow => {
		console.log('infoWindow: ', infoWindow)
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
					onLoad={onLoad}
					position={position}
				/>
				<InfoWindow
					onLoad={onLoad}
					position={position}
				>
					<div class="uagb-infowindow-content">
						<div class="uagb-infowindow-title">
							{title}
						</div>
						<div class="uagb-infowindow-description">
							{description}
						</div>
					</div>
				</InfoWindow>
			</GoogleMap>
		</LoadScript>
	);
};

export default memo( MapComponent );