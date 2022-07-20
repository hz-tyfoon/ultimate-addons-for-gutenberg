const addBlockEditorDynamicStyles = ( styleTagId, styling ) => {

	setTimeout( () => {

		addInlineStyle( styleTagId, styling, document );

		const iframe = document.getElementById( 'sepctra-frame' ).contentWindow;
		const iDocument = iframe.document;
		
		if( iDocument ) {

			const LazyEditorStylesContainer = document.getElementById( 'uagb-editor-styles' );
			const cloneLazEditorStyle = LazyEditorStylesContainer.cloneNode( true );

			const IframeLazyStyleContainer = iDocument.getElementById( 'uagb-editor-styles' );
			if( IframeLazyStyleContainer ) {
				IframeLazyStyleContainer.remove();
			}
			
			iDocument.head.appendChild( cloneLazEditorStyle );
			addInlineStyle( styleTagId, styling, iDocument );
		}
		
	} );
}

const addInlineStyle = ( styleTagId, styling, target ) => {

	// Static Editor CSS.

	const editorStaticCSSStylesTag = target.getElementById( 'uagb-editor-styles' );
	let cloneEditorStaticCSSStylesTag = false;

	if ( editorStaticCSSStylesTag ) {

		cloneEditorStaticCSSStylesTag = editorStaticCSSStylesTag.cloneNode( true );
	}

	// Dashicons Editor CSS.

	const editorDashiconsCSSStylesTag = target.getElementById( 'dashicons-css' );
	let cloneEditorDashiconsCSSStylesTag = false;

	if ( editorDashiconsCSSStylesTag ) {

		cloneEditorDashiconsCSSStylesTag = editorDashiconsCSSStylesTag.cloneNode( true );
	}

	// Dashicons Editor CSS Ends.

	// Static CSS.

	const staticCSSStylesTag = target.getElementById( 'uagb-block-css-css' );
	let cloneStaticCSSStylesTag = false;

	if ( staticCSSStylesTag ) {

		cloneStaticCSSStylesTag = staticCSSStylesTag.cloneNode( true );
	}

	// Static CSS Ends.

	// Slick CSS.
	const slickStaticCSSStylesTag = target.getElementById( 'uagb-slick-css-css' );
	let cloneSlickStaticCSSStylesTag = false;

	if ( slickStaticCSSStylesTag ) {

		cloneSlickStaticCSSStylesTag = slickStaticCSSStylesTag.cloneNode( true );
	}

	// Slick CSS Ends.

	// Block Editor Spacing CSS.
	const blockEditorSpacingCSSStylesTag = target.getElementById( 'uagb-blocks-editor-spacing-style' );
	let cloneBlockEditorSpacingCSSStylesTag = false;

	if ( blockEditorSpacingCSSStylesTag ) {

		cloneBlockEditorSpacingCSSStylesTag = blockEditorSpacingCSSStylesTag.cloneNode( true );
	}

	// Block Editor Spacing CSS Ends.

	// Desktop.
	const element = target.getElementById(
		styleTagId
	);

	if ( null === element || undefined === element ) {

		const $style = target.createElement( 'style' );
		$style.setAttribute(
			'id',
			styleTagId
		);
		$style.innerHTML = styling;
		target.head.appendChild( $style );
	}

	if ( null !== element && undefined !== element ) {
		element.innerHTML = styling;
	}
	// Desktop ends.

	// Tablet / Mobile Starts.
	const tabletPreview = document.getElementsByClassName( 'is-tablet-preview' );
	const mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );

	if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {

		const preview = tabletPreview[0] || mobilePreview[0];

		const iframe = preview.getElementsByTagName( 'iframe' )[0];
		const iframeDocument = iframe.contentWindow.document || iframe.contentDocument;

		// Static CSS.
		if ( cloneStaticCSSStylesTag ) {
			const iframeStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-block-css-css' );
			if ( ! iframeStaticCSSStylesTag ) {
				iframeDocument.head.appendChild( cloneStaticCSSStylesTag );
			}
		}

		// Static Editor CSS.
		if ( cloneEditorStaticCSSStylesTag ) {
			const iframeEditorStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-editor-styles' );
			if ( iframeEditorStaticCSSStylesTag ) {
				iframeDocument.head.removeChild( iframeEditorStaticCSSStylesTag );
			}
			iframeDocument.head.appendChild( cloneEditorStaticCSSStylesTag );
		}

		// Dashicons CSS.
		if ( cloneEditorDashiconsCSSStylesTag ) {
			const iframeEditorDashiconsCSSStylesTag = iframeDocument.getElementById( 'dashicons-css' );
			if ( iframeEditorDashiconsCSSStylesTag ) {
				iframeDocument.head.removeChild( iframeEditorDashiconsCSSStylesTag );
			}
			iframeDocument.head.appendChild( cloneEditorDashiconsCSSStylesTag );
		}

		// Slick CSS.
		if ( cloneSlickStaticCSSStylesTag ) {
			const iframeSlickStaticCSSStylesTag = iframeDocument.getElementById( 'uagb-slick-css-css' );
			if ( ! iframeSlickStaticCSSStylesTag ) {
				iframeDocument.head.appendChild( cloneSlickStaticCSSStylesTag );
			}
		}

		// Block Editor Spacing  CSS.
		if ( cloneBlockEditorSpacingCSSStylesTag ) {
			const iframeBlockEditorSpacingCSSStylesTag = iframeDocument.getElementById( 'uagb-blocks-editor-spacing-style' );
			if ( ! iframeBlockEditorSpacingCSSStylesTag ) {
				iframeDocument.head.appendChild( cloneBlockEditorSpacingCSSStylesTag );
			}
		}

		let iframeElement = iframeDocument.getElementById(
			styleTagId
		);

		if ( null === iframeElement || undefined === iframeElement ) {

			const $style = document.createElement( 'style' );
			$style.setAttribute(
				'id',
				styleTagId
			);

			// Dynamic CSS.
			iframeDocument.head.appendChild( $style );

		}

		iframeElement = iframeDocument.getElementById(
			styleTagId
		);

		if ( null !== iframeElement && undefined !== iframeElement ) {
			iframeElement.innerHTML = styling;
		}
	}

}
 
export default addBlockEditorDynamicStyles;
