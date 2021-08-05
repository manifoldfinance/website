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
