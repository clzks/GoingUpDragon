import React from "react";
import Layout from "../../components/common/Layout"; // 레이아웃 컴포넌트 import
import { Container } from "react-bootstrap";
import TwoGrids from "../../components/common/TwoGrids";
import MainCards from "../../components/common/MainCards";
import MainCardsPick from "../../components/common/MainCardsPick";

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
}

export default MainLayout;
