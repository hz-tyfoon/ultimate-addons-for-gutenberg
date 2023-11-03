<?php
/**
 * Zip AI.
 *
 * @package zip-ai
 */

namespace ZipAI;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ZipAI\Classes\Admin_Configurations;
use ZipAI\Classes\Sidebar_Configurations;
use ZipAI\Classes\Zip_Ai_Helpers;

/**
 * The Zip_AI Class.
 */
class Zip_AI {

	/**
	 * Instance of this class.
	 *
	 * @var object Class object.
	 * @since x.x.x
	 */
	private static $instance;

	/**
	 * Initiator of this class.
	 *
	 * @since x.x.x
	 * @return object initialized object of class.
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
		spl_autoload_register( array( $this, 'autoload' ) );

		$this->define_constants();
		$this->setup_classes();
	}

	/**
	 * Autoloader to load classes.
	 *
	 * @param string $class class name.
	 * @since x.x.x
	 * @return void
	 */
	public function autoload( $class ) {

		// If the specified class does not include Zip's namespace, duck out.
		if ( 0 !== strpos( $class, __NAMESPACE__ ) ) {
			return;
		}

		// If class is in a subdirectory, remove the parent namespace.
		if ( ! class_exists( $class ) ) {
			// Remove the parent namespace amd replace namespace separators with directory separators.
			$filename = strtolower(
				preg_replace(
					array( '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ),
					array( '', '$1-$2', '-', DIRECTORY_SEPARATOR ),
					$class
				)
			);

			// Find the last slash in the filename, and append 'class' to the filename.
			$last_slash = strrpos( $filename, DIRECTORY_SEPARATOR );
			$filename   = substr( $filename, 0, $last_slash ) . DIRECTORY_SEPARATOR . 'class-' . substr( $filename, $last_slash + 1 );

			// Construct the file path.
			$file = ZIP_AI_DIR . $filename . '.php';

			// If the file is redable, include it.
			if ( is_readable( $file ) ) {
				require_once $file;
			}
		}//end if
	}

	/**
	 * Define the required constants.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function define_constants() {
		// Note - These constants will change when moved out of UAGB.
		define( 'ZIP_AI_FILE', __FILE__ );
		define( 'ZIP_AI_DIR', plugin_dir_path( ZIP_AI_FILE ) );
		define( 'ZIP_AI_URL', plugins_url( '/', ZIP_AI_FILE ) );
		define( 'ZIP_AI_VERSION', '0.0.1' );
		define( 'ZIP_AI_MENU_SLUG', 'zip-ai' );
		define( 'ZIP_AI_MIDDLEWARE', 'https://billing.zipwp.com/auth/' );
		define( 'ZIP_AI_CREDIT_SERVER_API', 'https://credits.startertemplates.com/api/' );
		define( 'ZIP_AI_CREDIT_TOPUP_URL', 'https://store.brainstormforce.com/downloads/spec-ai/' );
		define( 'ZIP_AI_CREDIT_THRESHOLD_MEDIUM', 65 );
		define( 'ZIP_AI_CREDIT_THRESHOLD_HIGH', 85 );
	}

	/**
	 * Setup the required classes.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function setup_classes() {
		// Quick Cleanup Function for Existing Testers - this should be removed before Zip goes live.
		if ( Zip_Ai_Helpers::get_admin_settings_option( 'spec_ai_settings' ) ) {
			Zip_Ai_Helpers::delete_admin_settings_option( 'spec_ai_settings' );
		}

		// Enable the Zip AI Chat Sidebar if required.
		if ( apply_filters( 'zip_ai_enable_chat_sidebar', true ) ) {
			// If the Zip AI Option does not exist, create it and ensure that Zip Chat is enabled.
			$zip_ai_option = Zip_Ai_Helpers::get_admin_settings_option( 'zip_ai_settings' );
			if ( empty( $zip_ai_option['auth_token'] ) ) {
				Zip_Ai_Helpers::ensure_zip_chat_is_enabled();
			}
			Sidebar_Configurations::get_instance();
		}

		// Enable the Zip AI Admin Configurations if required.
		if ( is_admin() ) {
			Admin_Configurations::get_instance();
		}
	}
}

// Kickin' this off by calling the 'get_instance()' method.
Zip_AI::get_instance();
