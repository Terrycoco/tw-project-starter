import Link from "next/link";
import { twMerge } from "tailwind-merge";
import theme from "../styles/theme";
import SVGLoader from "../components/SVGLoader";

//TODO: make nav bar customizable
const Navbar = (props) => {
  let styles = `
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  ${props.textColor}
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  `;

  styles = props.outerStyles ? twMerge(styles, props.outerStyles) : styles;

  return (
    <div className="sticky top-0 left-0 h-18 z-20">
      <nav className={styles}>
        {/* Start Collapsible Wrapper */}
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className={`
                navbar-toggler
                ${props.textColor}
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
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link href="/" key="logo">
              <SVGLoader src="/logo.svg" className="text-white" />
            </Link>

            {/*<!-- Left links -->*/}
            <ul className="navbar-nav flex flex-col pl-10 list-style-none mr-auto">
              <li className="nav-item pr-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#colors"
                >
                  colors
                </a>
              </li>
              <li className="nav-item pr-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#typpography"
                >
                  typography
                </a>
              </li>
              <li className="nav-item pr-2">
                <a className="nav-link disabled text-gray-300 p-0">Disabled</a>
              </li>
            </ul>
            {/*<!-- END Left links -->*/}
          </div>
          {/*<!-- End Collapsible wrapper -->*/}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
