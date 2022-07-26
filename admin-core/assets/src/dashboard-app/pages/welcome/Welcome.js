import { __ } from '@wordpress/i18n';
import { useLocation } from 'react-router-dom';

const Welcome = () => {

  const query = new URLSearchParams( useLocation()?.search );

  const allowAutoPlay = '1' === query.get( 'spectra-activation-redirect' ) ? 1 : 0;

  const onCreateNewPageClick = () => {
		window.open(
			uag_react.wp_pages_url,
			'_blank'
		);
	};

  const onReadFullGuideClick = () => {
		window.open(
			'https://ultimategutenberg.com',
			'_blank'
		);
	};

  return(
      <main className="py-[2.43rem]">
        <div className="max-w-3xl mx-auto px-6 lg:max-w-7xl">
          <h1 className="sr-only">Page title</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-[2.6rem]">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full">
              <section aria-labelledby="section-1-title h-full">
                <h2 className="sr-only" id="section-1-title">
                  Section title
                </h2>
                <div className="rounded-[0.2rem] bg-white overflow-hidden shadow flex flex-col justify-center h-full">
                  <div className="p-12 pt-[2.2rem]">
                        <h2 className='text-[1.8rem] leading-[2.4rem] pb-3 font-medium text-left'>{__( 'Welcome to Spectra!', 'ultimate-addons-for-gutenberg' )}</h2>
						<p className='pb-7'>{__( 'We designed Spectra to be intuitive but we do recommend learning how it works by checking our comprehensive documentation and watching the video below. Enjoy your time with Spectra!', 'ultimate-addons-for-gutenberg' )}</p>
						<div className="mr-[80px] spectra-video-container">
              {/* Added rel=0 query paramter at the end to disable YouTube recommendations */}
							<iframe className="spectra-video" src={`https://www.youtube.com/embed/5Llg8huGs74?showinfo=0&autoplay=${allowAutoPlay}&mute=${allowAutoPlay}&rel=0`} allow="autoplay" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
						</div>
						<span className="relative z-0 inline-flex rounded-[0.2rem] pt-6 justify-start w-full">
                          <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-[0.2rem] shadow-sm text-white bg-wpcolor focus:bg-wphovercolor hover:bg-wphovercolor focus:outline-none mr-4"
                              onClick={ onCreateNewPageClick }
                          >
                              {__( 'Create New Page', 'ultimate-addons-for-gutenberg' )}

                          </button>
                          <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-[0.2rem] text-gray-700 bg-white focus:bg-gray-50 hover:bg-gray-50 focus:outline-none"
                              onClick={ onReadFullGuideClick }
                          >
                              {__( 'Read Full Guide', 'ultimate-addons-for-gutenberg' )}

                          </button>
                      </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="flex h-full flex-col justify-between">
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-[0.2rem] bg-white overflow-hidden shadow">
                  <div className="p-7">
                    <h3 className='text-xl leading-[2.47rem] font-medium pb-2'>
                      { __(
                        'Knowledge Base',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </h3>
                    <p className='text-sm pb-2 pr-2'>
                      { __(
                        'Learn everything you need to know about the Spectra plugin with our comprehensive documentation.',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </p>
                    <a className='text-base text-wpcolor focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor underline' href='https://ultimategutenberg.com/docs/' target='_blank' rel="noreferrer">
                      { __(
                        'Browse Now',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </a>
                    <a className='text-base text-wpcolor focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor no-underline' href='https://ultimategutenberg.com/docs/' target='_blank' rel="noreferrer"> → </a>
                  </div>
                </div>
              </section>
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-[0.2rem] bg-white overflow-hidden shadow">
                  <div className="p-7">
                    <h3 className='text-xl leading-[2.47rem] font-medium pb-2'>
                      { __(
                        'Get 5-star Support',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </h3>
                    <p className='text-sm pb-2 pr-2'>
                      { __(
                        'Need some help? Our awesome support team is here to help you with any question you have.',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </p>
                    <a className='text-base text-wpcolor focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor underline' href='https://ultimategutenberg.com/support/' target='_blank' rel="noreferrer">
                      { __(
                        'Get Support',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </a>
                    <a className='text-base text-wpcolor focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor no-underline' href='https://ultimategutenberg.com/support/' target='_blank' rel="noreferrer"> → </a>
                  </div>
                </div>
              </section>
              <section aria-labelledby="section-2-title">
                <h2 className="sr-only" id="section-2-title">
                  Section title
                </h2>
                <div className="rounded-[0.2rem] bg-white overflow-hidden shadow">
                  <div className="p-7">
                    <h3 className='text-xl leading-[2.47rem] font-medium pb-2'>
                      { __(
                        'Join the Community',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </h3>
                    <p className='text-sm pb-2 pr-2'>
                      { __(
                        'Got a question about the plugin, want to share your awesome project or just say hi? Join our wonderful community!',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </p>
                    <a className='text-base text-wpcolor focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor underline' href='https://www.facebook.com/groups/wpastra/' target='_blank' rel="noreferrer">
                      { __(
                        'Join Now',
                        'ultimate-addons-for-gutenberg'
                      ) }
                    </a>
                    <a className='text-base text-wpcolor focus:text-wphovercolor active:text-wphovercolor hover:text-wphovercolor no-underline' href='https://www.facebook.com/groups/wpastra/' target='_blank' rel="noreferrer"> → </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
  );
};

export default Welcome;
