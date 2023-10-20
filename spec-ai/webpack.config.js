// Load the default @wordpress/scripts config object
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Use the defaultConfig but add the common aliases, modules and plugins.
const commonConfig = {
	...defaultConfig,
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@DashboardApp': path.resolve( __dirname, 'admin/dashboard-app/src/' ),
		},
	},
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    'file-loader'
                ]
            }
		]
	},
	plugins: [
		...defaultConfig.plugins.filter( function ( plugin ) {
			if ( plugin.constructor.name === 'LiveReloadPlugin' ) {
				return false;
			}

			return true;
		} ),
	],
};

// Now using the commonConfig that inherits the defaultConfig, replace the entry and output properties for each app.

// Config for the Spec AI Dashboard App.
const dashboardConfig = Object.assign( {}, commonConfig, {
	name: 'spec-dashboard-app',
	entry: {
		'dashboard-app': path.resolve(
			__dirname,
			'admin/dashboard-app/src/DashboardApp.js'
		),
	},
	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'admin/dashboard-app/build' ),
	},
} );

// Export all the configs.
module.exports = [
	dashboardConfig,
];