// GoingUpDragon/my-app/src/components/common/layout/Header.jsx
import React, { useState } from "react";

// 외부 라이브러리
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/common/layout
import Logo from "./Logo";

// GoingUpDragon/my-app/src/components/common
import LoginModal from "../utilities/LoginModal";

const Header = ({ inputRef }) => {
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // 입력값이 변경될 때 상태 업데이트
  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  // 로그인 버튼 클릭시 로그인 모달 열림
  const handleLoginClick = () => {
    setShowModal(true);
  };

  // 모달의 x 버튼 클릭시 모달 닫힘
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // 로그인 성공 시 상태 업데이트
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowModal(false); // 로그인 후 모달 닫기
  };

  // 프로필 드롭다운 토글
  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileDropdown(false); // 드롭다운 닫기
  };

  return (
    <StyledHeader>
      <Container>
        <Row>
          {/* 로고 및 카테고리 */}
          <Col>
            <StyledLogoCategoryDiv>
              <StyledHeaderContainer>
                <Logo></Logo>
                <StyledNavbarNav>
                  <StyledCategoryDropdown>
                    <StyledNavLink>카테고리</StyledNavLink>
                    <StyledFirstItemList>
                      <StyledFirstItem>프로그래밍 언어</StyledFirstItem>
                      <StyledFirstItem>웹 개발</StyledFirstItem>
                      <StyledFirstItem>
                        데이터 과학
                        <StyledSecondItemList>
                          <StyledSecondNavItem>
                            AI/ChatGPT 활용
                            <StyledThirdItemList>
                              <StyledThirdItem>ChatGPT</StyledThirdItem>
                              <StyledThirdItem>Python</StyledThirdItem>
                              <StyledThirdItem>인공지능(AI)</StyledThirdItem>
                            </StyledThirdItemList>
                          </StyledSecondNavItem>
                        </StyledSecondItemList>
                      </StyledFirstItem>
                      <StyledFirstItem>
                        인공지능
                        <StyledSecondItemList>
                          <StyledSecondNavItem>
                            AI/ChatGPT 활용
                            <StyledThirdItemList>
                              <StyledThirdItem>ChatGPT</StyledThirdItem>
                              <StyledThirdItem>Python</StyledThirdItem>
                              <StyledThirdItem>인공지능(AI)</StyledThirdItem>
                            </StyledThirdItemList>
                          </StyledSecondNavItem>
                          <StyledSecondNavItem>
                            딥러닝/머신러닝
                            <StyledThirdItemList>
                              <StyledThirdItem>ChatGPT</StyledThirdItem>
                              <StyledThirdItem>Python</StyledThirdItem>
                              <StyledThirdItem>인공지능(AI)</StyledThirdItem>
                            </StyledThirdItemList>
                          </StyledSecondNavItem>
                          <StyledSecondNavItem>
                            컴퓨터 비전
                            <StyledThirdItemList></StyledThirdItemList>
                          </StyledSecondNavItem>
                          <StyledSecondNavItem>
                            자연어 처리
                            <StyledThirdItemList>
                              <StyledThirdItem>ChatGPT</StyledThirdItem>
                              <StyledThirdItem>Python</StyledThirdItem>
                              <StyledThirdItem>인공지능(AI)</StyledThirdItem>
                            </StyledThirdItemList>
                          </StyledSecondNavItem>
                          <StyledSecondNavItem>
                            인공지능 기타
                            <StyledThirdItemList>
                              <StyledThirdItem>ChatGPT</StyledThirdItem>
                              <StyledThirdItem>Python</StyledThirdItem>
                              <StyledThirdItem>인공지능(AI)</StyledThirdItem>
                            </StyledThirdItemList>
                          </StyledSecondNavItem>
                        </StyledSecondItemList>
                      </StyledFirstItem>
                      <StyledFirstItem>클라우드 컴퓨팅</StyledFirstItem>
                      <StyledFirstItem>게임 개발</StyledFirstItem>
                      <StyledFirstItem>프론트엔드 디자인</StyledFirstItem>
                      <StyledFirstItem>백엔드 기술</StyledFirstItem>
                      <StyledFirstItem>소프트웨어 공학</StyledFirstItem>
                    </StyledFirstItemList>
                  </StyledCategoryDropdown>
                </StyledNavbarNav>
              </StyledHeaderContainer>
            </StyledLogoCategoryDiv>
          </Col>

          {/* 강의 검색창 */}
          <StyledCol xs={6}>
            <StyledForm>
              <StyledFormControl
                ref={inputRef}
                type="search"
                placeholder="강의검색"
                aria-label="Search"
                value={searchInput}
                onChange={handleInputChange}
              ></StyledFormControl>
              <StyledButton
                type="submit"
                variant="outline-success"
                disabled={!searchInput.trim()}
              >
                검색
              </StyledButton>
            </StyledForm>
          </StyledCol>

          <StyledLogOutCol>
            {!isLoggedIn ? (
              <>
                {/* 로그인 버튼 */}
                <StyledLoginButton
                  variant="outline-success"
                  onClick={handleLoginClick} // 모달 열기
                >
                  로그인
                </StyledLoginButton>
                {/* 회원가입 버튼 */}
                <StyledButton variant="outline-success">회원가입</StyledButton>
              </>
            ) : (
              <StyledLoginCol>
                <StyledButton variant="outline-success">맞춤강의</StyledButton>
                <ProfileImage
                  src="https://via.placeholder.com/40"
                  alt="프로필"
                  onClick={handleProfileClick} // 프로필 클릭 시 드롭다운 열기
                />
                {showProfileDropdown && (
                  <DropdownMenu>
                    <StyledButton
                      variant="outline-danger"
                      onClick={handleLogout}
                    >
                      로그아웃
                    </StyledButton>
                  </DropdownMenu>
                )}
              </StyledLoginCol>
            )}
          </StyledLogOutCol>
          <LoginModal
            show={showModal}
            onClose={handleCloseModal}
            onLoginSussess={handleLoginSuccess}
          ></LoginModal>
        </Row>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: "#000000";
  padding: "1rem";
  text-align: "center";
`;

const StyledLogoCategoryDiv = styled.div`

`;

const StyledHeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const StyledNavbarNav = styled.ul`
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  margin-right: auto; /* me-auto 대체 */
  margin-top: 0.5rem; /* my-2 대체 */
  margin-bottom: 0.5rem;

  /* 큰 화면에서 상하 여백을 0으로 설정 (my-lg-0 대체) */
  @media (min-width: 992px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const StyledCategoryDropdown = styled.li`
  position: relative;
  list-style: none;
  cursor: pointer;
`;



// 내일 강사님한테 물어보기 / 드롭다운의 아래에 위치하게 하고싶음.
const DropdownMenu = styled.div`
  position: absolute;
  top: 280px;
  right: 120px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 5;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  position: relative; // 드롭다운이 프로필 이미지 위에 표시되도록 설정
`;

const StyledForm = styled(Form)`
  display: flex;
`;

// const StyledNavDropDownItem = styled.li`
//   // 소분류 아이템
//   padding: 8px 15px;
//   color: #000;
//   text-decoration: none;
//   display: block;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     background-color: #f0f0f0; /* 호버 시 배경색 변경 */
//     color: #000; /* 호버 시 텍스트 색 변경 */
//   }
// `;

const StyledFirstItem = styled.li`
  position: relative;
  padding: 10px;
  cursor: pointer;
  list-style: none; /* 불필요한 점 제거 */

  /* 호버 시 스타일 */
  &:hover {
    background-color: #f0f0f0; /* 예시 호버 배경색 */
    color: #000; /* 호버 시 텍스트 색 변경 */
  }

  /* 서브메뉴(StyledSecondItemList)가 바로 아래에 있을 때 */
  &:hover > ul {
    display: block;
  }
`;

const StyledFirstItemList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 5;
  list-style: none;
  margin: 0;
  transition: visibility 0.3s ease, opacity 0.3s ease;
  visibility: hidden; /* 기본적으로 숨김 처리 */
  opacity: 0; /* 기본적으로 투명하게 처리 */

  /* 카테고리에 마우스를 올렸을 때 보이도록 설정 */
  ${StyledCategoryDropdown}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledNavLink = styled.span`
  color: #000;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #000; /* 호버 시 링크 색 변경 */
  }

  /* 카테고리 링크에 마우스를 올렸을 때 서브메뉴 표시 */
  &:hover + ${StyledFirstItemList} {
    display: block;
  }
`;

const StyledSecondItemList = styled.ul`
  display: none; /* 기본적으로 숨김 */
  position: absolute;
  top: 0;
  left: 100%; /* 오른쪽에 나타나도록 설정 */
  min-width: 200px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 5;
  list-style: none;
  transition: all 0.3s ease;

  /* 부모 요소가 호버될 때 서브 메뉴 표시 */
  ${StyledFirstItem}:hover > & {
    display: block;
  }
`;

const StyledSecondNavItem = styled.li`
  position: relative;
  padding: 10px;
  cursor: pointer;
  list-style: none;

  /* 서브 메뉴가 있을 때만 호버 시 표시 */
  &:hover > ul:not(:empty) {
    display: block;
  }
`;

const StyledThirdItemList = styled.ul`
  display: none; /* 기본적으로 숨김 */
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 200px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 5;
  list-style: none;
  transition: all 0.3s ease;

  /* 부모 요소가 호버될 때 서브 메뉴 표시 */
  ${StyledSecondNavItem}:hover > &:not(:empty) {
    display: block;
  }
`;

const StyledThirdItem = styled.li`
  padding: 8px 15px;
  color: #000;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease, color 0.3s ease;
  list-style: none; /* 불필요한 점 제거 */

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

const StyledFormControl = styled(Form.Control)`
  width: 500px !important; /* 원하는 너비로 설정. 나중에 크기 유동적으로 변하게 */
  margin-right: 0.5rem;

  &:focus {
    border-color: #7cd0d5 !important; /* 원하는 보더 색상으로 변경 */
    border: 1px solid #7cd0d5;
    box-shadow: none;
    outline: 3px solid #7cd0d5; /* 원하는 색상으로 변경 */
  }
`;

const StyledButton = styled(Button)`
  color: #7cd0d5 !important; /* 헤더와 동일한 하늘색으로 글자색 변경 */
  border-color: #7cd0d5 !important; /* 버튼 테두리 색상도 하늘색으로 변경 */
  &:hover {
    background-color: #e2e6ea !important; /* 호버 시 배경색 변경 */
    color: #7cd0d5 !important; /* 호버 시에도 글자색 유지 */
  }
`;

const StyledLoginButton = styled(StyledButton)`
  margin-right: 0.5rem;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogOutCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoginCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default Header;
