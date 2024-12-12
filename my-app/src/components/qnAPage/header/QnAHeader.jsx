import React from "react";
import HorizontalLine from "../../common/icons/HorizontalLine";
import styled from "styled-components";

const QnAHeader = () => {
  return (
    <div>
      <StyledHeaderContainer>
        <StyledThumnail></StyledThumnail>
        <StyledThumnailInfo>
          <h2>제대로 파는 CSS</h2>
          <StyledSubTitle>html 이란?</StyledSubTitle>
        </StyledThumnailInfo>
      </StyledHeaderContainer>
      <HorizontalLine></HorizontalLine>
    </div>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  max-width: 1500px; /* 원하는 최대 폭 */
  margin: 0 auto; /* 가운데 정렬 */
  margin-bottom: 30px;
`;

const StyledThumnail = styled.div`
  width: 140px;
  height: 90px;
  background-color: blue;
`;

const StyledThumnailInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSubTitle = styled.span`
  color: gray;
`;

export default QnAHeader;
