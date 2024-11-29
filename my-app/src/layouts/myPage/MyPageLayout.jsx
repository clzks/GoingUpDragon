import React from "react";
import Layout from "../../components/common/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/myPage/Sidebar";
import Introduction from "../../components/myPage/Introduction";
import AttendingLecture from "../../components/myPage/AttendingLecture";
import MainCards from "../../components/mainPage/MainCards";
import Review from "../../components/myPage/Review";

const MyPageLayout = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={3} style={{ padding: 0 }}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <Container>
              <Introduction />
              <AttendingLecture />
              <Review />
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default MyPageLayout;
