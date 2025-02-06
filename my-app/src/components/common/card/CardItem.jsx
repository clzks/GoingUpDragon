import React from "react";

// 외부 라이브러리
import { Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const CardItem = ({
  title,
  text,
  instructor,
  rating,
  numReviews,
  price,
  imageUrl,
  level,
  tag,
}) => {
  return (
    <StyledCardItem>
      <StyledCardImage variant="top" src={imageUrl} />
      <Card.Body>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardInstructor>{instructor}</StyledCardInstructor>
        <StyledCardRating>
          <StyledStarIcon className={rating >= 1 ? "filled" : ""} />
          <span>{rating.toFixed(1)}</span>
          <StyledNumReviews>({numReviews})</StyledNumReviews>
        </StyledCardRating>
        <StyledCardPrice>
          {price === 0 ? "무료" : price.toLocaleString()}
        </StyledCardPrice>
      </Card.Body>
      <StyledOverlay>
        <StyledOverlayText>{text}</StyledOverlayText>
        <StyledOverlayLevel>난이도 : {level}</StyledOverlayLevel>
        <StyledOverlayTag>태그 : {tag.join(", ")}</StyledOverlayTag>
      </StyledOverlay>
    </StyledCardItem>
  );
};

export default CardItem;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px 10px;
  text-align: center;
`;

const StyledCardItem = styled(Card)`
  width: 18rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover ${StyledOverlay} {
    opacity: 1;
  }
`;

const StyledCardImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const StyledCardTitle = styled(Card.Title)`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  height: 3.6rem; /* Fix the height of the title area */
  overflow: hidden; /* Prevents overflow if title is too long */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Truncate the title to 2 lines */
  -webkit-box-orient: vertical;
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
  margin-top: auto; /* Align price to the bottom */
`;

const StyledOverlayText = styled.div`
  font-size: 1rem;
  margin-top: 20px;
  text-align: left;
`;

const StyledOverlayLevel = styled.div`
  font-size: 0.9rem;
  margin-top: auto;
`;

const StyledOverlayTag = styled.div`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;
