import Link from "next/link";
import theme from "../styles/theme";
import logo from "../public/logo.svg";

//TODO: make nav bar customizable
const Navbar = (props) => {
  return (
    <div className="sticky top-0 left-0 h-18 z-20">
      <nav
        className={` relative
                    w-full
                    flex flex-wrap
                    items-center
                    justify-between
                    py-4
                    bg-gray-100
                    text-gray-500
                    hover:text-gray-700
                    focus:text-gray-700
                    shadow-lg
                    navbar navbar-expand-lg navbar-light
            `}
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className={`
                    navbar-toggler
                    text-gray-500
                    border-0
                    hover:shadow-none hover:no-underline
                    py-2
                    px-2.5
                    bg-transparent
                    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                    `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>

          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <a className="text-xl text-primary" href="#">
              {props.title}
            </a>

            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item px-2">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item pr-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#colors"
                >
                  Colors
                </a>
              </li>
              <li className="nav-item pr-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#typography"
                >
                  Typography
                </a>
              </li>
              <li className="nav-item pr-2">
                <a className="nav-link disabled text-gray-300 p-0">Disabled</a>
              </li>
            </ul>
          </div>

          <button className={theme.buttons.primary}>Current Theme</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
