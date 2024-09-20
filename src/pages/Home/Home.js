import React from 'react';

import Marquee from 'react-fast-marquee';
import { InstagramEmbed } from 'react-social-media-embed';

import Footer from '../../components/Footer';
import blackLogo from '../../assets/images/dark-logo.png';
import Navbar from '../../components/Navbar';

import { LATEST_NEWS_LINKS } from '../../config/AppConfig';

const MarqueeContent = () => {
  return (
    <div className='flex items-center gap-3 py-1 pr-3 bg-base'>
      <h3 className='pb-0 text-xl font-semibold text-dark'>Artiphys 2025</h3>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
      <h3 className='pb-0 text-xl font-semibold text-dark'>14 mars 2025</h3>
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
          <h3 className='uppercase'>Scènes</h3>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h3 className='uppercase'>FESTIVALIER.X.ES</h3>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>4</h1>
          <h3 className='uppercase'>Bars</h3>
        </div>
      </div>
      <div className='inline-flex sm:hidden flex-col items-center gap-5 py-12'>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h3 className='uppercase'>FESTIVALIER.X.ES</h3>
        </div>
        <div className='flex w-full justify-between '>
          <div className='flex flex-col items-center'>
            <h1>3</h1>
            <h3 className='uppercase'>Scènes</h3>
          </div>
          <div className='flex flex-col items-center'>
            <h1>4</h1>
            <h3 className='uppercase'>Bars</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestNewsSection = () => {
  return (
    <div className='light-container'>
      <div className='section-container flex-centered'>
        <h2 className='pb-h2 text-center'>Notre Actu</h2>
        <div>
          {LATEST_NEWS_LINKS.map((link, index) => (
            <InstagramEmbed key={index} url={link} width={328} />
          ))}
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
      <LatestNewsSection />
      <Footer />
    </>
  );
}

export default Home;
