import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  const menuItems = [
    { name: "홈"},
    { name: "대시보드"},
    { name: "내 강의", number: 15 },
    { name: "장바구니", number: 3 },
    { name: "구매내역", number: 5 },
    { name: "내 정보"},
  ];

  return (
    <SidebarWrapper>
      <ProfileSection>
        <img src="https://via.placeholder.com/80" alt="프로필 이미지" />
        <p className="profile-name">지식의 탐험가</p>
      </ProfileSection>
      <Divider />
      <StatsSection>
        <div className="stat-item">
          <div className="stat-label">수강평 작성 수</div>
          <div className="stat-value">-</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">평균 평점</div>
          <div className="stat-value">-</div>
        </div>
      </StatsSection>
      <Divider />
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            {item.name}
            {item.number && <span className="menu-number">{item.number}</span>}
          </MenuItem>
        ))}
      </MenuList>
      <VerticalDivider />  {/* 세로 구분선 추가 */}
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 20px;
  height: 100%;  /* 사이드바 높이를 페이지 높이에 맞추기 */
  position: relative;  /* 세로 구분선 위치를 설정하기 위해 필요 */
`;

const Divider = styled.div`
  border-bottom: 1px solid #ddd;  /* 기존의 가로 구분선 */
  margin: 20px 0;
`;

const VerticalDivider = styled.div`
  position: absolute;
  top: 0;
  right: 0;  /* 사이드바 오른쪽 끝에 위치 */
  width: 1px;
  background-color: #ddd;
  height: 100%; /* 페이지 높이에 맞게 늘어나게 설정 */
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
  margin: 10;
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

  &::before {
    content: "•";
    font-size: 20px;
    color: #000000;
    margin-right: 10px;
    display: inline-block;
  }

  .menu-number {
    margin-left: auto;
    font-size: 12px;
    color: #666;
  }
`;
