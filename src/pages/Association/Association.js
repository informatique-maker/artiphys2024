import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const TextSection = ({ title, text, light = false }) => (
  <div className='flex flex-col flex-centered max-w-sm '>
    <h3 className='pb-h3 text-center'>{title}</h3>
    <p className='text-center'>{text}</p>
  </div>
);

function Association() {
  return (
    <>
      <Navbar />
      <div className='section-container'>
        <h2 className='pb-h2 text-center'>L'association</h2>
        <p className='text-center'>
          Artiphys est une association étudiante à but non lucratif, et un
          centre culturel dynamique de l'École polytechnique fédérale de
          Lausanne (EPFL). Composée de 28 membres permanents, elle organise
          divers événements tout au long de l'année académique, avec pour moment
          phare le festival Artiphys qui se tiendra en mars 2025.
        </p>
      </div>

      <div className='light-container'>
        <div className='section-container'>
          <h3 className=' pb-h3 text-center'>Notre responsabilité</h3>
          <p className='text-center pb-6'>
            L'environnement est l'affaire de tous. C'est pourquoi, entre autres,
            lors de tous nos événements, toutes les boissons sont servies dans
            des gobelets réutilisables. Aucun artiste ne prend l'avion. Nous
            limitons notre impact. Nous garantissons la SÉCURITÉ de notre
            public. Les membres du personnel sont formés ou spécialisés dans la
            prévention. Des préservatifs Cup sont distribués gratuitement. La
            sécurité est assurée par des services spécialisés. Nous sommes
            jeunes et audacieux. C'est pourquoi nous mettons en avant des
            messages de santé publique. Tous les participants au festival
            doivent signer une charte de comportement approprié, avec une
            politique de tolérance zéro pour tout comportement inapproprié.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Association;
