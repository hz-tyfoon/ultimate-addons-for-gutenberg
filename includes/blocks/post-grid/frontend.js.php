<?php
/**
 * Frontend JS File.
 *
 * @since 2.2.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
// var_dump($attr);
ob_start();
?>
	<!-- window.addEventListener( 'DOMContentLoaded', function() {
		UAGBPostGrid._init( <?php echo wp_json_encode( $attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
	}); -->
<?php
return ob_get_clean();
?>
