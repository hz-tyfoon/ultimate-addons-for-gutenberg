/**
 * The Admin Header Bar.
 */
import { __ } from '@wordpress/i18n';
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { specClassNames } from '@Scripts/Helpers';
import { SpecLogo } from '@Scripts/IconComponents';

const AdminHeader = ( props ) => {
	const {
		iconLogo = true,
		title = '',
		children,
	} = props;

	return (
		<Disclosure as='nav' className='bg-white shadow'>
			<div className='max-w-3xl mx-auto px-6 lg:max-w-7xl'>
				<div className='relative flex justify-between h-16'>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						{ iconLogo ? (
							<Link
								to={ {
									pathname: 'tools.php',
									search: `?page=${ spec_ai_react.page_slug }`,
								} }
								className='flex-shrink-0 flex items-center justify-start'
							>
								<div className='flex-shrink-0 flex items-center'>
									{ SpecLogo( {
										className: specClassNames( [
											'h-10',
											title && 'mr-6',
										] ),
									} ) }
									{ title && (
										<h1 className='h-6 pl-6 m-0 border-l border-l-slate-200 text-xl leading-6 font-semibold text-slate-800'>
											{ title }
										</h1>
									) }
								</div>
							</Link>
						) : null }
						{ children && (
							<div className='sm:ml-8 sm:flex sm:space-x-8'>
								{ children }
							</div>
						) }
					</div>
					<div className='absolute inset-y-0 right-0 flex items-center pr-2 gap-8 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
						<a
							className='text-base text-slate-500 focus:text-spec focus-visible:text-spec active:text-spec hover:text-spec transition-colors'
							href='https://wpspectra.com/docs/'
							target='_blank'
							rel='noreferrer'
						>
							{ __( 'Knowledge Base', 'ultimate-addons-for-gutenberg' ) }
						</a>
						<a
							className='text-base text-slate-400 focus:text-spec focus-visible:text-spec active:text-spec hover:text-spec transition-colors'
							href='https://wpspectra.com/support/'
							target='_blank'
							rel='noreferrer'
						>
							{ __( 'Support', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</div>
				</div>
			</div>
		</Disclosure>
	);
};

export default AdminHeader;
