import React from 'react';
import GoogleMapLocation from '../components/GoogleMap/GoogleMapLocation';

const Contact = () => {

  return (
    <div className='flex flex-col justify-center w-screen items-center p-10'>
      <div className='text-white w-full flex flex-col items-center mx-auto'>
        {/* Bizi Arayın butonunu ortalamak için justify-center kullanıldı */}
        <div className='bg-[#003366] p-5 m-5 w-full flex justify-center'>
          <a href="tel:+905539453524" className="flex flex-col items-center gap-5">
            <div className='flex items-center gap-5'>
              <i className="fa-solid fa-phone"></i>
              <b className='text-md'>Bizi Arayın</b> <hr />
            </div>
            <b className='text-md'>+90 (553) 945 35 24</b>
          </a>
        </div>

        {/* Bizi Arayın butonunu ortalamak için justify-center kullanıldı */}
        <div className='bg-[#003366] p-5 m-5 w-full flex items-center justify-center'>
          <a href="https://maps.app.goo.gl/eHgXyK4uDKwRtpM87" className='flex flex-col items-center gap-5'>
            <div className='flex items-center gap-5'>
              <i class="fas fa-map"></i>
              <b className='text-md'>Yol Tarifi Alın</b>
            </div>
            <p>
              Adres: Atatürk Mah. Nermi Tombul Cd. Yüzüncüyıl İş Merkezi Kat:3 No:302 Merkez / ERZİNCAN
            </p>
          </a>
        </div>

        {/* Harita genişlik ve yükseklik ayarları */}

        <div className="w-full h-[30vh] md:h-[80vw] lg:h-[60vh] lg:w-[80vw]">

          <a href="https://maps.app.goo.gl/eHgXyK4uDKwRtpM87">
            <GoogleMapLocation />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;