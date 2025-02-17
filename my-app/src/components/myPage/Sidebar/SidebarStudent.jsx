import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const SidebarStudent = ({ selectedMenu, onMenuSelect }) => {
  const [nickname, setNickname] = useState("불러오는 중...");
  const [reviewCount, setReviewCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0.0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/user/info");
        setNickname(response.data.nickname);
        setReviewCount(response.data.reviewCount);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error("사용자 정보를 불러오지 못했습니다:", error);
        setNickname("닉네임 없음");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const menuItems = [
    { name: "홈" },
    { name: "대시보드" },
    { name: "내 강의" },
    { name: "좋아요" },
    { name: "장바구니" },
    { name: "구매내역" },
    { name: "내 정보" },
  ];

  return (
    <SidebarWrapper>
      <ProfileSection>
        <img src="https://via.placeholder.com/80" alt="프로필 이미지" />
        <p className="profile-name">{loading ? "로딩 중..." : nickname}</p>
      </ProfileSection>
      <Divider />
      <StatsSection>
        <div className="stat-item">
          <div className="stat-label">수강평 작성 수</div>
          <div className="stat-value">{reviewCount}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">평균 평점</div>
          <div className="stat-value">{averageRating.toFixed(1)}</div>
        </div>
      </StatsSection>
      <Divider />
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => onMenuSelect(item.name)}
            className={selectedMenu === item.name ? "active" : ""}
          >
            {item.name}
            {item.number && <span className="menu-number">{item.number}</span>}
          </MenuItem>
        ))}
      </MenuList>
    </SidebarWrapper>
  );
};

export default SidebarStudent;

// 스타일 정의
const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  height: 100%;
  position: relative;
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .profile-name {
    font-weight: bold;
    font-size: 16px;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 10px 0;

  .stat-item {
    text-align: center;
    flex: 1;

    .stat-value {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .stat-label {
      font-size: 12px;
      color: #888;
    }
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 10px;
`;

const MenuItem = styled.li`
  font-size: 14px;
  padding: 10px 15px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e9e9e9;
    border-radius: 4px;
  }

  &.active {
    background-color: #f0f8ff;
    font-weight: bold;
    border-left: 4px solid #7cd0d5;
    padding-left: 11px;
  }

  .menu-number {
    margin-left: auto;
    font-size: 12px;
    color: #666;
  }
`;
