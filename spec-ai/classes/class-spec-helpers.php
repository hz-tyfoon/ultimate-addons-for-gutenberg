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
	 * Get the Spec AI Response from the Spec Credit Server.
	 * 
	 * @param string $endpoint The endpoint to get the response from.
	 * @since x.x.x
	 * @return array The Spec AI Response.
	 */
	public static function get_scs_response( $endpoint = 'chat/completions' ) {
		// Get the Auth Token from the Spec AI Settings.
		$spec_ai_settings = \UAGB_Admin_Helper::get_admin_settings_option( 'spec_ai_settings', array() );

		// If the Spec AI Auth Token is not set, then abandon ship.
		if (
			! is_array( $spec_ai_settings )
			|| empty( $spec_ai_settings['auth_token'] )
			|| ! is_string( $spec_ai_settings['auth_token'] )
		) {
			return array(
				'error' => 'The Spec AI Auth Token is not set.',
			);
		}

		// Set the API URL and the auth token.
		$auth_token = $spec_ai_settings['auth_token'];
		$api_url    = 'https://credits.startertemplates.com/api/' . $endpoint;

		// Get the response from the endpoint.
		$response = wp_remote_post(
			$api_url,
			array(
				'headers' => array(
					'Authorization' => 'Bearer ' . $auth_token,
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
}
