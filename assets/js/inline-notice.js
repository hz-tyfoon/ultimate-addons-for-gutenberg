// eslint-disable-next-line no-undef
UAGBInlineNotice = {
	init( attr, id ) {
		const main = document.querySelectorAll( id );

		if ( main.length === 0 ) {
			return;
		}

		const uniqueId = attr.c_id;
		const isCookie = attr.cookies;
		const cookiesDays = attr.close_cookie_days;
		const currentCookie = Cookies.get( 'uagb-notice-' + uniqueId );

		for ( const mainWrap of main ) {
			if ( 'undefined' === typeof currentCookie && true === isCookie ) {
				mainWrap.style.display = 'block';
			}
			const noticeDismissClass = mainWrap.querySelector( '.uagb-notice-dismiss' );
			const closeBtn = noticeDismissClass ? noticeDismissClass : mainWrap.querySelector( 'div[role="tablist"] svg' );
			
			if ( '' !== attr.noticeDismiss && '' !== attr.icon ) {
				closeBtn.addEventListener( 'click', function ( e ) {
					dismissClick( isCookie, currentCookie, uniqueId, cookiesDays, e, main );	
				} );
				document.addEventListener( 'keydown', function ( e ) {
					if ( e.keyCode === 13 || e.keyCode === 32 ) {
						dismissClick( isCookie, currentCookie, uniqueId, cookiesDays, e, main );
					}
				} );
			}
		}
	},
};

function dismissClick( isCookie, currentCookie, uniqueId, cookiesDays, e, main ) { 
	if ( true === isCookie && 'undefined' === typeof currentCookie ) {
		Cookies.set( 'uagb-notice-' + uniqueId, true, { expires: cookiesDays } );
	} 
	const parent = e.currentTarget?.closest( '.wp-block-uagb-inline-notice' );
	main[0]?.classList?.add( 'uagb-notice__active' );
	parent.style.display = 'none';
}