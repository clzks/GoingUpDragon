// GoingUpDragon/my-app/src/components/courseDetailPage/main/recommendedSection/SimilarCardList.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
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
