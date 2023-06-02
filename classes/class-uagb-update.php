<?php
/**
 * Update Compatibility
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Update' ) ) :

	/**
	 * UAGB Update initial setup
	 *
	 * @since 1.13.4
	 */
	class UAGB_Update {

		/**
		 * Class instance.
		 *
		 * @access private
		 * @var $instance Class instance.
		 */
		private static $instance;

		/**
		 * Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *  Constructor
		 */
		public function __construct() {
			add_action( 'admin_init', array( $this, 'init' ) );
			add_action( 'cron_schedules', array( $this, 'add_every_minute_cron_schedule' ) );
			add_action( 'execute_batch_update_google_maps_api_urls', array( $this, 'clear_google_maps_api_updated_meta' ) );
		}

		/**
		 * Init
		 *
		 * @since 1.13.4
		 * @return void
		 */
		public function init() {
			// Get auto saved version number.
			$saved_version = get_option( 'uagb-version', false );

			// Update auto saved version number.
			if ( ! $saved_version ) {

				// Fresh install updation.
				$this->fresh_install_update_asset_generation_option();

				// Update current version.
				update_option( 'uagb-version', UAGB_VER );
				return;
			}

			do_action( 'uagb_update_before' );

			// If equals then return.
			if ( version_compare( $saved_version, UAGB_VER, '=' ) ) {
				return;
			}

			// If user is older than 2.0.0 then set the option.
			if ( version_compare( $saved_version, '2.0.0', '<' ) ) {
				update_option( 'uagb-old-user-less-than-2', 'yes' );
			}

			// Enable Legacy Blocks for users older than 2.0.5.
			if ( version_compare( $saved_version, '2.0.5', '<' ) ) {
				UAGB_Admin_Helper::update_admin_settings_option( 'uag_enable_legacy_blocks', 'yes' );
			}

			// Create a Core Block Array for all versions in which a Core Spectra Block was added.
			$core_blocks   = array();
			$blocks_status = UAGB_Admin_Helper::get_admin_settings_option( '_uagb_blocks' );

			// If Block Statuses exists and is not empty, enable the required Core Spectra Blocks.
			if ( is_array( $blocks_status ) && ! empty( $blocks_status ) ) {

				// If user is older than 2.0.16 then enable all the Core Spectra Blocks, as we have removed option to disable core blocks from 2.0.16.
				if ( version_compare( $saved_version, '2.0.16', '<' ) ) {
					array_push(
						$core_blocks,
						'container',
						'advanced-heading',
						'image',
						'buttons',
						'info-box',
						'call-to-action'
					);
				}

				// If user is older than 2.4.0 then enable the Icon Block that was added to the Core Blocks in this release.
				if ( version_compare( $saved_version, '2.4.0', '<' ) ) {
					array_push(
						$core_blocks,
						'icon'
					);
				}

				// If user is older than 2.6.0 then enable the Countdown Block that was added to the Core Blocks in this release.
				if ( version_compare( $saved_version, '2.6.0', '<' ) ) {
					array_push(
						$core_blocks,
						'countdown'
					);
				}
			}

			if ( version_compare( $saved_version, '2.6.4', '<' ) ) {

				$this->schedule_update_google_maps_api_urls();
			}
			// If the core block array is not empty, update the enabled blocks option.
			if ( ! empty( $core_blocks ) ) {

				foreach ( $core_blocks as $block ) {
					$blocks_status[ $block ] = $block;
				}

				UAGB_Admin_Helper::update_admin_settings_option( '_uagb_blocks', $blocks_status );
			}

			// Create file if not present.
			uagb_install()->create_files();

			/* Create activated blocks stylesheet */
			UAGB_Admin_Helper::create_specific_stylesheet();

			// Update asset version number.
			update_option( '__uagb_asset_version', time() );

			// Update auto saved version number.
			update_option( 'uagb-version', UAGB_VER );

			do_action( 'uagb_update_after' );
		}

		/**
		 * Update asset generation option if it is not exist.
		 *
		 * @since 1.22.4
		 * @return void
		 */
		public function fresh_install_update_asset_generation_option() {

			uagb_install()->create_files();

			if ( UAGB_Helper::is_uag_dir_has_write_permissions() ) {
				update_option( '_uagb_allow_file_generation', 'enabled' );
			}
		}

		/**
		 * Schedule background update of Google Maps API URLs for posts/pages.
		 * 
		 * @since 2.6.4
		 * @return void
		 */
		public function schedule_update_google_maps_api_urls() {
			if ( ! wp_next_scheduled( 'execute_batch_update_google_maps_api_urls' ) ) {
				wp_schedule_event( time(), 'every_minute', $this->execute_batch_update_google_maps_api_urls );
			}
		}

		/**
		 * Add a custom cron schedule for every minute.
		 * 
		 * @param array $schedules Schedules.
		 * @since 2.6.4
		 * @return array $schedules Updated Schedules.
		 */
		public function add_every_minute_cron_schedule( $schedules ) {
			$schedules['every_minute'] = array(
				'interval' => 60,
				'display'  => __( 'Every Minute', 'ultimate-addons-for-gutenberg' ),
			);
			return $schedules;
		}

		/**
		 * Update Google Maps API URl in Bulk for all Pages/Posts.
		 * 
		 * @param mixed $post Post Object.
		 * @since x.x.x
		 * @return void.
		 */
		public function update_google_maps_api_url_on_a_post( $post = false ) {

			if ( ! $post || ! has_blocks( $post->ID ) || ! isset( $post->post_content ) ) {
				return;
			}

			$post_content = $post->post_content;

			$blocks = parse_blocks( $post_content );

			foreach ( $blocks as $block ) {
				if ( 'uagb/google-map' !== $block['blockName'] ) {
					continue;
				}

				$address  = ! empty( $block['attrs']['address'] ) ? rawurlencode( $block['attrs']['address'] ) : rawurlencode( 'Brainstorm Force' );
				$zoom     = ! empty( $block['attrs']['zoom'] ) ? $block['attrs']['zoom'] : 12;
				$language = ! empty( $block['attrs']['language'] ) ? $block['attrs']['language'] : 'en';

				$updated_url = esc_url_raw(
					add_query_arg(
						array(
							'q'      => $address,
							'z'      => $zoom,
							'hl'     => $language,
							't'      => 'm',
							'output' => 'embed',
							'iwloc'  => 'near',
						),
						'https://maps.google.com/maps' 
					)
				);

				$url_to_replace = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&amp;q=' . $address . '&amp;zoom=' . $zoom . '&amp;language=' . $language;

				break;
				
			}
			
			$updated_post_content = str_replace( $url_to_replace, $updated_url, $post_content ); // Update the Old Google Map API URL with new Directly in the Post Content.

			$post->post_content = $updated_post_content;

			wp_update_post( $post );
		}

		/**
		 * Execute batch update of Google Maps API URLs for all posts/pages.
		 * 
		 * @since 2.6.4
		 * @return void
		 */
		public function execute_batch_update_google_maps_api_urls() {
			$post_types = get_post_types(
				array(
					'public' => true,
				),
				'names' 
			);

			$args = array(
				'post_type'      => $post_types,
				'posts_per_page' => 5, // Batch size: 5 posts.
				'orderby'        => 'ID', // Order by post ID.
				'order'          => 'ASC', // Ascending order.
				'post_status'    => 'publish', // Only consider published posts.
				'meta_query'     => array( //phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query
					array(
						'key'     => 'google_maps_api_updated', // Custom meta field to track updated posts.
						'compare' => 'NOT EXISTS', // Exclude already updated posts.
					),
				),
			);

			$query = new WP_Query( $args );

			while ( $query->have_posts() ) {
				$query->the_post();

				$this->update_google_maps_api_url_on_a_post( $post );

				// Set custom meta field to track updated posts.
				update_post_meta( $post->ID, 'google_maps_api_updated', true );
			}

			wp_reset_postdata();
		}

		/**
		 * Clear custom meta field after all posts/pages are updated.
		 * 
		 * @since 2.6.4
		 * @return void
		 */
		public function clear_google_maps_api_updated_meta() {
			delete_post_meta_by_key( 'google_maps_api_updated' );
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Update::get_instance();

endif;
