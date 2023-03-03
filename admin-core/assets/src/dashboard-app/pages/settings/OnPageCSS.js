import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const OnPageCSS = () => {

    const dispatch = useDispatch();

    const enableOnPageCSS = useSelector( ( state ) => state.enableOnPageCSS );
    const enableOnPageCSSStatus = 'no' === enableOnPageCSS ? false : true;

    const inheritFromTheme = useSelector( ( state ) => state.btnInheritFromTheme );
    const enableInheritTheme = 'disabled' === inheritFromTheme ? false : true;

    const updateEnableOnPageCSSStatus = () => {

        let assetStatus;
		if ( enableOnPageCSS === 'no' ) {
            assetStatus = 'yes';
		} else {
            assetStatus = 'no';
		}

        dispatch( { type: 'UPDATE_ON_PAGE_CSS_BUTTON', payload: assetStatus } );

		const action = 'uag_enable_on_page_css_button',
			nonce = uag_react.enable_on_page_css_button_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };

    const updateEnableInheritFromTheme = () => {

        let assetStatus;
		if ( inheritFromTheme === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_BTN_INHERIT_FROM_THEME', payload: assetStatus } );

		const action = 'uag_btn_inherit_from_theme',
			nonce = uag_react.btn_inherit_from_theme_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', assetStatus );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };

    return (
        <>
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    { __( 'Custom CSS', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <Switch
                    checked={ enableOnPageCSSStatus }
                    onChange={ updateEnableOnPageCSSStatus }
                    className={ classNames(
                        enableOnPageCSSStatus ? 'bg-spectra' : 'bg-slate-200',
                        'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                    ) }
                >
                    <span
                        aria-hidden="true"
                        className={ classNames(
                            enableOnPageCSSStatus ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                        ) }
                    />
                </Switch>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'Enable the "Custom CSS" option if you want to add your own CSS code on post/page to customize the page as per your expectations.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
        <div className='mr-16 w-full flex items-center'>
            <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                { __( 'Button - Inherit From Theme', 'ultimate-addons-for-gutenberg' ) }
            </h3>
            <Switch
                checked={ enableInheritTheme }
                onChange={ updateEnableInheritFromTheme }
                className={ classNames(
                    enableInheritTheme ? 'bg-spectra' : 'bg-slate-200',
                    'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
                ) }
            >
                <span
                    aria-hidden="true"
                    className={ classNames(
                        enableInheritTheme ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    ) }
                />
            </Switch>
        </div>
        <p className="mt-2 w-9/12 text-sm text-slate-500">
            { __( 'Enable the "Custom CSS" option if you want to add your own CSS code on post/page to customize the page as per your expectations.', 'ultimate-addons-for-gutenberg' ) }
        </p>
    </section>
    </>
    );
};

export default OnPageCSS;
