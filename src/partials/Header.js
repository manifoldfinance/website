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
              width="65" height="64" viewBox="0 0 49 48"
              fill="none"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3872 36.5425C24.5362 35.1121 20.5752 34.8921 16.9443 35.8824C14.4136 36.5425 11.993 37.8629 9.79248 39.5133L8.25207 40.8336L7.81197 41.2737L8.80221 42.1539C8.91224 42.1539 8.91225 42.264 9.02228 42.374C9.24233 42.594 9.4624 42.7041 9.79248 42.9241L10.4526 43.3642L11.1128 42.8141C11.2228 42.7041 11.4429 42.484 11.6629 42.374C13.6434 40.7236 15.844 39.6233 18.1546 39.0732C21.1253 38.303 24.3161 38.413 27.5069 39.6233C30.1476 40.6135 35.5389 41.8239 42.0306 39.0732L42.2506 38.9631L42.5807 38.6331C42.5807 38.523 42.6908 38.523 42.8008 38.413C43.3509 37.7528 43.9011 37.0927 44.3412 36.3225L46.5417 32.9116L43.0208 34.8921C37.8495 37.7528 33.1183 38.3029 28.3872 36.5425Z" fill="white"/>
<path d="M13.3134 24.6595C16.2841 23.8893 19.4749 23.9993 22.6657 25.2096C26.1866 26.53 35.2089 28.4005 45.3314 19.2682L46.9818 17.6177L47.0919 17.5077L47.532 17.0676L47.3119 16.5175C47.2019 16.0774 46.9818 15.5272 46.7618 14.9771L46.2116 13.4367L45.1113 14.537C45.0013 14.757 44.7813 14.867 44.5612 15.0871C39.72 20.0383 32.2381 25.0996 23.6559 22.0189C19.805 20.5885 15.844 20.3684 12.2131 21.3587C8.69219 22.3489 5.61141 24.2194 2.75069 26.8601V26.75L1.10028 28.5105C1.10028 28.6205 0.990271 28.6205 0.880244 28.7305L0.55014 29.0606L0.660175 29.5007C0.770202 30.0509 0.990251 30.601 1.10028 31.1511L1.76045 32.9116L2.86073 31.4812C2.97076 31.2612 3.1908 31.1512 3.30083 30.9311C5.61141 28.8406 8.80222 25.8698 13.3134 24.6595Z" fill="white"/>
<path d="M2.64069 22.679C5.17133 20.0384 8.03203 18.3879 11.1128 17.5077C14.0835 16.7375 17.2743 16.8476 20.4652 18.0579C30.3676 21.6888 38.9498 15.7473 42.6908 12.5565L44.1211 11.1261L44.6712 10.686L44.2311 10.0259C43.9011 9.69577 43.681 9.25565 43.3509 8.81554L42.6908 7.9353L41.9205 8.70551C41.8105 8.81554 41.5905 9.03559 41.4804 9.14561C36.8593 13.5467 29.7075 18.0579 21.5654 14.9771C17.7145 13.5467 13.7535 13.3267 10.1226 14.3169C7.81198 14.9771 5.61142 16.0774 3.41086 17.5077L1.10028 19.3782C0.880221 19.5983 0.770194 19.7083 0.550138 19.9283L0.330103 20.1484V20.4785C0.220075 21.2487 0.220062 22.0189 0.110034 22.679L0 25.4297L1.87048 23.4492C2.09054 23.2292 2.31061 22.8991 2.64069 22.679Z" fill="white"/>
<path d="M31.5779 44.0244L31.3579 44.6846L31.5779 44.0244C31.2479 43.9144 31.0278 43.8043 30.6977 43.6943C26.8468 42.2639 22.8858 42.0439 19.2548 43.0341C18.4846 43.2542 17.7145 43.4742 16.9443 43.8043L14.3036 45.0146L13.6435 45.3447L15.844 46.1149C16.5042 46.335 17.1643 46.555 17.8245 46.7751L18.1546 46.8851L18.4847 46.7751C18.8147 46.6651 19.1448 46.445 19.4749 46.445C19.695 46.445 19.915 46.335 20.1351 46.2249C22.7757 45.5648 25.6364 45.5648 28.7172 46.555C29.0473 46.665 29.2674 46.7751 29.5975 46.8851L30.1476 47.1051L30.4777 46.9951C31.2479 46.7751 32.1281 46.555 32.7883 46.2249L35.869 45.1247L32.6782 44.3545C32.3481 44.2444 31.908 44.1344 31.5779 44.0244Z" fill="white"/>
<path d="M48.4122 21.2486L46.7618 22.8991C46.5417 23.1191 46.3217 23.3392 46.1016 23.5592C41.5905 27.8503 34.3287 32.4715 26.1866 29.3907C22.3356 27.9603 18.3746 27.7403 14.7437 28.7305C11.3329 29.7208 8.25208 31.4812 5.50139 34.1219L4.07104 35.6623L3.63094 36.2124L4.07104 36.8726C4.40112 37.3127 4.62119 37.6428 4.84125 38.0829L5.50139 39.0731L6.27159 38.0829C6.38162 37.9729 6.60167 37.7528 6.7117 37.6428C9.35236 34.782 12.2131 33.0216 15.5139 32.1414C18.4847 31.3712 21.6755 31.4812 24.8663 32.6915C27.617 33.6818 30.4777 34.0119 33.3384 33.6818C38.3997 33.1316 43.461 30.2709 47.2019 27.0801C47.422 26.8601 47.642 26.75 47.862 26.53L48.1921 26.1999V25.8698C48.1921 25.2097 48.3022 24.4395 48.3022 23.7793L48.4122 21.2486Z" fill="white"/>
<path d="M6.60167 11.1261L6.2716 10.466L6.60167 11.1261C7.26183 10.7961 8.03205 10.576 8.69222 10.3559C11.663 9.58573 14.8538 9.69576 18.0446 10.9061C20.1351 11.6763 22.2256 12.0063 24.5362 12.0063C29.1574 12.0063 33.7785 10.3559 38.0696 7.16513L39.72 5.84479L40.2701 5.40468L39.2799 4.63447C38.9498 4.30439 38.5097 3.97432 38.0696 3.75427L37.4094 3.31416L36.8593 3.75427C36.6392 3.86429 36.5292 4.08434 36.3091 4.19437C30.4777 8.59548 24.6462 9.80579 19.1448 7.71527C15.1839 6.28491 11.2228 5.95483 7.26184 7.16513C6.93176 7.27516 6.60167 7.38517 6.16156 7.4952L5.94153 7.60523L5.61142 7.9353C5.61142 8.04533 5.50142 8.04535 5.39139 8.15537C4.95128 8.81554 4.40112 9.36569 3.96101 10.0259L1.87049 13.2167L5.28136 11.4562C5.83149 11.4562 6.27158 11.2362 6.60167 11.1261Z" fill="white"/>
<path d="M15.6239 3.64423L15.954 3.75427C17.3844 4.3044 19.5849 4.85454 22.3356 4.85454C25.1964 4.85454 27.9471 4.19437 30.6977 3.09409L34.1086 1.44368L31.798 0.673506C31.1379 0.45345 30.4777 0.233395 29.7075 0.123367H29.3774L29.0473 0.233368C28.7172 0.343396 28.3871 0.563478 28.0571 0.673506C24.7562 1.88381 21.4554 2.10387 18.2646 1.22364C17.9345 1.11362 17.6044 1.00357 17.2744 0.893541L16.9443 0.783506L16.6142 0.893541C15.954 1.1136 15.2939 1.33366 14.6337 1.66375L12.103 2.76402L14.7437 3.5342C14.9638 3.42417 15.2939 3.5342 15.6239 3.64423Z" fill="white"/>


                {' '}
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="https://form.typeform.com/to/Sr7xLL3s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Network
                </a>
              </li>
              <li>
                <a
                  href="https://primitives.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://t.me/manifoldfinance">
                  Telegram
                </a>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Support">
                {/* 2nd level: hover */}
                <li>
                  <Link
                           className="font-medium text-sm text-gray-400 hover:text-white-600 flex py-2 px-4 leading-tight">
                             <a
                    target="_blank"
                    rel="noopener noreferrer"
                               href={"mailto:ops@manifoldfinance.com"}>
                    Contact us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                            className="font-medium text-sm text-gray-400 hover:text-white-600 flex py-2 px-4 leading-tight">
                              <a
                    target="_blank"
                    rel="noopener noreferrer"
                             href={"https://backbonecabal.github.io/knowledgebase/"}>
                    Help center
                    </a>
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
