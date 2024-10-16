// Register.jsx
import React, { useState } from 'react';
import { auth } from '../../firebase'; // Firebase yapılandırmanızı içe aktarın
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Stillerinizi eklemek için bir CSS dosyası oluşturabilirsiniz

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Kayıt başarılıysa yönlendir
    } catch (error) {
      console.error('Kayıt hatası: ', error);
      setError('Kayıt işlemi sırasında bir hata oluştu. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <div className="login-container"> {/* Burayı register-container yerine login-container yapın */}
      <h2>Kayıt Ol</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input
            className='p-2'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-posta adresinizi girin"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre:</label>
          <input
            className='p-2'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Şifrenizi girin"
          />
        </div>
        <button type="submit" className="login-button">Kayıt Ol</button> {/* Burayı register-button yerine login-button yapın */}
      </form>
      <p className="login-link">
        Zaten bir hesabınız var mı? <a href="/login">Giriş Yapın</a>
      </p>
    </div>
  );
};

export default Register;