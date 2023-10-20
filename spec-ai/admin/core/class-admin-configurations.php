<?php
/**
 * Spec AI - Admin Configurations.
 *
 * @package spec-ai
 */

namespace SpecAI\Admin\Core;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use SpecAI\Admin\Core\Admin_Helpers;

/**
 * The Admin_Configurations Class.
 */
class Admin_Configurations {

	/**
	 * The menu slug.
	 * 
	 * @since x.x.x
	 * @var string Menu slug.
	 */
	private $menu_slug = 'spec-ai';

	/**
	 * Instance of this class.
	 *
	 * @since x.x.x
	 * @var object Class object.
	 */
	private static $instance;

	/**
	 * Initiator of this class.
	 *
	 * @since x.x.x
	 * @return object initialized object of this class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor of this class.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function __construct() {

		// Setup the Admin Menu.
		add_action( 'admin_menu', array( $this, 'setup_menu' ) );
		add_action( 'admin_init', array( $this, 'settings_admin_scripts' ) );

		// Render admin content view.
		add_action( 'spec_ai_render_admin_page_settings', array( $this, 'render_content' ), 10, 1 );
	}

	/**
	 * Add submenu to admin menu.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function setup_menu() {
		// Bail if the current user does not have the required capability.
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		// Set the required variables.
		$menu_slug  = $this->menu_slug;
		$capability = 'manage_options';

		// Add the Spec AI Submenu.
		add_submenu_page(
			'tools.php', // The parent page of this menu.
			'Spec - AI Assistant', // The page title.
			'Spec - AI Assistant', // The menu title.
			$capability, // The capability required for access to this page.
			$menu_slug, // The menu slug.
			array( $this, 'render_dashboard' ) // The rendered output function.
		);
	}

	/**
	 * Render the Spec AI Admin Settings Page.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function render_dashboard() {

		// Check if Spec is Authorized, then either render the settings page or the auth screen.
		$spec_options   = Admin_Helpers::get_admin_settings_option( 'spec_ai_settings', array() );
		$menu_page_slug = $this->menu_slug;

		// If Spec is not authorized, render the auth screen.
		if ( empty( $spec_options )
			|| ! is_array( $spec_options )
			|| empty( $spec_options['auth_token'] )
			|| ! is_string( $spec_options['auth_token'] )
			|| empty( trim( $spec_options['auth_token'] ) )
		) {
			include_once SPEC_AI_DIR . 'admin/core/views/admin-auth.php';
			return;
		}

		include_once SPEC_AI_DIR . 'admin/core/views/admin-base.php';
	}

	/**
	 * Load the Admin Settings and Scripts on initialization.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function settings_admin_scripts() {

		// Bail if the current page is not the Spec AI Settings page.
		if ( empty( $_GET['page'] ) //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			|| ( $this->menu_slug !== $_GET['page'] //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			|| false === strpos( sanitize_text_field( $_GET['page'] ), $this->menu_slug . '_' ) ) //phpcs:ignore WordPress.Security.NonceVerification.Recommended
		) {
			return;
		}

		add_action( 'admin_enqueue_scripts', array( $this, 'styles_scripts' ) );
		add_filter( 'admin_footer_text', array( $this, 'add_footer_link' ), 99 );
	}

	/**
	 * Enqueues the needed CSS/JS for Spec AI's admin settings page.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function styles_scripts() {

		$admin_slug = 'spec-ai-admin';

		// Enqueue the admin styles.
		wp_enqueue_style( $admin_slug . '-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap', array(), SPEC_AI_VERSION );
		wp_enqueue_style( 'wp-components' );

		// Get the current theme and theme settings.
		$theme               = wp_get_theme();
		$theme_data          = \WP_Theme_JSON_Resolver::get_theme_data();
		$theme_settings      = $theme_data->get_settings();
		$theme_font_families = isset( $theme_settings['typography']['fontFamilies']['theme'] ) && is_array( $theme_settings['typography']['fontFamilies']['theme'] ) ? $theme_settings['typography']['fontFamilies']['theme'] : array();

		// Get the Spec AI settings.
		$spec_options = Admin_Helpers::get_admin_settings_option( 'spec_ai_settings' );

		// If the Spec AI settings are empty, set them to an empty array.
		if ( empty( $spec_options ) || ! is_array( $spec_options ) ) {
			$spec_options = array();
		}

		$localize = apply_filters(
			'spec_ai_admin_localize',
			array(
				'spec_auth_middleware' => SPEC_AI_MIDDLEWARE,
				'is_spec_authorized'   => ( ! empty( $spec_options['auth_token'] ) && is_string( $spec_options['auth_token'] ) && ! empty( trim( $spec_options['auth_token'] ) ) ),
				'spec_auth_nonce'      => wp_create_nonce( 'spec_ai_auth_nonce' ),
			)
		);

		$this->settings_app_scripts( $localize );
	}

	/**
	 * Settings app scripts
	 *
	 * @param array $localize The data to localize.
	 * @since x.x.x
	 * @return void
	 */
	public function settings_app_scripts( $localize ) {
		$handle            = 'spec-ai-admin-settings';
		$build_path        = SPEC_AI_DIR . 'admin/dashboard-app/build/';
		$build_url         = SPEC_AI_URL . 'admin/dashboard-app/build/';
		$script_asset_path = $build_path . 'dashboard-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => SPEC_AI_VERSION,
			);
		$script_dep        = array_merge( $script_info['dependencies'], array( 'updates' ) );

		// Enqueue the admin scripts.
		wp_register_script(
			$handle,
			$build_url . 'dashboard-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		// Enqueue the admin styles.
		wp_register_style(
			$handle,
			$build_url . 'dashboard-app.css',
			array(),
			SPEC_AI_VERSION
		);

		// Enqueue the admin Google Fonts.
		wp_register_style(
			'spec-ai-admin-google-fonts',
			'https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap',
			array(),
			SPEC_AI_VERSION
		);

		// Enqueue the admin scripts.
		wp_enqueue_script( $handle );
		// Set the script translations.
		wp_set_script_translations( $handle, 'spec-ai' );
		// Enqueue the Google Fonts.
		wp_enqueue_style( 'spec-ai-admin-google-fonts' );
		// Enqueue the admin styles.
		wp_enqueue_style( $handle );
		// Set the RTL styles.
		wp_style_add_data( $handle, 'rtl', 'replace' );
		// Localize the script.
		wp_localize_script( $handle, 'spec_ai_react', $localize );
	}

	/**
	 * Add the footer link.
	 *
	 * @since x.x.x
	 * @return string The footer link.
	 */
	public function add_footer_link() {
		// translators: HTML entities.
		return '<span id="footer-thankyou">' . sprintf( __( 'Thank you for using %1$sSpec AI.%2$s', 'ultimate-addons-for-gutenberg' ), '<a href="https://wpspectra.com/" class="focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover">', '</a>' ) . '</span>';
	}

	/**
	 * Renders the admin settings content.
	 *
	 * @param string $menu_page_slug current page name.
	 * @since x.x.x
	 * @return void
	 */
	public function render_content( $menu_page_slug ) {

		if ( $this->menu_slug === $menu_page_slug ) {
			include_once SPEC_AI_DIR . 'admin/core/views/dashboard-app.php';
		}
	}
}
