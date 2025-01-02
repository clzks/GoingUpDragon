import React, { useState } from "react";
import Layout from "../../components/common/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/myPage/Menu/Sidebar";
import Home from "../../components/myPage/Menu/Home";
import Dashboard from "../../components/myPage/Menu/Dashboard";
import MyAllLecture from "../../components/myPage/Menu/MyAllLecture";
import Cart from "../../components/myPage/Menu/Cart";
import PurchaseHistory from "../../components/myPage/Menu/PurchaseHistory";
import MyInfo from "../../components/myPage/Menu/MyInfo";
import Like from "../../components/myPage/Menu/Like";

const MyPageLayout = () => {
  const [selectedMenu, setSelectedMenu] = useState("홈");

  const renderContent = () => {
    switch (selectedMenu) {
      case "홈":
        return <Home />;
      case "대시보드":
        return <Dashboard />;
      case "내 강의":
        return <MyAllLecture />;
      case "좋아요":
        return <Like />;
      case "장바구니":
        return <Cart />;
      case "구매내역":
        return <PurchaseHistory />;
      case "내 정보":
        return <MyInfo />;
      default:
        return <Home />;
    }
  };

  // 스타일 정의
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: 1,
      overflowY: "auto",
    },
    sidebar: {
      padding: 0,
    },
  };

  return (
    <Layout>
      <Container style={styles.container}>
        <Row>
          <Col xs={3} style={styles.sidebar}>
            <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
          </Col>
          <Col xs={9} style={styles.content}>
            <Container>{renderContent()}</Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default MyPageLayout;

