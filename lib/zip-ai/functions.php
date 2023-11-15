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
		 * Private Variable of all the available Zip AI Modules.
		 *
		 * @since x.x.x
		 * @var array $modules Array of all the available Zip AI Modules.
		 */
		private static $modules = [
			'ai_assistant' => 'enabled',
		];

		/**
		 * Function to update the Zip AI status.
		 *
		 * @param string $status Status of Zip AI to be updated.
		 * @since x.x.x
		 * @return boolean True if Zip AI status has been updated, false otherwise.
		 */
		public static function update_status( $status ) {
			// If the status is not a valid status, return.
			if ( ! in_array( $status, [ 'enabled', 'disabled' ], true ) ) {
				return false;
			}

			// Get the current status of Zip AI.
			$zip_ai_settings = get_option( 'zip_ai_status' );

			// Update the Zip AI status.
			return update_option( 'zip_ai_status', $status );
		}

		/**
		 * Function to update the status of Zip AI Module(s).
		 *
		 * @param string|array $module_name Name of the module or an array of module names.
		 * @param string       $status      Status of the module(s) to be updated.
		 * @since x.x.x
		 * @return boolean True if Zip AI Module(s) status has been updated, false otherwise.
		 */
		private static function update_module( $module_name, $status ) {
			// If the status is not a valid status, return.
			if ( ! in_array( $status, [ 'enabled', 'disabled' ], true ) ) {
				return false;
			}

			// If the module name is a string, format it into an array.
			if ( is_string( $module_name ) && ! empty( trim( $module_name ) ) ) {
				$module_name = [ $module_name ];
			} elseif ( ! is_array( $module_name ) ) {
				return false;
			}

			// Ensure that the module names are valid.
			$module_name = array_intersect( array_keys( self::$modules ), $module_name );

			// Get the existing Zip AI modules from the DB.
			$zip_ai_modules = get_option( 'zip_ai_modules', [] );

			// Ensure that the modules are in the correct format.
			$zip_ai_modules = is_array( $zip_ai_modules ) ? $zip_ai_modules : [];

			// Update the modules.
			$updated_modules = array_merge(
				$zip_ai_modules,
				array_fill_keys( $module_name, $status )
			);

			// Update the modules array.
			return update_option( 'zip_ai_modules', $updated_modules );
		}

		/**
		 * Function to migrate older Zip AI Options into the new format.
		 *
		 * @since x.x.x
		 * @return void
		 */
		private static function migrate_options() {
			// Get the existing Zip AI settings option.
			$zip_ai_settings = get_option( 'zip_ai_settings' );

			// If the chat enabled option is set, migrate it.
			if ( isset( $zip_ai_settings['chat_enabled'] ) ) {
				// Set the new option value based on the chat enabled value.
				$ai_assistant_status = false === $zip_ai_settings['chat_enabled'] ? 'disabled' : 'enabled';
				
				// Update the AI assistant module status.
				$ai_assistant_migrated = self::update_module( 'ai_assistant', $ai_assistant_status );

				// If the migration was successful, unset the chat enabled value and update the settings.
				if ( $ai_assistant_migrated ) {
					unset( $zip_ai_settings['chat_enabled'] );
					update_option( 'zip_ai_settings', $zip_ai_settings );
				}
			}
		}

		/**
		 * Function to enable Zip AI.
		 *
		 * @since x.x.x
		 * @return boolean True if Zip AI has been enabled, false otherwise.
		 */
		public static function enable() {
			return self::update_status( 'enabled' );
		}

		/**
		 * Function to disable Zip AI.
		 *
		 * @since x.x.x
		 * @return boolean True if Zip AI has been disabled, false otherwise.
		 */
		public static function disable() {
			return self::update_status( 'disabled' );
		}

		/**
		 * Function to enable Zip AI Module(s).
		 *
		 * @param string|array $module_name Name of the module or an array of module names.
		 * @since x.x.x
		 * @return boolean True if Zip AI module(s) has been enabled, false otherwise.
		 */
		public static function enable_module( $module_name ) {
			return self::update_module( $module_name, 'enabled' );
		}

		/**
		 * Function to disable Zip AI Module(s).
		 *
		 * @param string|array $module_name Name of the module or an array of module names.
		 * @since x.x.x
		 * @return boolean True if Zip AI module(s) has been enabled, false otherwise.
		 */
		public static function disable_module( $module_name ) {
			return self::update_module( $module_name, 'disabled' );
		}

		/**
		 * Function to check if Zip AI is enabled.
		 *
		 * @since x.x.x
		 * @return boolean True if Zip AI is enabled, false otherwise.
		 */
		public static function is_enabled() {
			// Migrate any old options.
			self::migrate_options();

			// Get the current status of Zip AI.
			$zip_ai_settings = get_option( 'zip_ai_status', 'enabled' );

			// Return based on whether Zip AI is enabled or not.
			return 'enabled' === $zip_ai_settings;
		}

		/**
		 * Function to check if Zip AI Module is enabled.
		 *
		 * @param string $module_name Name of the module.
		 * @since x.x.x
		 * @return boolean True if Zip AI is enabled, false otherwise.
		 */
		public static function is_module_enabled( $module_name ) {
			// Check if the module name is valid.
			if ( ! array_key_exists( $module_name, self::$modules ) ) {
				return false;
			}

			// Get the current status of Zip AI.
			$zip_ai_modules = get_option( 'zip_ai_modules', [] );

			// Ensure that the modules are in the correct format.
			$zip_ai_modules = is_array( $zip_ai_modules ) ? $zip_ai_modules : [];

			// Update the modules array for the check - if a module does not exist, the library's default will be considered.
			$updated_modules = array_merge(
				self::$modules,
				$zip_ai_modules
			);

			// Return based on whether Zip AI is enabled or not.
			return 'enabled' === $updated_modules[ $module_name ];
		}
	}
}
