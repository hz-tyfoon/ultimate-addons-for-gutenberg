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
<div id="spec-ai__dashboard-app--wrapper">
	<?php
		// Render the page content.
		do_action( 'spec_ai_render_dashboard_app', $menu_page_slug );
	?>
</div>
