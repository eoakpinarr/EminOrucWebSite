// Login.jsx
import React, { useState } from 'react';
import { auth } from '../../firebase'; // Firebase yapılandırmanızı içe aktarın
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Stillerinizi eklemek için bir CSS dosyası oluşturabilirsiniz

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun!');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Giriş başarılıysa yönlendir
    } catch (error) {
      console.error('Giriş hatası: ', error);
      setError('Giriş işlemi sırasında bir hata oluştu. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="login-button">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
