/**
 * BLOCK: UAGB Review Block.
 */

import styling from './styling';
import SchemaNotices from './schema-notices';
import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { withState, compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/review/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/review/render" */ './render' )
);
let prevState;

const ReviewComponent = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( {
			schema: JSON.stringify( props.schemaJsonData ),
		} );

		prevState = props.schemaJsonData;
		const { attributes, setAttributes } = props;
		const {
			contentVrPadding,
			contentHrPadding,
			topPadding,
			bottomPadding,
			rightPadding,
			leftPadding,
		} = attributes;

		if ( contentVrPadding ) {
			if ( undefined === topPadding ) {
				setAttributes( { topPadding: contentVrPadding } );
			}
			if ( undefined === bottomPadding ) {
				setAttributes( { bottomPadding: contentVrPadding } );
			}
		}

		if ( contentHrPadding ) {
			if ( undefined === rightPadding ) {
				setAttributes( { rightPadding: contentHrPadding } );
			}
			if ( undefined === leftPadding ) {
				setAttributes( { leftPadding: contentHrPadding } );
			}
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		if (
			JSON.stringify( props.schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			props.setAttributes( {
				schema: JSON.stringify( props.schemaJsonData ),
			} );

			prevState = props.schemaJsonData;
		}

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-ratings-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		const ratingLinkWrapper = document.querySelector( '.uagb-rating-link-wrapper' );
		if( ratingLinkWrapper !== null ){
			ratingLinkWrapper.addEventListener( 'click', function ( event ) {
				event.preventDefault();
			} );
		}
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-ratings-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	// Setup the attributes
	const { attributes, setAttributes } = props;

	const {
		block_id,
		enableSchema,
		itemType,
		items,
		parts,
		starCount,
		sku,
		identifier,
		offerType,
		offerCurrency,
		offerPrice,
		offerExpiry,
		datepublish,
		ctaLink,
		brand,
		rTitle,
		rContent,
		rAuthor,
		mainimage,
		showFeature,
		showAuthor,
		enableDescription,
		enableImage,
		isbn,
		bookAuthorName,
		reviewPublisher,
		provider,
		appCategory,
		operatingSystem,
		datecreated,
		directorname,
		isPreview,
	} = attributes;

	if ( block_id === '' ) {
		setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} );
	}

	if (
		items &&
		items !== JSON.stringify( parts ) &&
		parts.length === 1 &&
		parts[ 0 ].label === '' &&
		parts[ 0 ].value === 0
	) {
		setAttributes( {
			parts: JSON.parse( items ),
			items: '[{"label":"","value":0}]',
		} );
	}

		const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/review.png`;

	return (
		isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
			<SchemaNotices
				enableSchema={ enableSchema }
				itemType={ itemType }
				rTitle={ rTitle }
				enableDescription={ enableDescription }
				rContent={ rContent }
				enableImage={ enableImage }
				mainimage={ mainimage }
				sku={ sku }
				brand={ brand }
				starCount={ starCount }
				showAuthor={ showAuthor }
				rAuthor={ rAuthor }
				showfeature={ showFeature }
				offerType={ offerType }
				datepublish={ datepublish }
				offerCurrency={ offerCurrency }
				offerPrice={ offerPrice }
				ctaLink={ ctaLink }
				offerExpiry={ offerExpiry }
				identifier={ identifier }
				isbn={ isbn }
				bookAuthorName={ bookAuthorName }
				directorname={ directorname }
				datecreated={ datecreated }
				provider={ provider }
				appCategory={ appCategory }
				operatingSystem={ operatingSystem }
				reviewPublisher={ reviewPublisher }
			/>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

compose( [
	withState( { editable: '', editedStar: 0 } ),
	withSelect( ( select, ownProps ) => {
		const { getBlock } =
			select( 'core/block-editor' ) || select( 'core/editor' );

		return {
			block: getBlock( ownProps.clientId ),
			getBlock,
		};
	} ),
] );

export default compose(
	withSelect( ( ownProps ) => {

		const newAverage =
			ownProps.attributes?.parts
				.map( ( i ) => i.value )
				.reduce( ( total, v ) => total + v ) /
			ownProps.attributes?.parts.length;
		let itemtype = '';

		if (
			[ 'Product', 'SoftwareApplication', 'Book' ].includes(
				ownProps.attributes?.itemType
			)
		) {
			itemtype =
				ownProps.attributes.itemSubtype !== 'None' &&
				ownProps.attributes.itemSubtype !== ''
					? ownProps.attributes.itemSubtype
					: ownProps.attributes.itemType;
		} else {
			itemtype = ownProps.attributes?.itemType;
		}

		const jsonData = {
			'@context': 'https://schema.org/',
			'@type': 'Review',
			'reviewBody': ownProps.attributes?.summaryDescription,
			'description': ownProps.attributes?.rContent,
			'itemReviewed': [],
			'reviewRating': {
				'@type': 'Rating',
				'ratingValue': newAverage,
				'worstRating': '0',
				'bestRating': ownProps.attributes?.starCount,
			},
			'author': {
				'@type': 'Person',
				'name': ownProps.attributes?.rAuthor,
			},
			'publisher': ownProps.attributes?.reviewPublisher,
			'datePublished': ownProps.attributes?.datepublish,
			'url': ownProps.attributes?.ctaLink,
		};

		switch ( ownProps.attributes?.itemType ) {
			case 'Book':
				jsonData.itemReviewed = {
					'@type': itemtype,
					'name': ownProps.attributes?.rTitle,
					'description': ownProps.attributes?.rContent,
					'image': [],
					'author': ownProps.attributes?.rAuthor,
					'isbn': ownProps.attributes?.isbn,
				};
				break;

			case 'Course':
				jsonData.itemReviewed = {
					'@type': ownProps.attributes?.itemType,
					'name': ownProps.attributes?.rTitle,
					'description': ownProps.attributes?.rContent,
					'image': [],
					'provider': ownProps.attributes?.provider,
				};
				break;

			case 'Product':
				jsonData.itemReviewed = {
					'@type': itemtype,
					'name': ownProps.attributes?.rTitle,
					'description': ownProps.attributes?.rContent,
					'image': [],
					'sku': ownProps.attributes?.sku,
					'brand': {
						'@type': 'Brand',
						'name': ownProps.attributes?.brand,
					},
					'offers': [],
				};
				break;

			case 'Movie':
				jsonData.itemReviewed = {
					'@type': ownProps.attributes?.itemType,
					'name': ownProps.attributes?.rTitle,
					'dateCreated': ownProps.attributes?.datecreated,
					'director': {
						'@type': 'Person',
						'name': ownProps.attributes?.directorname,
					},
				};
				break;

			case 'SoftwareApplication':
				jsonData.itemReviewed = {
					'@type': itemtype,
					'name': ownProps.attributes?.rTitle,
					'applicationCategory': ownProps.attributes?.appCategory,
					'operatingSystem': ownProps.attributes?.operatingSystem,
					'offers': {
						'@type': ownProps.attributes?.offerType,
						'price': ownProps.attributes?.offerPrice,
						'url': ownProps.attributes?.ctaLink,
						'priceCurrency': ownProps.attributes?.offerCurrency,
					},
				};
				break;

			default:
				break;
		}

		if ( ownProps.attributes?.mainimage ) {
			jsonData.itemReviewed.image = ownProps.attributes.mainimage.url;
		}

		if ( ownProps.attributes?.itemType === 'Product' ) {
			jsonData.itemReviewed[ ownProps.attributes.identifierType ] =
				ownProps.attributes.identifier;
			jsonData.itemReviewed.offers = {
				'@type': ownProps.attributes.offerType,
				'price': ownProps.attributes.offerPrice,
				'url': ownProps.attributes.ctaLink,
				'priceValidUntil': ownProps.attributes.offerExpiry,
				'priceCurrency': ownProps.attributes.offerCurrency,
				'availability': ownProps.attributes.offerStatus,
			};
		}

		return {
			schemaJsonData: jsonData,
		};
	} )
)( ReviewComponent );
