// GoingUpDragon/my-app/src/components/common/card/CardsPick.jsx
import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// GoingUpDragon/my-app/src/components/common/card
import CardItem from "./CardItemPick";

const CardsPick = ({ subtitle, cardData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  function handlePrev() {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - cardsToShow : prevIndex - 1
    );
  }

  function handleNext() {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow >= cardData.length ? 0 : prevIndex + 1
    );
  }

  return (
    <StyledCardCarouselContainer>
      <StyledCardsWrapper>
        <StyledCardsSlideButton
          variant="outline-secondary"
          onClick={handlePrev}
        >
          <FaChevronLeft></FaChevronLeft>
        </StyledCardsSlideButton>
        {cardData
          .slice(startIndex, startIndex + cardsToShow)
          .map((card, index) => (
            <CardItem
              key={index}
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl}
              instructor={card.instructor}
            />
          ))}
        <StyledCardsSlideButton
          variant="outline-secondary"
          onClick={handleNext}
        >
          <FaChevronRight></FaChevronRight>
        </StyledCardsSlideButton>
      </StyledCardsWrapper>
    </StyledCardCarouselContainer>
  );
};

export default CardsPick;

// 내부 스타일 컴포넌트 정의
const StyledCardCarouselContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  background-color: transparent;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: space-evenly; /* 카드 사이 균등 분배 */
  margin-right: 3; /* 슬라이드 버튼과 카드 사이 간격 없앰 */
`;

const StyledCardsSlideButton = styled(Button)`
  height: 3rem;
  width: 3rem;
  border-radius: 50% !important;
  background-color: white !important;
  border: 1px solid #f0f0f0 !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Transition for background and text color */
  margin: 0 1px;
  position: relative;
  top: 200px;

  /* Hover state: Add a color change */
  &:hover {
    background-color: #f0f0f0; /* Set hover background color */
    color: #000; /* Set text color (or icon color) on hover */
  }
`;
