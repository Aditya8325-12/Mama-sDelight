import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";
const Head = () => {
  const PathLocation = useLocation();

  const [navheader, setNavHeader] = useState(
    "bg-slate-400/0 text-white h-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600"
  );

  const [minibar, setminibar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setNavHeader(
          "bg-slate-400/0 text-white h-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600"
        );
      } else {
        setNavHeader(
          "bg-white shadow-lg h-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isActive = (path) => {
    return PathLocation.pathname === path
      ? "text-white bg-blue-700 rounded  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  };

  const isActiveSmall = (path) => {
    return PathLocation.pathname === path
      ? "text-blue-700 rounded   mbg-transparent  md:p-0  "
      : "text-gray-900 rounded   hover:text-blue-600 ";
  };

  return (
    <nav class={navheader}>
      <div class="max-w-screen-xl relative   flex h-full flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} class="h-8" alt="moms Kitchen Logo" />
          <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Mama’s Delight
          </span>
        </a>
        <div class="flex md:hidden    md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={() => {
              setminibar(!minibar);
            }}
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none font-bold "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky"
        >
          <ul class="flex  flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={"/"}>
                <a
                  class={`block py-2 px-3  font-bold     ${isActive("/")}`}
                  aria-current={PathLocation.path == "/" ? "page" : undefined}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <a
                href="/Food"
                class={`block  font-bold py-2 px-3 ${isActive("/Food")} `}
              >
                Foods
              </a>
            </li>
            <li>
              <a
                href="/recipes"
                class={`block py-2  font-bold px-3 ${isActive("/recipes")} `}
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="/about"
                class={`block font-bold py-2 px-3 ${isActive("/about")} `}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                class={`block py-2 font-bold px-3 ${isActive("/contact")} `}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          class={`absolute justify-between items-center w-full md:hidden  mt-72  end-0  ${
            minibar ? "flex" : "hidden"
          } `}
          id="mobile-menu-2"
        >
          <ul class="flex flex-col items-end  px-4 w-full font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to={"/"}>
                <a
                  class={`block py-2 px-3  font-bold     ${isActiveSmall("/")}`}
                  aria-current={PathLocation.path == "/" ? "page" : undefined}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <a
                href="/Food"
                class={`block  font-bold py-2 px-3 ${isActiveSmall("/Food")} `}
              >
                Foods
              </a>
            </li>
            <li>
              <a
                href="/recipes"
                class={`block py-2  font-bold px-3 ${isActiveSmall(
                  "/recipes"
                )} `}
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                href="/about"
                class={`block font-bold py-2 px-3 ${isActiveSmall("/about")} `}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                class={`block py-2 font-bold px-3 ${isActiveSmall(
                  "/contact"
                )} `}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Head;
