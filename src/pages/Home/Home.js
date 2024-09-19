import React from 'react';

import Marquee from 'react-fast-marquee';

import Footer from '../../components/Footer';
import blackLogo from '../../assets/images/dark-logo.png';
import Navbar from '../../components/Navbar';

const MarqueeContent = () => {
  return (
    <div className='flex items-center gap-3 py-1 pr-3 bg-base'>
      <h2 className='pb-0 text-xl font-semibold text-dark'>Artiphys 2025</h2>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
      <h2 className='pb-0 text-xl font-semibold text-dark'>14 mars 2025</h2>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
    </div>
  );
};
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center pt-20'>
      <div className='relative w-full h-[66vh] flex justify-center items-center'>
        <video
          autoPlay
          loop
          muted
          className='absolute object-cover w-full h-full -z-10'
        >
          <source src='/videos/home.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <h1 className='text-[18vw] hidden'>Artiphys</h1>
      </div>
      <Marquee>
        <div className='border-solid border-dark border-t-4 border-b-4 flex'>
          {Array(5)
            .fill(1)
            .map((i) => (
              <MarqueeContent key={i} />
            ))}
        </div>
      </Marquee>
      <div className='hidden sm:flex justify-around max-w-7xl px-5 py-12 w-full'>
        <div className='flex flex-col items-center flex-1'>
          <h1>3</h1>
          <h2 className='uppercase'>Scènes</h2>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h2 className='uppercase'>FESTIVALIER.X.ES</h2>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>4</h1>
          <h2 className='uppercase'>Bars</h2>
        </div>
      </div>
      <div className='inline-flex sm:hidden flex-col items-center gap-5 py-12'>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h2 className='uppercase'>FESTIVALIER.X.ES</h2>
        </div>
        <div className='flex w-full justify-between '>
          <div className='flex flex-col items-center'>
            <h1>3</h1>
            <h2 className='uppercase'>Scènes</h2>
          </div>
          <div className='flex flex-col items-center'>
            <h1>4</h1>
            <h2 className='uppercase'>Bars</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
