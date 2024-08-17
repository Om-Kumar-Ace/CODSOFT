import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#Skills' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Achievements', href: '#Achievements' },
        { name: 'Contact', href: '#Contact' },
    ];

    return (
        <nav className='fixed w-full top-0 z-50 bg-white shadow-lg opacity-100 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
            <header className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">

                <div className="flex items-center space-x-4">

                    <div className="text-2xl font-bold">
                        <span className="text-blue-700">&lt;</span>
                        <span className="text-blue-400">Om</span>
                        <span className="text-black">Kumar</span>
                        <span className="text-blue-700">/&gt;</span>
                    </div>
                </div>


                <div className="flex items-center space-x-4">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    {item.name}
                                </span>
                            </button>
                        </Link>
                    ))}
                </div>

            </header>
        </nav>
    );
};

export default Navbar;
