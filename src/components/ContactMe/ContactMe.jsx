import React, { useState } from 'react';
import './ContactMe.css'; // CSS dosyasını dahil edin

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+905539453524'; // Telefon numarası
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905539453524', '_blank'); // WhatsApp linki
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/dw32qx8AnM1SscBb9', '_blank'); // Konum linki
  };

  return (
    <div className="contact-button-container">
      <div className={`contact-options ${isOpen ? 'open' : ''}`}>
        <button onClick={handlePhoneClick}>Telefonla Ara</button>
        <button onClick={handleWhatsAppClick}>WhatsApp</button>
        <button onClick={handleLocationClick}>Konum Tarifine Git</button>
      </div>
      <button className="contact-button" onClick={toggleMenu}>
        Bize Ulaşın
      </button>
    </div>
  );
};

export default ContactMe;