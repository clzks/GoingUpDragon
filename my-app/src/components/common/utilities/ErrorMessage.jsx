// GoingUpDragon/my-app/src/components/common/utilities/ErrorMessage.jsx
import React from 'react';
import styled from 'styled-components';

const ErrorMessage = ({ message }) => {
  return message ? <StyledErrorMessage>{message}</StyledErrorMessage> : null;
};

export default ErrorMessage;

/* 스타일 정의 */
const StyledErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
