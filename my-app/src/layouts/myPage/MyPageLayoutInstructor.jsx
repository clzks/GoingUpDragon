import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/common/layout/Layout";
import SidebarInstructor from "../../components/myPage/Sidebar/SidebarInstructor";
import { Container, Row, Col } from "react-bootstrap";
import HomeInstructor from "../../components/myPage/Instructor/HomeInstructor";
import ReviewInstructor from "../../components/myPage/Instructor/ReviewInstructor";
import MyAllLectureInstructor from "../../components/myPage/Instructor/MyAllLectureInstructor";
import QnA from "../../components/myPage/QnA";
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

  return (
    <Layout>
      <StyledContainer>
        <Row>
          <StyledSidebar xs={3}>
            <SidebarInstructor
              selectedMenu={selectedMenu}
              onMenuSelect={setSelectedMenu}
            />
          </StyledSidebar>
          <StyledContent xs={9}>
            <Container>{renderContent()}</Container>
          </StyledContent>
        </Row>
      </StyledContainer>
      <ScrollTopButton />
    </Layout>
  );
};

export default MyPageLayoutInstructor;

// 스타일 정의
const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledContent = styled(Col)`
  flex: 1;
  overflow-y: auto;
`;

const StyledSidebar = styled(Col)`
  padding: 0;
`;
