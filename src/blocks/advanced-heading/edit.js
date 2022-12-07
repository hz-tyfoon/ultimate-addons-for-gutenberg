/**
 * BLOCK: Advanced Heading
 */
import styling from './styling';
import React, {    useEffect } from 'react';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

//  Import CSS.
import './style.scss';

const UAGBAdvancedHeading = ( props ) => {
	const deviceType = useDeviceType();
	
	const { 
		UAGHideDesktop, 
		UAGHideTab, 
		UAGHideMob,
		globalBlockStyleId,
		globalBlockStyleName
	} = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {

		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } )

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {

		const uagLocalStorage = getUAGEditorStateLocalStorage();

        let spectraGlobalStylesStoreObject = JSON.parse(uagLocalStorage.getItem( 'spectraGlobalStyles' )) || [];

        spectraGlobalStylesStoreObject.map( ( style ) => {

            if ( style?.value == globalBlockStyleId && style?.label === globalBlockStyleName ) {
                addBlockEditorDynamicStyles( 'uagb-global-block-style-' + globalBlockStyleId, style?.styles );
                
            }

            return style;

        } );

	}, [globalBlockStyleId, globalBlockStyleName] );

	return (
		<>

						<>
			<Settings parentProps={ props } styling={styling} />
			<Render parentProps={ props } />
			</>

		</>
	);
};
export default UAGBAdvancedHeading;
