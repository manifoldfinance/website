import React from 'react';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:col-gap-16 lg:row-gap-12">
            <li>
              <h4 className="text-xl font-medium mb-2">
                Efficiency by Aggregation
              </h4>
              <p className="text-lg text-gray-400">
                By leveraging batching, miner transaction flow, and providing
                additional performant utilities (e.g. faster calculations for
                finalizing), we can realize the following potential avenues for
                realizing profitable activites
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">User Capture</h4>
              <p className="text-lg text-gray-400">
                The whole point of Backbone Cabal is to maximize profits from
                user actions which gets distributed for free to miners and bots.
                We then extract this value and provide these profits as{' '}
                <b>cashback</b> to users.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Gas Pricing</h4>
              <p className="text-lg text-gray-400">
                Our gas pricing service utilizes noise-reduction (i.e. removing
                outliar transactions) to provide accurate gas pricing
                predictions.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                How is this different than flashbots?
              </h4>
              <p className="text-lg text-gray-400">
                Flashbots provides an open platform for arbitrage and MEV
                transactions. We contribute to flashbots, we see our stack as
                building ontop of flashbots.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                Do mining pools have to run your client?
              </h4>
              <p className="text-lg text-gray-400">
                No! In fact we work with mining pools to enhance their block
                propagation, sort of like how a CDN network helps distribute
                content for web applications.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">
                Are you offering your Gasless DEX service anywhere else?
              </h4>
              <p className="text-lg text-gray-400">
                We are working with Sushiswap exclusively. We feel building a
                strong community is important, and those decisions are left to a
                formal governance procedure.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
