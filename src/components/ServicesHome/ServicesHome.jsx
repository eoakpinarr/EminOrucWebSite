import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import services from '../../mock/services.json';
import ServiceBox from '../../components/ServicesBox/ServicesBox';

const ServicesHome = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(1); // Başlangıçta küçük ekran için 1

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1); // Küçük ekranlar için 1
            } else if (window.innerWidth < 1025) {
                setItemsToShow(2); // Orta ekranlar için 2
            } else if (window.innerWidth < 1280) {
                setItemsToShow(3); // Büyük ekranlar için 3
            } else {
                setItemsToShow(4); // XL ekranlar için 4
            }
        };

        handleResize(); // İlk render'da kontrol et
        window.addEventListener('resize', handleResize); // Ekran boyutu değişimini takip et
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextService = () => {
        setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % services.length);
    };

    const prevService = () => {
        setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + services.length) % services.length);
    };

    return (
        <div className="flex flex-col items-center mt-5 max-w-[1200px] mx-auto py-5 px-10">
            <h2 className="text-4xl mb-4">Hizmetlerimiz</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 w-full">
                {services.slice(currentIndex, currentIndex + itemsToShow).map((service) => (
                    <div className='col-span-1' key={service.id}>
                        <ServiceBox
                            title={service.title}
                            image={service.image}
                            id={service.id}
                        />
                    </div>
                ))}
            </div>

            <div className="flex mt-4">
                <button onClick={prevService} className="p-2 text-xl text-gray-500 hover:text-gray-900">
                    <FaArrowLeft />
                </button>
                <button onClick={nextService} className="p-2 text-xl text-gray-500 hover:text-gray-900">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ServicesHome;