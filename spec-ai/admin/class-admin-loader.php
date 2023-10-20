<?php
/**
 * Spec AI - Admin.
 *
 * @package spec-ai
 */

namespace SpecAI\Admin;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use SpecAI\Admin\Core\Admin_Configurations;

/**
 * The Admin_Loader Class.
 */
class Admin_Loader {

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
		// Setup the Admin Dashboard.
		Admin_Configurations::get_instance();
	}
}

