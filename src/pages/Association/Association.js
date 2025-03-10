import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { HashLink } from 'react-router-hash-link';
import { COMITTEE_MEMBERS } from '../../config/AppConfig';

/* const TextSection = ({ title, text, light = false }) => (
  <div className='flex flex-col flex-centered max-w-sm '>
    <h3 className='pb-h3 text-center'>{title}</h3>
    <p className='text-center'>{text}</p>
  </div>
); */

function Association() {
  console.log('COMITTEE_MEMBERS', COMITTEE_MEMBERS);
  return (
    <>
      <Navbar />
      <div className='section-container'>
        <h2 className='pb-h2 text-center'>L'association</h2>
        <p className='text-center'>
          Artiphys est une association étudiante à but non lucratif, et un
          centre culturel dynamique de l'École polytechnique fédérale de
          Lausanne (EPFL). Composée de 29 membres permanents, elle organise
          divers événements tout au long de l'année académique, avec pour moment
          phare le festival Artiphys qui se tiendra en mars 2025.
        </p>
        <p className='text-center'>
          Les statuts de l'association sont disponibles pour consultation{' '}
          <a href='/pdfs/statuts.pdf' className='underline'>
            juste ici
          </a>
        </p>
      </div>
      <img
        className='md:hidden w-full'
        src='/images/artiteam.png'
        alt='artiteam'
      />
      <img
        className='hidden md:block w-full'
        src='/images/artiteam-banner.png'
        alt='artiteam'
      />
      <div className='section-container'>
        <h2 className='pb-h2 text-center'>Le comité</h2>
        <div className='flex flex-col items-center gap-16'>
          {Object.entries(COMITTEE_MEMBERS).map(([sectionName, members]) => (
            <div>
              <h3 className='pb-h2 text-center'>{sectionName}</h3>
              <div className='inline-flex flex-wrap items-stretch gap-5 md:gap-9 justify-center w-full'>
                {members.map((member) => (
                  <div
                    className='flex flex-col items-center '
                    key={member.name + sectionName}
                  >
                    <img
                      src={member.pic}
                      alt={member.name}
                      className='rounded-md w-48 h-48 object-cover'
                    />
                    <p className='text-center pb-6 pt-4'>
                      <strong>{member.name}</strong>
                      <br />
                      {member.role}
                      <br />
                      <span>
                        <a
                          className='text-sm underline'
                          href={`mailto:${member.email}`}
                        >
                          {member.email}
                        </a>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='light-container'>
        <div className='section-container'>
          <h3 className=' pb-h3 text-center'>Notre responsabilité</h3>
          <p className='text-center pb-6'>
            L'environnement est l'affaire de tout·e·s. C'est pourquoi, entre
            autres, lors de tous nos événements, toutes les boissons sont
            servies dans des gobelets réutilisables. Aucun·e artiste ne prend
            l'avion. Nous limitons notre impact. Nous garantissons la SÉCURITÉ
            de notre public. Les membres du personnel sont formé·e·s ou
            spécialisé·e·s dans la prévention. Des préservatifs Cup sont
            distribués gratuitement. La sécurité est assurée par des services
            spécialisés. Nous sommes jeunes et audacieux·se. C'est pourquoi nous
            mettons en avant des messages de santé publique. Tout·e·s les
            participant·e·s au festival doivent signer une{' '}
            <HashLink to='/prevention' className='underline text-primary'>
              charte de comportement approprié
            </HashLink>
            , avec une politique de tolérance zéro pour tout comportement
            inapproprié.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Association;
