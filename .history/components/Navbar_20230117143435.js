import Link from "next/link";
import theme from "../styles/theme";
import SVGLoader from "../components/SVGLoader";

//TODO: make nav bar customizable
const Navbar = (props) => {
  return (
    <div className="sticky top-0 left-0 h-18 z-20">
      <nav
        className={`
                relative
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
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
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
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="w-6"
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
            <a class="text-xl text-black" href="#">
              Navbar
            </a>
            {/*<!-- Left links -->*/}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li class="nav-item px-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item pr-2">
                <a
                  class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
                >
                  Colors
                </a>
              </li>
              <li class="nav-item pr-2">
                <a
                  class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href="#"
                >
                  Typography
                </a>
              </li>
              <li class="nav-item pr-2">
                <a class="nav-link disabled text-gray-300 p-0">Disabled</a>
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