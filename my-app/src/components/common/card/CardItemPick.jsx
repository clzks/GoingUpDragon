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
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardInstructor>{instructor}</StyledCardInstructor>
      </Card.Body>
    </StyledCardItemPick>
  );
};

export default CardItemPick;

const StyledCardItemPick = styled(Card)`
  width: 22rem;
  height: 310px; /* 카드의 고정 높이 설정 */
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 제목과 instructor 텍스트가 카드 안에서 일정하게 배치되도록 */

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledCardImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const StyledCardTitle = styled(Card.Title)`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 6px;
  line-height: 1.4;
  height: 3em; /* 제목이 2줄을 초과하지 않도록 고정 높이 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄로 제한 */
  -webkit-box-orient: vertical;
`;

const StyledCardInstructor = styled(Card.Text)`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
