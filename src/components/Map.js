import React from 'react';

const Map = () => {
  // Use the place's URL or coordinates in place of YOUR_LOCATION_HERE
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1372.6814978496752!2d6.567644515365324!3d46.520718369250005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sch!4v1726155622400!5m2!1sen!2sch"


  return (
    <div
      className='overflow-hidden max-w-[200px] relative w-full radius-lg'
    >
      <iframe
        title='Google Map'
        className='w-full h-[200px]'
        src={mapSrc}
        style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden='false'
        tabIndex='0'
      />
    </div>
  );
};

export default Map;
