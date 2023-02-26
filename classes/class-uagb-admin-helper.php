<?php
/**
 * UAGB Admin Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Admin_Helper' ) ) {

	/**
	 * Class UAGB_Admin_Helper.
	 */
	final class UAGB_Admin_Helper {

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Get all data from the admin settings page.
		 *
		 * @return mixed
		 * @since 2.0.8
		 */
		public static function get_admin_settings_shareable_data() {

			$content_width = self::get_global_content_width();

			$options = array(
				'uagb_beta'                         => self::get_admin_settings_option( 'uagb_beta', 'no' ),
				'uag_enable_legacy_blocks'          => self::get_admin_settings_option( 'uag_enable_legacy_blocks', ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'yes' : 'no' ),
				'_uagb_allow_file_generation'       => self::get_admin_settings_option( '_uagb_allow_file_generation', 'enabled' ),
				'uag_enable_templates_button'       => self::get_admin_settings_option( 'uag_enable_templates_button', 'yes' ),
				'uag_enable_on_page_css_button'     => self::get_admin_settings_option( 'uag_enable_on_page_css_button', 'yes' ),
				'uag_enable_block_condition'        => self::get_admin_settings_option( 'uag_enable_block_condition', 'disabled' ),
				'uag_enable_masonry_gallery'        => self::get_admin_settings_option( 'uag_enable_masonry_gallery', 'enabled' ),
				'uag_enable_block_responsive'       => self::get_admin_settings_option( 'uag_enable_block_responsive', 'enabled' ),
				'uag_select_font_globally'          => self::get_admin_settings_option( 'uag_select_font_globally', array() ),
				'uag_load_select_font_globally'     => self::get_admin_settings_option( 'uag_load_select_font_globally', 'disabled' ),
				'uag_load_gfonts_locally'           => self::get_admin_settings_option( 'uag_load_gfonts_locally', 'disabled' ),
				'uag_collapse_panels'               => self::get_admin_settings_option( 'uag_collapse_panels', 'enabled' ),
				'uag_copy_paste'                    => self::get_admin_settings_option( 'uag_copy_paste', 'enabled' ),
				'uag_preload_local_fonts'           => self::get_admin_settings_option( 'uag_preload_local_fonts', 'disabled' ),
				'uag_enable_coming_soon_mode'       => self::get_admin_settings_option( 'uag_enable_coming_soon_mode', 'disabled' ),
				'uag_container_global_padding'      => self::get_admin_settings_option( 'uag_container_global_padding', 'default' ),
				'uag_container_global_elements_gap' => self::get_admin_settings_option( 'uag_container_global_elements_gap', 20 ),
				'uag_blocks_editor_spacing'         => self::get_admin_settings_option( 'uag_blocks_editor_spacing', 0 ),
				'uag_load_font_awesome_5'           => self::get_admin_settings_option( 'uag_load_font_awesome_5', ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'enabled' : 'disabled' ),
				'uag_auto_block_recovery'           => self::get_admin_settings_option( 'uag_auto_block_recovery', ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'enabled' : 'disabled' ),
				'uag_content_width'                 => $content_width,
				'spectra_core_blocks'               => apply_filters(
					'spectra_core_blocks',
					array(
						'container',
						'advanced-heading',
						'image',
						'icon',
						'buttons',
						'info-box',
						'call-to-action',
					)
				),
			);

			return $options;
		}

		/**
		 * Update all data from the admin settings page.
		 *
		 * @param array $data All settings of Admin.
		 * @return mixed
		 * @since 2.0.8
		 */
		public static function update_admin_settings_shareable_data( $data = array() ) {

			foreach ( $data as $key => $value ) {
				self::update_admin_settings_option( $key, $value );
			}
		}

		/**
		 * Returns an option from the database for
		 * the admin settings page.
		 *
		 * @param  string  $key     The option key.
		 * @param  mixed   $default Option default value if option is not available.
		 * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
		 * @return string           Return the option value
		 * @since 0.0.1
		 */
		public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {
			// Get the site-wide option if we're in the network admin.
			return $network_override && is_multisite() ? get_site_option( $key, $default ) : get_option( $key, $default );
		}

		/**
		 * Provide Widget settings.
		 *
		 * @return array()
		 * @since 0.0.1
		 */
		public static function get_block_options() {

			$blocks       = UAGB_Helper::$block_list;
			$saved_blocks = self::get_admin_settings_option( '_uagb_blocks' );

			if ( is_array( $blocks ) ) {
				foreach ( $blocks as $slug => $data ) {
					$_slug = str_replace( 'uagb/', '', $slug );

					if ( isset( $saved_blocks[ $_slug ] ) ) {
						if ( 'disabled' === $saved_blocks[ $_slug ] ) {
							$blocks[ $slug ]['is_activate'] = false;
						} else {
							$blocks[ $slug ]['is_activate'] = true;
						}
					} else {
						$blocks[ $slug ]['is_activate'] = ( isset( $data['default'] ) ) ? $data['default'] : false;
					}
				}
			}

			UAGB_Helper::$block_list = $blocks;

			return apply_filters( 'uagb_enabled_blocks', UAGB_Helper::$block_list );
		}

		/**
		 * Updates an option from the admin settings page.
		 *
		 * @param string $key       The option key.
		 * @param mixed  $value     The value to update.
		 * @param bool   $network   Whether to allow the network admin setting to be overridden on subsites.
		 * @return mixed
		 * @since 0.0.1
		 */
		public static function update_admin_settings_option( $key, $value, $network = false ) {

			// Update the site-wide option since we're in the network admin.
			if ( $network && is_multisite() ) {
				update_site_option( $key, $value );
			} else {
				update_option( $key, $value );
			}
		}

		/**
		 *  Get Specific Stylesheet
		 *
		 * @since 1.13.4
		 */
		public static function create_specific_stylesheet() {

			$saved_blocks         = self::get_admin_settings_option( '_uagb_blocks' );
			$combined             = array();
			$is_already_post      = false;
			$is_already_timeline  = false;
			$is_already_column    = false;
			$is_already_icon_list = false;
			$is_already_button    = false;
			$is_already_faq       = false;
			$blocks_info          = UAGB_Block_Module::get_blocks_info();

			foreach ( $blocks_info as $key => $block ) {

				$block_name = str_replace( 'uagb/', '', $key );

				if ( isset( $saved_blocks[ $block_name ] ) && 'disabled' === $saved_blocks[ $block_name ] ) {
					continue;
				}

				switch ( $block_name ) {

					case 'post-grid':
					case 'post-carousel':
					case 'post-masonry':
					case 'post-title':
					case 'post-image':
					case 'post-button':
					case 'post-excerpt':
					case 'post-meta':
						if ( ! $is_already_post ) {
							$combined[]      = 'post';
							$is_already_post = true;
						}
						break;

					case 'columns':
					case 'column':
						if ( ! $is_already_column ) {
							$combined[]        = 'column';
							$combined[]        = 'columns';
							$is_already_column = true;
						}
						break;

					case 'icon-list':
					case 'icon-list-child':
						if ( ! $is_already_icon_list ) {
							$combined[]           = 'icon-list';
							$combined[]           = 'icon-list-child';
							$is_already_icon_list = true;
						}
						break;
					case 'buttons-child':
					case 'buttons':
						if ( ! $is_already_button ) {
							$combined[]        = 'buttons';
							$combined[]        = 'buttons-child';
							$is_already_button = true;
						}
						break;

					case 'post-timeline':
					case 'content-timeline':
						if ( ! $is_already_timeline ) {
							$combined[]          = 'timeline';
							$is_already_timeline = true;
						}
						break;

					case 'restaurant-menu':
						$combined[] = 'price-list';
						break;

					case 'faq-child':
					case 'faq':
						if ( ! $is_already_faq ) {
							$combined[]     = 'faq';
							$combined[]     = 'faq-child';
							$is_already_faq = true;
						}
						break;

					default:
						$combined[] = $block_name;
						break;
				}
			}

			// Load common CSS for all the blocks.
			$combined[] = 'extensions';

			$wp_upload_dir = UAGB_Helper::get_uag_upload_dir_path();
			$combined_path = $wp_upload_dir . 'custom-style-blocks.css';

			if ( file_exists( $combined_path ) ) {
				wp_delete_file( $combined_path );
			}

			$style = '';

			$wp_filesystem = uagb_filesystem();

			foreach ( $combined as $key => $c_block ) {

				if ( false !== strpos( $c_block, '-pro' ) ) {
					$style_file = SPECTRA_PRO_DIR . 'assets/css/blocks/' . $c_block . '.css';
				} else {
					$style_file = UAGB_DIR . 'assets/css/blocks/' . $c_block . '.css';
				}

				if ( file_exists( $style_file ) ) {
					$style .= $wp_filesystem->get_contents( $style_file );
				}
			}

			$wp_filesystem->put_contents( $combined_path, $style, FS_CHMOD_FILE );
		}

		/**
		 * Get Rollback versions.
		 *
		 * @since 1.23.0
		 * @return array
		 * @access public
		 */
		public function get_rollback_versions() {

			$rollback_versions = get_transient( 'uag_rollback_versions_' . UAGB_VER );

			if ( empty( $rollback_versions ) ) {

				$max_versions = 10;

				require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

				$plugin_information = plugins_api(
					'plugin_information',
					array(
						'slug' => 'ultimate-addons-for-gutenberg',
					)
				);

				if ( empty( $plugin_information->versions ) || ! is_array( $plugin_information->versions ) ) {
					return array();
				}

				krsort( $plugin_information->versions );

				$rollback_versions = array();

				foreach ( $plugin_information->versions as $version => $download_link ) {

					$lowercase_version = strtolower( $version );

					$is_valid_rollback_version = ! preg_match( '/(trunk|beta|rc|dev)/i', $lowercase_version );

					if ( ! $is_valid_rollback_version ) {
						continue;
					}

					if ( version_compare( $version, UAGB_VER, '>=' ) ) {
						continue;
					}

					$rollback_versions[] = $version;
				}

				usort( $rollback_versions, array( $this, 'sort_rollback_versions' ) );

				$rollback_versions = array_slice( $rollback_versions, 0, $max_versions, true );

				set_transient( 'uag_rollback_versions_' . UAGB_VER, $rollback_versions, WEEK_IN_SECONDS );
			}

			return $rollback_versions;
		}
		/**
		 * Sort Rollback versions.
		 *
		 * @param string $prev Previous Version.
		 * @param string $next Next Version.
		 *
		 * @since 1.23.0
		 * @return array
		 * @access public
		 */
		public function sort_rollback_versions( $prev, $next ) {

			if ( version_compare( $prev, $next, '==' ) ) {
				return 0;
			}

			if ( version_compare( $prev, $next, '>' ) ) {
				return -1;
			}

			return 1;
		}

		/**
		 * Get Global Content Width
		 *
		 * @since 2.0.0
		 * @return int
		 * @access public
		 */
		public static function get_global_content_width() {

			$content_width             = self::get_admin_settings_option( 'uag_content_width', '' );
			$content_width_third_party = apply_filters( 'spectra_global_content_width', 'default' );
			$astra_content_width       = false;
			self::update_admin_settings_option( 'uag_content_width_set_by', __( 'Spectra', 'ultimate-addons-for-gutenberg' ) );
			if ( function_exists( 'astra_get_option' ) ) {
				$astra_content_width = astra_get_option( 'site-content-width' );
			}

			if ( '' === $content_width ) {
				if ( $astra_content_width ) {
					$content_width = intval( $astra_content_width );
					self::update_admin_settings_option( 'uag_content_width_set_by', __( 'Astra Theme', 'ultimate-addons-for-gutenberg' ) );
				}
				if ( 'default' !== $content_width_third_party ) {
					$content_width = intval( $content_width_third_party );
					self::update_admin_settings_option( 'uag_content_width_set_by', __( 'Filter added through any 3rd Party Theme/Plugin.', 'ultimate-addons-for-gutenberg' ) );
				}
			}

			return $content_width;
		}
		/**
		 * Set Transient
		 *
		 * @since x.x.x
		 * @return array
		 * @access public
		 */
		public static function get_insta_media_transients( $specificUser = null ) {
			if ( $specificUser !== null ) {
				$linked_users = self::get_admin_settings_option( 'uag_insta_linked_accounts', array() );
				$cur_user     = null;
				foreach ( $linked_users as $user ) {
					if ( $user['userName'] === $specificUser ) {
						$cur_user = $user;
						break;
					}
				}
				if ( ! $cur_user ) {
					return;
				}
				self::refreshUserToken( $cur_user );
				$curUserMedia  = array();
				$transientName = 'ig_posts_of_' . $cur_user['userName'];
				if ( false === ( $mediaFetched = get_transient( $transientName ) ) ) {
					$mediaFetched = wp_remote_get( 'https://graph.instagram.com/' . $cur_user['userID'] . '/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=' . $cur_user['token'] );
					if ( ! is_wp_error( $mediaFetched ) ) {
						$curUserMedia    = self::getParsedInstaMedia( $mediaFetched, $cur_user['token'] );
						$transientExpiry = HOUR_IN_SECONDS;
						set_transient( $transientName, $curUserMedia, $transientExpiry );
					} else {
						return is_wp_error( $mediaFetched );
					}
				}
				return get_transient( $transientName );
			} else {
				$insta_user_transients = array();
				// Get all users.
				$linked_users = self::get_admin_settings_option( 'uag_insta_linked_accounts', array() );
				// Set all transients for new users ( if any ) and refresh expired transients.
				foreach ( $linked_users as $user ) {
					if ( ! $user['isCurrentlyActive'] ) {
						continue;
					}
					self::refreshUserToken( $user );
					$curUserMedia  = array();
					$transientName = 'ig_posts_of_' . $user['userName'];
					// delete_transient( $transientName );
					if ( false === ( $mediaFetched = get_transient( $transientName ) ) ) {
						$mediaFetched = wp_remote_get( 'https://graph.instagram.com/' . $user['userID'] . '/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=' . $user['token'] );
						if ( ! is_wp_error( $mediaFetched ) ) {
							$curUserMedia    = self::getParsedInstaMedia( $mediaFetched, $user['token'] );
							$transientExpiry = HOUR_IN_SECONDS;
							set_transient( $transientName, $curUserMedia, $transientExpiry );
						} else {
							return is_wp_error( $mediaFetched );
						}
					}
					$insta_user_transients[ $user['userName'] ] = get_transient( $transientName );
				}
				self::update_admin_settings_option( 'uag_insta_all_users_media', $insta_user_transients );
				return self::get_admin_settings_option( 'uag_insta_all_users_media', array() );
			}
		}

		private static function getParsedInstaMedia( $fetchedMedia, $theUserToken ) {
			$builtMediaObjects = array();
			do {
				$thereIsMore  = false;
				$fetchedMedia = json_decode( $fetchedMedia['body'], true );
				foreach ( $fetchedMedia['data'] as $mediaObject ) {
					if ( $mediaObject['media_type'] === 'CAROUSEL_ALBUM' ) {
						$fetchedChildren             = wp_remote_get( 'https://graph.instagram.com/' . $mediaObject['id'] . '/children?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=' . $theUserToken );
						! is_wp_error( $fetchedChildren )
						? $mediaObject['collection'] = self::getParsedInstaMedia( $fetchedChildren, $theUserToken )
						: $mediaObject['collection'] = $fetchedChildren;
					}
					array_push( $builtMediaObjects, json_encode( $mediaObject ) );
				}
				if ( isset( $fetchedMedia['paging']['next'] ) ) {
					$thereIsMore  = true;
					$fetchedMedia = wp_remote_get( $fetchedMedia['paging']['next'] );
				}
			} while ( $thereIsMore );
			return $builtMediaObjects;
		}

		private static function refreshUserToken( $theUser ) {
			// Expiry Date Format: yyyy-mm-dd.
			if ( ! $theUser ) {
				return;
			}
			$expiry = strtotime( $theUser['expiryDate'] );
			$today  = time();
			$theGap = ceil( ( $expiry - $today ) / 86400 );
			if ( $theGap < 60 ) {
				$refreshLink = wp_remote_get( 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' . $theUser['token'] );
				if ( is_wp_error( $refreshLink ) ) {
					$theUser['isCurrentlyActive'] = false;
				}
			}
		}

	}

	/**
	 *  Prepare if class 'UAGB_Admin_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Admin_Helper::get_instance();
}

