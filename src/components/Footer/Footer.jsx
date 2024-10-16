import React from "react";
import GoogleMapLocation from "../GoogleMap/GoogleMapLocation";

const Footer = () => {
    return (
        <footer className="text-white py-4 px-4 bg-[#003366] lg:px-8 mt-auto">
            {/* Responsive düzen için grid ayarları */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* İletişim Bilgileri */}
                <div className="flex flex-col mx-auto">
                    <h3 className="text-md 2xl:text-lg font-semibold mb-2 text-center">İletişim Bilgileri</h3>
                    <div className="w-full h-[0.5px] bg-gray-300"></div> <br />
                    <a href="tel:+905539453524"><p className="text-sm 2xl:text-base mb-2">Telefon: +90 (553) 945 35 24</p></a>
                    <a href="mailto:av.muhammedeminoruc@hotmail.com"><p className="text-sm 2xl:text-base mb-2">Email: av.muhammedeminoruc@hotmail.com</p></a>
                    <a href="https://maps.app.goo.gl/eHgXyK4uDKwRtpM87"><p className="text-sm 2xl:text-base">Adres: Atatürk Mah. Nermi Tombul Cd. Yüzüncüyıl İş Merkezi Kat:3 No:302 Merkez / ERZİNCAN</p></a>
                </div>

                {/* Konum Yönlendirme Haritası */}
                <div className="text-center">
                    <h3 className="font-semibold mb-2 text-md 2xl:text-lg">Konum</h3>
                    <div className="w-full h-[0.5px] bg-gray-300"></div> <br />
                    <div className="rounded-md">
                        <GoogleMapLocation />
                    </div>
                </div>

                {/* Sosyal Medya Linkleri */}
                <div className="text-center">
                    <h3 className="font-semibold mb-2 text-md 2xl:text-lg">Sosyal Medya</h3>
                    <div className="w-full h-[0.5px] bg-gray-300"></div> <br />
                    <div className="md:display grid grid-cols-2 xl:grid-cols-4">
                        {/* Instagram Linki */}
                        <a href="https://www.instagram.com/oruchukukburosu/" target="_blank" rel="noopener noreferrer">
                            <div className="flex gap-2 items-center text-center text-sm 2xl:text-lg mb-2">
                                <i className="fab fa-instagram flex" />
                                <p className="">Instagram</p>
                            </div>
                        </a>

                        {/* Mail Linki */}
                        <a href="https://www.facebook.com/profile.php?id=61550591340730&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <div className="flex gap-2 items-center text-center text-sm 2xl:text-lg mb-2">
                                <i className="fab fa-facebook flex" />
                                <p className="">Facebook</p>
                            </div>
                        </a>

                        {/* WhatsApp Linki */}
                        <a href="https://wa.me/905539453524" target="_blank" rel="noopener noreferrer">
                            <div className="flex gap-2 items-center text-center text-sm 2xl:text-lg mb-2">
                                <i className="fab fa-whatsapp flex" />
                                <p className="">WhatApp</p>
                            </div>
                        </a>

                        {/* Mail Linki */}
                        <a href="mailto:av.muhammedeminoruc@hotmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="flex gap-2 items-center text-center text-sm 2xl:text-lg mb-2">
                                <i className="fas fa-envelope flex" />
                                <p className="">Mail</p>
                            </div>
                        </a>
                    </div>
                </div>



            </div>

            {/* Hukuki Uyarılar ve Telif Hakkı */}
            <div className="mt-2 text-center border-t border-gray-700 pt-2">
                <p className="text-sm mt-2">&copy; 2024 Oruç Hukuk ve Danışmanlık. Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;