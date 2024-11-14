// Layout.js
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // 추가된 스타일 파일 import

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          Top
        </button>
      )}
    </>
  );
};

export default Layout;
