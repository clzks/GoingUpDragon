// GoingUpDragon/my-app/src/components/qnAPage/answer/QnAAnswerContainer.jsx
import React from "react";
import { useState } from "react";

// 외부 라이브러리
import { Container } from "react-bootstrap";
import styled from "styled-components";
import QnARecommend from "../sideComponent/QnARecommend";
import QuestionButton from "../sideComponent/QuestionButton";

const QnAAnswerContainer = ({ questionInfo }) => {
  return (
    <StyledContainer>
      <StyledLeftPanel>
        <StyledTitle>{questionInfo.QuestionInfo.title}</StyledTitle>
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
  margin-right: 50px;
`;

const StyledRightPanel = styled.div`
  flex: 1;
  margin-top: 30px;
`;

const StyledTitle = styled.h5`
  margin-top: 20px;
`;

export default QnAAnswerContainer;
