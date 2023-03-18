/**
 * External dependencies
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import getGBSEditorStyles from '@Controls/getGBSEditorStyles';
import { STORE_NAME as storeName } from '@Store/constants';
import { withSelect, useSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBTaxonomyList = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			postType,
			taxonomyType,
			showEmptyTaxonomy,
			listInJson,
			borderStyle,
			borderThickness,
			borderRadius,
			borderColor,
			borderHoverColor,
			overallBorderTopWidth,
			overallBorderLeftWidth,
			overallBorderRightWidth,
			overallBorderBottomWidth,
			overallBorderTopLeftRadius,
			overallBorderTopRightRadius,
			overallBorderBottomLeftRadius,
			overallBorderBottomRightRadius,
			overallBorderColor,
			overallBorderHColor,
			overallBorderStyle,
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			globalBlockStyleId
		},
		setAttributes,
		clientId,
		editorStyles
	} = props;
	
	let categoriesList = [];

	const {
		taxonomyList,
		termsList,
	} = useSelect(
		( select ) => { // eslint-disable-line  no-unused-vars
			const allTaxonomy = ( null !== listInJson ) ? listInJson.data : '';
			const currentTax = ( '' !== allTaxonomy ) ? allTaxonomy[ postType ] : 'undefined';

			const listToShowTaxonomy = showEmptyTaxonomy
				? 'with_empty_taxonomy'
				: 'without_empty_taxonomy';

			if ( 'undefined' !== typeof currentTax ) {
				if (
					'undefined' !== typeof currentTax[ listToShowTaxonomy ] &&
					'undefined' !==
						typeof currentTax[ listToShowTaxonomy ][ taxonomyType ]
				) {
					categoriesList = currentTax[ listToShowTaxonomy ][ taxonomyType ];
				}
			}

			return {
				categoriesList,
				taxonomyList:
					'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
				termsList: 'undefined' !== typeof currentTax ? currentTax.terms : [],
			};
		},
	);

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		const formData = new window.FormData();

		formData.append( 'action', 'uagb_get_taxonomy' );
		formData.append(
			'nonce',
			uagb_blocks_info.uagb_ajax_nonce
		);
		apiFetch( {
			url: uagb_blocks_info.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setAttributes( { listInJson: data } );
		} );

		if( borderThickness ){
			if( undefined === overallBorderTopWidth ) {
				setAttributes( {
					overallBorderTopWidth: borderThickness,
				} );
			}
			if( undefined === overallBorderLeftWidth ) {
				setAttributes( { overallBorderLeftWidth : borderThickness} );
			}
			if( undefined === overallBorderRightWidth ) {
				setAttributes( { overallBorderRightWidth : borderThickness} );
			}
			if( undefined === overallBorderBottomWidth ) {
				setAttributes( { overallBorderBottomWidth : borderThickness} );
			}
		}

		if( borderRadius ){

			if( undefined === overallBorderTopLeftRadius ) {
				setAttributes( { overallBorderTopLeftRadius : borderRadius} );
			}
			if( undefined === overallBorderTopRightRadius ) {
				setAttributes( { overallBorderTopRightRadius : borderRadius} );
			}
			if( undefined === overallBorderBottomLeftRadius ) {
				setAttributes( { overallBorderBottomLeftRadius : borderRadius} );
			}
			if( undefined === overallBorderBottomRightRadius ) {
				setAttributes( { overallBorderBottomRightRadius : borderRadius} );
			}
		}

		if( borderColor ){
			if( undefined === overallBorderColor ) {
				setAttributes( { overallBorderColor : borderColor} );
			}
		}

		if( borderHoverColor ){
			if( undefined === overallBorderHColor ) {
				setAttributes( { overallBorderHColor : borderHoverColor} );
			}
		}

		if( borderStyle ){
			if( undefined === overallBorderStyle ) {
				setAttributes( { overallBorderStyle : borderStyle} );
			}
		}
		
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-taxonomy-list-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType  ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {
		addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, editorStyles );
	}, [editorStyles, deviceType] );

	return (
		<>
			{ isSelected && (
				<Settings
					parentProps={ props }
					taxonomyList={ taxonomyList }
					termsList={ termsList }
					styling={styling}
				/>
			) }
			<Render parentProps={ props } categoriesList={ categoriesList } />
		</>
	);
};

export default compose(
	withSelect( ( select, props ) => {

		const globalBlockStyles = select( storeName ).getGlobalBlockStyles();
		const { 
			globalBlockStyleId,
			globalBlockStyleName
		} = props.attributes;

		const editorStyles = getGBSEditorStyles( globalBlockStyles,globalBlockStyleId,globalBlockStyleName );

		return {
			editorStyles,
		};	
	} )
)( UAGBTaxonomyList );
