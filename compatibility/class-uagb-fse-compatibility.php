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
		add_filter( 'pre_get_block_templates', array( $this, 'get_block_fallback_template' ), 10, 3 );
		add_action( 'wp_enqueue_scripts', array( $this, 'generate_stylesheet' ), 99 );
	}

	/**
	 * This function is used on the `pre_get_block_template` hook to return the fallback template from the db in case
	 * the template is eligible for it.
	 *
	 * @param \WP_Block_Template|null $template Block template object to short-circuit the default query,
	 *                                          or null to allow WP to run its normal queries.
	 * @param string                  $id Template unique identifier (example: theme_slug//template_slug).
	 * @param string                  $template_type wp_template or wp_template_part.
	 *
	 * @return object|null
	 */
	public function get_block_fallback_template( $template, $id, $template_type ) { //phpcs:ignore WordPressVIPMinimum.Hooks.AlwaysReturnInFilter.VoidReturn

		if ( empty( $id['slug__in'] ) ) {
			return;
		}

		$templates = get_block_templates( array( 'slugs__in' => $id['slug__in'][0] ), $template_type );
		foreach ( $templates as $template_data ) {
			if ( empty( $id['slug__in'][0] ) ) {
				continue;
			}

			foreach ( $id['slug__in'] as $slug ) {
				if ( $template_data->slug === $slug ) {
					$id = $template_data->wp_id;
					if ( ! empty( $id ) ) {
						$current_post_assets = new UAGB_Post_Assets( $id );
						$current_post_assets->enqueue_scripts();
					}
				}
			}
		}

		return $template;
	}

	/**
	 * Collect template_parts Id in head tag.
	 *
	 * @param array $blocks array of content.
	 * @since x.x.x
	 */
	public function uagb_get_template_part_ids( $blocks ) {
		if ( empty( $blocks ) ) {
			return;
		}
		$final_array_of_template_part_ids = array();

		foreach ( $blocks as $i => $block ) {

			if ( is_array( $block ) && ! empty( $block ) ) {

				if ( ! isset( $block['blockName'] ) ) {
					continue;
				}

				$block_name = $block['blockName'];

				if ( 'core/template-part' === $block_name ) {
					$slugs = $block['attrs']['slug'];

					$templates_parts = get_block_templates( array( 'slugs__in' => $slugs ), 'wp_template_part' );
					foreach ( $templates_parts as $templates_part ) {
						if ( $slugs === $templates_part->slug ) {
							$ids = array( $templates_part->wp_id );

							$final_array_of_template_part_ids = array_merge( $final_array_of_template_part_ids, $ids );

						}
					}
				} else {

					if ( ! isset( $block['innerBlocks'] ) ) {
						continue;
					}
					foreach ( $block['innerBlocks'] as $j => $inner_block ) {
						$inner_block_name = $inner_block['blockName'];
						if ( 'core/template-part' === $inner_block_name ) {
							$slugs = $inner_block['attrs']['slug'];

							$templates_parts = get_block_templates( array( 'slugs__in' => $slugs ), 'wp_template_part' );

							foreach ( $templates_parts as $templates_part ) {
								if ( $slugs === $templates_part->slug ) {

									$ids = array( $templates_part->wp_id );

									$final_array_of_template_part_ids = array_merge( $final_array_of_template_part_ids, $ids );
								}
							}
						}
					}
				}
			}
		}
		return $final_array_of_template_part_ids;
	}

	/**
	 * Generates stylesheet and appends in head tag.
	 *
	 * @since x.x.x
	 */
	public function generate_stylesheet() {

		global $_wp_current_template_content;
		$blocks = parse_blocks( $_wp_current_template_content );
		$ids    = $this->uagb_get_template_part_ids( $blocks );
		foreach ( $ids as $id ) {
			$current_post_assets = new UAGB_Post_Assets( intval( $id ) );
			$current_post_assets->enqueue_scripts();
		}

	}

}

/**
 *  Prepare if class 'UAGB_FSE_Compatibility' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_FSE_Compatibility::get_instance();
