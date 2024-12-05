import React from "react";
import styled from "styled-components";
import Cards from "../../../common/card/Cards";
const SimilarCourseList = ({ lectureList }) => {
  return (
    <StyledMainCardContainer>
      <StyledCardsSubtitle>{lectureList.subtitle}</StyledCardsSubtitle>
      <Cards
        subtitle={lectureList.subtitle}
        cardData={lectureList.cards}
        maxWidth="800px"
        cardsToShow={3}
      ></Cards>
    </StyledMainCardContainer>
  );
};

// 내부 스타일 컴포넌트 정의
const StyledMainCardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
`;

const StyledCardsSubtitle = styled.h2`
  text-align: left;
  font-weight: bold;
`;

export default SimilarCourseList;
