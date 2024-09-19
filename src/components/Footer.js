import React from 'react';

import {
  SiInstagram,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiX,
} from 'react-icons/si';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';

function Footer() {
  return (
    <div className='bg-base w-full art border'>
      <div className='section-container w-full p-9 text-black flex flex-col sm:flex-row justify-around items-start max-w-[400px] gap-14'>
        <div className='flex-1 flex flex-col sm:flex-row items-start sm:items-end gap-8'>
          <div>
            <h2>Contact</h2>
            <a href='mailto:contact@artiphys.ch' className='text-black  '>
              contact@artiphys.ch
            </a>
            <p className='mt-2'>
              Festival Artiphys
              <br />
              Station 3 - EPFL
              <br />
              1015 Lausanne
            </p>
          </div>
          <div className='overflow-hidden relative w-full rounded-lg'>
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
        <div className='flex-1 text-dark flex flex-col items-right'>
          <h2 className='text-right'>Nos réseaux</h2>
          <div className='inline-flex flex-col gap-1 items-end'>
            <a
              className='text-dark flex flex-row items-center'
              href='https://www.instagram.com/artiphysfestival/'
            >
              Instagram
            </a>
            <a
              className='text-dark flex flex-row items-center'
              href='https://www.youtube.com/channel/UCoAJSh63lJc4ZMoQnGyGqCQ'
            >
              Youtube
            </a>
            <a
              className='text-dark flex flex-row items-center'
              href='https://www.linkedin.com/company/artiphys/'
            >
              LinkedIn
            </a>
            <a
              className='text-dark flex flex-row items-center'
              href='https://www.facebook.com/Artiphys'
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-start px-9 pb-1'>
        <p className='font-inkination text-dark uppercase text-[0.8rem]'>
          Site web designé par{' '}
          <a className='text-dark underline' href='https://mateo.tiedra.com/'>
            Mateo Tiedra
          </a>
        </p>
        <p className='font-inkination text-dark uppercase text-[0.8rem]'>
          Copyright © Artiphys 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
