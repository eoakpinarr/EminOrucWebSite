import React from 'react'
import EminOruc2 from '../../assets/images/emin-oruc2.webp'
import './PersonalInfo.css'

const PersonalInfo = () => {

    return (
        <section className="about-me-section">
            <div className="about-container">
                <div className="legal500 mb-5">
                    <img src={EminOruc2} alt="Avukat Muhammed Emin ORUÇ" loading="lazy"/>
                </div>
                <div className="about-content">
                    <h2>Hakkımda</h2>
                    <p>
                        <strong>Avukat Muhammed Emin ORUÇ,</strong> 07/06/1999 yılında Erzincan’da doğmuş
                        olup ilkokul, ortaokul ve lise eğitimini Erzincan’da tamamladıktan sonra
                        Dokuz Eylül Üniversitesi Hukuk Fakültesini 2021 yılında bitirmiştir. <br /> <br />
                        05/04/2023 yılından itibaren Erzincan’da ORUÇ HUKUK & DANIŞMANLIK
                        bürosu çatısı altında Erzincan’da ve Türkiye’nin 81 ilinde hukuki hizmet
                        vermektedir. <br /> <br />
                        Mesleki hizmet olarak, Ceza Hukuku, Aile Hukuku, Miras Hukuku, İş
                        Hukuku, Sigorta Hukuku ve diğer birçok alanda müvekkillerine etkin, çözüm
                        ve sonuç odaklı hizmet vermektedir.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PersonalInfo;


