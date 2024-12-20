// GoingUpDragon/my-app/src/components/common/button/FindAndSignUpLinkButtons.jsx

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const LinkButtons = () => {
  return (
    <StyledCenterRow>
      <Col xs={4} md={4}>
        <StyledLinkButton>ID(e-mail) 찾기</StyledLinkButton>
      </Col>
      <Col xs={4} md={4}>
        <StyledLinkButton>Password 찾기</StyledLinkButton>
      </Col>
      <Col xs={4} md={4}>
        <StyledLinkButton>회원가입</StyledLinkButton>
      </Col>
    </StyledCenterRow>
  );
};

export default LinkButtons;

// 링크 버튼 스타일 정의 (ID 찾기, 비밀번호 찾기, 회원가입)
const StyledLinkButton = styled.button`
  background: transparent;
  font-size: 1em;
  border: none;
  border-bottom: 2px solid green; 
  color: black;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

// 링크 버튼과 같은 행에 배치된 행 스타일 정의
const StyledCenterRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
