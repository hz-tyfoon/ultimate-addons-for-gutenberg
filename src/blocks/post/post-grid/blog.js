import classnames from 'classnames';
import {
	InnerBlockLayoutContextProvider,
	renderPostLayout,
} from '.././function';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { useRef, useEffect } from 'react';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

const Blog = ( props ) => {
	const blockName = props.name.replace( 'uagb/', '' );
	const article = useRef();
	const { attributes, className, latestPosts, block_id } = props;
	const deviceType = useDeviceType();
	const {
		isPreview,
		columns,
		tcolumns,
		mcolumns,
		imgPosition,
		postsToShow,
		equalHeight,
		paginationMarkup,
		postPagination,
		layoutConfig,
		rowGap
	} = attributes;

	const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', blockName );
	const columnsFallback = getFallbackNumber( columns, 'columns', blockName );
	const tcolumnsFallback = getFallbackNumber( tcolumns, 'tcolumns', blockName );
	const mcolumnsFallback = getFallbackNumber( mcolumns, 'mcolumns', blockName );
	const rowGapFallback = getFallbackNumber( rowGap, 'rowGap', blockName );

	const updateImageBgWidth = () => {

		setTimeout( () => {

			if( article?.current ){
				const articleWidth  = article?.current?.offsetWidth;
				const imageWidth = 100 - ( rowGapFallback / articleWidth ) * 100;
				const parent = article?.current?.parentNode;
				if ( 'background' === attributes.imgPosition && parent && parent.classList.contains( 'uagb-post__image-position-background' ) ) {
					const images = parent?.getElementsByClassName( 'uagb-post__image' );

					for( const image of images ) {
						if ( image ) {
							image.style.width = imageWidth + '%';
							image.style.marginLeft = rowGapFallback / 2 + 'px';

						}
					}
				}
				if ( 'top' === attributes.imgPosition ){
					const images = parent?.getElementsByClassName( 'uagb-post__image' );
					for( const image of images ) {
						if ( image ) {
							image.style.width = null;
							image.style.marginLeft = null;

						}
					}

				}
			}

		}, 100 )
	};

    useEffect( () => {
		updateImageBgWidth();
    }, [article] );

	useEffect( () => {
		updateImageBgWidth();
    }, [imgPosition] );

	const equalHeightClass = equalHeight ? 'uagb-post__equal-height' : '';
	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > postsToShowFallback
			? latestPosts.slice( 0, postsToShowFallback )
			: latestPosts;
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/post-grid.png`;
	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				'is-grid',
				`uagb-post__columns-${ columnsFallback }`,
				`uagb-post__columns-tablet-${ tcolumnsFallback }`,
				`uagb-post__columns-mobile-${ mcolumnsFallback }`,
				'uagb-post__items',
				`${ equalHeightClass }`,
				className,
				'uagb-post-grid',
				`uagb-post__image-position-${ imgPosition }`,
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ block_id }`
			) }
		>
			<InnerBlockLayoutContextProvider
				parentName="uagb/post-grid"
				parentClassName="uagb-block-grid"
			>
				{ displayPosts.map( ( post = {}, i ) => (
					<article ref={article} key={ i } className="uagb-post__inner-wrap">
						{ renderPostLayout(
							'uagb/post-grid',
							post,
							layoutConfig,
							props.attributes,
							props.categoriesList,
							article
						) }
					</article>
				) ) }
			</InnerBlockLayoutContextProvider>
			{ postPagination === true && 'empty' !== paginationMarkup && (
				<div
					dangerouslySetInnerHTML={ { __html: paginationMarkup } }
					className="uagb-post-pagination-wrap"
				></div>
			) }
		</div>
	);
};
export default React.memo( Blog );
