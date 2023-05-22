<?php
/**
 * Render an SVG given a key.
 *
 * @since   2.4.0
 * @package uagb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to Enqueue CSS/JS of all the blocks.
 *
 * @category class
 */
class uag_Blocks_Svg_Render {

	/**
	 * Instance of this class
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * All SVG Icons
	 *
	 * @var null
	 */
	private static $all_icons = null;

	/**
	 * Instance Control
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
	/**
	 * Class Constructor.
	 */
	public function __construct() {
		add_filter( 'render_block', array( $this, 'render_icons_dynamically' ), 10, 2 );
	}
	/**
	 * On build convert icons into svgs.
	 *
	 * @param string $block_content the name of the svg.
	 * @param object $block the block data.
	 *
	 * @return string|void
	 */
	public function render_icons_dynamically( $block_content, $block ) {
		if ( is_admin() ) {
			return $block_content;
		}
		if ( ! empty( $block_content ) ) {
          
		}
		return $block_content;
	}

}

uag_Blocks_Svg_Render::get_instance();
