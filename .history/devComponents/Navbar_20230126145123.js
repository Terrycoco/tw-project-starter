import Link from "next/link";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import SVGLoader from "../components/SVGLoader";
import { clearStorage, setStorage } from "../utils";
import ActionModal from "../components/modals/ActionModal";
import { useTheme } from "../context/ThemeContext";

const style = `
    relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-gray-100
    text-current
    hover:text-gray-700
    focus:text-gray-700
    shadow-none
    navbar navbar-expand-lg navbar-light
`;

//TODO: make nav bar customizable
const Navbar = (props) => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [outer, setOuter] = useState();
  const [isChanged, setIsChanged] = useState(false);

  let cl = twMerge(style, theme.layout.header);
  cl = twMerge(cl, props.className);

  const getColor = (latestClass) => {
    //for dev only -- get around non-safelisted colors
    let colorIdx = cl.indexOf("#");
    if (colorIdx > 0) {
      let hex = latestClass.substr(colorIdx, 7);
      console.log("hex is", hex);

      if (latestClass.substr(colorIdx - 4, 3) == "bg-") {
        console.log("is bg");
      }
    } else {
      return {};
    }
  };

  const resetTheme = () => {
    // props.onThemeReset(); //from parent
    // setShowModal(false);
  };

  return (
    <>
      <div className={`sticky top-0 left-0 w-screen z-1000 `}>
        <nav id={props.id} className={cl} style={getColor(cl)}>
          {/* Start Collapsible Wrapper */}
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <button
              className={`
                navbar-toggler
                text-current
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
            <Link href="/" key="logo">
              <SVGLoader src="/logo.svg" className="fill-white" />
            </Link>
            <div
              className="collapse navbar-collapse flex-grow items-center"
              id="navbarSupportedContent"
            >
              {/*<!-- Left links -->*/}

              <ul className="navbar-nav flex flex-col pl-10 list-style-none mr-auto">
                <li className="nav-item pr-2">
                  <a
                    className={`nav-link ${theme.layout.nav.link} p-0`}
                    href="#colors"
                  >
                    colors
                  </a>
                </li>
                <li className="nav-item pr-2">
                  <a
                    className={`nav-link ${theme.layout.nav.link} p-0`}
                    href="#typography"
                  >
                    typography
                  </a>
                </li>
              </ul>
              {/*<!-- END Left links -->*/}

              {/*<!-- Start right links -->*/}
              <ul>
                <li className="nav-item pr-2 space-x-2">
                  <button
                    className={`btn-primary nav-link ${theme.layout.nav.link} p-0`}
                    onClick={() => setShowModal(true)}
                  >
                    reset
                  </button>
                  <button
                    className={`btn-primary nav-link ${theme.layout.nav.link} p-0`}
                    onClick={props.onThemeClick}
                  >
                    theme
                  </button>
                </li>
              </ul>
              {/*<!-- END Left links -->*/}
            </div>
            {/*<!-- End Collapsible wrapper -->*/}
          </div>
        </nav>
      </div>

      <ActionModal
        id="modalReset"
        show={showModal}
        title="Are you sure you want to reset?"
        onClose={() => setShowModal(false)}
        actionBtnText="Reset Theme"
        action={resetTheme}
      >
        <h2 className="text-red-500 text-lg font-medium">WARNING!</h2>
        <p>If you reset you will lose any changes. Continue?</p>
      </ActionModal>
    </>
  );
};

export default Navbar;
