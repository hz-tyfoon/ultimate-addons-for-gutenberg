
let loadStatus = true;

window.UAGBPostCarousel = {
	_setHeight( scope ) {

		if( scope.length > 0 ){
			const postWrapper = scope[0].querySelectorAll( '.slick-slide' ),
			postActive = scope[0].querySelectorAll( '.slick-slide.slick-active' );
			let	maxHeight = -1,
				wrapperHeight = -1,
				postActiveHeight = -1;
			Object.keys( postActive ).forEach( ( key ) => {
				const thisHeight = postActive[key].offsetHeight,
				blogPost = postActive[key].querySelector( '.uagb-post__inner-wrap' ),
				blogPostHeight = blogPost?.offsetHeight;

				if ( maxHeight < blogPostHeight ) {
					maxHeight = blogPostHeight;
					postActiveHeight = maxHeight + 15;
				}

				if ( wrapperHeight < thisHeight ) {
					wrapperHeight = thisHeight;
				}
			} );

			Object.keys( postActive ).forEach( ( key ) => {
				const selector =  postActive[key].querySelector( '.uagb-post__inner-wrap' );
				if( selector ){
					selector.style.height = maxHeight + 'px';
				}
			} );

			let selector = scope[0].querySelector( '.slick-list' );
			if( selector ){
				selector.style.height = postActiveHeight + 'px';
			}
			maxHeight = -1;
			wrapperHeight = -1;
			Object.keys( postWrapper ).forEach( ( key ) => {
				const $this = postWrapper[key];
				if ( $this.classList.contains( 'slick-active' ) ) {
					return true;
				}

				selector = $this.querySelector( '.uagb-post__inner-wrap' );
				const blogPostHeight = selector?.offsetHeight;
				if( blogPostHeight ){
					selector.style.height = blogPostHeight + 'px';
				}

			} );
		}

	},
	_unSetHeight( scope ) {
		if( scope.length > 0 ){
		const postWrapper = scope[0].querySelectorAll( '.slick-slide' ),
			postActive = scope[0].querySelectorAll( '.slick-slide.slick-active' );

			Object.keys( postActive ).forEach( ( key ) => {
				const selector = postActive[key].querySelector( '.uagb-post__inner-wrap' );
				selector.style.height = 'auto';
			} );

			Object.keys( postActive ).forEach( ( key ) => {
				const $this = postWrapper[key];
				if ( $this.classList.contains( 'slick-active' ) ) {
					return true;
				}
				const  selector = $this.querySelector( '.uagb-post__inner-wrap' );
				selector.style.height = 'auto';
			} );
		}
	},
}

window.UAGBPostMasonry = {
	_init( $attr, $selector ) {
		let count = 2;
		const windowHeight50 = window.innerHeight / 1.25;
		let $scope = document.querySelector( $selector );
		const loader = $scope.querySelectorAll( '.uagb-post-inf-loader' )
		if ( 'none' !== $attr.paginationType && 'scroll' === $attr.paginationEventType ) {

			window.addEventListener( 'scroll', function() {

				let postItems = $scope.querySelector( '.uagb-post__items' );

				if ( ! postItems ) {
					postItems = $scope
				}

				const boundingClientRect = postItems.lastElementChild.getBoundingClientRect();

				const offsetTop = boundingClientRect.top + window.scrollY;

				if ( window.pageYOffset + windowHeight50 >= offsetTop ) {
					const $args = {
						page_number: count,
					};
					const total = $scope.getAttribute( 'data-total' );
					if ( true === loadStatus ) {
						if ( count <= total ) {
							if ( loader.length > 0 ){
								loader[0].style.display='none';
							}
							window.UAGBPostMasonry._callAjax(
								$scope,
								$args,
								$attr,
								loader,
								false,
								count
							);
							count++;
							loadStatus = false;
						}
					}
				}
			} );
		}

		if ( 'button' === $attr.paginationEventType ) {

			if( $scope.querySelector( '.uagb-post-pagination-button' ) ){

				$scope.style.marginBottom ='40px';

				$scope.querySelector( '.uagb-post-pagination-button' ).onclick = function () {

					$scope = this.closest( '.uagb-post-grid' );
					const total = $scope.getAttribute( 'data-total' );
					const $args = {
						total,
						page_number: count,
					};
					$scope.querySelector( '.uagb-post__load-more-wrap' ).style.display='none';
					if ( true === loadStatus ) {
						if ( count <= total ) {
							if ( loader.length > 0 ){
								loader[0].style.display='none';
							}
							$scope.querySelector( '.uagb-post__load-more-wrap' ).style.display='block';
							window.UAGBPostMasonry._callAjax(
								$scope,
								$args,
								$attr,
								loader,
								true,
								count
							);
							count++;
							loadStatus = false;
						}
					}
				};
			}
		}
	},
	createElementFromHTML( htmlString ) {
		const HTMLElement = document.createElement( 'div' );
		HTMLElement.innerHTML = htmlString.trim();

		// Change this to div.childNodes to support multiple top-level nodes
		return HTMLElement;
	},
	_callAjax( $scope, $obj, $attr, loader, append = false, count ) {

		const PostData = new FormData(); // eslint-disable-line no-undef

		PostData.append( 'action', 'uagb_get_posts' );
		PostData.append( 'nonce', uagb_data.uagb_masonry_ajax_nonce );
		PostData.append( 'page_number', $obj.page_number );
		PostData.append( 'attr', JSON.stringify( $attr ) );

		fetch( uagb_data.ajax_url, { // eslint-disable-line no-undef
			method: 'POST',
			credentials: 'same-origin',
			body: PostData,
		  } )
		  .then( ( resp ) => resp.json() )
		  .then( function( data ) {

				let element = $scope.querySelector( '.is-masonry' );

				if ( ! element ) {
					element = $scope;
				}

				const isotope = new Isotope( element, { // eslint-disable-line no-undef
					itemSelector: 'article',
				} );

				isotope.insert( window.UAGBPostMasonry.createElementFromHTML( data.data ) )
				loadStatus = true;

				if ( loader.length > 0 ){
					loader[0].style.display='none';
				}

				if ( true === append ) {
					$scope.querySelector( '.uagb-post__load-more-wrap' ).style.display='block';
				}

				if ( count === parseInt( $obj.total ) ) {
					$scope.querySelector( '.uagb-post__load-more-wrap' ).style.display='none';
				}
				// This CSS is for Post BG Image Spacing
				const articles = document.querySelectorAll( '.uagb-post__image-position-background .uagb-post__inner-wrap' );

				for( const article of articles ) {

					const articleWidth = article.offsetWidth;
					const rowGap = $attr.rowGap;
					const imageWidth = 100 - ( rowGap / articleWidth ) * 100;
					const image = article.getElementsByClassName( 'uagb-post__image' );
					if ( image[0] ) {
						image[0].style.width = imageWidth + '%';
						image[0].style.marginLeft = rowGap / 2 + 'px';

					}

				}
		  } )
		  .catch( function( error ) {
			console.log( JSON.stringify( error ) ); // eslint-disable-line no-console
		  } );
	}
};

// window.UAGBPostMasonry = {
// 	_init( $attr, $selector ) {
// 		let $scope = document.querySelector( $selector );
// console.log($scope);
// 		if( $scope.length > 0 ){

// 		}
		// $( 'body' ).on( 'click', '.uagb-post-pagination-wrap .page-numbers', function( e ) {

		// 	$scope = $( this ).closest( '.elementor-widget-uael-posts' );
		// 	var elementSettings = getWidgetSettings( $scope );
		// 	var found = Object.keys(elementSettings).filter(function(key) {
		// 	  return elementSettings[key] === 'ajax';
		// 	});
		// 	if (!found.length) {
		// 		   return;
		// 	}

		// 	var post_grid = $scope.find( '.uael-post-grid' );
		// 	if ( 'main' == post_grid.data( 'query-type' ) ) {
		// 		return;
		// 	}

		// 	e.preventDefault();

		// 	$scope.find( '.uael-post-grid .uael-post-wrapper' ).last().after( '<div class="uael-post-loader"><div class="uael-loader"></div><div class="uael-loader-overlay"></div></div>' );

		// 	var page_number = 1;
		// 	var curr = parseInt( $scope.find( '.uagb-post-pagination-wrap .page-numbers.current' ).html() );
		// 	var $this = $( this );
		// 	if ( $this.hasClass( 'next' ) ) {
		// 		page_number = curr + 1;
		// 	} else if ( $this.hasClass( 'prev' ) ) {
		// 		page_number = curr - 1;
		// 	} else {
		// 		page_number = $this.html();
		// 	}

		// 	$scope.find( '.uael-post-grid .uael-post-wrapper' ).last().after( '<div class="uael-post-loader"><div class="uael-loader"></div><div class="uael-loader-overlay"></div></div>' );

		// 	var $args = {
		// 		'page_id' : post_grid.data('page'),
		// 		'widget_id' : $scope.data( 'id' ),
		// 		'filter' : $scope.find( '.uael-filter__current' ).data( 'filter' ),
		// 		'skin' : post_grid.data( 'skin' ),
		// 		'page_number' : page_number
		// 	};

		// 	var offset_top = post_grid.data( 'offset-top' );
		// 	if( '' != post_grid.data('filter-default') ){
		// 		offset_top = $scope.find('.uael-post__header-filters').outerHeight() + parseFloat( $scope.find( '.uael-post__header .uael-post__header-filters-wrap').css( 'marginBottom' ));
		// 	}

		// 	$('html, body').animate({
		// 		scrollTop: ( ( $scope.find( '.uael-post__body' ).offset().top ) - offset_top )
		// 	}, 'slow');

		// 	_callAjax( $scope, $args );

		// } );
// 	},


// }

// Set Carousel Height for Customiser.
function uagb_carousel_height( id ) { // eslint-disable-line no-unused-vars
	const wrap = document.querySelector( '#wpwrap .is-carousel.uagb-block-' + id );
	if( wrap ){
		window.UAGBPostCarousel._setHeight( wrap );
	}
}

// Unset Carousel Height for Customiser.
function uagb_carousel_unset_height( id ) { // eslint-disable-line no-unused-vars
	const wrap = document.querySelector( '#wpwrap .is-carousel.uagb-block-' + id );
	if( wrap ){
		window.UAGBPostCarousel._unSetHeight( wrap );
	}
}
