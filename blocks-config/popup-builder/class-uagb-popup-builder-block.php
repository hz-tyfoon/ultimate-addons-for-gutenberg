<?php
/**
 * Spectra - Popup Builder - Dynamic Block.
 *
 * @since x.x.x
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Popup_Builder_Block' ) ) {

	/**
	 * Class UAGB_Popup_Builder_Block.
	 */
	final class UAGB_Popup_Builder_Block {

		/**
		 * Member Variable.
		 *
		 * @since x.x.x
		 * @var instance
		 */
		private static $instance;


		/**
		 * Initiator.
		 *
		 * @since x.x.x
		 * @return void
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'register_popup_builder_block' ) );
		}

		/**
		 * Registers the `popup-builder` block on server.
		 *
		 * @since x.x.x
		 * @return void
		 */
		public function register_popup_builder_block() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			// Return Early if get_post_type() not spectra-popup

			$content_border_attributes = array();

			if ( method_exists( 'UAGB_Block_Helper', 'uag_generate_php_border_attribute' ) ) {
				$content_border_attributes = UAGB_Block_Helper::uag_generate_php_border_attribute(
					'content',
					array(
						'borderStyle' => 'default',
					)
				);
			}

			register_block_type(
				'uagb/popup-builder',
				array(
					'attributes'      => array_merge(
						// ------------------------- BLOCK SETTINGS.
						array(
							'block_id'          => '',
							'isPreview'         => false,
							'variationSelected' => false,
							'variantType'       => '',							
						),
						// ------------------------- POPUP SETTINGS.
						array(
							'popupPositionH'            => '',
							'popupPositionV'            => '',
							'popupContentAlignmentV'    => 'flex-start',
							'popupWidth'                => 700,
							'popupWidthTablet'          => '',
							'popupWidthMobile'          => '',
							'popupWidthUnit'            => 'px',
							'popupWidthUnitTablet'      => 'px',
							'popupWidthUnitMobile'      => 'px',
							'popupHeight'               => '',
							'popupHeightTablet'         => '',
							'popupHeightMobile'         => '',
							'popupMaxHeight'            => '',
							'popupMaxHeightTablet'      => '',
							'popupMaxHeightMobile'      => '',
							'popupHeightUnit'           => 'px',
							'popupHeightUnitTablet'     => 'px',
							'popupHeightUnitMobile'     => 'px',
							'hasFixedHeight'            => false,
							'popupBehaviour'            => 'overlay',
							'hasOverlay'                => true,
							'isDismissable'             => true,
							'haltBackgroundInteraction' => true,
						),
						// ------------------------- CLOSE SETTINGS.
						array(
							'closeIcon'         => 'xmark',
							'closeIconPosition' => 'top-right',
							'closeOverlayClick' => true,
						),
						// ------------------------- POPUP STYLING ( BACKGROUND ).
						array(
							'selectGradient'              => 'basic',
							'gradientValue'               => 'linear-gradient(90deg, rgb(149, 201, 242) 0%, rgb(206, 168, 240) 100%)',
							'gradientColor1'              => '#06558a',
							'gradientColor2'              => '#0063a1',
							'gradientType'                => 'linear',
							'gradientType'                => 'linear',
							'gradientLocation1'           => 0,
							'gradientLocation2'           => 100,
							'gradientAngle'               => 0,
							'backgroundImageColor'        => '#ffffff75',
							'backgroundSizeDesktop'       => 'cover',
							'backgroundSizeTablet'        => '',
							'backgroundSizeMobile'        => '',
							'backgroundCustomSizeDesktop' => 100,
							'backgroundCustomSizeTablet'  => '',
							'backgroundCustomSizeMobile'  => '',
							'backgroundCustomSizeType'    => '%',
							'backgroundRepeatDesktop'     => 'no-repeat',
							'backgroundRepeatTablet'      => '',
							'backgroundRepeatMobile'      => '',
							'backgroundAttachmentDesktop' => 'scroll',
							'backgroundAttachmentTablet'  => '',
							'backgroundAttachmentMobile'  => '',
							'backgroundPositionDesktop'   => array(
								'x' => 0.5,
								'y' => 0.5,
							),
							'backgroundPositionTablet'    => '',
							'backgroundPositionMobile'    => '',
							'backgroundImageDesktop'      => '',
							'backgroundImageTablet'       => '',
							'backgroundImageMobile'       => '',
							'backgroundColor'             => '#ffffff',
							'backgroundType'              => 'none',
							'overlayType'                 => 'none',
							'customPosition'              => 'default',
							'xPositionDesktop'            => '',
							'xPositionTablet'             => '',
							'xPositionMobile'             => '',
							'xPositionType'               => 'px',
							'xPositionTypeTablet'         => 'px',
							'xPositionTypeMobile'         => 'px',
							'yPositionDesktop'            => '',
							'yPositionTablet'             => '',
							'yPositionMobile'             => '',
							'yPositionType'               => 'px',
							'yPositionTypeTablet'         => 'px',
							'yPositionTypeMobile'         => 'px',
						),
						// ------------------------- POPUP STYLING.
						array(
							'popupOverlayColor' => 'rgba(0,0,0,0.75)',
						),
						// ------------------------- CLOSE STYLING.
						array(
							'closeIconSize'       => 25,
							'closeIconSizeTablet' => '',
							'closeIconSizeMobile' => '',
							'closeIconColor'      => '',
						),
						// ------------------------- BOX SHADOW STYLING.
						array(
							'useSeparateBoxShadows'  => false,
							'boxShadowColor'         => '#00000070',
							'boxShadowHOffset'       => 0,
							'boxShadowVOffset'       => 0,
							'boxShadowBlur'          => '',
							'boxShadowSpread'        => '',
							'boxShadowPosition'      => 'outset',
							'boxShadowColorHo'       => '',
							'boxShadowHOffsetHover'  => 0,
							'boxShadowVOffsetHover'  => 0,
							'boxShadowBlurHov'       => '',
							'boxShadowSpreadH'       => '',
							'boxShadowPositionHover' => 'outset',
						),
						// ------------------------- SPACE STYLING ( POPUP ).
						array(
							'popupPaddingTop'          => 32,
							'popupPaddingRight'        => 32,
							'popupPaddingBottom'       => 32,
							'popupPaddingLeft'         => 32,
							'popupPaddingTopTablet'    => '',
							'popupPaddingRightTablet'  => '',
							'popupPaddingBottomTablet' => '',
							'popupPaddingLeftTablet'   => '',
							'popupPaddingTopMobile'    => '',
							'popupPaddingRightMobile'  => '',
							'popupPaddingBottomMobile' => '',
							'popupPaddingLeftMobile'   => '',
							'popupPaddingUnit'         => 'px',
							'popupPaddingUnitTablet'   => 'px',
							'popupPaddingUnitMobile'   => 'px',
							'popupPaddingLink'         => true,
							'popupMarginTop'           => '',
							'popupMarginRight'         => '',
							'popupMarginBottom'        => '',
							'popupMarginLeft'          => '',
							'popupMarginTopTablet'     => '',
							'popupMarginRightTablet'   => '',
							'popupMarginBottomTablet'  => '',
							'popupMarginLeftTablet'    => '',
							'popupMarginTopMobile'     => '',
							'popupMarginRightMobile'   => '',
							'popupMarginBottomMobile'  => '',
							'popupMarginLeftMobile'    => '',
							'popupMarginUnit'          => 'px',
							'popupMarginUnitTablet'    => 'px',
							'popupMarginUnitMobile'    => 'px',
							'popupMarginLink'          => true,
						),
						// ------------------------- SPACE STYLING ( CLOSE BUTTON ).
						array(
							'closePaddingTop'          => '',
							'closePaddingRight'        => '',
							'closePaddingBottom'       => '',
							'closePaddingLeft'         => '',
							'closePaddingTopTablet'    => '',
							'closePaddingRightTablet'  => '',
							'closePaddingBottomTablet' => '',
							'closePaddingLeftTablet'   => '',
							'closePaddingTopMobile'    => '',
							'closePaddingRightMobile'  => '',
							'closePaddingBottomMobile' => '',
							'closePaddingLeftMobile'   => '',
							'closePaddingUnit'         => 'px',
							'closePaddingUnitTablet'   => 'px',
							'closePaddingUnitMobile'   => 'px',
							'closePaddingLink'         => true,
						),
						// Responsive Borders.
						$content_border_attributes
					),
					'render_callback' => array( $this, 'render_popup_builder_block' ),
				)
			);
		}

		/**
		 * Renders the Popup Builder Block.
		 *
		 * @param array $attributes The block attributes.
		 * @param array $content    The saved content.
		 * @param array $block      The parsed block.
		 * @since x.x.x
		 * @return string           The formatted Popup Builder block, or empty if no innerblocks are added.
		 */
		public function render_popup_builder_block( $attributes, $content, $block ) {
			if ( empty( $block->inner_blocks ) || empty( $attributes['variationSelected'] ) ) {
				return '';
			}

			$inner_blocks_html = '';
			foreach ( $block->inner_blocks as $inner_block ) {
				$inner_blocks_html .= $inner_block->render();
			}

			ob_start();
			?>
				<div class="uagb-popup-builder__wrapper uagb-popup-builder__wrapper--<?php echo esc_attr( $attributes['variantType'] ); ?>">
					<div class="uagb-popup-builder__container uagb-popup-builder__container--<?php echo esc_attr( $attributes['variantType'] ); ?>">
						<?php echo wp_kses_post( $inner_blocks_html ); ?>
					</div>
					<?php if ( $attributes['isDismissable'] && $attributes['closeIcon'] ) : ?>
						<div class="uagb-popup-builder__close">
							This is a string to be replaced { renderSVG( closeIcon ) }
						</div>
					<?php endif; ?>
				</div>
			<?php

			$output = ob_get_clean();
			if ( ! is_string( $output ) ) {
				return '';
			}

			return $output;

		}
	}

	/**
	 *  Prepare if class 'UAGB_Popup_Builder_Block' exist.
	 *  Kicking this off by calling 'get_instance()' method.
	 */
	UAGB_Popup_Builder_Block::get_instance();
}
