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
		<style>
			#wpbody-content .notice{
				display: none !important;
			}
			#wpbody-content .error{
				display: none !important;
			}
		</style>
		<div class="wrap">
			<h1>
				<?php echo esc_html__( 'Spec AI Assistant Settings', 'ultimate-addons-for-gutenberg' ); ?>
			</h1>
			<form method="post" action="options.php">
				<?php
					// Render the settings for Spec AI.
					settings_fields( 'spec_ai_admin_settings' );
				?>
				<table class="form-table">
					<tr valign="top">
						<th scope="row">
							<?php echo esc_html__( 'Spec - AI Assistant', 'ultimate-addons-for-gutenberg' ); ?>
						</th>
						<td>
							<label>
								<input type="checkbox" name="spec_ai_settings[enabled]" value="1" <?php checked( Admin_Helpers::get_spec_ai_setting( 'enabled', 0 ), 1 ); ?> />
								<?php echo esc_html__( 'Enable Spec in the Editor', 'ultimate-addons-for-gutenberg' ); ?>
							</label>
						</td>
					</tr>
					<tr valign="top">
						<th>
							<?php echo esc_html__( 'Revoke Authorization Token', 'ultimate-addons-for-gutenberg' ); ?>
						</th>
						<td>
							<button type="button" class="button button-secondary spec-ai__button--revoke">
								<?php echo esc_html__( 'Revoke', 'ultimate-addons-for-gutenberg' ); ?>
							</button>
							<p>
								<?php echo esc_html__( 'This will revoke the authorization token for Spec - You will need to re-authorize Spec to use it again.', 'ultimate-addons-for-gutenberg' ); ?>
							</p>
						</td>
				</table>
				<?php
					// Render the submit button.
					submit_button( __( 'Update Spec Settings', 'ultimate-addons-for-gutenberg' ) );
				?>
			</form>
		</div>
		<?php // Render the revoke token script. ?>
		<script type="text/javascript">
			document.querySelector( '.spec-ai__button--revoke' ).addEventListener( 'click', () => {
				if ( confirm( '<?php echo esc_html__( 'Are you sure you wish to revoke the authorization token?', 'ultimate-addons-for-gutenberg' ); ?>' ) ) {
					window.location.assign( '<?php echo esc_url( admin_url( '?revoke_spec_authorization_token=definitely' ) ); ?>' );
				}
			} );
		</script>
		<?php
	}
}
