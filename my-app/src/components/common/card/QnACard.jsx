// GoingUpDragon/my-app/src/components/common/card/QnACard.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import HorizontalLine from "../icons/HorizontalLine";

const QnACard = () => {
  return (
    <StyledCardContainer>
      <StyledCardMainPanel></StyledCardMainPanel>
      <HorizontalLine></HorizontalLine>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  width: 800px;
  height: 270px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const StyledTitlePanel = styled.h3``;

const StyledCardMainPanel = styled.div`
  height: 210px;
`;

export default QnACard;
