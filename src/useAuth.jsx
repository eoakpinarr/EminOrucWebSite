// useAuth.js
import { useEffect, useState } from 'react';
import { auth } from './firebase'; // Firebase yapılandırmanıza göre güncelleyin
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Yüklenme durumu ekleyelim

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Kullanıcı durumu alındı, yüklenmeyi durdur
    });

    return () => unsubscribe();
  }, []);

  return { user, loading }; // Yüklenme durumunu döndür
};