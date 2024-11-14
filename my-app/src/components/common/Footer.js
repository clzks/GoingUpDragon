// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // CSS 파일 import

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <img src={`${process.env.PUBLIC_URL}/images/tplogo2.png`} alt="Footer Logo" className="footer-logo" />
        <span>개인정보처리방침</span>
        <span>이용약관</span>
        <span>이메일: showlee00@gmail.com</span>
        <span>사업자번호: 123-45-67890</span>
      </Container>
    </footer>
  );
};

export default Footer;
