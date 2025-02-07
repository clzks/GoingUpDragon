// SidebarInstructor.jsx
import React from "react";
import styled from "styled-components";

const SidebarInstructor = ({ selectedMenu, onMenuSelect }) => {
  const menuItems = [
    { name: "홈" },
    { name: "내 강의", number: 10 },
    { name: "수강평", number: 40},
    { name: "Q&A", number: 7},
  ];

  return (
    <SidebarWrapper>
      <ProfileSection>
        <img src="https://via.placeholder.com/80" alt="프로필 이미지" />
        <p className="profile-name">선생님토끼</p>
      </ProfileSection>
      <Divider />
      <StatsSection>
        <div className="stat-item">
          <div className="stat-label">수강생 수</div>
          <div className="stat-value">820</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">수강평 수</div>
          <div className="stat-value">40</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">강의 평점</div>
          <div className="stat-value">4.6</div>
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
      <VerticalDivider />
    </SidebarWrapper>
  );
};

export default SidebarInstructor;

// 스타일 정의
const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  height: 100%;
  position: relative;
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
`;

const VerticalDivider = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  background-color: #ddd;
  height: 100%;
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
