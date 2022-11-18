// import user from '../assets/user.png'
import { useState } from 'react'
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Cart from '../pages/Cart'

function Navbar() {
    const [Active, setActive] = useState(true)

    const showMenu = () =>{
        setActive(!Active)
    } 
  
  return (
    <div>
      <nav className="bg-white border-b-2  px-2 sm:px-4  py-2.5 rounded top-0  dark:bg-gray-900 ">
        <div className="container flex flex-wrap justify-between fixed items-center mx-auto">
          <a href="/" className="flex items-center ">
            <img
              src={logo}
              className="mr-3 h-16 lg:h-14 sm:h-12"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex items-center md:order-2">
            <NavLink
              to="/login"
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="user photo"
              />
            </NavLink>
            <Cart />

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="  inlinkne-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outlinkne-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                onClick={showMenu}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clinkp-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              !Active
                ? " justify-between items-center w-full md:flex md:w-auto md:order-1 border-b-stone-500"
                : "hidden"
            }
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink to="/">
                <a
                  className="block py-2 pr-4 pl-3 text-lg text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 dark:text-white"
                  aria-current="page "
                  onClick={showMenu}
                >
                  About
                </a>
              </NavLink>
              {/* <NavLink to="/about">
                <a
                  className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={showMenu}
                >
                  About
                </a>
              </NavLink> */}

              <NavLink to="/Prescription">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={showMenu}
                >
                  Products
                </a>
              </NavLink>
              <NavLink to="/PastPrescription">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={showMenu}
                  to="/pastprescription"
                >
                  Past Prescription
                </a>
              </NavLink>

              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={showMenu}
              >
                Contact Us
              </a>
            </ul>
          </div>
          <div
            className={
              "hidden justify-between  items-center w-full md:flex md:w-auto md:order-1"
            }
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavLink to="/">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-lg text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-500 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  About
                </a>
              </NavLink>
              {/* <NavLink to="/about">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </NavLink> */}

              <NavLink to="/prescription">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </a>
              </NavLink>
              <NavLink to="/PastPrescription">
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/pastprescription"
                >
                  Past Prescription
                </a>
              </NavLink>
              <a
                href="#contact"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded text-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar