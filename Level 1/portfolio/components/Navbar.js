
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
        <nav className='front'>
            <header className="text-black-200 body-font">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center hover:cursor-pointer text-black mb-4 md:mb-0">
                        <img className='rounded-2xl' src='club.png' width={40} alt='' />
                        <span className="ml-3  text-xl front">Om Kumar</span>
                    </a>

                    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                    Home
                                </span>

                            </button>
                        </Link>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                About
                            </span>

                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                Skills
                            </span>

                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                Projects
                            </span>

                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                Achievement
                            </span>

                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                Contact
                            </span>

                        </button>

                    </div>
                </div>
            </header>
        </nav>
        </>
    )
}

export default Navbar