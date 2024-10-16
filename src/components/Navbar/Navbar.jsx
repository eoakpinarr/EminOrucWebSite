import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firebase'; // Firebase ayarlarınıza göre düzenleyin
import { signOut } from "firebase/auth";
import ResponsiveMenu from "./ResponsiveMenu";
import './Navbar.css'
const Navbar = () => {
    const [open, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!open);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/'); // Çıkış yaptıktan sonra anasayfaya yönlendirin
        } catch (error) {
            console.error('Çıkış yaparken hata:', error);
        }
    };

    return (
        <header className="w-full bg-white shadow-lg overflow-x-hidden">
            <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
                {/* Left side - logo */}
                <div>
                    <a href="/" className="flex">
                        <div>
                            <h1 className="font-bold text-center text-[#C69320] text-2xs sm:text-sm">AVUKAT</h1>
                            <h1 className="font-bold text-[#C69320] text-2xs sm:text-sm">Muhammed Emin ORUÇ</h1>
                        </div>
                        <div className="w-[1px] h-auto bg-black mx-2 sm:mx-4" />
                        <div>
                            <h1 className="font-bold text-center text-2xs sm:text-sm">ORUÇ</h1>
                            <h1 className="font-bold text-2xs sm:text-sm">Hukuk ve Danışmanlık</h1>
                        </div>
                    </a>
                </div>

                {/* Center side - links (only visible on larger screens) */}
                <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 mx-auto font-semibold uppercase">
                    <Link to="/" className="text-gray-600 hover:text-gray-900">ANA SAYFA</Link>
                    <Link to="/about" className="text-gray-600 hover:text-gray-900">Hakkımda</Link>
                    <Link to="/hizmetlerimiz" className="text-gray-600 hover:text-gray-900">Hizmetlerimiz</Link>
                    <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-gray-900">İletişim</Link>
                </div>

                {/* Right side - social media icons and menu button */}
                <div className="flex items-center space-x-4">
                    <a href="https://www.instagram.com/oruchukukburosu/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                        <i className="fab fa-instagram w-5 h-5 hidden md:flex" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61550591340730&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                        <i className="fab fa-facebook w-5 h-5 hidden md:flex" />
                    </a>

                    {/* Menu button for small screens */}
                    <button onClick={toggleMenu} className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden bg-white border-t border-gray-200" onClick={() => setIsOpen(!open)}>
                    <ResponsiveMenu open={open}/>
                </div>
            )}
        </header>
    );
};

export default Navbar;
