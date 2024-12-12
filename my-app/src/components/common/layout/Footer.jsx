// GoingUpDragon/my-app/src/components/common/layout/Footer.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterLogo
          src={`${process.env.PUBLIC_URL}/images/tplogo2.png`}
          alt="Footer Logo"
        ></StyledFooterLogo>
        <span>개인정보처리방침</span>
        <span>이용약관</span>
        <span>이메일: showlee00@gmail.com</span>
        <span>사업자번호: 123-45-67890</span>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #7cd0d5;
  padding: 1rem;
  text-align: center;
`;

const StyledFooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem; /* 각 요소 간의 간격 */
  flex-wrap: wrap; /* 작은 화면에서 줄 바꿈 */
`;

const StyledFooterLogo = styled.img`
  width: 150px; /* 이미지 크기 조정 */
  height: auto; /* 비율 유지 */
`;

export default Footer;
