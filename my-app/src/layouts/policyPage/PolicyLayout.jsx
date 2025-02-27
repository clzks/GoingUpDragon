// GoingUpDragon/my-app/src/layouts/policyPage/PolicyLayout.jsx

// 외부 라이브러리
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/common/layout/Header";
import Footer from "../../components/common/layout/Footer";
// GoingUpDragon/my-app/src/components/policyPage/..
import TermsContent from "../../components/policyPage/TermsContent";
import PrivacyContent from "../../components/policyPage/PrivacyContent";

//  컴포넌트 정의
const ControlledTabs = () => {
  const [activeKey, setActiveKey] = useState("terms");

  // 탭 변경 시 호출되는 함수
  function handleSelect(selectedKey) {
    setActiveKey(selectedKey);
  }

  return (
    <>
      <Header></Header>
      <Container>
        <StyledTabs
          id="controlled-tab-example" // 탭의 고유 ID
          activeKey={activeKey} // 현재 활성화된 탭 설정
          onSelect={handleSelect} // 탭 선택 시 호출되는 이벤트 핸들러
          className="mb-3" // Bootstrap 기본 마진 클래스
        >
          {/* 이용약관 탭 */}
          <Tab
            eventKey="terms" // 탭 고유 키
            title={
              <StyledTabTitle active={activeKey === "terms"}>
                {/* 탭 제목 스타일 적용 */}
                이용약관
              </StyledTabTitle>
            }
          >
            <TermsContent />
          </Tab>

          {/* 개인정보처리방침 탭 */}
          <Tab
            eventKey="privacy" // 탭 고유 키
            title={
              <StyledTabTitle active={activeKey === "privacy"}>
                개인정보처리방침
              </StyledTabTitle>
            }
          >
            <PrivacyContent />
          </Tab>
        </StyledTabs>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ControlledTabs;

// 스타일 컴포넌트 정의

// Tabs 스타일 커스터마이징
const StyledTabs = styled(Tabs)`
  width: 100%;
  background-color: transparent;
  border-radius: 0px;
  border-bottom: 1px solid #ccd5ae; /* 하단 경계선의 색상, 두께 조정 */
  padding: 10px;
  .nav-item .nav-link {
    border: none !important;
    outline: none !important;
  }
  margin: 50px auto; /* 컨테이너에 맞춰 중앙 정렬 */
`;

// 탭 제목 스타일 정의
const StyledTabTitle = styled.span`
  font-size: ${({ active }) =>
    active ? "1.2em" : "1em"}; /*활성화된 탭과 비활성 탭의 글꼴 크기 설정*/
  color: ${({ active }) =>
    active ? "purple" : "black"}; /* 활성화된 탭과 비활성 탭의 색상 설정*/
  transition: all 0.3s ease; /*색상 및 크기 변경 시 애니메이션 효과*/
  cursor: pointer; /*마우스를 올렸을 때 포인터 커서 표시*/

  &:hover {
    color: purple; /*마우스를 올렸을 때 탭 제목 색상을 보라색으로 변경*/
  }
`;
