import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../utils/Dropdown';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Manifold">
              <svg
                className="w-8 h-8 fill-current text-white-600"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg">
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://form.typeform.com/to/Sr7xLL3s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Network
                </Link>
              </li>
              <li>
                <Link
                  href="https://primitives.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/manifoldfinance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Telegram
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Support">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="mailto:ops@manifoldfinance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-gray-400 hover:text-white-600 flex py-2 px-4 leading-tight">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://backbonecabal.github.io/knowledgebase/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm text-gray-400 hover:text-white-600 flex py-2 px-4 leading-tight">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="font-medium text-sm text-gray-400 hover:text-white-600 flex py-2 px-4 leading-tight">
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/signin"
                  className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="btn-sm text-white bg-white-600 hover:bg-white-700 ml-3">
                  Request access
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            {/* Hamburger button */}
            <button
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={
                mobileNavOpen
                  ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 }
                  : { maxHeight: 0, opacity: 0.8 }
              }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link
                    href="https://form.typeform.com/to/Sr7xLL3s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 hover:text-gray-200 py-2">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://dev-status.web3.workers.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 hover:text-gray-200 py-2">
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://primitives.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 hover:text-gray-200 py-2">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/manifoldfinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-300 hover:text-gray-200 py-2">
                    Telegram
                  </Link>
                </li>
                <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex text-gray-300 py-2">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link
                        href="mailto:ops@manifoldfinance.com"
                        className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://backbonecabal.github.io/knowledgebase/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">
                        Help center
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/404"
                        className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">
                        404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="flex font-medium w-full text-white-600 hover:text-gray-200 py-2 justify-center">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-gray-600 hover:bg-white-700 transition duration-150 ease-in-out">
                    Request access
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
/** @export Header */
