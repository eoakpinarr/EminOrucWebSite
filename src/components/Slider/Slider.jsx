import React from 'react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image1 from '../../assets/images/SlideImages/1.webp';
import Image2 from '../../assets/images/SlideImages/3-2.webp';

const Slider = () => {

    return (
        <div className="slider-container mb-10">
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                modules={[Autoplay]}
                loop={true}
                speed={3000}
                autoplay={{ delay: 1000 }}
            >
                <SwiperSlide>
                    <img src={Image1} alt="Avukat Muhammed Emin ORUÇ" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} alt="ORUÇ Hukuk & Danışmanlık" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
