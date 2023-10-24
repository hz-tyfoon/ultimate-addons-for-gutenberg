<?php
/**
 * Spec AI - Configurations.
 *
 * @package spec-ai
 */

namespace SpecAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use SpecAI\Classes\Spec_Helpers;

/**
 * The Spec_Configurations Class.
 */
class Spec_Configurations {

	/**
	 * Instance of this class.
	 *
	 * @since x.x.x
	 * @var object Class object.
	 */
	private static $instance;

	/**
	 * Initiator of this class.
	 *
	 * @since x.x.x
	 * @return object initialized object of this class.
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
		// Setup the Credit Check Ajax Action.
		add_action( 'wp_ajax_spec_ai_credit_check_ajax', array( $this, 'credit_check_ajax' ) );
	}

	/**
	 * Setup the Credit Check Ajax.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function credit_check_ajax() {
		// Verify the nonce.
		check_ajax_referer( 'spec_ai_credit_check_nonce', 'nonce' );

		// Get the response from the endpoint.
		$response = Spec_Helpers::get_scs_response( 'usage' );

		// If the response is an error, then return the error.
		if ( ! empty( $response['error'] ) ) {
			wp_send_json_error( $response['error'] );
		}

		// If the remaining credits is below the threshold, return exceeded.
		if ( ! empty( $response['total_remaining_credits'] ) && $response['total_remaining_credits'] < SPEC_AI_CREDIT_THRESHOLD ) {
			wp_send_json_success( 'below_threshold' );
		}

		// If the user is above the threshold, then just return success.
		wp_send_json_success();
	}
}
