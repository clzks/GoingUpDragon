import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.scrollY > 300;
      setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? <StyledScrollTop onClick={scrollToTop}>▲</StyledScrollTop> : null;
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 18px;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }
`;

export default ScrollTopButton;
