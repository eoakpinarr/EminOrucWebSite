// src/components/ImageSlider.js
import React from 'react';
import './Slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Image1 from '../../assets/images/SlideImages/1-1.png'
import Image3 from '../../assets/images/SlideImages/3.jpg'


const Slider = () => {
    const images = [
        Image1,
        Image3,
    ];

    return (
        <div className="slider-container 2xl:mb-40 mb-10"> {/* Slider container ile sarıyoruz */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop={true}
                slidesPerView={1} // veya ihtiyaca göre ayarla
                slidesPerGroup={1} // veya ihtiyaca göre ayarla
                speed={3000}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Slider;
