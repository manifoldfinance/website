import React, { useState } from 'react';
// import Modal from '../utils/Modal';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              OpenMEV
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200">
              OpenMEV is committed to being an open, non-profit, collaborative, and community-driven project
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-black bg-white hover:bg-white w-full mb-4 sm:w-auto sm:mb-0"
                  to="#0">
                  Explore
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  to="#0">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200">
              {/* @dev hereo image here */}
              <img
                className="mx-auto"
                src={require('../images/hero_graph.svg')}
                width="620"
                height="620"
                alt="Hero"
              />
            </div>

            {/* Modal */}

          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroHome;
/** @export HeroHome */
