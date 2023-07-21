<?php
/**
 * Frontend JS File.
 *
 * @since 2.3.0
 *
 * @package uagb
 */



ob_start();
?>
window.addEventListener( 'DOMContentLoaded', () => {
	const glider = document.querySelector( '.spectra-glide' );
	console.log( glider );
	new Glide( glider, {
		type: 'carousel',
		perView: 2,
		focusAt: 'center',
		gap: 50,
		autoplay: false,		
	} ).mount()
});
<?php
return ob_get_clean();
?>
