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
	<form method="post" action="options.php">
		<?php
			// Render the settings for Spec AI.
			settings_fields( 'spec-ai-settings-group' );
			do_settings_sections( 'spec-ai-settings' );
			submit_button();
		?>
	</form>
</div>
