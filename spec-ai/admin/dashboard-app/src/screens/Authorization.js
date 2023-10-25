import { __ } from '@wordpress/i18n';
import {
	SpecLogo,
	WandIcon,
	ClipboardIcon,
	SmileyIcon,
	TranslateIcon,
	CodeBlockIcon,
	SparklyGearIcon,
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
	const specAuthURL = `${ spec_ai_react.spec_auth_middleware }?redirect_url=${ spec_ai_react.admin_url }?nonce=${ spec_ai_react.spec_auth_nonce }&scs-authorize=true`;
	
	// Function: Authorize Spec.
	const authorizeSpec = ( event ) => {
		event.preventDefault();
		window.location.assign( specAuthURL );
	};

	// Mini-Render: The Button Group.
	const renderButtonGroup = () => (
		<div className='flex flex-col items-center gap-4'>
			<button
				className='flex items-center justify-center gap-4 px-28 py-4 rounded text-base text-white bg-spec hover:bg-spec-hover focus-visible:bg-spec-hover transition-colors'
				onClick={ authorizeSpec }
			>
				{ __( 'Get Started Now', 'ultimate-addons-for-gutenberg' ) }
				<span>{ '→' }</span>
			</button>
			<a href={ spec_ai_react?.admin_url } className='text-sm underline text-slate-500'>
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
			{ SpecLogo( { width: 56, height: 56, color: 'black', } ) }
			{/* The Info-box Section */}
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
	);

	// Render: The Details Section.
	const renderDetailsSection = () => (
		<section className='grid grid-cols-2 gap-6 w-full px-12 py-10 bg-violet-50'>
			{ renderInfoCard( {
				icon: WandIcon,
				title: __( 'AI-Powered Content Creation', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Create text content that sounds like you within seconds. From website content, blog posts, product descriptions and more.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: ClipboardIcon,
				title: __( 'Spelling & Grammar Correction', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Not sure your grammar is correct? Not to worry. Let Spec help you make simple to complex grammar and spelling corrections', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: SmileyIcon,
				title: __( 'Adjust Content Tones', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Create content that sounds just like you. Simply highlight any text, and let Spec help you adjust the tone.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: TranslateIcon,
				title: __( 'Language Translations', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Language is no more a barrier. Select any text and translate to any language directly inside Spec.', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: CodeBlockIcon,
				title: __( 'Instant Code Generation', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Generate custom CSS codes, shortcodes and HTML directly inside Spec to create any effect or function you desire', 'ultimate-addons-for-gutenberg' ),
			} ) }
			{ renderInfoCard( {
				icon: SparklyGearIcon,
				title: __( 'AI-Guided WordPress Settings', 'ultimate-addons-for-gutenberg' ),
				description: __( 'Not a WordPress expert? Let Spec AI help you manage WordPress settings and optimize your site effortlessly', 'ultimate-addons-for-gutenberg' ),
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
