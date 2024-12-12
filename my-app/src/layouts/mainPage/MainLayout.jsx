// GoingUpDragon/my-app/src/layouts/mainPage/MainLayout.jsx
import React from "react";

// 외부 라이브러리
import { Container } from "react-bootstrap";

// GoingUpDragon/my-app/src
import Layout from "../../components/common/layout/Layout";
import TwoGrids from "../../components/mainPage/TwoGrids";
import MainCards from "../../components/mainPage/MainCards";
import MainCardsPick from "../../components/mainPage/MainCardsPick";

const MainLayout = () => {
  return (
    <Layout>
      <Container className="my-4">
        <TwoGrids />
      </Container>
      <Container className="my-4">
        <MainCards />
        <MainCardsPick />
      </Container>
    </Layout>
  );
};

export default MainLayout;
