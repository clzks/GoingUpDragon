// src/components/Cards.jsx
// 외부 라이브러리
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import CardItem from "./CardItem";

const Cards = ({ cardData }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

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
          {"<"}
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
              rating={card.rating}
              numReviews={card.numReviews}
              price={card.price}
              level={card.level}
              tag={card.tag}
            />
          ))}
        <StyledCardsSlideButton
          variant="outline-secondary"
          onClick={handleNext}
        >
          {">"}
        </StyledCardsSlideButton>
      </StyledCardsWrapper>
    </StyledCardCarouselContainer>
  );
};

export default Cards;

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
  justify-content: space-between;
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
  transition: background-color 0.3s ease;
  margin: 0 1px;
  position: relative;
  top: 200px;
`;
