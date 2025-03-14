import React, { useState } from 'react';

import cuteLogo from '../assets/images/cute-logo.png';
import { BiMenu, BiX } from 'react-icons/bi';

import { HashLink } from 'react-router-hash-link';

const NAV_LINKS = [
  {
    url: 'https://morii.artiphys.ch/',
    text: 'ArtiReal',
  },
  {
    url: '/#news',
    text: 'Actu',
  },
  {
    url: '/association',
    text: "L'association",
  },
  {
    url: '/partenaires',
    text: 'Partenaires',
  },
  {
    url: '/prevention',
    text: 'Prévention',
  },
  {
    url: '/contact',
    text: 'Contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const nabBarHeight = 'h-20';
  return (
    <>
      <div className={nabBarHeight} />
      <nav className='bg-base fixed top-0 w-full z-40 art-border'>
        <div
          className={
            'md:hidden absolute left-1/2 -translate-x-1/2 flex-centered z-30 ' +
            nabBarHeight
          }
        >
          <h3 className='text-dark'>Artiphys</h3>
        </div>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className={'flex justify-between ' + nabBarHeight}>
            <div className='flex items-center'>
              {/* Logo Section */}
              <HashLink
                to='/'
                className='text-xl font-bold text-gray-900 flex justify-center items-center  relative -left-3'
              >
                <img src={cuteLogo} alt='cute logo' className='h-20' />
              </HashLink>
            </div>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-6'>
              {NAV_LINKS.map((link, i) => (
                <a
                  href={link.url}
                  className='text-dark hover:text-primary'
                  key={i}
                >
                  <h4>{link.text}</h4>
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
          className='md:hidden transition-all overflow-hidden border-solid border-dark border-3 relative'
          style={{ height: isOpen ? '75vh' : 0 }}
        >
          <div className='h-[75vh] flex flex-col justify-between items-center pt-8 pb-20 '>
            {NAV_LINKS.map((link) => (
              <HashLink to={link.url} className='text-dark hover:text-primary'>
                <h3>{link.text}</h3>
              </HashLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
