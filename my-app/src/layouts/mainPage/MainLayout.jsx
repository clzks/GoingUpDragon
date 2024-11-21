import React from "react";
import Layout from "../../components/common/layout/Layout"; // 레이아웃 컴포넌트 import
import { Container, Pagination } from "react-bootstrap";
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
