// GoingUpDragon/my-app/src/components/signUpPage/SignupButton.jsx
import React from 'react';
import styled from 'styled-components';

const SignupButton = ({ onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    회원가입
  </StyledButton>
);

export default SignupButton;

/* 스타일 정의 */
const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #8a2be2;
  border-radius: 5px;
  color: white;
  border: none;
  margin-top: 40px;
  &:hover {
    background-color: darkviolet;
  }
  &:focus {
    outline: none;
  }
`;
