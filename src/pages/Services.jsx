// src/components/ServicesList.jsx
import React from 'react';
import services from '../../src/mock/services.json';
import ServiceBox from '../components/ServicesBox/ServicesBox';

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 m-3'>
      <h1 className='text-2xl font-bold'>HİZMETLERİMİZ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
        {services.map(service => (
          <ServiceBox key={service.id} {...service} />
        ))}
      </div>
    </div>

  );
};

export default Services;
