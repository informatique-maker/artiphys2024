import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { PARTNERS_LINKS } from '../../config/AppConfig';

function Partners() {
  return (
    <>
      <Navbar />
      <div className='section-container'>
        <h2 className='pb-h2 text-center'>Nos Partenaires</h2>
        <div className='inline-flex flex-wrap items-stretch gap-3 justify-around'>
          {PARTNERS_LINKS.map((partner) => (
            <a
              href={partner.url}
              className='px-4 flex items-center rounded-lg h-32 bg-base'
              style={{ backgroundColor: partner.color || '' }}
              key={partner.url}
            >
              <img src={partner.src} alt='partner' width={200} />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Partners;
