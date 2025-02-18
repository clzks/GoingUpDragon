import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/common/layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import SidebarStudent from "../../components/myPage/Sidebar/SidebarStudent";
import HomeStudent from "../../components/myPage/Student/HomeStudent";
import Dashboard from "../../components/myPage/Student/Dashboard";
import MyAllLectureStudent from "../../components/myPage/Student/MyAllLectureStudent";
import Cart from "../../components/myPage/Student/Cart";
import PurchaseHistory from "../../components/myPage/Student/PurchaseHistory";
import MyInfo from "../../components/myPage/Student/MyInfo";
import Like from "../../components/myPage/Student/Like";
import ScrollTopButton from "../../components/common/utilities/ScrollTopButton";

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

  return (
    <Layout>
      <StyledContainer>
        <Row>
          <StyledSidebar xs={3}>
            <SidebarStudent selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
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

export default MyPageLayoutStudent;

// 스타일 정의
const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled(Col)`
  flex: 1;
  overflow-y: auto;
`;

const StyledSidebar = styled(Col)`
  padding: 0;
`;
