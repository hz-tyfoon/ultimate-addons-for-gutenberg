/**
 * The Dashboard App for Zip AI Admin.
 */
import { render } from 'react-dom';

import '@DashboardApp/common/styles/all-config.scss';
import Authorization from '@DashboardApp/screens/Authorization';
import DashboardRouter from '@DashboardApp/screens/DashboardRouter';

// Component: Render the required view.
const ScreenRenderer = () => ( zip_ai_react?.is_zip_ai_authorized ) ? <DashboardRouter/> : <Authorization/>;

render(
	<ScreenRenderer/>,
	document.getElementById( 'zip-ai-dashboard-app' )
);