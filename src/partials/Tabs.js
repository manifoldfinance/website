import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function Tabs() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <section>
      <div className="px-4 mx-auto max-w-6xl sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="pb-12 mx-auto max-w-3xl text-center" data-aos-id-tabs>
            <h2
              className="mb-4 h2"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-tabs]">
              Securing the future of decentralized finance
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-tabs]">
              Ensuring both miner profits and end-user affordability, OpenMEV
              provides optimal outcomes by providing a neutral playing field.
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div
              className="flex flex-wrap justify-center -m-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 1 && 'opacity-50'
                }`}
                onClick={() => setTab(1)}>
                <svg
                  className="mr-2 w-4 h-4 text-purple-600 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span className="text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-gray-200">
                  Full RPC Endpoints
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 2 && 'opacity-50'
                }`}
                onClick={() => setTab(2)}>
                <svg
                  className="mr-2 w-4 h-4 text-purple-600 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                </svg>
                <span className="text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-gray-200">
                  Multichain support
                </span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${
                  tab !== 3 && 'opacity-50'
                }`}
                onClick={() => setTab(3)}>
                <svg
                  className="mr-2 w-4 h-4 text-purple-600 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
                <span className="text-gray-400 transition-colors duration-150 ease-in-out group-hover:text-gray-200">
                  Grey Pool
                </span>
              </button>
            </div>

            {/* Tabs items */}
            <div
              className="flex relative flex-col mt-16"
              data-aos="fade-up"
              ref={tabs}>
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98">
                <article className="relative mx-auto max-w-md md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img
                      className="object-cover w-full h-full"
                      src={require('../images/tab_1.png')}
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div className="relative px-6 py-8 bg-gray-800 md:py-16 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="mb-2 h4">
                      Debug and Trace RPC calls supported
                    </h4>
                    <p className="text-lg text-gray-400">
                      Seamlessly access Ethereum via the Backbone load-balanced
                      nodes and smart architecture the same way you would via
                      your own nodes. We have built services and APIs around
                      JSON RPC, REST and WebSockets that you can use with your
                      favorite libraries and frameworks, on supported Ethereum
                      networks.
                    </p>
                    <a
                      className="mt-6 text-white bg-purple-600 btn-sm hover:bg-purple-700"
                      to="https://github.com/manifoldfinance/api-documentation">
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="flex-shrink-0 ml-2 w-3 h-3 text-purple-400 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98">
                <article className="relative mx-auto max-w-md md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img
                      className="object-cover w-full h-full"
                      src={require('../images/tab_2.png')}
                      width="516"
                      height="387"
                      alt="Tabs 02"
                    />
                  </figure>
                  <div className="relative px-6 py-8 bg-gray-800 md:py-16 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="mb-2 h4">MultiChain RPC</h4>
                    <p className="text-lg text-gray-400">
                      When you sign up you'll receive your Backbone v3 key to
                      use within your application. With it we can provide you
                      with customized insights and analytics, route your data
                      where it needs to go, and give you access to the most
                      powerful infrastructure for Ethereum. Learn more about
                      getting started, and if you have any issues check our
                      other resources below for help.
                    </p>
                    <a
                      className="mt-6 text-white bg-purple-600 btn-sm hover:bg-purple-700"
                      to="https://backbonecabal.github.io/knowledgebase/">
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="flex-shrink-0 ml-2 w-3 h-3 text-purple-400 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98">
                <article className="relative mx-auto max-w-md md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img
                      className="object-cover w-full h-full"
                      src={require('../images/tab_3.png')}
                      width="516"
                      height="387"
                      alt="Tabs 01"
                    />
                  </figure>
                  <div className="relative px-6 py-8 bg-gray-800 md:py-16 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="mb-2 h4">
                      YCabal: enabling gasless DEX trading
                    </h4>
                    <p className="text-lg text-gray-400">
                      YCabal uses a batch auction-based matching engine to
                      execute orders. Batch auctions were chosen to reduce the
                      impact of frontrunning on the exchange. - All orders for
                      the given market are collected. - Orders beyond their
                      time-in-force are canceled. - Orders are placed into
                      separate lists by market side, and aggregate supply and
                      demand curves are calculated.
                    </p>
                    <a
                      className="mt-6 text-white bg-purple-600 btn-sm hover:bg-purple-700"
                      to="https://backbonecabal.github.io/knowledgebase/">
                      <span className="text-sm">Learn more</span>
                      <svg
                        className="flex-shrink-0 ml-2 w-3 h-3 text-purple-400 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
