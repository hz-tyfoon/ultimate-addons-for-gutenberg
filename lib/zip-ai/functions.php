<?php
/**
 * Plugin Functions.
 *
 * @package zip-ai
 * @since x.x.x
 */

namespace ZipAI;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// If class doesn't exist, create it.
if ( ! class_exists( '\ZipAI\Functions' ) ) {
	/**
	 * Plugin_Functions
	 *
	 * @since x.x.x
	 */
	class Functions {

		/**
		 * Function to enable Zip AI.
		 *
		 * @since x.x.x
		 * @return void
		 */
		public static function enable_zip_ai() {
			// Get the current status of Zip AI.
			$zip_ai_settings = get_option( 'zip_ai_status' );

			// If Zip AI is already enabled, return.
			if ( 'enabled' === $zip_ai_settings ) {
				return;
			}

			// Enable Zip AI.
			update_option( 'zip_ai_status', 'enabled' );
		}

		/**
		 * Function to disable Zip AI.
		 *
		 * @since x.x.x
		 * @return void
		 */
		public static function disable_zip_ai() {
			// Get the current status of Zip AI.
			$zip_ai_settings = get_option( 'zip_ai_status' );

			// If Zip AI is already disabled, return.
			if ( 'disabled' === $zip_ai_settings ) {
				return;
			}

			// Disable Zip AI.
			update_option( 'zip_ai_status', 'disabled' );
		}

		/**
		 * Function to check if Zip AI is enabled.
		 *
		 * @since x.x.x
		 * @return boolean True if Zip AI is enabled, false otherwise.
		 */
		public static function is_zip_ai_enabled() {
			// Get the current status of Zip AI.
			$zip_ai_settings = get_option( 'zip_ai_status' );

			// Return based on whether Zip AI is enabled or not.
			return 'enabled' === $zip_ai_settings;
		}
	}
}
