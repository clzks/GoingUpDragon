// src/components/CardItem.jsx
// 외부 라이브러리
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

// 내부 라이브러리

const CardItem = ({ title, instructor, rating, numReviews, price, imageUrl }) => {
    return (
        <StyledCardItem>
            <StyledCardImage variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <StyledCardInstructor>{instructor}</StyledCardInstructor>
                <StyledCardRating>
                    <StyledStarIcon className={rating >= 1 ? "filled" : ""} />
                    <span>{rating.toFixed(1)}</span>
                    <StyledNumReviews>({numReviews})</StyledNumReviews>
                </StyledCardRating>
                <StyledCardPrice>{price.toLocaleString()}</StyledCardPrice>
            </Card.Body>
        </StyledCardItem>
    );
};

export default CardItem;


const StyledCardItem = styled(Card)`
    width: 18rem;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const StyledCardImage = styled(Card.Img)`
    height: 200px;
    object-fit: cover;
`;

const StyledCardInstructor = styled(Card.Text)`
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
`;

const StyledCardRating = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #f39c12;
    margin-bottom: 0.5rem;
`;

const StyledStarIcon = styled(FaStar)`
    margin-right: 0.2rem;

    &.filled {
        color: #f39c12;
    }
`;

const StyledNumReviews = styled.span`
    margin-left: 0.5rem;
    color: #777;
`;

const StyledCardPrice = styled(Card.Text)`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin-top: 0.5rem;
`;