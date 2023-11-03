<?php
/**
 * Zip AI - Admin Configurations.
 *
 * @package zip-ai
 */

namespace ZipAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ZipAI\Classes\Zip_Ai_Helpers;

/**
 * The Sidebar_Configurations Class.
 */
class Sidebar_Configurations {

	/**
	 * The namespace for the Rest Routes.
	 *
	 * @since x.x.x
	 * @var string
	 */
	private $namespace = 'zip_ai';

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
		// Setup the Sidebar Rest Routes.
		add_action( 'rest_api_init', array( $this, 'register_route' ) );
		
		// Setup the Sidebar Auth Ajax.
		add_action( 'wp_ajax_verify_zip_ai_authenticity', array( $this, 'verify_zip_ai_authenticity' ) );

		// Add the Sidebar to the Gutenberg Editor. 
		add_action( 'enqueue_block_editor_assets', array( $this, 'load_editor_sidebar_assets' ) );
	}

	/**
	 * Register All Routes.
	 *
	 * @hooked - rest_api_init
	 * @since x.x.x
	 * @return void
	 */
	public function register_route() {
		register_rest_route(
			$this->namespace,
			'/generate',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'generate_ai_content' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(
						'user_message'    => array(
							'sanitize_callback' => 'sanitize_text_field',
						),
						'user_key'        => array(
							'sanitize_callback' => 'sanitize_text_field',
						),
						'use_system_role' => array(
							'sanitize_callback' => array( $this, 'sanitize_boolean_field' ),
						),
					),
				),
			)
		);
	}

	/**
	 * Checks whether the value is boolean or not.
	 *
	 * @param mixed $value value to be checked.
	 * @since x.x.x
	 * @return boolean
	 */
	public function sanitize_boolean_field( $value ) {
		return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
	}

	/**
	 * Fetches ai data from the middleware server - this will be merged with the get_scs_response() function.
	 *
	 * @param \WP_REST_Request $request request object.
	 * @since x.x.x
	 * @return void
	 */
	public function generate_ai_content( $request ) {

		$params = $request->get_params();

		// Out custom endpoint to get OpenAi data.
		$endpoint = ZIP_AI_CREDIT_SERVER_API . 'chat/completions';
		$data     = array(
			'temperature'       => 0.7,
			'top_p'             => 1,
			'frequency_penalty' => 0.8,
			'presence_penalty'  => 1,
			'model'             => 'gpt-3.5-turbo',
			'messages'          => $params['message_array'],
		);

		$response = wp_remote_post(
			$endpoint,
			array(
				'headers' => array(
					'Authorization' => 'Bearer ' . Zip_Ai_Helpers::get_decrypted_auth_token(),
				),
				'body'    => $data,
				'timeout' => 30, // phpcs:ignore WordPressVIPMinimum.Performance.RemoteRequestTimeout.timeout_timeout -- 30 seconds is required sometime for open ai responses
			)
		);

		if ( is_wp_error( $response ) ) {
			wp_send_json_error( array( 'message' => __( 'Something went wrong', 'ultimate-addons-for-gutenberg' ) ) );
		} else {
			$response_body = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( is_array( $response_body ) && is_array( $response_body['choices'] ) && ! empty( $response_body['choices'][0]['message']['content'] ) ) {
				wp_send_json_success( array( 'message' => $response_body['choices'][0]['message']['content'] ) );
			} elseif ( is_array( $response_body ) && ! empty( $response_body['error'] ) ) {
				$message = '';
				if ( ! empty( $response_body['error']['message'] ) ) { // If any error message received from OpenAI.
					$message = $response_body['error']['message'];
				} elseif ( is_string( $response_body['error'] ) ) {  // If any error message received from server.
					if ( ! empty( $response_body['code'] && is_string( $response_body['code'] ) ) ) {
						$message = $this->custom_message( $response_body['code'] );
					}
					$message = ! empty( $message ) ? $message : $response_body['error'];
				}

				wp_send_json_error( array( 'message' => $message ) );
			} else {
				wp_send_json_error( array( 'message' => __( 'Something went wrong', 'ultimate-addons-for-gutenberg' ) ) );
			}
		}//end if
	}

	/**
	 * This function converts the code recieved from scs to a readable error message.
	 * Useful to provide better language for error codes.
	 *
	 * @param string $code error code received from SCS ( Credits server ).
	 * @since x.x.x
	 * @return string
	 */
	private function custom_message( $code ) {
		$message_array = array(
			'no_auth'              => __( 'Invalid auth token.', 'ultimate-addons-for-gutenberg' ),
			'insufficient_credits' => __( 'You have no credits left.', 'ultimate-addons-for-gutenberg' ),
		);

		return isset( $message_array[ $code ] ) ? $message_array[ $code ] : '';
	}

	/**
	 * Ajax handeler to verify the Zip AI authorization.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function verify_zip_ai_authenticity() {

		// Check the nonce.
		check_ajax_referer( 'zip_ai_ajax_nonce', 'nonce' );

		// Get the Zip AI Authorization status.
		$zip_ai_status = Zip_Ai_Helpers::is_zip_ai_authorized();

		// Send a boolean based on whether the auth token has been added.
		wp_send_json_success( array( 'is_authorized' => $zip_ai_status ) );
	}

	/**
	 * Enqueue Gutenberg block assets for backend editor.
	 *
	 * @return void
	 * @since x.x.x
	 */
	public function load_editor_sidebar_assets() {

		// Set the required variables.
		$handle            = 'zip-ai-sidebar';
		$build_path        = ZIP_AI_DIR . 'sidebar/build/';
		$build_url         = ZIP_AI_URL . 'sidebar/build/';
		$script_asset_path = $build_path . 'sidebar-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => ZIP_AI_VERSION,
			);
		$script_dep        = array_merge( $script_info['dependencies'], array( 'wp-blocks', 'wp-i18n' ) );

		// Register the sidebar scripts.
		wp_register_script(
			$handle,
			$build_url . 'sidebar-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		// Register the sidebar styles.
		wp_register_style(
			$handle,
			$build_url . 'sidebar-app.css',
			array(),
			ZIP_AI_VERSION
		);

		// Enqueue the admin scripts.
		wp_enqueue_script( $handle );
		// Set the script translations.
		wp_set_script_translations( $handle, 'zip-ai' );
		// Enqueue the admin styles.
		wp_enqueue_style( $handle );

		// Localize the script required for the Zip AI Sidebar.
		wp_localize_script(
			$handle,
			'zip_ai_react',
			array(
				'admin_php_url'          => admin_url( 'admin.php' ),
				'ajax_url'               => admin_url( 'admin-ajax.php' ),
				'ajax_nonce'             => wp_create_nonce( 'zip_ai_ajax_nonce' ),
				'current_post_id'        => get_the_ID(),
				'zip_ai_auth_middleware' => ZIP_AI_MIDDLEWARE,
				'is_zip_ai_authorized'   => Zip_Ai_Helpers::is_zip_ai_authorized(),
				'is_zip_chat_enabled'    => Zip_Ai_Helpers::get_zip_ai_setting( 'chat_enabled', true ),
				'zip_ai_auth_nonce'      => wp_create_nonce( 'zip_ai_auth_nonce' ),
			)
		);
	}
}
