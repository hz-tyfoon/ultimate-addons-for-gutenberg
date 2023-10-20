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
<div class="spec-ai-menu-page-wrapper">
	<div id="spec-ai-menu-page">
		<div class="spec-ai-menu-page-content spec-ai-clear">
		<?php
			// Render the page content.
			do_action( 'spec_ai_render_admin_page_settings', $menu_page_slug );
		?>
		</div>
	</div>
</div>
