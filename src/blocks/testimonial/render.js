import classnames from 'classnames';
import PositionClasses from './classes';
import UAGB_Block_Icons from '@Controls/block-icons';
import React, { lazy, Suspense, useLayoutEffect, useRef } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TestimonialImage from './components/Image';
import AuthorName from './components/AuthorName';
import Company from './components/Company';
import Description from './components/Description';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Slider = lazy( () =>
	import(
		/* webpackChunkName: "chunks/testimonial/react-slick" */ 'react-slick'
	)
);
const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const blockName = props.name.replace( 'uagb/', '' );
	const { className, setAttributes, attributes } = props;

	// Setup the attributes.
	const {
		block_id,
		isPreview,
		test_block,
		imagePosition,
		columns,
		tcolumns,
		mcolumns,
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		autoplay,
		autoplaySpeed,
		arrowColor,
		equalHeight
	} = attributes;

	const sliderRef = useRef();

	const NextArrow = ( { onClick } ) => {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-next slick-arrow"
				aria-label="Next"
				tabIndex="0"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName ),
				} }
				onClick = { onClick }
			>
				{ UAGB_Block_Icons.carousel_right }
			</button>
		);
	};

	const PrevArrow = ( { onClick } ) => {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-prev slick-arrow"
				aria-label="Previous"
				tabIndex="0"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: getFallbackNumber( arrowBorderSize, 'arrowBorderSize', blockName ),
				} }
				onClick= { onClick }
			>
				{ UAGB_Block_Icons.carousel_left }
			</button>
		);
	};

	const dots =
		'dots' === arrowDots || 'arrows_dots' === arrowDots ? true : false;
	const arrows =
		'arrows' === arrowDots || 'arrows_dots' === arrowDots ? true : false;

		const equalHeightClass = equalHeight
		? 'uagb-post__carousel_equal-height'
		: '';

	const settings = {
		accessibility: false,
		slidesToShow: getFallbackNumber( columns, 'columns', blockName ),
		slidesToScroll: 1,
		autoplaySpeed: getFallbackNumber( autoplaySpeed, 'autoplaySpeed', blockName ),
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: getFallbackNumber( transitionSpeed, 'transitionSpeed', blockName ),
		arrows,
		dots,
		rtl: false,
		afterChange: () => {
			if ( equalHeight ) {
				uagb_carousel_height( block_id ); // eslint-disable-line no-undef
			}
		},
		draggable: false,
		nextArrow: <NextArrow arrowSize={ arrowSize } onClick={sliderRef.slickNext} />,
		prevArrow: <PrevArrow arrowSize={ arrowSize } onClick={sliderRef.slickPrev} />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: getFallbackNumber( tcolumns, 'tcolumns', blockName ),
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: getFallbackNumber( mcolumns, 'mcolumns', blockName ),
					slidesToScroll: 1,
				},
			},
		],
	};

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/testimonials.png`;

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				'uagb-slick-carousel uagb-tm__arrow-outside',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`${ equalHeightClass }`,
			) }
		>
			<Suspense fallback={ lazyLoader() }>
				<Slider
					className={ classnames(
						'is-carousel',
						`uagb-tm__columns-${ getFallbackNumber( columns, 'columns', blockName ) }`,
						'uagb-tm__items'
					) }
					{ ...settings }
					ref={ sliderRef }
				>
					{ test_block.map( ( test, index ) => (
						<div
							className={ classnames(
								'uagb-testimonial__wrap',
								...PositionClasses( attributes )
							) }
							key={ 'wrap-' + index }
						>
							<div
								className="uagb-tm__content"
								key={ 'tm_content-' + index }
							>
								<div className="uagb-tm__overlay"></div>
								{ ( imagePosition === 'top' ||
									imagePosition === 'left' ) && (
									<TestimonialImage
										attributes={ attributes }
										index_value={ index }
									/>
								) }

								<div className="uagb-tm__text-wrap">
									{
										// Get description.
										<>
											<Description
												attributes={ attributes }
												setAttributes={ setAttributes }
												props={ props }
												index_value={ index }
											/>
										</>
									}
									<div className="uagb-tm__meta-inner">
										{ imagePosition === 'bottom' && (
											<TestimonialImage
												attributes={ attributes }
												index_value={ index }
											/>
										) }

										{
											<>
												<div
													className="uagb-testimonial-details"
													key={ 'tm_wraps-' + index }
												>
													<AuthorName
														attributes={
															attributes
														}
														setAttributes={
															setAttributes
														}
														props={ props }
														index_value={ index }
													/>
													<Company
														attributes={
															attributes
														}
														setAttributes={
															setAttributes
														}
														props={ props }
														index_value={ index }
													/>
												</div>
											</>
										}
									</div>
								</div>
								{ imagePosition === 'right' && (
									<TestimonialImage
										attributes={ attributes }
										index_value={ index }
									/>
								) }
							</div>
						</div>
					) ) }
				</Slider>
			</Suspense>
		</div>
	);
};
export default React.memo( Render );
