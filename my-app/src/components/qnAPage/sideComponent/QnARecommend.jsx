// GoingUpDragon/my-app/src/components/qnAPage/sideComponent/QnARecommend.jsx

import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import QnARecommendCard from "./QnARecommendCard";

const QnARecommend = ({ isMain }) => {
  return (
    <StyledContainer>
      <StyledTitle>
        {isMain ? "회원님이 관심 가질만한 질문" : "이 글과 비슷한 Q&A"}
      </StyledTitle>
      <QnARecommendCard></QnARecommendCard>
      <QnARecommendCard></QnARecommendCard>
      <QnARecommendCard></QnARecommendCard>
      <QnARecommendCard></QnARecommendCard>
      <QnARecommendCard isLast={true}></QnARecommendCard>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 400px;
  height: 620px;
  border-radius: 20px;
  border: 1px solid rgba(128, 128, 128, 0.5);
`;

const StyledTitle = styled.div`
  height: 60px;
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
  margin-left: 25px;
  color: #7cd0d5;
`;

export default QnARecommend;
