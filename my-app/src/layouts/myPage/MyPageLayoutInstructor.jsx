import React, { useState } from "react";
import Layout from "../../components/common/layout/Layout";
import SidebarInstructor from "../../components/myPage/Menu/SidebarInstructor";
import { Container, Row, Col } from "react-bootstrap";
import HomeInstructor from "../../components/myPage/Menu/HomeInstructor";
import ReviewInstructor from "../../components/myPage/Menu/ReviewInstructor";
import MyAllLectureInstructor from "../../components/myPage/Menu/MyAllLectureInstructor";
import QnA from "../../components/myPage/Menu/QnA";
import ScrollTopButton from "../../components/common/utilities/ScrollTopButton";

const MyPageLayoutInstructor = () => {
  const [selectedMenu, setSelectedMenu] = useState("홈");

  const renderContent = () => {
    switch (selectedMenu) {
      case "홈":
        return <HomeInstructor />;
      case "내 강의":
        return <MyAllLectureInstructor />;
      case "수강평":
        return <ReviewInstructor />;
      case "Q&A":
        return <QnA />;
      default:
        return <HomeInstructor />;
    }
  };

  // 스타일 정의
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
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
            <SidebarInstructor
              selectedMenu={selectedMenu}
              onMenuSelect={setSelectedMenu}
            />
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

export default MyPageLayoutInstructor;
