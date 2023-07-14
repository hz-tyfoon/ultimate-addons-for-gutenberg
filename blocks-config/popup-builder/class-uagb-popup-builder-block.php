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
	 * 
	 * @since x.x.x
	 */
	final class UAGB_Popup_Builder_Block {

		/**
		 * Member Variable.
		 *
		 * @since x.x.x
		 * @var object $instance  Instance of this class.
		 */
		private static $instance;


		/**
		 * Initiator.
		 *
		 * @since x.x.x
		 * @return object  Initialized object of this class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor.
		 * 
		 * @since x.x.x
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

			// Return Early if get_post_type() not spectra-popup.

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
					'api_version'     => 2,
					'attributes'      => array_merge(
						// ------------------------- BLOCK SETTINGS.
						array(
							'block_id'          => array(
								'type' => 'string',
							),
							'isPreview'         => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'variationSelected' => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'variantType'       => array(
								'type' => 'string',
							),                      
						),
						// ------------------------- POPUP SETTINGS.
						array(
							'popupPositionH'            => array(
								'type' => 'string',
							),
							'popupPositionV'            => array(
								'type' => 'string',
							),
							'popupContentAlignmentV'    => array(
								'type'    => 'string',
								'default' => 'flex-start',
							),
							'popupWidth'                => array(
								'type'    => 'number',
								'default' => 700,
							),
							'popupWidthTablet'          => array(
								'type' => 'number',
							),
							'popupWidthMobile'          => array(
								'type' => 'number',
							),
							'popupWidthUnit'            => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupWidthUnitTablet'      => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupWidthUnitMobile'      => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupHeight'               => array(
								'type' => 'number',
							),
							'popupHeightTablet'         => array(
								'type' => 'number',
							),
							'popupHeightMobile'         => array(
								'type' => 'number',
							),
							'popupMaxHeight'            => array(
								'type' => 'number',
							),
							'popupMaxHeightTablet'      => array(
								'type' => 'number',
							),
							'popupMaxHeightMobile'      => array(
								'type' => 'number',
							),
							'popupHeightUnit'           => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupHeightUnitTablet'     => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupHeightUnitMobile'     => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'hasFixedHeight'            => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'popupBehaviour'            => array(
								'type'    => 'number',
								'default' => 'overlay',
							),
							'hasOverlay'                => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'isDismissable'             => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'haltBackgroundInteraction' => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// ------------------------- CLOSE SETTINGS.
						array(
							'closeIcon'         => array(
								'type'    => 'string',
								'default' => 'xmark',
							),
							'closeIconPosition' => array(
								'type'    => 'string',
								'default' => 'top-right',
							),
							'closeOverlayClick' => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// ------------------------- POPUP STYLING ( BACKGROUND ).
						array(
							'selectGradient'              => array(
								'type'    => 'string',
								'default' => 'basic',
							),
							'gradientValue'               => array(
								'type'    => 'string',
								'default' => 'linear-gradient(90deg, rgb(149, 201, 242) 0%, rgb(206, 168, 240) 100%)',
							),
							'gradientColor1'              => array(
								'type'    => 'string',
								'default' => '#06558a',
							),
							'gradientColor2'              => array(
								'type'    => 'string',
								'default' => '#0063a1',
							),
							'gradientType'                => array(
								'type'    => 'string',
								'default' => 'linear',
							),
							'gradientLocation1'           => array(
								'type'    => 'number',
								'default' => 0,
							),
							'gradientLocation2'           => array(
								'type'    => 'number',
								'default' => 100,
							),
							'gradientAngle'               => array(
								'type'    => 'number',
								'default' => 0,
							),
							'backgroundImageColor'        => array(
								'type'    => 'string',
								'default' => '#ffffff75',
							),
							'backgroundSizeDesktop'       => array(
								'type'    => 'string',
								'default' => 'cover',
							),
							'backgroundSizeTablet'        => array(
								'type' => 'string',
							),
							'backgroundSizeMobile'        => array(
								'type' => 'string',
							),
							'backgroundCustomSizeDesktop' => array(
								'type'    => 'number',
								'default' => 100,
							),
							'backgroundCustomSizeTablet'  => array(
								'type' => 'number',
							),
							'backgroundCustomSizeMobile'  => array(
								'type' => 'number',
							),
							'backgroundCustomSizeType'    => array(
								'type'    => 'string',
								'default' => '%',
							),
							'backgroundRepeatDesktop'     => array(
								'type'    => 'string',
								'default' => 'no-repeat',
							),
							'backgroundRepeatTablet'      => array(
								'type' => 'string',
							),
							'backgroundRepeatMobile'      => array(
								'type' => 'string',
							),
							'backgroundAttachmentDesktop' => array(
								'type'    => 'string',
								'default' => 'scroll',
							),
							'backgroundAttachmentTablet'  => array(
								'type' => 'string',
							),
							'backgroundAttachmentMobile'  => array(
								'type' => 'string',
							),
							'backgroundPositionDesktop'   => array(
								'type'    => 'object',
								'default' => array(
									'x' => 0.5,
									'y' => 0.5,
								),
							),
							'backgroundPositionTablet'    => array(
								'type' => 'object',
							),
							'backgroundPositionMobile'    => array(
								'type' => 'object',
							),
							'backgroundImageDesktop'      => array(
								'type' => 'object',
							),
							'backgroundImageTablet'       => array(
								'type' => 'object',
							),
							'backgroundImageMobile'       => array(
								'type' => 'object',
							),
							'backgroundColor'             => array(
								'type'    => 'string',
								'default' => '#ffffff',
							),
							'backgroundType'              => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'overlayType'                 => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'customPosition'              => array(
								'type'    => 'string',
								'default' => 'default',
							),
							'xPositionDesktop'            => array(
								'type'    => 'number',
								'default' => '',
							),
							'xPositionTablet'             => array(
								'type' => 'number',
							),
							'xPositionMobile'             => array(
								'type' => 'number',
							),
							'xPositionType'               => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'xPositionTypeTablet'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'xPositionTypeMobile'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'yPositionDesktop'            => array(
								'type'    => 'number',
								'default' => '',
							),
							'yPositionTablet'             => array(
								'type' => 'number',
							),
							'yPositionMobile'             => array(
								'type' => 'number',
							),
							'yPositionType'               => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'yPositionTypeTablet'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'yPositionTypeMobile'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
						),
						// ------------------------- POPUP STYLING.
						array(
							'popupOverlayColor' => array(
								'type'    => 'string',
								'default' => 'rgba(0,0,0,0.75)',
							),
						),
						// ------------------------- CLOSE STYLING.
						array(
							'closeIconSize'       => array(
								'type'    => 'number',
								'default' => 25,
							),
							'closeIconSizeTablet' => array(
								'type' => 'number',
							),
							'closeIconSizeMobile' => array(
								'type' => 'number',
							),
							'closeIconColor'      => array(
								'type'    => 'string',
								'default' => '',
							),
						),
						// ------------------------- BOX SHADOW STYLING.
						array(
							'useSeparateBoxShadows'  => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'boxShadowColor'         => array(
								'type'    => 'string',
								'default' => '#00000070',
							),
							'boxShadowHOffset'       => array(
								'type'    => 'number',
								'default' => 0,
							),
							'boxShadowVOffset'       => array(
								'type'    => 'number',
								'default' => 0,
							),
							'boxShadowBlur'          => array(
								'type' => 'number',
							),
							'boxShadowSpread'        => array(
								'type' => 'number',
							),
							'boxShadowPosition'      => array(
								'type'    => 'string',
								'default' => 'outset',
							),
							'boxShadowColorHover'    => array(
								'type' => 'string',
							),
							'boxShadowHOffsetHover'  => array(
								'type'    => 'number',
								'default' => 0,
							),
							'boxShadowVOffsetHover'  => array(
								'type'    => 'number',
								'default' => 0,
							),
							'boxShadowBlurHover'     => array(
								'type' => 'number',
							),
							'boxShadowSpreadHover'   => array(
								'type' => 'number',
							),
							'boxShadowPositionHover' => array(
								'type'    => 'string',
								'default' => 'outset',
							),
						),
						// ------------------------- SPACE STYLING ( POPUP ).
						array(
							'popupPaddingTop'          => array(
								'type'    => 'number',
								'default' => 32,
							),
							'popupPaddingRight'        => array(
								'type'    => 'number',
								'default' => 32,
							),
							'popupPaddingBottom'       => array(
								'type'    => 'number',
								'default' => 32,
							),
							'popupPaddingLeft'         => array(
								'type'    => 'number',
								'default' => 32,
							),
							'popupPaddingTopTablet'    => array(
								'type' => 'number',
							),
							'popupPaddingRightTablet'  => array(
								'type' => 'number',
							),
							'popupPaddingBottomTablet' => array(
								'type' => 'number',
							),
							'popupPaddingLeftTablet'   => array(
								'type' => 'number',
							),
							'popupPaddingTopMobile'    => array(
								'type' => 'number',
							),
							'popupPaddingRightMobile'  => array(
								'type' => 'number',
							),
							'popupPaddingBottomMobile' => array(
								'type' => 'number',
							),
							'popupPaddingLeftMobile'   => array(
								'type' => 'number',
							),
							'popupPaddingUnit'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupPaddingUnitTablet'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupPaddingUnitMobile'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupPaddingLink'         => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'popupMarginTop'           => array(
								'type' => 'number',
							),
							'popupMarginRight'         => array(
								'type' => 'number',
							),
							'popupMarginBottom'        => array(
								'type' => 'number',
							),
							'popupMarginLeft'          => array(
								'type' => 'number',
							),
							'popupMarginTopTablet'     => array(
								'type' => 'number',
							),
							'popupMarginRightTablet'   => array(
								'type' => 'number',
							),
							'popupMarginBottomTablet'  => array(
								'type' => 'number',
							),
							'popupMarginLeftTablet'    => array(
								'type' => 'number',
							),
							'popupMarginTopMobile'     => array(
								'type' => 'number',
							),
							'popupMarginRightMobile'   => array(
								'type' => 'number',
							),
							'popupMarginBottomMobile'  => array(
								'type' => 'number',
							),
							'popupMarginLeftMobile'    => array(
								'type' => 'number',
							),
							'popupMarginUnit'          => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupMarginUnitTablet'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupMarginUnitMobile'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'popupMarginLink'          => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// ------------------------- SPACE STYLING ( CLOSE BUTTON ).
						array(
							'closePaddingTop'          => array(
								'type' => 'number',
							),
							'closePaddingRight'        => array(
								'type' => 'number',
							),
							'closePaddingBottom'       => array(
								'type' => 'number',
							),
							'closePaddingLeft'         => array(
								'type' => 'number',
							),
							'closePaddingTopTablet'    => array(
								'type' => 'number',
							),
							'closePaddingRightTablet'  => array(
								'type' => 'number',
							),
							'closePaddingBottomTablet' => array(
								'type' => 'number',
							),
							'closePaddingLeftTablet'   => array(
								'type' => 'number',
							),
							'closePaddingTopMobile'    => array(
								'type' => 'number',
							),
							'closePaddingRightMobile'  => array(
								'type' => 'number',
							),
							'closePaddingBottomMobile' => array(
								'type' => 'number',
							),
							'closePaddingLeftMobile'   => array(
								'type' => 'number',
							),
							'closePaddingUnit'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'closePaddingUnitTablet'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'closePaddingUnitMobile'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'closePaddingLink'         => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// Responsive Borders.
						$content_border_attributes
					),
					'supports'        => array(
						'anchor'   => true,
						'multiple' => false,
						'reusable' => false,
						'lock'     => false,
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
		 * @return string           The formatted Popup Builder block or existing content.
		 */
		public function render_popup_builder_block( $attributes, $content, $block ) {
			if ( empty( $block->inner_blocks ) || empty( $attributes['variationSelected'] ) ) {
				return $content;
			}

			$inner_blocks_html = '';
			foreach ( $block->inner_blocks as $inner_block ) {
				$inner_blocks_html .= $inner_block->render();
			}

			$aria_label = ( 'popup' === $attributes['variantType'] ) ? __( 'Close Popup', 'ultimate-addons-for-gutenberg' ) : __( 'Close Info Bar', 'ultimate-addons-for-gutenberg' );

			ob_start();
			?>
				<div class="uagb-popup-builder__wrapper uagb-popup-builder__wrapper--<?php echo esc_attr( $attributes['variantType'] ); ?>">
					<div class="uagb-popup-builder__container uagb-popup-builder__container--<?php echo esc_attr( $attributes['variantType'] ); ?>">
						<?php echo wp_kses_post( $inner_blocks_html ); ?>
					</div>
					<?php if ( $attributes['isDismissable'] && $attributes['closeIcon'] ) : ?>
						<div class="uagb-popup-builder__close" aria-label="<?php echo esc_attr( $aria_label ); ?>">
							<?php UAGB_Helper::render_svg_html( $attributes['closeIcon'] ); ?>
						</div>
					<?php endif; ?>
				</div>
			<?php

			$output = ob_get_clean();
			if ( ! is_string( $output ) ) {
				return $content;
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
