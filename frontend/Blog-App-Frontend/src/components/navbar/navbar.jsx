import React from 'react'
import  {useNavigate} from "react-router-dom"
export default function navbar() {
  const navigate=useNavigate();
  return (
    <>
  
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


          <span className="font-calli font-bold text-4xl ">
            ScribbleSphere
          </span>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex gap-10">

              <li>
                <a
                  href="#"
                  className="font-calli font-bold text-2xl ml-px"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  LOGIN
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="font-calli font-bold text-2xl"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
