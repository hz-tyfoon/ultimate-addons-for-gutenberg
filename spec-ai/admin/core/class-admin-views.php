<?php
/**
 * Spec AI - Admin Views and Renders.
 *
 * @package spec-ai
 */

namespace SpecAI\Admin\Core;

use SpecAI\Classes\Spec_Helpers;

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
		$credits_max       = 500;
		$credit_threshold  = SPEC_AI_CREDIT_THRESHOLD;
		$credit_percentage = 0;

		// Get the response from the endpoint.
		$response = Spec_Helpers::get_scs_response( 'usage' );

		// If the response is not an error, then parse the response.
		if (
			empty( $response['error'] )
			&& ! empty( $response['total_remaining_credits'] )
			&& ! empty( $response['total_credits'] )
		) {
			$credits_remaining = $response['total_remaining_credits'];
			$credits_max       = $response['total_credits'];
			$credit_percentage = intval( ( $credits_remaining / $credits_max ) * 100 );         
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
			.spec-ai__auth-status--wrapper {
				display: flex;
				align-items: center;
				gap: 12px;
			}
			.spec-ai__auth-status--valid {
				color: #16a34a;
			}
			.spec-ai__auth-status--revoke {
				font-size: 12px !important;
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
								<input type="checkbox" name="spec_ai_settings[enabled]" value="1" <?php checked( Spec_Helpers::get_spec_ai_setting( 'enabled', 1 ), 1 ); ?> />
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
									echo esc_html__( 'Credit Balance: ', 'ultimate-addons-for-gutenberg' ) . esc_html( $credits_remaining ) . '/' . esc_html( $credits_max );
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
									<div class="spec-ai__credits--filled" style="width: <?php echo esc_attr( $credit_percentage ); ?>%;"></div>
								</div>
							</div>
						</td>
					</tr>
					<tr valign="top">
						<th>
							<?php echo esc_html__( 'Authorization Status', 'ultimate-addons-for-gutenberg' ); ?>
						</th>
						<td>
							<div class="spec-ai__auth-status--wrapper">
								<strong class="spec-ai__auth-status--valid">
									<span class="dashicons dashicons-yes"></span>
									<?php echo esc_html__( 'Authorized', 'ultimate-addons-for-gutenberg' ); ?>
								</strong>
								<button type="button" class="button button-link spec-ai__auth-status--revoke">
									<?php echo esc_html__( 'Revoke', 'ultimate-addons-for-gutenberg' ); ?>
								</button>
							</div>
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
			document.querySelector( '.spec-ai__auth-status--revoke' ).addEventListener( 'click', () => {
				if ( confirm( '<?php echo esc_html__( 'Are you sure you wish to revoke the authorization token?\nYou will need to re-authorize Spec to use it again.', 'ultimate-addons-for-gutenberg' ); ?>' ) ) {
					localStorage.removeItem( 'specAiAuthorizationStatus' );
					window.location.assign( '<?php echo esc_url( admin_url( '?revoke_spec_authorization_token=definitely' ) ); ?>' );
				}
			} );
			// Add to Local Storage if Spec is authorized.
			if ( <?php echo Spec_Helpers::is_spec_authorized() ? true : false; ?> ) {
				localStorage.setItem( 'specAiAuthorizationStatus', true );
			}
		</script>
		<?php
	}
}
