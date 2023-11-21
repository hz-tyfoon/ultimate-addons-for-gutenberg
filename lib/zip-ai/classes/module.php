<?php
/**
 * Zip AI - Module.
 *
 * This file is used to register and manage the Zip AI Modules.
 *
 * @package zip-ai
 */

namespace ZipAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Classes to be used, in alphabetical order.
use ZipAI\Classes\Helper;

/**
 * The Module Class.
 */
class Module {
	/**
	 * Private Variable of all the available Zip AI Modules and their default states.
	 *
	 * @since x.x.x
	 * @var array $modules Array of all the available Zip AI Modules.
	 */
	private static $modules = [
		'ai_assistant' => 'enabled',
	];

	/**
	 * Update the status of Zip AI Module(s).
	 *
	 * @param string|array $module_name Name of the module or an array of module names.
	 * @param string       $status      Status of the module(s) to be updated.
	 * @since x.x.x
	 * @return boolean True if Zip AI Module(s) status has been updated, false otherwise.
	 */
	private static function update( $module_name, $status ) {
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
		$modules_from_db = Helper::get_admin_settings_option( 'zip_ai_modules', [] );

		// Ensure that the modules are in the correct format.
		$modules_from_db = is_array( $modules_from_db ) ? $modules_from_db : [];

		// Update the modules.
		$updated_modules = array_merge(
			$modules_from_db,
			array_fill_keys( $module_name, $status )
		);

		// Update the modules array.
		return Helper::update_admin_settings_option( 'zip_ai_modules', $updated_modules );
	}

	/**
	 * Function to migrate older Zip AI options into the new modular format.
	 *
	 * @since x.x.x
	 * @return void
	 */
	private static function migrate_options() {
		// Get the existing Zip AI settings option.
		$existing_settings = Helper::get_admin_settings_option( 'zip_ai_settings' );

		// If the chat enabled option is set, migrate it.
		if ( isset( $existing_settings['chat_enabled'] ) ) {
			// Set the new option value based on the chat enabled value.
			$ai_assistant_status = false === $existing_settings['chat_enabled'] ? 'disabled' : 'enabled';

			// Update the AI assistant module status.
			$ai_assistant_migrated = self::update( 'ai_assistant', $ai_assistant_status );

			// If the migration was successful, unset the chat enabled value and update the settings.
			if ( $ai_assistant_migrated ) {
				unset( $existing_settings['chat_enabled'] );
				Helper::update_admin_settings_option( 'zip_ai_settings', $existing_settings );
			}
		}
	}

	/**
	 * Enable Zip AI Module(s).
	 *
	 * If a string is passed, that module will be enabled if valid.
	 * If an array is passed, all valid modules will be enabled.
	 *
	 * @param string|array $module_name Name of the module or an array of module names.
	 * @since x.x.x
	 * @return boolean True if Zip AI module(s) has been enabled, false otherwise.
	 */
	public static function enable( $module_name ) {
		return self::update( $module_name, 'enabled' );
	}

	/**
	 * Function to disable Zip AI Module(s).
	 *
	 * If a string is passed, that module will be disabled if valid.
	 * If an array is passed, all valid modules will be disabled.
	 *
	 * @param string|array $module_name Name of the module or an array of module names.
	 * @since x.x.x
	 * @return boolean True if Zip AI module(s) has been enabled, false otherwise.
	 */
	public static function disable( $module_name ) {
		return self::update( $module_name, 'disabled' );
	}

	/**
	 * Function to check if Zip AI Module is enabled.
	 *
	 * @param string $module_name Name of the module.
	 * @since x.x.x
	 * @return boolean True if Zip AI is enabled, false otherwise.
	 */
	public static function is_enabled( $module_name ) {
		// Check if the module name is valid.
		if ( ! is_string( $module_name ) || ! array_key_exists( $module_name, self::$modules ) ) {
			return false;
		}

		// Get the current status of all saved Zip AI modules.
		$modules_from_db = Helper::get_admin_settings_option( 'zip_ai_modules', [] );

		// Ensure that the modules are in the correct format.
		$modules_from_db = is_array( $modules_from_db ) ? $modules_from_db : [];

		// Update the modules array for the check - if a module does not exist, the library's default will be considered.
		$updated_modules = array_merge(
			self::$modules,
			$modules_from_db
		);

		// Return based on whether Zip AI is enabled or not.
		return 'enabled' === $updated_modules[ $module_name ];
	}
}
