import React from "react";
import styled from "styled-components";

const Badge = () => {
  const badges = [
    { id: 1, icon: "/path/to/badge1.png", name: "Badge 1" },
    { id: 2, icon: "/path/to/badge2.png", name: "Badge 2" },
  ];

  return (
    <BadgeWrapper>
      <Header>
        <Title>뱃지</Title>
        <Total>전체 {badges.length}개</Total>
      </Header>
      <BadgeList>
        {badges.map((badge) => (
          <BadgeItem key={badge.id}>
            <BadgeIcon src={badge.icon} alt={badge.name} />
          </BadgeItem>
        ))}
      </BadgeList>
    </BadgeWrapper>
  );
};

export default Badge;

// Styled-components 스타일 정의
const BadgeWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;

`;

const Total = styled.span`
  font-size: 14px;
  color: #7cd0d5;
`;

const BadgeList = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const BadgeItem = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
`;

const BadgeIcon = styled.img`
  width: 40px;
  height: 40px;
`;
