import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

const Navigation = () => {

	// Set the menu items.
	const menus = [
		{
			name: __( 'Welcome', 'ultimate-addons-for-gutenberg' ),
			slug: spec_ai_react.page_slug,
			path: '',
		},
		{
			name: __( 'Settings', 'ultimate-addons-for-gutenberg' ),
			slug: spec_ai_react.page_slug,
			path: 'settings',
		},
	];

	// Get the current page and path.
	const query = new URLSearchParams( useLocation()?.search );
	const activePage = query.get( 'page' )
		? query.get( 'page' )
		: spec_ai_react.page_slug;
	const activePath = query.get( 'path' ) ? query.get( 'path' ) : '';

	// Render the menu.
	return (
		<>
			{ menus.map( ( menu, key ) => (
				<Link
					index={ key }
					key={ `?page=${ menu.slug }&path=${ menu.path }` }
					to={ {
						pathname: 'admin.php',
						search: `?page=${ menu.slug }${
							'' !== menu.path ? '&path=' + menu.path : ''
						}`,
					} }
					className={ `${
						activePage === menu.slug && activePath === menu.path
							? 'border-spec text-spec active:text-spec focus:text-spec focus-visible:text-spec-hover hover:text-spec-hover inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium'
							: 'border-transparent text-slate-500 active:text-spec focus-visible:border-slate-300 focus-visible:text-slate-800 hover:border-slate-300 hover:text-slate-800 inline-flex items-center px-1 border-b-2 text-[0.940rem] font-medium'
					}` }
				>
					{ menu.name }
				</Link>
			) ) }
		</>
	)
};

export default Navigation;