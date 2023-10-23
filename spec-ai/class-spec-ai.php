<?php
/**
 * Spec AI.
 *
 * @package spec-ai
 */

namespace SpecAI;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use SpecAI\Admin\Admin_Loader;

/**
 * The Spec_AI Class.
 */
class Spec_AI {

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

		// If the specified class does not include Spec's namespace, duck out.
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
			$file = SPEC_AI_DIR . $filename . '.php';

			// If the file is redable, include it.
			if ( is_readable( $file ) ) {
				require_once $file;
			}
		}
	}

	/**
	 * Define the required constants.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function define_constants() {
		// Note - These constants will change when moved out of UAGB.
		define( 'SPEC_AI_FILE', __FILE__ );
		define( 'SPEC_AI_DIR', plugin_dir_path( SPEC_AI_FILE ) );
		define( 'SPEC_AI_URL', plugins_url( '/', SPEC_AI_FILE ) );
		define( 'SPEC_AI_VERSION', '0.0.1' );
		define( 'SPEC_AI_MENU_SLUG', 'spec-ai' );
		define( 'SPEC_AI_MIDDLEWARE', 'https://store.brainstormforce.com/auth/' );
		define( 'SPEC_AI_CREDIT_THRESHOLD', 100 );
	}

	/**
	 * Setup the required classes.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function setup_classes() {

		if ( is_admin() ) {
			// Kickin' off the Admin Loader.
			Admin_Loader::get_instance();
		}
	}
}

// Kickin' this off by calling the 'get_instance()' method.
Spec_AI::get_instance();
