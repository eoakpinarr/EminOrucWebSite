import React from 'react';

const GoogleMapLocation = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6135.334569321904!2d39.498346!3d39.747124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40700de17c08a883%3A0xa0e22d88655834da!2zRVJaxLBOQ0FOIEFWVUtBVC9Bvi5NdWhhbW1lZCBFbWluIE9SVcOHL09SVcOHIEh1a3VrJkRhbsSxxZ9tYW5sxLFr!5e0!3m2!1str!2str!4v1728593963116!5m2!1str!2str"
        style={{
          width: '100%',
          height: '50%',
          border: '0',
          borderRadius: '20px'
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapLocation;