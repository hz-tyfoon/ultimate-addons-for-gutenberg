import { render } from 'react-dom';

import '@DashboardApp/common/styles/all-config.scss';
import Authorization from '@DashboardApp/screens/Authorization';
import DashboardRouter from '@DashboardApp/screens/DashboardRouter';

// Function: Render the required view.
const PageVerifier = () => ( spec_ai_react?.is_spec_authorized ) ? <DashboardRouter/> : <Authorization/>;

render(
	<PageVerifier/>,
	document.getElementById( 'spec-ai-dashboard-app' )
);