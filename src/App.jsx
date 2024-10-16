import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import ServicesDetail from './pages/ServicesDetail';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactMe from './components/ContactMe/ContactMe';
import BlogPage from './pages/Admin/BlogPage';
import CreateArticle from './pages/Admin/CreateArticles';
import ArticleDetail from './pages/Admin/ArticleDetail';
import Login from './pages/Admin/Login';
import Register from './pages/Admin/Register';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router basename="/">
        <ScrollToTop />
        <Navbar />
        <ContactMe />
        <main className='flex-grow'>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/hizmet-detayları" element={<ServicesDetail />} />
            <Route path="/hizmetlerimiz/:title" element={<ServicesDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/blog' element={<BlogPage />} />
            {/* Makale detayları herkese açık */}
            <Route path="/article/:id" element={<ArticleDetail />} />

            {/* Sadece giriş yapmış kullanıcılar için */}
            <Route path="/create" element={<PrivateRoute><CreateArticle /></PrivateRoute>} />
            <Route path="/edit/:id" element={<PrivateRoute><ArticleDetail /></PrivateRoute>} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
