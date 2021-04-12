/**
 * @file Footer
 * @summary Webpage Footer
 * @version 1.0.0
 */
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="inline-block" aria-label="Manifold">
                  <svg
                    className="w-8 h-8 fill-current text-purple-600"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M11.691.0468C7.068.541 3.1666 3.7545 1.8104 8.197c-.4743 1.5565-.6413 3.3002-.4342 4.6229.0334.2205.04.2138.4008-.4342 1.5767-2.866 4.329-4.8701 7.5825-5.5115 1.0889-.2204 2.9795-.2138 4.0017 0 4.5227.9554 7.8831 4.3491 8.8584 8.9253l.1136.5344.2271-.501c1.2894-2.8259 1.423-5.9524.3741-8.785-.3006-.815-.9486-1.9975-1.4897-2.7123C19.701 2.0042 17.0889.481 14.1762.1002 13.4881.0067 12.2789-.02 11.691.0468z"
                    />
                    <path
                      fill="#fff"
                      d="M23.8497 5.772c0 .0134.1403.2272.314.481.4142.6213 1.0288 1.9174 1.2826 2.7257.3474 1.0889.4877 2.0443.4944 3.3804.0067 1.5632-.1804 2.6188-.7349 4.0751-1.2292 3.2468-3.8747 5.7854-7.1549 6.881-1.7904.5946-3.7945.7416-5.5449.4076-.3407-.0668-.6146-.0936-.6146-.0668 0 .0935 1.3428 1.4563 1.757 1.7904 1.4564 1.149 3.0664 1.8972 4.9236 2.2847 1.0088.2071 2.7257.2138 3.8213.0067 5.5182-1.0422 9.3662-5.9324 9.119-11.5975-.187-4.182-2.5787-7.9432-6.2263-9.7737-.5678-.2873-1.4363-.648-1.4363-.5946z"
                    />
                    <path
                      fill="#fff"
                      d="M9.453 9.413c-2.6588.4743-5.0371 1.9173-6.7273 4.0885C1.6434 14.891.9019 16.5478.521 18.4384c-.2004 1.0155-.2138 3.0063-.0267 4.0418.8284 4.5695 4.0417 8.0835 8.3908 9.1791 3.2735.8217 6.8943-.0134 9.5198-2.1979l.4476-.3675-1.0288-.04c-3.534-.1403-6.6472-1.8706-8.7115-4.8435-1.7503-2.5119-2.425-5.8989-1.7904-8.9787.1804-.8818.4877-1.7436.9687-2.7056.5144-1.0489 1.1223-1.9441 1.8572-2.719l.4877-.521-.2539.0066c-.1469 0-.5611.0601-.9286.1202z"
                    />{' '}
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">
                Manifold Finance PKI <br></br>
                Key ID: 3858023A92C8DA82FB996BB37361D5A506F6EB43E <br></br>
                LEI: 1f231fafd91f3690ea1940d1
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Solutions</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Transaction Privacy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Private RPC Connections
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Protocol Middleware
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Telegram
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Slack
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Legal
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Records
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  to="#"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="#"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="#"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="#"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="#"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; 2021 CommodityStream LLC, All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
/** @export Footer */
