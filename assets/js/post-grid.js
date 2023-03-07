window.UAGBPostGrid = {
	_init( $attr, $selector ) {
	let $scope = document.querySelector( $selector );
		if( undefined !== $scope && 'normal' !== $attr.paginationType ){
			if ( $scope.querySelector( '.uagb-post-pagination-wrap .page-numbers' ) ){


				element = $scope.querySelector( '.uagb-post-grid .uagb-post-pagination-wrap .page-numbers' );
				var page_number = 1;
				var curr = parseInt( $scope.querySelector( '.page-numbers.current' ).innerText );
				if ( $scope.querySelector( '.page-numbers.next' ) ) {
					page_number = curr + 1;
				} else if ( $scope.querySelector( '.page-numbers.prev' ) ) {
					page_number = curr - 1;
				} else {
					page_number = $scope.querySelector( 'a.page-numbers' ).innerText;
				}

				els = $scope.querySelector( '.uagb-post-pagination-wrap' ).getElementsByTagName('a'); //.setAttribute('data-href',uagb_data.ajax_url))
				for(var i = 0, l = els.length; i < l; i++) {
					var el = els[i];
					el.href = '#';
					el.setAttribute('data-href',uagb_data.ajax_url);
					// console.log(el);
					el.onclick = function(e) {
						alert("button was clicked");
						e.preventDefault();
						e.target.href = '#';

						const total = $scope.getAttribute( 'data-total' );

						const PostData = new FormData(); // eslint-disable-line no-undef
						PostData.append( 'action', 'uagb_grid_get_post' );
						PostData.append( 'nonce', uagb_data.uagb_grid_ajax_nonce );
						PostData.append( 'page_number', page_number );
						PostData.append( 'attr', JSON.stringify( $attr ) );

						fetch( uagb_data.ajax_url, { // eslint-disable-line no-undef
							method: 'POST',
							credentials: 'same-origin',
							body: PostData,
						} )
						.then( ( resp ) => resp.json() )
						.then( function( data ) {

							// console.log( data.data.html );
							// $scope.querySelector( '.uagb-post-pagination-wrap' ).innerHTML = data.data.pagination;
							// $scope.innerHTML = data.data.html;
							$scope.innerHTML = '<span class="uagb-post-pagination-wrap">'+ data.data.pagination +'</span>';
						})
						.catch( function( error ) {
							console.log(error)
							console.log( JSON.stringify( error ) ); // eslint-disable-line no-console
						} );
					}
				}
				//   console.log(document.querySelector('a.page-numbers'))

				// console.log(document.body.querySelector( 'a.page-numbers' ));
				// $scope.querySelector( 'a.page-numbers' ).addEventListener('click', function(e){
				// 	e.preventDefault();
				// 	e.target.href = '#';

				// 	const total = $scope.getAttribute( 'data-total' );

				// 	const PostData = new FormData(); // eslint-disable-line no-undef
				// 	PostData.append( 'action', 'uagb_grid_get_post' );
				// 	PostData.append( 'nonce', uagb_data.uagb_grid_ajax_nonce );
				// 	PostData.append( 'page_number', page_number );
				// 	PostData.append( 'attr', JSON.stringify( $attr ) );

				// 	fetch( uagb_data.ajax_url, { // eslint-disable-line no-undef
				// 		method: 'POST',
				// 		credentials: 'same-origin',
				// 		body: PostData,
				// 	} )
				// 	.then( ( resp ) => resp.json() )
				// 	.then( function( data ) {

				// 		console.log( data.data.html );
				// 		// $scope.querySelector( '.uagb-post-pagination-wrap' ).innerHTML = data.data.pagination;
				// 		$scope.innerHTML = data.data.html;
				// 		// $scope.innerHTML += '<span class="uagb-post-pagination-wrap">'+ data.data.pagination +'</span>';
				// 	})
				// 	.catch( function( error ) {
				// 		console.log(error)
				// 		console.log( JSON.stringify( error ) ); // eslint-disable-line no-console
				// 	} );
				// });
				// element.onclick = function (e) {
				// 			const total = $scope.getAttribute( 'data-total' );
				// 			// const $args = {
				// 			// 	total,
				// 			// 	page_number
				// 			// };
				// 			console.log(page_number)
				// 			const PostData = new FormData(); // eslint-disable-line no-undef
				// 			// console.log(uagb_data.uagb_grid_ajax_nonce)
				// 			PostData.append( 'action', 'uagb_grid_get_post' );
				// 			PostData.append( 'nonce', uagb_data.uagb_grid_ajax_nonce );
				// 			PostData.append( 'page_number', page_number );
				// 			PostData.append( 'attr', JSON.stringify( $attr ) );

				// 			fetch( uagb_data.ajax_url, { // eslint-disable-line no-undef
				// 				method: 'POST',
				// 				credentials: 'same-origin',
				// 				body: PostData,
				// 			} )
				// 			.then( ( resp ) => resp.json() )
				// 			.then( function( data ) {
				// 				// var sel = $scope.querySelector( '.wp-block-uagb-post-grid' );
				// 				// console.log( $scope );
				// 				// console.log(data.data.html)

				// 				// $scope.querySelector( '.uagb-post-pagination-wrap' ).innerHTML = data.data.pagination;
				// 				$scope.innerHTML = data.data.html;
				// 				$scope.innerHTML += '<span class="uagb-post-pagination-wrap">'+ data.data.pagination +'</span>';
				// 				// console.log( $scope.getAttribute( 'data-total' ) );
				// 				// alert($scope);
				// 			})
				// 			.catch( function( error ) {
				// 				console.log(error)
				// 				console.log( JSON.stringify( error ) ); // eslint-disable-line no-console
				// 			} );
				// 		};
						// console.log($scope.querySelector( '.uagb-post-pagination-wrap .page-numbers' ).onclick);
						// $scope.querySelector( '.page-numbers' ).onclick = function () {

						// }

			}
		}
	}
}
