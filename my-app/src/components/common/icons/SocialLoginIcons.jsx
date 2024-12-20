// GoingUpDragon/my-app/src/components/commonicons/SocialLoginIcons.jsx
import React from 'react';
import styled from 'styled-components';

// GoingUpDragon/my-app/src/components/common/icons/..
import GoogleIcon from './GoogleIcon'; 
import NaverIcon from './NaverIcon'; 


const SocialLoginIcons = () => (
  <StyledIconWrapper>
    <StyledLoginIcon as={GoogleIcon} />
    <StyledLoginIcon as={NaverIcon} />
  </StyledIconWrapper>
);

export default SocialLoginIcons;

/* 스타일 정의 */
const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
`;

const StyledLoginIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
