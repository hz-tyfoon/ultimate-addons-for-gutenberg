/**
 * The Authorization Page.
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	ZipWPLogo,
	WandIcon,
	BlocksIcon,
	WordPressLogo,
	LayoutIcon,
	CodeBlockIcon,
	PageIcon,
} from '@Scripts/IconComponents';
import {
	SpectraLogo,
	AstraLogo,
	CartFlowsLogo,
	StarterTemplatesLogo,
	PrestoPlayerLogo,
	ProjectHuddleLogo,
} from '@DashboardApp/common/components/ProductLogos';

const Authorization = () => {
	const zipAiAuthURL = `${ zip_ai_react.zip_ai_auth_middleware }?redirect_url=${ zip_ai_react.admin_url }?nonce=${ zip_ai_react.zip_ai_auth_nonce }&scs-authorize=true`;
	
	// Function: Authorize Zip AI.
	const authorizeZipAI = ( event ) => {
		event.preventDefault();
		window.location.assign( zipAiAuthURL );
	};

	// Mini-Render: The Button Group.
	const renderButtonGroup = () => (
		<div className='flex flex-col items-center gap-4'>
			<button
				className='flex items-center justify-center gap-4 px-28 py-4 rounded text-base text-white bg-spec hover:bg-spec-hover focus-visible:bg-spec-hover transition-colors'
				onClick={ authorizeZipAI }
			>
				{ __( 'Get Started Now', 'ultimate-addons-for-gutenberg' ) }
				<span>{ '→' }</span>
			</button>
			<a href={ zip_ai_react?.admin_url } className='text-sm underline text-slate-500'>
				{ __( 'Go back to the dashboard', 'ultimate-addons-for-gutenberg' ) }
			</a>
		</div>
	);

	// Mini-Render: The Info Card.
	const renderInfoCard = ( cardDetails ) => (
		<div className='flex gap-3'>
			<div className='w-7 text-slate-900'>
				{ cardDetails?.icon( { width: 28, height: 28 } ) }
			</div>
			<div className='flex flex-col gap-2'>
				<h2 className='text-base leading-7 font-semibold text-slate-900'>
					{ cardDetails?.title }
				</h2>
				<p className='text-sm font-normal text-slate-500'>
					{ cardDetails?.description }
				</p>
			</div>
		</div>
	);

	// Render: The Header Section.
	const renderHeaderSection = () => (
		<section className='flex flex-col items-center gap-8 w-full px-12 py-10'>
			{ ZipWPLogo( { width: 56, height: 56, color: '#ff580e', } ) }
			{/* The Info-box Section */}
			<section className='flex flex-col items-center gap-6'>
				<h1 className='text-2xl leading-7 font-bold text-center text-slate-900'>
					{ __( 'Welcome to the Zip AI Setup Wizard!', 'ultimate-addons-for-gutenberg' ) }
				</h1>
				<p className='text-sm font-normal text-center text-slate-500'>
					{ __( 'Zip AI is your WordPress assistant, accessible right within your backend. Create persuasive content, generate custom code, and get answers to your WordPress queries in seconds. The possibilities are endless!', 'ultimate-addons-for-gutenberg' ) }
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
	);

	// Render: The Details Section.
	const renderDetailsSection = () => (
		<section className='grid grid-cols-2 gap-6 w-full px-12 py-10 bg-violet-50'>
			{ renderInfoCard( {
				icon: WandIcon,
				title: __( 'Craft Compelling Content', 'ultimate-addons-for-gutenberg' ),
				description: __( 'With Zip, you can effortlessly create persuasive, engaging copy that resonates with your audience.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: BlocksIcon,
				title: __( 'AI-Powered Block Patterns', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Zip can personalize and customize the block patterns and section templates tailored to your website\'s unique needs.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: WordPressLogo,
				title: __( 'WordPress Wizardry', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Got questions? Zip has the answers. Whether it\'s troubleshooting, or customizing your site, Zip has your back.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: LayoutIcon,
				title: __( 'Personalized Templates', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Say goodbye to generic designs and say hello to Zip\'s personalized page templates, tailored just for you.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: CodeBlockIcon,
				title: __( 'Generate Custom Code', 'ultimate-addons-for-gutenberg' ),
				description: __( 'No more struggling with complex coding issues. Zip can whip up custom code, functions, and CSS tailored to your needs.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: PageIcon,
				title: __( 'Custom Pages with AI', 'ultimate-addons-for-gutenberg' ),
				description: sprintf(
					/* translators: %s: Percentage Ascii Code */
					__( 'With Zip AI by your side, you can create beautiful, 100%s custom web pages without the need for any design or coding skills.', 'ultimate-addons-for-gutenberg' ),
					'%',
				),
			} ) }
		</section>
	);

	// Render: The Products Section.
	const renderProductsSection = () => (
		<section className='flex flex-col items-center gap-12 w-full px-12 py-10'>
			<h2 className='text-2xl leading-6 font-bold text-center text-slate-900'>
				{ __( 'From the Team Behind Some Iconic WordPress Products', 'ultimate-addons-for-gutenberg' ) }
			</h2>
			<div className='grid grid-cols-3 items-center gap-16 w-full text-slate-700 opacity-50'>
				<div className='flex justify-end'>{ AstraLogo }</div>
				<div className='flex justify-center'>{ CartFlowsLogo }</div>
				<div className='flex justify-start'>{ StarterTemplatesLogo }</div>
				<div className='flex justify-end'>{ PrestoPlayerLogo }</div>
				<div className='flex justify-center'>{ ProjectHuddleLogo }</div>
				<div className='flex justify-start'>{ SpectraLogo }</div>
			</div>
			{ renderButtonGroup() }
		</section>
	);

	return (
		<main className='flex items-center justify-center w-full min-h-screen p-16 bg-slate-50'>
			{/* The Centered Box */}
			<article className='flex flex-col items-center justify-center w-full max-w-3xl p-0 rounded bg-white shadow-overlay'>
				{ renderHeaderSection() }
				{ renderDetailsSection() }
				{ renderProductsSection() }
			</article>
		</main>
	);
};

export default Authorization;
