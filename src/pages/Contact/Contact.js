import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { PARTNERS_LINKS } from '../../config/AppConfig';

function Partners() {
  return (
    <>
      <Navbar />
      <div className='section-container flex-centered'>
        <h2 className='pb-h2 text-center'>Nous contacter</h2>
        <p className='text-center pb-8'>
          Besoin de parler à Artiphys?
          <h3 className='text-center sm:text-left'>
            <a
              href='mailto:contact@artiphys.ch'
              className='text-inherit hover:text-primary '
            >
              contact@artiphys.ch
            </a>
          </h3>
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mx-auto'>
          <div>
            <h4 className='mt-2 text-center sm:text-left'>
              Festival Artiphys
              <br />
              Station 3 - EPFL
              <br />
              1015 Lausanne
            </h4>
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
      </div>
      <Footer light />
    </>
  );
}

export default Partners;
