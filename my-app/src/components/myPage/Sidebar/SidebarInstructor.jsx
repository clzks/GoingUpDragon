import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const SidebarInstructor = ({ selectedMenu, onMenuSelect }) => {
  const [nickname, setNickname] = useState("불러오는 중...");
  const [lectureCount, setLectureCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [qnaCount, setQnaCount] = useState(0); // ✅ QnA 개수 추가
  const [averageRating, setAverageRating] = useState(0.0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstructorInfo = async () => {
      try {
        const response = await axios.get("/api/instructor/info");
        setNickname(response.data.nickname);
        setLectureCount(response.data.lectureCount);
        setReviewCount(response.data.reviewCount);
        setQnaCount(response.data.qnaCount); // ✅ QnA 개수 가져오기
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error("강사 정보를 불러오지 못했습니다:", error);
        setNickname("닉네임 없음");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructorInfo();
  }, []);

  const menuItems = [
    { name: "홈" },
    { name: "내 강의", number: lectureCount },
    { name: "수강평", number: reviewCount },
    { name: "Q&A", number: qnaCount }, // ✅ QnA 개수를 적용
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
          <div className="stat-label">강의 개수</div>
          <div className="stat-value">{lectureCount}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">수강평 개수</div>
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
            <span>{item.name}</span>
            <span className="menu-number">{item.number}</span>
          </MenuItem>
        ))}
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
