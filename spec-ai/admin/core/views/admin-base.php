<?php
/**
 * Spec AI - The Admin Base View.
 *
 * @package spec-ai
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<div class="wrap">
	<h1><?php echo esc_html__( 'Spec AI Assistant Settings', 'ultimate-addons-for-gutenberg' ); ?></h1>
	<p><?php echo esc_html__( 'Enable/Disable and Credits will come here.', 'ultimate-addons-for-gutenberg' ); ?></p>
	<form method="post" action="options.php">
		<?php
			// Render the settings for Spec AI.
			settings_fields( 'spec-ai-admin-settings' );
			do_settings_sections( 'spec-ai-general-settings' );
			submit_button();
		?>
	</form>
</div>
