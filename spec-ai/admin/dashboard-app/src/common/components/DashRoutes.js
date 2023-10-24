import { useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import Welcome from '@DashboardApp/screens/routes/Welcome';
// import Settings from '@DashboardApp/pages/settings/Settings';

const DashRoutes = () => {
	// Get the current page and path.
	const query = new URLSearchParams( useLocation().search );
	const page = query.get( 'page' );
	const path = query.get( 'path' );

	// Create a fallback route.
	let routePage = <p>{ __( 'Default route fallback', 'ultimate-addons-for-gutenberg' ) }</p>;

	// If the page is not set, return the fallback route.
	if ( spec_ai_react.page_slug !== page ) {
		return routePage;
	}

	// Switch the route based on the path.
	switch ( path ) {
		case 'settings':
			routePage = <>Settings</>;
			break;
		default:
			routePage = <Welcome/>;
			break;
	}

	// Return the route.
	return routePage;
}

export default DashRoutes;
