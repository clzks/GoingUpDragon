// src/components/CardsPick.jsx 
// 외부 라이브러리
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import CardItem from './CardItemPick';

const CardsPick = ({ subtitle, cardData }) => {
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 3;

    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? cardData.length - cardsToShow : prevIndex - 1
        );
    };

    const handleNext = () => {
        setStartIndex((prevIndex) =>
            prevIndex + cardsToShow >= cardData.length ? 0 : prevIndex + 1
        );
    };

    return (
        <StyledCardCarouselContainer>
            <div className="cards-header">
                <h2 className="cards-subtitle">{subtitle}</h2>
            </div>
            <StyledCardsWrapper>
                <StyledCardsSlideButton variant="outline-secondary" onClick={handlePrev}>
                    {"<"}
                </StyledCardsSlideButton>
                {cardData.slice(startIndex, startIndex + cardsToShow).map((card, index) => (
                    <CardItem
                        key={index}
                        title={card.title}
                        text={card.text}
                        imageUrl={card.imageUrl}
                        instructor={card.instructor}
                    />
                ))}
                <StyledCardsSlideButton variant="outline-secondary" onClick={handleNext}>
                    {">"}
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
    transition: background-color 0.3s ease;
    margin: 0 1px;
    position: relative;
    top: 200px;
`;