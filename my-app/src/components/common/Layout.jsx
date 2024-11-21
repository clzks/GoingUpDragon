// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";

const Layout = ({ children }) => {
  // 스크롤 이벤트 처리
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
      <ScrollTopButton></ScrollTopButton>
    </>
  );
};

export default Layout;
