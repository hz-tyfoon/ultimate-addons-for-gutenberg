<?php
/**
 * Plugin Name: Zip AI Assistant
 * Description: Library which interacts with SCS and provide multiple useful modules.
 * Author: Brainstorm Force
 * Version: 1.0.3
 * License: GPL v2
 * Text Domain: zip-ai
 *
 * @package zip-ai
 */

// Exit if Zip AI is already loaded.
if ( defined( 'ZIP_AI_DIR' ) ) {
	return;
}

// Load the functions.
require_once 'functions.php';

// Load the library files only if Zip AI is enabled.
if ( class_exists( 'ZipAI\Functions' ) && ZipAI\Functions::is_zip_ai_enabled() ) {
	require_once 'loader.php';
}
