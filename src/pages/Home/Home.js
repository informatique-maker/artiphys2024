import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import Marquee from 'react-fast-marquee';

import Footer from '../../components/Footer';
import whiteLogo from '../../assets/images/white-logo.png';

const MarqueeContent = () => {
  return (
    <div className='flex items-center gap-3 py-1 pr-3'>
      <h4 className='pb-0 text-xl font-semibold'>Artiphys 2025</h4>
      <img src={whiteLogo} className='h-[0.9rem]' alt='logo' />
      <h4 className='pb-0 text-xl font-semibold'>14 mars 2025</h4>
      <img src={whiteLogo} className='h-[0.9rem]' alt='logo' />
    </div>
  );
};
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <Marquee>
        {Array(4)
          .fill(1)
          .map((i) => (
            <MarqueeContent key={i} />
          ))}
      </Marquee>
      <div className='relative w-full h-[60vh] flex justify-center items-center'>
        <video
          autoPlay
          loop
          muted
          className='absolute object-cover w-full h-full -z-10'
        >
          <source src='/videos/home.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <h1 className='text-[18vw]'>Artiphys</h1>
      </div>
      <div className='hidden sm:flex justify-around max-w-7xl px-5 py-12 w-full'>
        <div className='flex flex-col items-center flex-1'>
          <h1>3</h1>
          <h4 className='uppercase'>Scènes</h4>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h4 className='uppercase'>FESTIVALIER.X.ES</h4>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>4</h1>
          <h4 className='uppercase'>Bars</h4>
        </div>
      </div>
      <div className='inline-flex sm:hidden flex-col items-center gap-5 py-14'>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h4 className='uppercase'>FESTIVALIER.X.ES</h4>
        </div>
        <div className='flex w-full justify-between '>
          <div className='flex flex-col items-center'>
            <h1>3</h1>
            <h4 className='uppercase'>Scènes</h4>
          </div>
          <div className='flex flex-col items-center'>
            <h1>4</h1>
            <h4 className='uppercase'>Bars</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
