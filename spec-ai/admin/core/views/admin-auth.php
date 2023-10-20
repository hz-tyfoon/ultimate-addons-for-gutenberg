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
	<h1><?php echo esc_html__( 'Spec AI Auth Screen', 'ultimate-addons-for-gutenberg' ); ?></h1>
	<p><?php echo esc_html__( 'You\'ll need to authorize Spec.', 'ultimate-addons-for-gutenberg' ); ?></p>
	<div id="spec-ai-menu-page">
		<div class="spec-ai-menu-page-content spec-ai-clear">
			<?php
				// Render the page content.
				do_action( 'spec_ai_render_admin_page_settings', $menu_page_slug );
			?>
			<button class="spec-ai-button-for-auth">
				<?php echo esc_html__( 'Authorize.', 'ultimate-addons-for-gutenberg' ); ?>
			</button>
		</div>
	</div>
</div>
<script type="text/javascript">
	// Add an Event Listener for the 'spec-ai-button-for-auth' button.
	const specButton = document.querySelector( '.spec-ai-button-for-auth' );
	specButton.addEventListener( 'click', ( event ) => {event.preventDefault();

		// Get he event target and disable it.
		const specButton = event.target;
		specButton.disabled = true;

		const positioning = {
			left: ( screen.width - 480 ) / 2,
			top: ( screen.height - 720 ) / 2,
		};

		// Redirect to the Spec Authorization URL.
		const authWindow = window.open( specAuthURL, 'SpecAuthorization', `width=480,height=720,top=${ positioning.top },left=${ positioning.left },scrollbars=0` );
	} );
</script>
