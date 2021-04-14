import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import NetworkTables from '../partials/NetworkTables';
import Faqs from '../partials/Faqs';
import Testimonials from '../partials/Testimonials';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import FeaturesTiles from '../components/sections/FeaturesTiles';


function Network() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <NetworkTables />
        <Faqs />
        <FeaturesTiles />
        <Testimonials />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Network;
/** @export Network */
