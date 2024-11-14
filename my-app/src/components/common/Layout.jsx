// Layout.js
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

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

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
      {isVisible && (
        <StyledScrollTop onClick={scrollToTop}>Top</StyledScrollTop>
      )}
    </>
  );
};

const StyledScrollTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  color: gray;
  border: 2px solid gray;
  border-radius: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }
`;

export default Layout;
