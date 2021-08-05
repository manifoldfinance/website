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


          {/* Desktop navigation */}


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
                  <Link className="flex text-gray-300 hover:text-gray-200 py-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={'https://form.typeform.com/to/Sr7xLL3s'}>
                      Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex text-gray-300 hover:text-gray-200 py-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={'https://dev-status.web3.workers.dev/'}>
                      Network
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex text-gray-300 hover:text-gray-200 py-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://primitives.substack.com/`}>
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link className="flex text-gray-300 hover:text-gray-200 py-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://t.me/manifoldfinance`}>
                      Telegram
                    </a>
                  </Link>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://t.me/manifoldfinance">
                    @manifold
                  </a>
                </li>
                <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex text-gray-300 py-2">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">
                        <a href={'mailto:ops@manifoldfinance.com'}>
                          Contact us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={
                            'https://backbonecabal.github.io/knowledgebase/'
                          }>
                          Help center
                        </a>
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
