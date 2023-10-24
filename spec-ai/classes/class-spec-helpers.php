<?php
/**
 * Spec AI - Spec AI Helpers.
 *
 * @package spec-ai
 */

namespace SpecAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The Spec_Helpers Class.
 */
class Spec_Helpers {
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

	/**
	 * Check if the Spec AI plugin is authorized.
	 *
	 * @since x.x.x
	 * @return boolean True if the Spec AI plugin is authorized, false otherwise.
	 */
	public static function is_spec_authorized() {
		// Get the Spec AI settings.
		$spec_options = self::get_admin_settings_option( 'spec_ai_settings' );

		// If the Spec AI settings are empty, return false.
		if ( empty( $spec_options ) || ! is_array( $spec_options ) ) {
			return false;
		}

		// Return true if the auth token is set and is a string.
		return (
			! empty( $spec_options['auth_token'] )
			&& is_string( $spec_options['auth_token'] )
			&& ! empty( trim( $spec_options['auth_token'] ) )
		);
	}

	/**
	 * Get a specific Spec AI setting.
	 * 
	 * @param string $key The setting key.
	 * @param mixed  $default The default value if the setting is not set.
	 * @since x.x.x
	 * @return mixed The setting value.
	 */
	public static function get_spec_ai_setting( $key, $default = false ) {
		// Get the Spec AI settings.
		$spec_options = self::get_admin_settings_option( 'spec_ai_settings' );

		// If the Spec AI settings are empty, return false.
		if ( empty( $spec_options ) || ! is_array( $spec_options ) ) {
			return $default;
		}

		// Return the setting if it exists.
		return isset( $spec_options[ $key ] ) ? $spec_options[ $key ] : $default;
	}

	/**
	 * Get the Spec AI Response from the Spec Credit Server.
	 * 
	 * @param string $endpoint The endpoint to get the response from.
	 * @since x.x.x
	 * @return array The Spec AI Response.
	 */
	public static function get_scs_response( $endpoint = 'chat/completions' ) {
		// Get the Auth Token from the Spec AI Settings.
		$spec_auth_token = self::get_decrypted_auth_token();

		// If the Spec AI Auth Token is not set, then abandon ship.
		if ( empty( $spec_auth_token ) || ! is_string( $spec_auth_token ) ) {
			return array(
				'error' => 'The Spec AI Auth Token is not set.',
			);
		}

		// Set the API URL.
		$api_url = 'https://credits.startertemplates.com/api/' . $endpoint;

		// Get the response from the endpoint.
		$response = wp_remote_post(
			$api_url,
			array(
				'headers' => array(
					'Authorization' => 'Bearer ' . $spec_auth_token,
				),
				'timeout' => 30, // phpcs:ignore WordPressVIPMinimum.Performance.RemoteRequestTimeout.timeout_timeout -- 30 seconds is required sometime for open ai responses
			)
		);

		// If the response is not a 200, then abandon ship.
		if ( ! is_array( $response ) || ! isset( $response['response'] ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
			return array(
				'error' => 'The Spec AI Middleware is not responding.',
			);
		}

		// Get the response body.
		$response_body = wp_remote_retrieve_body( $response );

		// If the response body is not a JSON, then abandon ship.
		if ( ! is_string( $response_body ) || ! json_decode( $response_body ) ) {
			return array(
				'error' => 'The Spec AI Middleware encountered an error.',
			);
		}

		// Return the response body.
		return json_decode( $response_body, true );
	}

	/**
	 * Get the decrypted auth token.
	 *
	 * @since x.x.x
	 * @return string
	 */
	public static function get_decrypted_auth_token() {
		// Get the Spec AI Settings.
		$spec_auth_token = self::get_spec_ai_setting( 'auth_token' );

		// Return early if the auth token is not set.
		if ( empty( $spec_auth_token ) || ! is_string( $spec_auth_token ) ) {
			return '';
		}

		// Return the decrypted auth token.
		return ! empty( trim( $spec_auth_token ) ) ? self::decrypt( $spec_auth_token ) : '';
	}

	/**
	 * Encrypt data using base64.
	 *
	 * @param string $input Input string which needs to be encrypted.
	 * @since x.x.x
	 * @return string
	 */
	public static function encrypt( $input ) {
		if ( empty( $input ) || ! is_string( $input ) ) {
			return '';
		}

		$base_64 = base64_encode( $input );
		$encode  = rtrim( $base_64, '=' );
		return $encode;
	}

	/**
	 * Decrypt data using base64.
	 *
	 * @param string $input Input string which needs to be decrypted.
	 * @since x.x.x
	 * @return string
	 */
	public static function decrypt( $input ) {
		if ( empty( $input ) || ! is_string( $input ) ) {
			return '';
		}

		$base_64 = $input . str_repeat( '=', strlen( $input ) % 4 );
		$decode  = base64_decode( $base_64 );
		return $decode;
	}
}
