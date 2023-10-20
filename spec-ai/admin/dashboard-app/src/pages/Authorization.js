import { __ } from '@wordpress/i18n';
import {
	SpecLogo,
	WandIcon,
} from '@Scripts/icon-components';

const Authorization = () => {

	// Function to render the button group.
	const renderButtonGroup = () => (
		<div className='flex flex-col items-center gap-4'>
			<button className='flex items-center justify-center gap-4 px-28 py-4 rounded text-base text-white bg-spec hover:bg-spec-hover focus-visible:bg-spec-hover transition-colors'>
				{ __( 'Get Started Now', 'ultimate-addons-for-gutenberg' ) }
				<span>{ '→' }</span>
			</button>
			<a href={ spec_ai_react?.admin_url } className='text-sm underline text-slate-500'>
				{ __( 'Go back to the dashboard', 'ultimate-addons-for-gutenberg' ) }
			</a>
		</div>
	);

	// Function to render the info card.
	const renderInfoCard = () => (
		<></>
	);

	return (
		<main className='flex items-center justify-center w-full min-h-screen p-16 bg-slate-50'>
			{/* The Centered Box */}
			<article className='flex flex-col items-center justify-center w-full max-w-3xl p-0 rounded bg-white shadow-overlay'>
				{/* The Header Section */}
				<section className='flex flex-col items-center gap-8 w-full px-12 py-10'>
					{ SpecLogo( { width: 56, height: 56 } ) }
					{/* The CTA Section */}
					<section className='flex flex-col items-center gap-6'>
						<h1 className='text-2xl leading-7 font-bold text-center text-slate-900'>
							{ __( 'Welcome to the Spec AI Setup Wizard!', 'ultimate-addons-for-gutenberg' ) }
						</h1>
						<p className='text-sm font-normal text-center text-slate-500'>
							{ __( 'Spec is here to save your day, now you can say goodbye to writers\' block, blank screen anxiety and Lorem Ipsum. With the power of AI in your fingertips, you can save development time, deliver projects faster and satisfy your clients.', 'ultimate-addons-for-gutenberg' ) }
						</p>
						{ renderButtonGroup() }
						{/* The botton padding for this iFrame wrapper is at a 16:9 ratio */}
						<div className='relative pb-[56.25%] h-0 w-full'>
							<iframe
								className='absolute top-0 left-0 w-full h-full rounded'
								src={ `https://www.youtube-nocookie.com/embed/GLNzTxArR6Y?showinfo=0&autoplay=0&mute=0&rel=0&privacy=1` }
								allow='autoplay'
								title='YouTube video player'
								frameBorder='0'
								allowFullScreen
							/>
						</div>
					</section>
				</section>
				{/* The Details Section */}
				<section className='grid grid-cols-2 w-full px-12 py-10 bg-violet-50'>
					{ renderInfoCard( {
						icon: WandIcon,
						title: __( 'AI-Powered Content Creation', 'ultimate-addons-for-gutenberg' ),
						description: __( 'Create text content that sounds like you within seconds. From website content, blog posts, product descriptions and more.', 'ultimate-addons-for-gutenberg' ),
					} ) }
				</section>
			</article>
		</main>
	);
};

export default Authorization;
