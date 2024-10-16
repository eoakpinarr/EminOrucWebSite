import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ open }) => {

    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='absolute top-20 left-0 w-full h-full z-20'
                    >
                        <div className='text-xl font-semibold uppercase bg-[#dddd] py-10 m-6 rounded-3xl'>
                            <div className='flex flex-col items-center justify-between gap-10'>
                                <Link to="/" className="block text-black hover:text-red-500">Ana Sayfa</Link>
                                <Link to="/about" className="block text-black hover:text-red-500">Hakkımda</Link>
                                <Link to="/hizmetlerimiz" className="block text-black hover:text-red-500">Hizmetlerimiz</Link>
                                <Link to="/blog" className="block text-black hover:text-red-500">Blog</Link>
                                <Link to="/contact" className="block text-black hover:text-red-500">İletişim</Link>
                                {/**<Link to="/admin" className="block text-black hover:text-red-500">Makale Paylaşımı</Link> */}
                            </div>

                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu