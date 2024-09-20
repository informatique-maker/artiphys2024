import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const TextSection = ({ title, text, light = false }) => (
  <div className='flex flex-col flex-centered max-w-sm '>
    <h3 className='pb-h3 text-center'>{title}</h3>
    <p className='text-center'>{text}</p>
  </div>
);

function Prevention() {
  return (
    <>
      <Navbar />
      <div className='section-container'>
        <h2 className='pb-h2 text-center'>Prévention</h2>
        <p className='text-center'>
          L'association Artiphys a comme but de promouvoir le respect au sein de
          ses événements et dans l'association.
        </p>
      </div>

      <div className={'section-container light-container'}>
        <h3 className=' pb-h3 text-center'>RESPECT EN MILIEU FESTIF</h3>
        <p className='text-center pb-6'>
          En entrant ou en staffant sur le festival, je m’engage à avoir pris
          connaissance, à accepter et respecter les chartes de conduite
          respectueuse disponibles ci-dessous.
        </p>
        <div className='flex gap-5 flex-wrap justify-center'>
          <div className='flex-centered'>
            <p className='pb-2'>Charte Festivaliers</p>
            <iframe
              src={'/pdfs/charte_festivaliers.pdf'}
              width='350px'
              height='450px'
              style={{ border: 'none' }}
              title='Charte Festivaliers'
            />
          </div>
          <div className='flex-centered'>
            <p className='pb-2'>Charte Staffs</p>
            <iframe
              src={'/pdfs/charte_staff.pdf'}
              width='350px'
              height='450px'
              style={{ border: 'none' }}
              title='Charte Staffs'
            />
          </div>
        </div>
        <p className='text-center pt-6'>
          Pourquoi ces chartes ? À Artiphys, nous considérons qu’il est
          essentiel que chacun·x·e puisse profiter de son temps sur le site du
          festival en se sentant safe et respecté·x·e. Pour cette raison, nous
          ne tolérons aucune sorte de discrimination ou de violence physique,
          sexiste ou sexuelle, et avons mis en place différentes mesures pour
          faire d’Artiphys un espace inclusif et bienveillant.
        </p>
      </div>
      <div>
        <div className='section-container many-cell-wrapper'>
          <TextSection
            title='Charte Festivalier·ère·x·s'
            text="Ces chartes exposent des principes de respect de l’autre, et ont pour but que les personnes participant à l’évènement s'engagent à en respecter les principes."
          />
          <TextSection
            title='Représentation'
            text="Sur nos moyens de communication, nous faison attention à représenter un panel de genres et d'ethnies diverses sur ce que nous postons."
          />
          <TextSection
            title='Language inclusif'
            text="Lors de notre communication, nous utilisons l’écriture inclusive pour nos communications extérieures afin d'encourager la diversité de notre public, de nos artistes ou de nos staffs."
          />
          <TextSection
            title='Sensibilisation du public'
            text='Nous comptons sensibiliser le public aux notions de consentement, de respect, et aux réalités des violences ou harcèlement sexistes et sexuels grâce à des visuels reprenant les points de la charte festivalier·ère·x·s affichés dans l’enceinte du festival.'
          />
        </div>
      </div>
      <div className='light-container'>
        <div className='section-container many-cell-wrapper'>
          <TextSection
            title='Engagement comité et staffs'
            text='Les membres du comité ainsi que les staffs vont suivre la formation de prévention donnée par Consentis. Tous·x·tes les staffs auront également une formation prévention plus ou moins détaillée selon leur rôle pendant le festival, pour être en capacité d’agir correctement en cas de nécessité. Les staffs devront tous·x·tes signer une charte similaire à l’engagement comité et la charte festivalier·x·ères.'
          />
        </div>
      </div>
      <div id='festiprev'>
        <div className='section-container many-cell-wrapper'>
          <h2 className='pb-h2 text-center'>Mesures lors du festival</h2>
          <div className='many-cell-wrapper'>
            <TextSection
              title='Safe zone'
              text="Géré par des personnes qualifiées de l'EPFL."
            />
            <TextSection
              title='Cocktails'
              text='Système de cocktails d’alerte, pouvant être commandé au bar pour signaler un danger ou des situations de harcèlement.'
            />
            <TextSection
              title='Staff préventions'
              text='Une équipe de staff prévention, ainsi que des staffs sécurité, qui auront suivi la formation dispensée par l’association Consentis, seront présents à notre festival.'
            />
            <TextSection
              title='Eclairage'
              text='Nous sommes en train d’étudier les endroits qui nécessitent un éclairage plus prononcé sur site. Un éclairage réfléchi peut permettre de mieux repérer les situations d’agression mais aussi de les dissuader.'
            />
            <TextSection
              title='Stand de prévention'
              text='Nightlife Vaud met à disposition des stands de prévention lors de notre festival. Le stand tenu par des personnes formées met à disposition du matériel pour informer et discuter avec le public des risques liés à une consommation de substances psychoactives et de la santé sexuelle.'
            />
            <TextSection
              title='Protège-verre'
              text='Permet de réduire le risque d’intrusion de substances illicites dans un verre ainsi que les renversements de la boisson lors d’évènements festifs. Le capuchon est lavable et réutilisable jusqu’à 100 fois. '
            />
            <TextSection
              title='Protections hygiéniques'
              text="Nous souhaitons mettre à disposition un certain nombre de protections hygiéniques dans les toilettes. Le but étant de s'assurer que personne n'est exclu·x·e ou mis·x·e dans l'inconfort en raison d'un manque d'options hygiéniques. "
            />
            <TextSection
              title='Pansements ampoules'
              text='Le festival étant long et animé, nous souhaiterions proposer à ceux·x·celles qui souffrent d’ampoules, des pansements prévus à cet effet, afin qu’iels puissent profiter pleinement de leur soirée sans ce désagrément. '
            />
            <TextSection
              title='Retour des festivalier·ère·x·s'
              text='Afin de permettre au festivalier·ère·x·s de rentrer chez elles·eux après la fin des derniers transports en commun, nous organisons un système de navettes. '
            />
          </div>
        </div>
      </div>

      <Footer light />
    </>
  );
}

export default Prevention;
