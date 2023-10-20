import React from 'react';
import ReactDOM from 'react-dom';

import '@DashboardApp/common/styles/all-config.scss';
import Authorization from '@DashboardApp/pages/Authorization';

ReactDOM.render(
	<Authorization/>,
	document.getElementById( 'spec-ai-dashboard-app' )
);