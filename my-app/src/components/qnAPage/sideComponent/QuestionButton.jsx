// GoingUpDragon/my-app/src/components/qnAPage/sideComponent/QuestionButton.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

const QuestionButton = () => {
  return <StyledContainer>질문하기</StyledContainer>;
};

const StyledContainer = styled.button`
  width: 400px;
  height: 60px;
  border-radius: 10px;
  background-color: #7cd0d5;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 600;
  color: white;

  &:hover {
    background-color: #b0e8f1;
  }
`;

export default QuestionButton;
