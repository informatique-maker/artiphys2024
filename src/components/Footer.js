import React from 'react';
import Marquee from 'react-fast-marquee';

/* import enzoLogo from '../assets/images/partners/enzo-loca.png';
  import forumLogo from '../assets/images/partners/forum.svg';
  import migrosLogo from '../assets/images/partners/migros.png';
  import agepLogo from '../assets/images/partners/agep.svg';
  import makitaLogo from '../assets/images/partners/makita.jpg';
  import morandLogo from '../assets/images/partners/morand.png';
  import infmaniakLogo from '../assets/images/partners/infmaniak.svg';
  import accoustiqueLogo from '../assets/images/partners/accoustique.png'; */

const PARTNERS_LINKS = [
  {
    url: 'https://www.enzo-location.ch/',
    src: '/images/partners/enzo-loca.png',
  },
  {
    url: 'https://www.infomaniak.com/fr/',
    src: '/images/partners/infmaniak.svg',
  },
  {
    url: 'https://engagement.migros.ch/fr/pour-cent-culturel',
    src: '/images/partners/migros.png',
  },
  {
    url: 'https://www.makita.ch/',
    src: '/images/partners/makita.jpg',
    color: '#fe0500',
  },
  {
    url: 'https://www.morand.ch/',
    src: '/images/partners/morand.png',
  },
  {
    url: 'https://www.forum-epfl.ch/',
    src: '/images/partners/forum.svg',
  },
  {
    url: 'https://agepoly.ch/',
    src: '/images/partners/agep.svg',
  },
  {
    url: 'https://p-p-s.ch/',
    src: '/images/partners/pps.png',
  },
  {
    url: 'https://signature-acoustique.ch/',
    src: '/images/partners/accoustique.png',
  },
];

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-5xl mx-auto'>
        <div className='w-full p-9 pb-16 flex flex-col sm:flex-row justify-around items-start gap-14'>
          <div className='flex-1 flex flex-col sm:flex-row items-center sm:items-end gap-8 mx-auto'>
            <div>
              <h3 className='text-center sm:text-left pb-h3'>Contact</h3>
              <p className='text-center sm:text-left'>
                <a
                  href='mailto:contact@artiphys.ch'
                  className='text-inherit hover:text-primary '
                >
                  contact@artiphys.ch
                </a>
              </p>
              <p className='mt-2 text-center sm:text-left'>
                Festival Artiphys
                <br />
                Station 3 - EPFL
                <br />
                1015 Lausanne
              </p>
            </div>
            <div className='overflow-hidden relative rounded-lg'>
              <iframe
                title='Google Map'
                className='w-full h-[250px] sm:h-[150px] min-w-[150px] max-w-[300px]'
                src={
                  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1372.6814978496752!2d6.567644515365324!3d46.520718369250005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sch!4v1726155622400!5m2!1sen!2sch'
                }
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden='false'
                tabIndex='0'
              />
            </div>
          </div>
          <div className='flex-1 text-base flex flex-col mx-auto'>
            <h3 className='text-center text-inherit sm:text-right pb-h3'>
              Nos réseaux
            </h3>
            <div className='inline-flex flex-col gap-1 items-center sm:items-end'>
              <a
                className='flex flex-row items-center text-inherit'
                href='https://www.instagram.com/artiphysfestival/'
              >
                Instagram
              </a>
              <a
                className='flex flex-row items-center text-inherit'
                href='https://www.youtube.com/channel/UCoAJSh63lJc4ZMoQnGyGqCQ'
              >
                Youtube
              </a>
              <a
                className='flex flex-row items-center text-inherit'
                href='https://www.linkedin.com/company/artiphys/'
              >
                LinkedIn
              </a>
              <a
                className='flex flex-row items-center text-inherit'
                href='https://www.facebook.com/Artiphys'
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <Marquee>
        <div className='flex items-stretch'>
          {PARTNERS_LINKS.map((partner) => (
            <a
              href={partner.url}
              className='px-4 flex items-center rounded-lg mr-3'
              style={{ backgroundColor: partner.color || 'white' }}
              key={partner.url}
            >
              <img src={partner.src} alt='partner' width={120} />
            </a>
          ))}
        </div>
      </Marquee>
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start px-9 pt-16  pb-1 max-w-5xl mx-auto'>
        <p className='font-inkination uppercase text-[0.8rem]'>
          Site web designé par{' '}
          <a className='underline' href='https://mateo.tiedra.com/'>
            Mateo Tiedra
          </a>
        </p>
        <p className='font-inkination uppercase text-[0.8rem]'>
          Copyright © Artiphys 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
