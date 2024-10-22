import React, { useEffect } from 'react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image1 from '../../../public/assets/SlideImages/1.webp';
import Image2 from '../../../public/assets/SlideImages/3-2.webp';

const Slider = () => {
    useEffect(() => {
        const preloadImages = () => {
            const img1 = new Image();
            const img2 = new Image();
            img1.src = Image1;
            img2.src = Image2;
        };

        preloadImages();
    }, []);

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
                    <img src={Image2} alt="ORUÇ Hukuk & Danışmanlık" loading="lazy"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
