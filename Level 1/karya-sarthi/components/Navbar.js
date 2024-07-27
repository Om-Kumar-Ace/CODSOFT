import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='fixed w-full top-0 z-50 bg-white shadow-lg opacity-100  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl'>
      <header className="container mx-auto bg-white z-50 flex flex-wrap p-4 flex-col md:flex-row items-center">
        <div className="md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-300 to-blue-400 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  {item.name}
                </span>
              </button>
            </Link>
          ))}
        </div>
        <a href='https://www.google.com' className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <Image
            src="/KaryaSarathi.png"
            alt="Karya Sarthi Logo"
            width={150}
            height={100}
            className="cursor-pointer"
          />
        </a>
     
      </header>
    </nav>
  );
};

export default Navbar;
