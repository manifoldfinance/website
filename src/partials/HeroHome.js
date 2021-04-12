import React, { useState } from 'react';
import Modal from '../utils/Modal';

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
              Challenge core assumptions
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              enabling collaborative decentralized finance
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-black bg-white hover:bg-white w-full mb-4 sm:w-auto sm:mb-0"
                  href="#0"
                >
                  Explore
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
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
              data-aos-delay="200"
            >
              {/* @dev hereo image here */}
              <img
                className="mx-auto"
                src={require('../images/img-manifold-01.png')}
                width="419"
                height="419"
                alt="Hero"
              />
              <a
                className="absolute group"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      x1="78.169%"
                      y1="9.507%"
                      x2="24.434%"
                      y2="90.469%"
                      id="a"
                    >
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path
                    className="fill-current text-purple-600"
                    d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
                  />
                </svg>
              </a>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="#"
                  title="manifold-video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroHome;
/** @export HeroHome */