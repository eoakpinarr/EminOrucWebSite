import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBox = ({ title, image, id }) => {

    const formatTitleForURL = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-'); // Converts spaces to dashes and makes it lowercase
    };

    
    return (
        <Link to={`/hizmetlerimiz/${formatTitleForURL(title)}`} className="service-box">
            <div className="relative bg-cover bg-center rounded-lg shadow-lg text-center p-6 h-48 md:h-64 w-48 md:w-60 flex flex-col 
            justify-center items-center hover:shadow-xl transition-shadow duration-300" 
            style={{ backgroundImage: `url(${image})`, width:'100%' }}>
                <h3 className="relative text-white text-3xl font-semibold mb-4 z-10 text-shadow">{title}</h3>
                <div className="relative z-10 text-center mt-3">
                        <button className="relative text-shadow z-10 border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
                            DETAYLI BİLGİ
                        </button>
                </div>
            </div>
        </Link>
    );
};

export default ServiceBox;
