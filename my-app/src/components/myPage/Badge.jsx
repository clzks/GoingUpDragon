import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Badge = () => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get("/api/user/badges");
        setBadges(response.data);
      } catch (error) {
        console.error("뱃지 데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, []);

  if (loading) {
    return <LoadingText>뱃지 데이터를 불러오는 중...</LoadingText>;
  }

  return (
    <BadgeWrapper>
      <Header>
        <Title>뱃지</Title>
        <Total>전체 {badges.length}개</Total>
      </Header>
      {badges.length > 0 ? (
        <BadgeList>
          {badges.map((badge) => (
            <BadgeItem key={badge.id}>
              <BadgeIcon src={badge.icon} alt={badge.name} />
            </BadgeItem>
          ))}
        </BadgeList>
      ) : (
        <NoBadges>획득한 뱃지가 없습니다.</NoBadges>
      )}
    </BadgeWrapper>
  );
};

export default Badge;

// 스타일 정의
const BadgeWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

const NoBadges = styled.div`
  font-size: 14px;
  color: #888;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;
