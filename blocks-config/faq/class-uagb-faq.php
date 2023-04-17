<?php
/**
 * UAGB Faq
 * 
 * @package UAGB
 */

 if( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
 }

 if ( ! class_exists( 'UAGB_Faq' ) ) {

    /**
     * Class UAGB_Faq
     */
    class UAGB_Faq {


        /**
         * Member Variable
         * 
         * @since 
         * @var instance
         */
        private static $instance;


        /**
         * Initiator
         * 
         * @since 1.0.0
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
            add_action( 'init', array( $this, 'register_blocks' ) );
        }

        /**
         * Register the Faq block on server
         * 
         * @since 1.0.0
         */
        public function register_blocks() {
            // Check if the register function exists.
            if( ! function_exists( 'register_block_type' ) ) {
                    return;
                }

                register_block_type(
                    'uagb/faq',
                    array(
                        'supports' => array()
                    )
                )
        }
    }
 }