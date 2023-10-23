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
use SpecAI\Admin\Core\Admin_Views;

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
	private $menu_slug = SPEC_AI_MENU_SLUG;

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
		// Setup the Admin Scripts.
		add_action( 'admin_init', array( $this, 'settings_admin_scripts' ) );

		// Setup the Admin Menu.
		add_action( 'admin_menu', array( $this, 'setup_menu' ) );
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

		$capability = 'manage_options';

		// Add the Spec AI Submenu.
		add_submenu_page(
			'tools.php', // The parent page of this menu.
			'Spec - AI Assistant', // The page title.
			'Spec - AI Assistant', // The menu title.
			$capability, // The capability required for access to this page.
			$this->menu_slug, // The menu slug.
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

		if ( ! Admin_Helpers::is_spec_authorized() ) {
			// If Spec is not authorized, render the auth screen.
			Admin_Views::render_admin_auth_markup( $menu_page_slug );
		} else {
			// If Spec is authorized, render the settings page.
			Admin_Views::render_admin_settings_markup( $menu_page_slug );
		}
	}

	/**
	 * Load the Admin Settings and Scripts on initialization.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function settings_admin_scripts() {
		// Bail if the current page is not the Spec AI Settings page.
		if ( empty( $_GET['page'] ) || ( $this->menu_slug !== $_GET['page'] ) ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return;
		}

		// Enqueue the Admin Styles and Scripts for the React App if Spec is not authorized.
		if ( ! Admin_Helpers::is_spec_authorized() ) {
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles_and_scripts' ) );
		} else {
			$this->register_spec_ai_settings();
			add_filter( 'admin_footer_text', array( $this, 'add_footer_link' ), 99 );
		}
	}

	/**
	 * Register the settings for Spec AI.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function register_spec_ai_settings() {

		register_setting(
			'spec_ai_admin_settings', // The settings group name.
			'spec_ai_settings' // The option name.
		);
	}

	/**
	 * Enqueues the needed CSS/JS for Spec AI's admin settings page.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function enqueue_styles_and_scripts() {

		// Enqueue the admin Google Fonts and WP Components.
		$admin_slug = 'spec-ai-admin';
		wp_enqueue_style( $admin_slug . '-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap', array(), SPEC_AI_VERSION );
		wp_enqueue_style( 'wp-components' );

		// Add the data to localize.
		$localize = apply_filters(
			'spec_ai_admin_localize',
			array(
				'admin_url'            => admin_url(),
				'spec_auth_middleware' => SPEC_AI_MIDDLEWARE,
				'is_spec_authorized'   => Admin_Helpers::is_spec_authorized(),
				'spec_auth_nonce'      => wp_create_nonce( 'spec_ai_auth_nonce' ),
			)
		);

		// Enqueue the admin scripts.
		$this->localize_and_enqueue_admin_scripts( $localize );
	}

	/**
	 * Localize and Enqueue the Admin Scripts.
	 *
	 * @param array $localize The data to localize.
	 * @since x.x.x
	 * @return void
	 */
	public function localize_and_enqueue_admin_scripts( $localize ) {
		// Set the required variables.
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

		// Register the admin scripts.
		wp_register_script(
			$handle,
			$build_url . 'dashboard-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		// Register the admin styles.
		wp_register_style(
			$handle,
			$build_url . 'dashboard-app.css',
			array(),
			SPEC_AI_VERSION
		);

		// Register the admin Google Fonts.
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
}
