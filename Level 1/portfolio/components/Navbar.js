
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
        <nav className='front fixed w-full top-0 '>
            <header className="text-black-200 body-font">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center hover:cursor-pointer text-black mb-4 md:mb-0">
                        <img className='rounded-2xl' src='club.png' width={40} alt='' />
                        <div className="logo font-bold text-white text-2xl">
                    <span className='text-blue-700'> &lt;</span>
                   
                    <span className='text-blue-400'> Om</span><span className='text-black'> Kumar </span><span className='text-blue-700'>/&gt;</span>
                  
                    
                    </div>
                    </a>

                    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="#home">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                    Home
                                </span>

                            </button>
                        </Link >
                        <Link href="#about">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                About
                            </span>

                        </button>
                        </Link>
                        <Link href="#skill">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-100">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-white rounded-md group-hover:bg-opacity-0">
                                Skills
                            </span>
                        </button>
                            </Link>
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