// GoingUpDragon/my-app/src/components/common/card/CardItemPick.jsx
import React from "react";

// 외부 라이브러리
import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardItemPick = ({ title, instructor, imageUrl }) => {
  return (
    <StyledCardItemPick>
      <StyledCardImage variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <StyledCardInstructor>{instructor}</StyledCardInstructor>
      </Card.Body>
    </StyledCardItemPick>
  );
};

export default CardItemPick;

const StyledCardItemPick = styled(Card)`
  width: 22rem;
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
