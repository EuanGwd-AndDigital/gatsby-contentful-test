import React from 'react'
import { Link } from 'gatsby'

type NavbarProps = {
  title: string
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <Link
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              to="/"
            >
              {title}
            </Link>
          </div>

          <div className="relative flex-none">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
