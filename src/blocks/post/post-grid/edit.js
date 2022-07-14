
/**
 * BLOCK: Post Grid - Edit
 */
import styling from '.././styling';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/post-grid/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/post-grid/render" */ './render' )
);

import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Placeholder, Spinner } from '@wordpress/components';

const PostGridComponent = ( props ) => {

	const deviceType = useDeviceType();

	const initialState = {
		isEditing: false,
		innerBlocks: [],
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.
		const { block } = props;
		setStateValue( { innerBlocks: block } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const {
			btnVPadding,
			btnHPadding,
			paddingBtnTop,
			paddingBtnBottom,
			paddingBtnRight,
			paddingBtnLeft,
			contentPadding,
			contentPaddingMobile,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTopMobile,
			paddingRightMobile,
			paddingBottomMobile,
			paddingLeftMobile,
		} = props.attributes;

		if ( btnVPadding ) {
			if ( undefined === paddingBtnTop ) {
				props.setAttributes( { paddingBtnTop: btnVPadding } );
			}
			if ( undefined === paddingBtnBottom ) {
				props.setAttributes( { paddingBtnBottom: btnVPadding } );
			}
		}
		if ( btnHPadding ) {
			if ( undefined === paddingBtnRight ) {
				props.setAttributes( { paddingBtnRight: btnHPadding } );
			}
			if ( undefined === paddingBtnLeft ) {
				props.setAttributes( { paddingBtnLeft: btnHPadding } );
			}
		}
		if ( contentPadding ) {
			if ( undefined === paddingTop ) {
				props.setAttributes( { paddingTop: contentPadding } );
			}
			if ( undefined === paddingBottom ) {
				props.setAttributes( { paddingBottom: contentPadding } );
			}
			if ( undefined === paddingRight ) {
				props.setAttributes( { paddingRight: contentPadding } );
			}
			if ( undefined === paddingLeft ) {
				props.setAttributes( { paddingLeft: contentPadding } );
			}
		}

		if ( contentPaddingMobile ) {
			if ( undefined === paddingTopMobile ) {
				props.setAttributes( {
					paddingTopMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingBottomMobile ) {
				props.setAttributes( {
					paddingBottomMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingRightMobile ) {
				props.setAttributes( {
					paddingRightMobile: contentPaddingMobile,
				} );
			}
			if ( undefined === paddingLeftMobile ) {
				props.setAttributes( {
					paddingLeftMobile: contentPaddingMobile,
				} );
			}
		}
		const {
			borderStyle,
			borderWidth,
			borderRadius,
			borderColor,
			borderHColor,
			btnBorderTopWidth,
			btnBorderLeftWidth,
			btnBorderRightWidth,
			btnBorderBottomWidth,
			btnBorderTopLeftRadius,
			btnBorderTopRightRadius,
			btnBorderBottomLeftRadius,
			btnBorderBottomRightRadius,
			btnBorderColor,
			btnBorderHColor,
			btnBorderStyle,
		} = props.attributes;

		if( borderWidth ){
			if( undefined === btnBorderTopWidth ) {
				props.setAttributes( {
					btnBorderTopWidth: borderWidth,
				} );
			}
			if( undefined === btnBorderLeftWidth ) {
				props.setAttributes( { btnBorderLeftWidth : borderWidth} );
			}
			if( undefined === btnBorderRightWidth ) {
				props.setAttributes( { btnBorderRightWidth : borderWidth} );
			}
			if( undefined === btnBorderBottomWidth ) {
				props.setAttributes( { btnBorderBottomWidth : borderWidth} );
			}
		}

		if( borderRadius ){

			if( undefined === btnBorderTopLeftRadius ) {
				props.setAttributes( { btnBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderTopRightRadius ) {
				props.setAttributes( { btnBorderTopRightRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomLeftRadius ) {
				props.setAttributes( { btnBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === btnBorderBottomRightRadius ) {
				props.setAttributes( { btnBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === btnBorderColor ) {
				props.setAttributes( { btnBorderColor : borderColor} );
			}
		}

		if( borderHColor ){
			if( undefined === btnBorderHColor ) {
				props.setAttributes( { btnBorderHColor : borderHColor} );
			}
		}

		if( borderStyle ){
			if( undefined === btnBorderStyle ) {
				props.setAttributes( { btnBorderStyle : borderStyle} );
			}
		}
	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-grid-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-post-grid-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ deviceType ] );

	const togglePreview = () => {
		setStateValue( { isEditing: ! state.isEditing } );
		if ( ! state.isEditing ) {
			__( 'Showing All Post Grid Layout.' );
		}
	};

	const { attributes, latestPosts } = props;

	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

	// Caching all attributes.
	const { postDisplaytext } = attributes;

	if ( ! hasPosts ) {
		return (
			<>
				<Suspense fallback={ lazyLoader() }>
					<Settings
						parentProps={ props }
						state={ state }
						setStateValue={ setStateValue }
					/>
				</Suspense>

				<Placeholder
					icon="admin-post"
					label={ uagb_blocks_info.blocks[ 'uagb/post-grid' ].title }
				>
					{ ! Array.isArray( latestPosts ) ? (
						<Spinner />
					) : (
						postDisplaytext
					) }
				</Placeholder>
			</>
		);
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings
				parentProps={ props }
				state={ state }
				setStateValue={ setStateValue }
				togglePreview={ togglePreview }
			/>
			<Render
				parentProps={ props }
				state={ state }
				setStateValue={ setStateValue }
				togglePreview={ togglePreview }
			/>
		</Suspense>
	);
};

export default compose(
	withSelect( ( select, props ) => {
		const {
			blockName,
			categories,
			postsToShow,
			order,
			orderBy,
			postType,
			postsOffset,
			taxonomyType,
			paginationMarkup,
			postPagination,
			excludeCurrentPost,
		} = props.attributes;
		const { setAttributes } = props;
		const { getEntityRecords } = select( 'core' );
		const allTaxonomy = uagb_blocks_info.all_taxonomy;
		const currentTax = allTaxonomy[ postType ];
		let categoriesList = [];
		let rest_base = '';

		if ( true === postPagination && 'empty' === paginationMarkup ) {
			const formData = new window.FormData();

			formData.append( 'action', 'uagb_post_pagination' );
			formData.append(
				'nonce',
				uagb_blocks_info.uagb_ajax_nonce
			);
			formData.append( 'attributes', JSON.stringify( props.attributes ) );

			apiFetch( {
				url: uagb_blocks_info.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				setAttributes( { paginationMarkup: data.data } );
			} );
		}
		if ( 'undefined' !== typeof currentTax ) {
			if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
				rest_base =
					currentTax.taxonomy[ taxonomyType ].rest_base === false ||
					currentTax.taxonomy[ taxonomyType ].rest_base === null
						? currentTax.taxonomy[ taxonomyType ].name
						: currentTax.taxonomy[ taxonomyType ].rest_base;
			}
			if ( '' !== taxonomyType ) {
				if (
					'undefined' !== typeof currentTax.terms &&
					'undefined' !== typeof currentTax.terms[ taxonomyType ]
				) {
					categoriesList = currentTax.terms[ taxonomyType ];
				}
			}
		}
		const latestPostsQuery = {
			order,
			orderby: orderBy,
			per_page: getFallbackNumber( postsToShow, 'postsToShow', blockName ),
			offset: getFallbackNumber( postsOffset, 'postsOffset', blockName ),
		};
		if ( excludeCurrentPost ) {
			latestPostsQuery.exclude = select(
				'core/editor'
			).getCurrentPostId();
		}
		const category = [];
		const temp = parseInt( categories );
		category.push( temp );
		const catlenght = categoriesList.length;
		for ( let i = 0; i < catlenght; i++ ) {
			if ( categoriesList[ i ].id === temp ) {
				if ( categoriesList[ i ].child.length !== 0 ) {
					categoriesList[ i ].child.forEach( ( element ) => {
						category.push( element );
					} );
				}
			}
		}
		if ( undefined !== categories && '' !== categories ) {
			latestPostsQuery[ rest_base ] =
				undefined === categories || '' === categories
					? categories
					: category;
		}
		const { getBlocks } = select( 'core/block-editor' );
		return {
			latestPosts: getEntityRecords(
				'postType',
				postType,
				latestPostsQuery
			),
			categoriesList,
			taxonomyList:
				'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
			block: getBlocks( props.clientId ),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
		return {
			replaceInnerBlocks,
		};
	} )
)( PostGridComponent );

