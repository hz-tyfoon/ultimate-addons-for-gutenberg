<?php
/**
 * Spec AI - Admin Views and Renders.
 *
 * @package spec-ai
 */

namespace SpecAI\Admin\Core;

use SpecAI\Admin\Core\Admin_Helpers;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The Admin_Views Class.
 */
class Admin_Views {

	/**
	 * Render the Admin Auth Markup.
	 * 
	 * @param string $menu_page_slug The menu page slug.
	 * @since x.x.x
	 * @return void
	 */
	public static function render_admin_auth_markup( $menu_page_slug ) {
		// If the menu page slug is not the same as the current menu page slug, then abandon ship.
		if ( SPEC_AI_MENU_SLUG !== $menu_page_slug ) {
			return;
		}

		// Render the auth page.
		?>
		<div id="spec-ai__dashboard-app--wrapper">
			<div id="spec-ai-dashboard-app" class="spec-ai-dashboard-app"></div>
		</div>
		<?php
	}

	/**
	 * Render the Admin Settings Markup.
	 * 
	 * @param string $menu_page_slug The menu page slug.
	 * @since x.x.x
	 * @return void
	 */
	public static function render_admin_settings_markup( $menu_page_slug ) {
		// If the menu page slug is not the same as the current menu page slug, then abandon ship.
		if ( SPEC_AI_MENU_SLUG !== $menu_page_slug ) {
			return;
		}

		// Render the settings page.
		?>
		<div class="wrap">
			<h1>
				<?php echo esc_html__( 'Spec AI Assistant Settings', 'ultimate-addons-for-gutenberg' ); ?>
			</h1>
			<p>
				<?php echo esc_html__( 'Enable/Disable and Credits will come here.', 'ultimate-addons-for-gutenberg' ); ?>
			</p>
			<form method="post" action="options.php">
				<?php
					// Render the settings for Spec AI.
					settings_fields( 'spec_ai_admin_settings' );
				?>
				<table class="form-table">
					<tr valign="top">
						<th scope="row">
							<?php echo esc_html__( 'Enable Spec AI Assistant', 'ultimate-addons-for-gutenberg' ); ?>
						</th>
						<td>
							<input type="checkbox" name="spec_ai_settings[enabled]" value="1" <?php checked( Admin_Helpers::get_spec_ai_setting( 'enabled', 0 ), 1 ); ?> />
						</td>
					</tr>
				</table>
				<?php
					// Render the submit button.
					submit_button();
				?>
			</form>
		</div>
		<?php
	}
}
