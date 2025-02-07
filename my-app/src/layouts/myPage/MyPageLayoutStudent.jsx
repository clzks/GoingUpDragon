import React, { useState } from "react";
import Layout from "../../components/common/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SidebarStudent from "../../components/myPage/Menu/SidebarStudent";
import HomeStudent from "../../components/myPage/Menu/HomeStudent";
import Dashboard from "../../components/myPage/Menu/Dashboard";
import MyAllLectureStudent from "../../components/myPage/Menu/MyAllLectureStudent";
import Cart from "../../components/myPage/Menu/Cart";
import PurchaseHistory from "../../components/myPage/Menu/PurchaseHistory";
import MyInfo from "../../components/myPage/Menu/MyInfo";
import Like from "../../components/myPage/Menu/Like";
import ScrollTopButton from "../../components/common/utilities/ScrollTopButton"

const MyPageLayoutStudent = () => {
  const [selectedMenu, setSelectedMenu] = useState("홈");

  const renderContent = () => {
    switch (selectedMenu) {
      case "홈":
        return <HomeStudent />;
      case "대시보드":
        return <Dashboard />;
      case "내 강의":
        return <MyAllLectureStudent />;
      case "좋아요":
        return <Like />;
      case "장바구니":
        return <Cart />;
      case "구매내역":
        return <PurchaseHistory />;
      case "내 정보":
        return <MyInfo />;
      default:
        return <HomeStudent />;
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
            <SidebarStudent selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
          </Col>
          <Col xs={9} style={styles.content}>
            <Container>{renderContent()}</Container>
          </Col>
        </Row>
      </Container>
      <ScrollTopButton />
    </Layout>
  );
};

export default MyPageLayoutStudent;

