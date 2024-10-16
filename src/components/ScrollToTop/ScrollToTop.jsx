// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa değişikliklerinde kaydırma işlemi yap
    document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Tarayıcının geri veya ileri hareketlerini dinle ve kaydırma işlemini yap
    const onPopState = () => {
      document.documentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Popstate olayını dinle
    window.addEventListener("popstate", onPopState);

    // Temizleme işlemi
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
