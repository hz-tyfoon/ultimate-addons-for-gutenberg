<?php
/**
 * Spec AI - Admin Helpers.
 *
 * @package spec-ai
 */

namespace SpecAI\Admin\Core;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The Admin_Helpers Class.
 */
class Admin_Helpers {

	/**
	 * Get an option from the database.
	 *
	 * @param string  $key              The option key.
	 * @param mixed   $default          The option default value if option is not available.
	 * @param boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
	 * @since x.x.x
	 * @return mixed  The option value.
	 */
	public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {
		// Get the site-wide option if we're in the network admin.
		return $network_override && is_multisite() ? get_site_option( $key, $default ) : get_option( $key, $default );
	}

	/**
	 * Update an option from the database.
	 *
	 * @param string $key              The option key.
	 * @param mixed  $value            The value to update.
	 * @param bool   $network_override Whether to allow the network_override admin setting to be overridden on subsites.
	 * @since x.x.x
	 * @return void
	 */
	public static function update_admin_settings_option( $key, $value, $network_override = false ) {

		// Update the site-wide option if we're in the network admin.
		if ( $network_override && is_multisite() ) {
			update_site_option( $key, $value );
		} else {
			update_option( $key, $value );
		}
	}

	/**
	 * Delete an option from the database for.
	 *
	 * @param string  $key              The option key.
	 * @param boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
	 * @since x.x.x
	 * @return void
	 */
	public static function delete_admin_settings_option( $key, $network_override = false ) {
		// Delete the site-wide option if we're in the network admin.
		if ( $network_override && is_multisite() ) {
			delete_site_option( $key );
		} else {
			delete_option( $key );
		}
	}
}
