// src/components/Cards.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import CardItem from './CardItem';
import './Cards.css'; // CSS 파일 import

function Cards({ subtitle, cardData }) {
    const [startIndex, setStartIndex] = useState(0);
    const cardsToShow = 4;

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? cardData.length - cardsToShow : prevIndex - 1));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + cardsToShow >= cardData.length ? 0 : prevIndex + 1));
    };

    return (
        <Container className="card-carousel-container">
            <div className="cards-header">
                <h2 className="cards-subtitle">{subtitle}</h2>
            </div>
            <div className="cards-wrapper">
                <Button variant="outline-secondary" onClick={handlePrev} className="cards-slide-button">
                    {'<'}
                </Button>
                {cardData.slice(startIndex, startIndex + cardsToShow).map((card, index) => (
                    <CardItem 
                        key={index}
                        title={card.title}
                        text={card.text}
                        imageUrl={card.imageUrl}
                        instructor={card.instructor}
                        rating={card.rating}
                        numReviews={card.numReviews}
                        price={card.price}
                    />
                ))}
                <Button variant="outline-secondary" onClick={handleNext} className="cards-slide-button">
                    {'>'}
                </Button>
            </div>
        </Container>
    );
}

export default Cards;
