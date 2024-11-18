import React from 'react';

import Marquee from 'react-fast-marquee';
import { Spotify } from 'react-spotify-embed';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import blackLogo from '../../assets/images/dark-logo.png';

import { PAST_EVENTS, PLAYLISTS } from '../../config/AppConfig';
import OneTimeAlert from '../../components/OneTimeAlert';

const MarqueeContent = () => {
  return (
    <div className='flex items-center gap-3 py-1 pr-3 bg-base'>
      <h3 className='pb-0 text-xl font-semibold text-dark'>
        Artiphys 33e édition
      </h3>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
      <h3 className='pb-0 text-xl font-semibold text-dark'>mars 2025</h3>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-full h-[66vh] flex justify-center items-center'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute object-cover w-full h-full -z-10'
        >
          <source src='/videos/home.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <Marquee>
        <div className='border-solid border-dark border-t-4 border-b-4 flex'>
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <MarqueeContent key={index} />
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
          <h1>3</h1>
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
    <div className='light-container' id='news'>
      <div className='section-container flex-centered'>
        <h2 className='pb-h2 text-center'>Notre actu</h2>
        <div className='w-full aspect-[1/1] max-w-xl'>
          <script src='https://cdn.lightwidget.com/widgets/lightwidget.js'></script>
          <iframe
            title='instawidget'
            src='https://cdn.lightwidget.com/widgets/84604285b9395a7c8c9bd2afff0a1268.html'
            allowtransparency='true'
            class='lightwidget-widget'
            style={{
              width: '100%',
              height: '100%',
              border: 0,
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const PastEventsSection = () => {
  return (
    <div id='past-events'>
      <div className='section-container flex-centered'>
        <h2 className='pb-h2 text-center'>Évenements passés</h2>
        <div className='flex flex-row flex-wrap items-start justify-start gap-16'>
          {PAST_EVENTS.map((event, index) => (
            <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start max-w-md w-full'>
              <img
                key={index}
                src={event.poster}
                alt='poster'
                className='w-40'
              />
              <div className='flex flex-col items-center sm:items-start'>
                <h3 className='pb-h3'>{event.title}</h3>
                <div className='flex flex-row flex-wrap justify-center sm:justify-start gap-4 h-full'>
                  {event.artists.map((artist, index) => (
                    <a
                      href={artist.url}
                      target='_blank'
                      rel='noreferrer'
                      key={index}
                    >
                      {artist.name}
                    </a>
                  ))}
                </div>
              </div>
              <button
                className='btn-primary'
                onClick={() => {
                  window.location.href = event.url;
                }}
              >
                Voir les photos
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurPlaylistSections = () => {
  return (
    <div className='light-container' id='playlists'>
      <div className='section-container flex-centered '>
        <h2 className='pb-h2 text-center'>Notre playlist 2024</h2>
        <Spotify
          width='100%'
          link='https://open.spotify.com/playlist/2YqOHVRiNXruOVKvNDhjLT'
          className='max-w-[800px]'
        />
        <div className='flex flex-row flex-wrap items-center gap-16 justify-around pt-6'>
          {PLAYLISTS.map((link, index) =>
            index === 0 ? (
              <React.Fragment key={index}></React.Fragment>
            ) : (
              <a
                href={link.url}
                style={{ color: link.color }}
                className='flex flex-col items-center gap-2'
                key={index}
              >
                {React.createElement(link.icon, {
                  size: 80,
                  fill: link.color,
                })}
                <p className='underline'>{link.platform}</p>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <OneTimeAlert
        id='Artiboule'
        title='Artiboule'
        text='La billeterie pour Artiboule est enfin ouverte ! Chope ta preloc avant qu il ne soit trop tard ;)'
        actionText="J'y vais direct"
        closeText='Pas intéressé.e'
        to='https://infomaniak.events/shop/QJub3qPDi9/'
        startDate='2024-11-20'
        endDate='2024-11-28'
      />
      <Navbar />
      <HeroSection />
      <LatestNewsSection />
      <PastEventsSection />
      <OurPlaylistSections />
      <Footer />
    </>
  );
}

export default Home;
