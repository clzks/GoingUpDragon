import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const SidebarInstructor = ({
  selectedMenu,
  onMenuSelect,
  myPageData,
  courseCount,
  qnACount,
  reviewCount,
  rate,
}) => {
  // const [nickname, setNickname] = useState("불러오는 중...");
  // const [lectureCount, setLectureCount] = useState(0);
  // const [reviewCount, setReviewCount] = useState(0);
  // const [qnaCount, setQnaCount] = useState(0); // ✅ QnA 개수 추가
  // const [averageRating, setAverageRating] = useState(0.0);
  // const [loading, setLoading] = useState(true);

  const formatRate = (rate) => {
    if (typeof rate !== "number" || isNaN(rate)) {
      return 0; // 유효하지 않은 값이면 0 반환
    }
    return Math.round(rate * 10) / 10; // 소수점 첫째 자리까지 반올림
  };

  return (
    <SidebarWrapper>
      <ProfileSection>
        <img src="https://via.placeholder.com/80" alt="프로필 이미지" />
        <p className="profile-name">{myPageData?.nickName}</p>
      </ProfileSection>
      <Divider />
      <StatsSection>
        <div className="stat-item">
          <div className="stat-label">강의 개수</div>
          <div className="stat-value">{courseCount}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">수강평 개수</div>
          <div className="stat-value">{reviewCount}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">평균 평점</div>
          <div className="stat-value">{formatRate(rate)}</div>
        </div>
      </StatsSection>
      <Divider />
      <MenuList>
        <MenuItem
          onClick={() => onMenuSelect("홈")}
          className={selectedMenu === "홈" ? "active" : ""}
        >
          <span>홈</span>
        </MenuItem>

        <MenuItem
          onClick={() => onMenuSelect("강의")}
          className={selectedMenu === "강의" ? "active" : ""}
        >
          <span>강의</span>
          <span className="menu-number">{courseCount}</span>
        </MenuItem>

        <MenuItem
          onClick={() => onMenuSelect("수강평")}
          className={selectedMenu === "수강평" ? "active" : ""}
        >
          <span>수강평</span>
          <span className="menu-number">{reviewCount}</span>
        </MenuItem>

        <MenuItem
          onClick={() => onMenuSelect("Q&A")}
          className={selectedMenu === "Q&A" ? "active" : ""}
        >
          <span>Q&A</span>
          <span className="menu-number">{qnACount}</span>
        </MenuItem>
      </MenuList>
    </SidebarWrapper>
  );
};

export default SidebarInstructor;

// 스타일 정의 (변경 없음)
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
  justify-content: space-between;
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
    font-size: 12px;
    color: #666;
    min-width: 35px;
    text-align: right;
  }
`;
