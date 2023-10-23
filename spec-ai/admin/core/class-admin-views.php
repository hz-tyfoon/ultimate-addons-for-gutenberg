<?php
/**
 * Spec AI - Admin Views and Renders.
 *
 * @package spec-ai
 */

namespace SpecAI\Admin\Core;

use SpecAI\Classes\Spec_Helpers;
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

		// Set the default values.
		$credits_remaining = 0;
		$credit_threshold  = 25;

		// Get the response from the endpoint.
		$response = Spec_Helpers::get_scs_response( 'usage' );

		// If the response is not an error, then parse the response.
		if (
			empty( $response['error'] )
			&& ! empty( $response['total_remaining_credits'] )
			&& ! empty( $response['total_credits'] )
		) {
			$credits_remaining = intval( ( $response['total_remaining_credits'] / $response['total_credits'] ) * 100 );
		}

		// Render the settings page.
		?>
		<style>
			#wpbody-content .notice {
				display: none !important;
			}
			#wpbody-content .error {
				display: none !important;
			}
			.spec-ai__credits--link {
				display: inline-block;
				margin-left: 8px;
				color: #6104ff;
				text-decoration: none;
			}
			.spec-ai__credits--wrapper {
				margin-top: 8px;
				display: flex;
				align-items: center;
			}
			.spec-ai__credits--bar {
				width: 100%;
				max-width: 320px;
				height: 8px;
				background-color: #d1d5db;
				border-radius: 4px;
				overflow: hidden;
			}
			.spec-ai__credits--filled {
				height: 100%;
				border-radius: 4px;
				background-color: <?php echo ( $credits_remaining > $credit_threshold ) ? '#6104ff' : '#dc2626'; ?>;
			}
		</style>
		<div class="wrap">
			<h1>
				<?php echo esc_html__( 'Spec AI Assistant Settings', 'ultimate-addons-for-gutenberg' ); ?>
			</h1>
			<form method="post" action="admin-ajax.php">
				<?php wp_nonce_field( 'spec_ai_settings', 'spec_ai_admin_settings_nonce' ); ?>
				<input type="hidden" name="action" value="spec_ai_admin_settings_ajax" />
				<table class="form-table">
					<tr valign="top">
						<th scope="row">
							<?php echo esc_html__( 'Spec - AI Assistant', 'ultimate-addons-for-gutenberg' ); ?>
						</th>
						<td>
							<label>
								<input type="checkbox" name="spec_ai_settings[enabled]" value="1" <?php checked( Admin_Helpers::get_spec_ai_setting( 'enabled', 1 ), 1 ); ?> />
								<?php echo esc_html__( 'Enable Spec in the Editor', 'ultimate-addons-for-gutenberg' ); ?>
							</label>
						</td>
					</tr>
					<tr valign="top">
						<th scope="row">
							<?php echo esc_html__( 'Credits', 'ultimate-addons-for-gutenberg' ); ?>
						</th>
						<td>
							<p>
								<?php
									echo esc_html__( 'Credit Balance: ', 'ultimate-addons-for-gutenberg' ) . esc_html( $credits_remaining ) . '%';
								if ( $credits_remaining < $credit_threshold ) :
									?>
									<a href="https://store.brainstormforce.com/downloads/spec-ai/" target="_blank" rel="noopener noreferrer" class="spec-ai__credits--link">
									<?php echo esc_html__( 'Get more', 'ultimate-addons-for-gutenberg' ); ?>
										<span class="dashicons dashicons-external"></span>
									</a>
								<?php endif; ?>
							</p>
							<div class="spec-ai__credits--wrapper">
								<div class="spec-ai__credits--bar">
									<div class="spec-ai__credits--filled" style="width: <?php echo esc_attr( $credits_remaining ); ?>%;"></div>
								</div>
							</div>
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
			console.log( <?php echo wp_json_encode( $response ); ?> );
			document.querySelector( '.spec-ai__button--revoke' ).addEventListener( 'click', () => {
				if ( confirm( '<?php echo esc_html__( 'Are you sure you wish to revoke the authorization token?', 'ultimate-addons-for-gutenberg' ); ?>' ) ) {
					window.location.assign( '<?php echo esc_url( admin_url( '?revoke_spec_authorization_token=definitely' ) ); ?>' );
				}
			} );
		</script>
		<?php
	}
}
