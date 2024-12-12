// GoingUpDragon/my-app/src/components/common/layout/Layout.jsx
import React from "react";

// GoingUpDragon/my-app/src/components/common/layout
import Header from "./Header";
import Footer from "./Footer";

// GoingUpDragon/my-app/src/components/common
import ScrollTopButton from "../utilities/ScrollTopButton";

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
