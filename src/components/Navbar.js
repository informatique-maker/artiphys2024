import React, { useState } from 'react';

import cuteLogo from '../assets/images/cute-logo.png';
import { BiMenu, BiX } from 'react-icons/bi';

const NAV_LINKS = [
  {
    url: '/',
    text: 'Accueil',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <nav className='bg-base fixed w-full z-40 art-border'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-20'>
          <div className='flex items-center'>
            {/* Logo Section */}
            <a
              href='/'
              className='text-xl font-bold text-gray-900 flex justify-center items-center'
            >
              <img
                src={cuteLogo}
                alt='cute logo'
                className='h-20 relative right-3'
              />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            {NAV_LINKS.map((link) => (
              <a href={link.url} className='text-dark hover:text-primary'>
                <h3>{link.text}</h3>
              </a>
            ))}
          </div>
          {/* Mobile Menu Toggle */}
          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-dark hover:text-primary focus:outline-none p-2 hover:cursor-pointer'
            >
              {isOpen ? <BiX size={40} /> : <BiMenu size={40} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className='md:hidden transition-all overflow-hidden border-solid border-dark border-3'
        style={{ height: isOpen ? '75vh' : 0 }}
      >
        <div className='h-[75vh] flex flex-col justify-center items-center pb-20 '>
          {NAV_LINKS.map((link) => (
            <a href={link.url} className='text-dark hover:text-primary'>
              <h2>{link.text}</h2>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
