// src/components/ImageSlider.js
import React from 'react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image1 from '../../assets/images/SlideImages/1.webp';
import Image2 from '../../assets/images/SlideImages/3-2.webp';

const Slider = () => {
    return (
        <div className="slider-container 2xl:mb-40 mb-10"> {/* Slider container ile sarıyoruz */}
            <Swiper
                slidesPerView={1} // Sadece bir slayt göster
                slidesPerGroup={1} // Gruplama için 1
                modules={[Navigation, Autoplay]}
                navigation
                loop={true} // Döngü modu
                speed={3000} // Geçiş hızı
                autoplay={{ delay: 1000 }} // Otomatik kaydırma
            >
                <SwiperSlide>
                    <img src={Image1} alt="Avukat Muhammed Emin ORUÇ" loading="lazy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} alt="ORUÇ Hukuk & Danışmanlık" loading="lazy"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
