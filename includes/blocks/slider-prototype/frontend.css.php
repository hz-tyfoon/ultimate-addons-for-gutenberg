<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.3.0
 *
 * @package uagb
 */

$selectors = array(
	' [class*="spectra-glide__slide--"]' => array(
		// 'height'              => '500px',
		'background-size'     => 'cover',
		'background-position' => 'center',
		'border-radius'       => '16px',
		'aspect-ratio'        => '756/425',
	),
	' .spectra-glide__slide--1' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster1.jpg")',
	),
	' .spectra-glide__slide--2' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster2.jpg")',
	),
	' .spectra-glide__slide--3' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster3.jpg")',
	),
	' .spectra-glide__slide--4' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster4.jpg")',
	),
	' .spectra-glide__slide--5' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster5.jpg")',
	),
	' .spectra-glide__slide--6' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster6.jpg")',
	),
	' .spectra-glide__slide--7' => array(
		'background-image' => 'url("https://spectra.test/wp-content/uploads/2023/07/poster7.jpg")',
	),
	' .glide__slide--active' => array(
		// 'min-width' => '80vw',
	),
);

$t_selectors = array();
$m_selectors = array();

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.spectra-glide' );
