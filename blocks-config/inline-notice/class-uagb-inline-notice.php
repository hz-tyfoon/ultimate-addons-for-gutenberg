<?php
/**
 * UAGB - Inline-Notice Block.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Inline_Notice' ) ) {

	/**
	 * Class UAGB_Inline_Notice.
	 *
	 * @since x.x.x
	 */
	class UAGB_Inline_Notice {

		/**
		 * Member Variable
		 *
		 * @var object
		 * @since x.x.x
		 */
		private static $instance = null;

		/**
		 * Initiator
		 *
		 * @since x.x.x
		 * @return object
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since x.x.x
		 */
		public function __construct() {

			// Activation hook.
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		/**
		 * Registers the `uagb/inline-notice` block on server.
		 *
		 * @since x.x.x
		 * @return void
		 */
		public function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			register_block_type(
				'uagb/inline-notice',
				array(
					'attributes'      => array_merge(
						array(
							'block_id'                   => array(
								'type' => 'string',
							),
							'noteTitle'                  => array(
								'type'    => 'string',
								'default' => __( 'Notice Title', 'ultimate-addons-for-gutenberg' ),
							),
							'headingTag'                 => array(
								'type'    => 'string',
								'default' => 'h4',
							),
							'noticeContent'              => array(
								'type'    => 'string',
								'default' => '',
							),
							'noticeDismiss'              => array(
								'type'    => 'string',
								'default' => '',
							),
							'cookies'                    => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'close_cookie_days'          => array(
								'type'    => 'number',
								'default' => 1,
							),
							'textColor'                  => array(
								'type'         => 'string',
								'default'      => '',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-color',
								),
							),
							'titleColor'                 => array(
								'type'         => 'string',
								'default'      => '',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-color',
								),
							),
							'noticeColor'                => array(
								'type'         => 'string',
								'default'      => '#FFD54F',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-border-color',
								),
							),
							'contentBgColor'             => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-bg-color',
								),
							),
							'noticeDismissColor'         => array(
								'type'         => 'string',
								'default'      => '',
								'UAGCopyPaste' => array(
									'styleType' => 'btn-color',
								),
							),
							'icon'                       => array(
								'type'    => 'string',
								'default' => 'rectangle-xmark',
							),
							'iconSize'                   => array(
								'type'         => 'number',
								'default'      => 16,
								'UAGCopyPaste' => array(
									'styleType' => 'btn-size',
								),
							),
							'iconSizeTab'                => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'btn-size-tablet',
								),
							),
							'iconSizeMob'                => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'btn-size-mobile',
								),
							),
							'iconSizeUnit'               => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'btn-size-unit',
								),
							),
							'noticeAlignment'            => array(
								'type'         => 'string',
								'default'      => 'left',
								'UAGCopyPaste' => array(
									'styleType' => 'btn-align',
								),
							),
							'titleFontFamily'            => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-family',
								),
								'default'      => 'Default',
							),
							'titleFontWeight'            => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-weight',
								),
							),
							'titleFontStyle'             => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-style',
								),
								'default'      => 'normal',
							),
							'titleTransform'             => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-transform',
								),
							),
							'titleDecoration'            => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-decoration',
								),
							),
							'titleFontSizeType'          => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-size-type',
								),
							),
							'titleLineHeightType'        => array(
								'type'         => 'string',
								'default'      => 'em',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-line-height-type',
								),
							),
							'titleFontSize'              => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-size',
								),
							),
							'titleFontSizeTablet'        => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-size-tablet',
								),
							),
							'titleFontSizeMobile'        => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-font-size-mobile',
								),
							),
							'titleLineHeight'            => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-line-height',
								),
							),
							'titleLineHeightTablet'      => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-line-height-tablet',
								),
							),
							'titleLineHeightMobile'      => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-line-height-mobile',
								),
							),
							'descFontFamily'             => array(
								'type'         => 'string',
								'default'      => 'Default',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-family',
								),
							),
							'descFontWeight'             => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-weight',
								),
							),
							'descFontStyle'              => array(
								'type'         => 'string',
								'default'      => 'normal',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-style',
								),
							),
							'descTransform'              => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-transform',
								),
							),
							'descDecoration'             => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-decoration',
								),
							),
							'descFontSize'               => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-size',
								),
							),
							'descFontSizeType'           => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-size-type',
								),
							),
							'descFontSizeTablet'         => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-size-tablet',
								),
							),
							'descFontSizeMobile'         => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-font-size-mobile',
								),
							),
							'descLineHeight'             => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-line-height',
								),
							),
							'descLineHeightType'         => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-line-height-type',
								),
								'default'      => 'em',
							),
							'descLineHeightTablet'       => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-line-height-tablet',
								),
							),
							'descLineHeightMobile'       => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-line-height-mobile',
								),
							),
							'titleLoadGoogleFonts'       => array(
								'type'         => 'boolean',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-load-google-fonts',
								),
								'default'      => false,
							),
							'descLoadGoogleFonts'        => array(
								'type'         => 'boolean',
								'default'      => false,
								'UAGCopyPaste' => array(
									'styleType' => 'desc-load-google-fonts',
								),
							),
							'titleLeftPadding'           => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-left-padding',
								),
							),
							'titleRightPadding'          => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-right-padding',
								),
							),
							'titleTopPadding'            => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-top-padding',
								),
							),
							'titleBottomPadding'         => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-bottom-padding',
								),
							),
							'titleLeftPaddingTablet'     => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-left-padding-tablet',
								),
							),
							'titleRightPaddingTablet'    => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-right-padding-tablet',
								),
							),
							'titleTopPaddingTablet'      => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-top-padding-tablet',
								),
							),
							'titleBottomPaddingTablet'   => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-bottom-padding-tablet',
								),
							),
							'titleLeftPaddingMobile'     => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-left-padding-mobile',
								),
							),
							'titleRightPaddingMobile'    => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-right-padding-mobile',
								),
							),
							'titleTopPaddingMobile'      => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-top-padding-mobile',
								),
							),
							'titleBottomPaddingMobile'   => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-bottom-padding-mobile',
								),
							),
							'titlePaddingUnit'           => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-padding-unit',
								),
							),
							'mobileTitlePaddingUnit'     => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-padding-unit-mobile',
								),
							),
							'tabletTitlePaddingUnit'     => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-padding-unit-tablet',
								),
							),
							'titlePaddingLink'           => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'layout'                     => array(
								'type'         => 'string',
								'default'      => 'modern',
								'UAGCopyPaste' => array(
									'styleType' => 'notice-layout',
								),
							),
							'highlightWidth'             => array(
								'type'         => 'number',
								'default'      => 10,
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-border-width',
								),
							),
							'highlightWidthTablet'       => array(
								'type'         => 'number',
								'default'      => 10,
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-border-width',
								),
							),
							'highlightWidthMobile'       => array(
								'type'         => 'number',
								'default'      => 10,
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-border-width',
								),
							),
							'contentLeftPadding'         => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-left-padding',
								),
							),
							'contentRightPadding'        => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-right-padding',
								),
							),
							'contentTopPadding'          => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-Top-padding',
								),
							),
							'contentBottomPadding'       => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-bottom-padding',
								),
							),
							'contentLeftPaddingTablet'   => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-left-padding-tablet',
								),
							),
							'contentRightPaddingTablet'  => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-right-padding-tablet',
								),
							),
							'contentTopPaddingTablet'    => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-Top-padding-tablet',
								),
							),
							'contentBottomPaddingTablet' => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-bottom-padding-tablet',
								),
							),
							'contentLeftPaddingMobile'   => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-left-padding-mobile',
								),
							),
							'contentRightPaddingMobile'  => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-right-padding-mobile',
								),
							),
							'contentTopPaddingMobile'    => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-Top-padding-mobile',
								),
							),
							'contentBottomPaddingMobile' => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-bottom-padding-mobile',
								),
							),
							'contentPaddingUnit'         => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-padding-unit',
								),
								'default'      => 'px',
							),
							'mobileContentPaddingUnit'   => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-padding-unit-mobile',
								),
								'default'      => 'px',
							),
							'tabletContentPaddingUnit'   => array(
								'type'         => 'string',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-padding-unit-tablet',
								),
								'default'      => 'px',
							),
							'contentPaddingLink'         => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'contentVrPadding'           => array(
								'type'         => 'number',
								'default'      => 15,
								'UAGCopyPaste' => array(
									'styleType' => 'desc-vertical-padding',
								),
							),
							'contentHrPadding'           => array(
								'type'         => 'number',
								'default'      => 15,
								'UAGCopyPaste' => array(
									'styleType' => 'desc-horizontal-padding',
								),
							),
							'titleVrPadding'             => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-vertical-padding',
								),
								'default'      => 15,
							),
							'titleHrPadding'             => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-horizontal-padding',
								),
								'default'      => 15,
							),
							'isPreview'                  => array(
								'type'    => 'boolean',
								'default' => false,
							),
							// letter spacing.
							'titleLetterSpacing'         => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-letter-spacing',
								),
							),
							'titleLetterSpacingTablet'   => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-letter-spacing-tablet',
								),
							),
							'titleLetterSpacingMobile'   => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-letter-spacing-mobile',
								),
							),
							'titleLetterSpacingType'     => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'main-title-letter-spacing-type',
								),
							),
							'descLetterSpacing'          => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-letter-spacing',
								),
							),
							'descLetterSpacingTablet'    => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-letter-spacing-tablet',
								),
							),
							'descLetterSpacingMobile'    => array(
								'type'         => 'number',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-letter-spacing-mobile',
								),
							),
							'descLetterSpacingType'      => array(
								'type'         => 'string',
								'default'      => 'px',
								'UAGCopyPaste' => array(
									'styleType' => 'desc-letter-spacing-type',
								),
							),
						)
					),
					'render_callback' => array( $this, 'render_html' ),
				)
			);
		}

		/**
		 * Render Inline notice HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since x.x.x
		 * @return string|false
		 */
		public function render_html( $attributes ) {

			$block_id        = $attributes['block_id'];
			$noticeDismiss   = $attributes['noticeDismiss'];
			$noticeAlignment = $attributes['noticeAlignment'];
			$headingTag      = $attributes['headingTag'];

			$active = '';
			if ( true === $attributes['cookies'] ) {
				$active = 'uagb-notice__active';
			}

			$desktop_class = '';
			$tab_class     = '';
			$mob_class     = '';

			if ( array_key_exists( 'UAGHideDesktop', $attributes ) || array_key_exists( 'UAGHideTab', $attributes ) || array_key_exists( 'UAGHideMob', $attributes ) ) {

				$desktop_class = ( isset( $attributes['UAGHideDesktop'] ) ) ? 'uag-hide-desktop' : '';

				$tab_class = ( isset( $attributes['UAGHideTab'] ) ) ? 'uag-hide-tab' : '';

				$mob_class = ( isset( $attributes['UAGHideMob'] ) ) ? 'uag-hide-mob' : '';
			}

			$main_classes = array(
				'wp-block-uagb-inline-notice',
				$noticeDismiss,
				'uagb-inline_notice__align-' . $noticeAlignment,
				'uagb-block-' . $block_id,
				$active,
				$desktop_class,
				$tab_class,
				$mob_class,
			);

			$title = __( 'Dismiss', 'ultimate-addons-for-gutenberg' );

			ob_start();

			?>
				<div class = "<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>" >
					<?php if ( $noticeDismiss ) { ?>
						<div role="tablist">
							<span role="tab" tabindex="0" title="<?php echo esc_attr( $title ); ?>"><?php UAGB_Helper::render_svg_html( $attributes['icon'] ); ?></span>
						</div>
					<?php } ?>
					<<?php echo esc_attr( $headingTag ); ?> class="uagb-notice-title"><?php echo esc_html( $attributes['noteTitle'] ); ?></<?php echo esc_attr( $headingTag ); ?>>
					<div class="uagb-notice-text"><?php echo esc_html( $attributes['noticeContent'] ); ?></div>
				</div>

			<?php
			return ob_get_clean();
		}
	}

	/**
	 *  Prepare if class 'UAGB_Inline_Notice' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Inline_Notice::get_instance();
}
