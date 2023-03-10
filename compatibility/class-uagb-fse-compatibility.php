<?php
/**
 * FSE compatibility
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_FSE_Compatibility.
 */
class UAGB_FSE_Compatibility {

	/**
	 * Member Variable
	 *
	 * @var instance
	 */
	private static $instance;

	/**
	 *  Initiator
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 *
	 * @since x.x.x
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'generate_stylesheet' ) );
	}

	/**
	 * Generates stylesheet and appends in head tag.
	 *
	 * @since x.x.x
	 */
	public function generate_stylesheet() {
		global $wp_query;
		$cached_wp_query = $wp_query->posts;
		// global $_wp_current_template_content;
		foreach ( $cached_wp_query as $post ) { // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			$current_post_assets = new UAGB_Post_Assets( $post->ID );
			// $current_post_assets->common_function_for_assets_preparation( $_wp_current_template_content );
			$current_post_assets->enqueue_scripts();
		}

	}

}

/**
 *  Prepare if class 'UAGB_FSE_Compatibility' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_FSE_Compatibility::get_instance();
