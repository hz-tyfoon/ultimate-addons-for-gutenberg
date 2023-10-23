import React from 'react';
import { render } from 'react-dom';

import '@DashboardApp/common/styles/all-config.scss';
import Authorization from '@DashboardApp/pages/Authorization';

render(
	<Authorization/>,
	document.getElementById( 'spec-ai-dashboard-app' )
);