// GoingUpDragon/my-app/src/components/qnAPage/answer/QnAAnswerContainer.jsx
import React from "react";
import { useState } from "react";

// 외부 라이브러리
import { Container } from "react-bootstrap";
import styled from "styled-components";
import QnARecommend from "../sideComponent/QnARecommend";
import QuestionButton from "../sideComponent/QuestionButton";

const QnAAnswerContainer = () => {
  return (
    <StyledContainer>
      <StyledLeftPanel>
        <StyledH2>dd</StyledH2>
      </StyledLeftPanel>
      <StyledRightPanel>
        <QnARecommend></QnARecommend>
        <QuestionButton></QuestionButton>
      </StyledRightPanel>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledLeftPanel = styled.div`
  flex: 2;
`;

const StyledRightPanel = styled.div`
  flex: 1;
  margin-top: 30px;
`;

const StyledH2 = styled.h2`
  margin-top: 20px;
`;

export default QnAAnswerContainer;
