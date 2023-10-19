import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import UAGB_Block_Icons from '@Common/block-icons';
import { useEffect } from 'react';
import { uagbClassNames } from '@Helpers/Helpers';

import getApiData from '@Controls/getApiData';

const AiExtension = () => {
	
	// Constants to identify the user's license status.
	const isPro = uag_react?.spectra_pro_status;
	const isAuthorized = uag_react?.is_spec_authorized;
	const isFreeOrAuthorized = ! isPro || isAuthorized;

    const enableAiExtension = useSelector( ( state ) => state.enableAiExtension );
    const dispatch = useDispatch();

    const aiStatus = ( ! isAuthorized || 'disabled' === enableAiExtension ) ? false : true;

    useEffect( () => {

        // Create an object with the security and enableAiExtension properties
        const data = {
            security: uag_react.enable_ai_nonce,
            value: enableAiExtension,
        };

        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_enable_ai',
            data,
        } );

        // Wait for the API call to complete, but perform no actions after it finishes
        getApiFetchData.then( () => {} );

    }, [enableAiExtension] );

	// OnChange function for the switch.
    const AiStatus = () => {

        let assetStatus;
		if ( enableAiExtension === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( {type: 'UPDATE_ENABLE_AI_EXTENSION', payload: assetStatus } );
		dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );

    };

	// The Spec AI Assistant Card.
    const SpecExtensionCard = () => (
        <div
			key={'ai'}
			className={ uagbClassNames( [
				( aiStatus && isPro && isAuthorized )
					? 'border-white bg-white shadow hover:shadow-hover hover:z-50'
					: 'border-slate-200 spectra-disabled-icon',
				'box-border relative border rounded-md h-20 p-4 flex items-center gap-x-4 snap-start transition spectra-icon-transition',
			] ) }
        >
            <div className='flex-shrink-0'>
                { UAGB_Block_Icons.spec }
            </div>
            <div className='uagb-admin-block__extension-title flex-1 min-w-0'>
                <p className='text-base font-medium text-slate-800'>
                    { __( 'Spec - AI Assistant', 'ultimate-addons-for-gutenberg' ) }
                    <div className='inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-400 text-slate-500 rounded spectra-admin__block-label'>
                        { __( 'Extension', 'ultimate-addons-for-gutenberg' ) }
                    </div>
                    { isPro && (
                        <div className='inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label'>
                            { __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
                        </div>
                    ) }
                </p>
				{/* TODO: Documentation link needs to be updated once available */}
				{/* <a className='focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate' href='https://wpspectra.com/docs/how-to-use-ai/' target='_blank'rel='noreferrer'>
					{ __( 'Documentation', 'ultimate-addons-for-gutenberg' ) }
				</a> */}
				<span className={ uagbClassNames( [
					isFreeOrAuthorized ? 'text-slate-400' : 'text-red-400',
					'text-sm truncate',
				] ) }>
					{ isFreeOrAuthorized ? __( 'Currently in beta', 'ultimate-addons-for-gutenberg' ) : __( 'Authorize to Use', 'ultimate-addons-for-gutenberg' ) }
				</span>
            </div>
            { isPro ? (
				<>
					<Switch
						checked={ aiStatus }
						onChange={ AiStatus }
						className={ uagbClassNames( [
							aiStatus ? 'bg-spectra' : 'bg-slate-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none disabled:pointer-events-none',
						] ) }
						disabled={ ! isAuthorized }
					>
						<span
							aria-hidden='true'
							className={ uagbClassNames( [
								aiStatus ? 'translate-x-5' : 'translate-x-0',
								'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
							] ) }
						/>
					</Switch>
				</>
            ) : (
				<div className='inline-block align-text-bottom max-h-4 px-1.5 py-[3px] ml-1.5 text-[10px] leading-[10px] border border-slate-800 bg-slate-800 text-white rounded spectra-admin__block-label'>
					{ __( 'Pro', 'ultimate-addons-for-gutenberg' ) }
				</div>              
            ) }
        </div>
    );

	return ( isFreeOrAuthorized ) ? <SpecExtensionCard /> : (
		<a href={ `https://store.brainstormforce.com/auth/?redirect_url=${ uag_react.admin_url }?nonce=${ uag_react.spec_auth_nonce }&scs-authorize=true` }>
			<SpecExtensionCard />
		</a>
	);
};

export default AiExtension;
