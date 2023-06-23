<?php
/**
 * Frontend JS File.
 *
 * @since 2.6.0
 *
 * @package uagb
 */

$js               = '';
$popup_id         = get_the_ID();
$popup_aria_label = ( 'popup' === $attr['variantType'] ) ? __( 'Popup', 'ultimate-addons-for-gutenberg' ) : __( 'Info Bar', 'ultimate-addons-for-gutenberg' );

// Render the JS Script to handle this popup on the current page.
ob_start();
?>
	window.addEventListener( 'DOMContentLoaded', function() {
		const blockScope = document.querySelector( '.uagb-block-<?php echo esc_attr( strval( $id ) ); ?>' );
		if ( ! blockScope ) {
			return;
		}
		const deviceWidth = ( window.innerWidth > 0 ) ? window.innerWidth : screen.width;
		if ( blockScope.classList.contains( 'uag-hide-desktop' ) && deviceWidth > 1024 ) {
			blockScope.remove();
			return;
		} else if ( blockScope.classList.contains( 'uag-hide-tab' ) && ( deviceWidth <= 1024 && deviceWidth > 768 ) ) {
			blockScope.remove();
			return;
		} else if ( blockScope.classList.contains( 'uag-hide-mob' ) && deviceWidth <= 768 ) {
			blockScope.remove();
			return;
		}

		<?php
			// Either check if the localStorage has been set before - If not, create it.
			// Or if this popup has an updated repetition number, reset the localStorage.
		?>
		let popupSesh = JSON.parse( localStorage.getItem( 'spectraPopup<?php echo esc_attr( strval( $popup_id ) ); ?>' ) );
		const repetition = <?php echo intval( get_post_meta( $popup_id, 'spectra-popup-repetition', true ) ); ?>;
		if ( null === popupSesh || repetition !== popupSesh[1] ) {
			<?php // [0] is the updating repetition number, [1] is the original repetition number. ?>		
			const repetitionArray = [
				repetition,
				repetition,
			];
			localStorage.setItem( 'spectraPopup<?php echo esc_attr( strval( $popup_id ) ); ?>', JSON.stringify( repetitionArray ) );
			popupSesh = JSON.parse( localStorage.getItem( 'spectraPopup<?php echo esc_attr( strval( $popup_id ) ); ?>' ) );
		}

		if ( 0 === popupSesh[0] ) {
			blockScope.remove();
			return;
		}

		const theBody = document.querySelector( 'body' );
		blockScope.style.display = 'flex';
		blockScope.setAttribute( 'role', 'region' );
		blockScope.setAttribute( 'aria-label', '<?php echo esc_attr( $popup_aria_label ) ?>' );
		setTimeout( () => {
			<?php
				// If this is a popup which prevent background interaction, hide the scrollbar.
			if ( 'popup' === $attr['variantType'] && $attr['haltBackgroundInteraction'] ) :
				?>
				theBody.classList.add( 'uagb-popup-builder__body--overflow-hidden' );
				blockScope.classList.add( 'spectra-popup--open' );
				<?php // Once this popup is active, create a focusable element to add focus onto the popup and then remove it. ?>
				blockScope.focus();
				const focusElement = document.createElement( 'button' );
				focusElement.style.position = 'absolute';
				focusElement.style.opacity = '0';
				const popupFocus = blockScope.insertBefore( focusElement, blockScope.firstChild );
				popupFocus.focus();
				popupFocus.remove();
			<?php endif; ?>
			blockScope.style.opacity = 1;
		}, 100 );

		const closePopup = ( event = null ) => {
			if ( event && blockScope !== event?.target ) {
				return;
			}
			blockScope.style.opacity = 0;
			if ( popupSesh[0] > 0 ) {
				popupSesh[0] -= 1;
				localStorage.setItem( 'spectraPopup<?php echo esc_attr( strval( $popup_id ) ); ?>', JSON.stringify( popupSesh ) );
			}
			setTimeout( () => {
				blockScope.remove();
				const allActivePopups = document.querySelectorAll( '.uagb-popup-builder.spectra-popup--open' );
				if ( 0 === allActivePopups.length ) {
					theBody.classList.remove( 'uagb-popup-builder__body--overflow-hidden' );
				}
			}, 100 );
		};

		<?php
		if ( $attr['isDismissable'] ) :
			if ( $attr['hasOverlay'] && $attr['closeOverlayClick'] ) :
				?>
				blockScope.addEventListener( 'click', ( event ) => closePopup( event ) );
				<?php
				endif;
			if ( $attr['closeIcon'] ) :
				?>
				const closeButton = blockScope.querySelector( '.uagb-popup-builder__close' );
				closeButton.style.cursor = 'pointer';
				closeButton.addEventListener( 'click', () => closePopup() );
				<?php
				endif;
			if ( $attr['closeEscapePress'] ) :
				?>
				blockScope.addEventListener( 'keyup', ( event ) => {
					if ( 27 === event.keyCode ) {
						return closePopup();
					}
				} );
				<?php
				endif;
			endif;
		?>

		const closingElements = blockScope.querySelectorAll( '.spectra-popup-close-<?php echo esc_attr( strval( $popup_id ) ); ?>' );
		for ( let i = 0; i < closingElements.length; i++ ) {
			closingElements[ i ].style.cursor = 'pointer';
			closingElements[ i ].addEventListener( 'click', () => closePopup() );
		}
	} );
<?php
$js = ob_get_clean();

$js = apply_filters( 'spectra_pro_popup_frontend_js', $js, $id, $attr );

return $js;
