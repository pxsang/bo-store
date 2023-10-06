"use client";

import Link from "next/link";

export function NavBar() {
  return (
    <>
      <header className="container mx-auto flex justify-between py-4 px-8 sticky top-0">
        <Link href="/">Bo Store</Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-12">
            <li>
              <Link href="/" className="font-semibold hover:text-teal-600">
                Nav 1
              </Link>
            </li>
            <li>
              <Link href="/">Nav 1</Link>
            </li>
            <li>
              <Link href="/">Nav 1</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4 ">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hover:stroke-teal-600"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="hover:stroke-teal-600"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
          </Link>
          <Link href="/">
            <button className="relative inline-flex items-center justify-center overflow-hidden text-sm font-semibold text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-teal-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign In
              </span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}
