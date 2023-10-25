import { __ } from '@wordpress/i18n';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminHeader from '@DashboardApp/common/components/AdminHeader';
// import MainNav from '@DashboardApp/common/components/header/MainNav';
import DashRoutes from '@DashboardApp/common/components/DashRoutes';

const DashboardRouter = () => {

    return (
        <Router>
            <AdminHeader title={ __( 'Spec - AI Assistant', 'ultimate-addons-for-gutenberg' ) }>
				{/* <MainNav/> */}
			</AdminHeader>
			<Switch>
				<Route path="/">
					<DashRoutes />
				</Route>
			</Switch>
		</Router>
    );
};

export default DashboardRouter;
