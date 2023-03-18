import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from '@headlessui/react'
import apiFetch from '@wordpress/api-fetch';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const inheritFromThemeRender = () => {

    const dispatch = useDispatch();

    const inheritFromTheme = useSelector( ( state ) => state.btnInheritFromTheme );
    const enableInheritTheme = 'disabled' === inheritFromTheme ? false : true;

    const updateEnableInheritFromTheme = () => {

        let status;
		if ( inheritFromTheme === 'disabled' ) {
            status = 'enabled';
		} else {
            status = 'disabled';
		}

        dispatch( { type: 'UPDATE_BTN_INHERIT_FROM_THEME', payload: status } );

		const action = 'uag_btn_inherit_from_theme',
			nonce = uag_react.btn_inherit_from_theme_nonce;

		const formData = new window.FormData();

		formData.append( 'action', action );
		formData.append( 'security', nonce );
		formData.append( 'value', status );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };

    return (
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
                { __( 'Enable the "Inherit From Theme" option if you want to apply theme button stylings to the Spectra buttons. It will get automatically enabled in every Spectra block which has button.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default inheritFromThemeRender;
