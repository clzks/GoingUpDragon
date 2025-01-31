// GoingUpDragon/my-app/src/components/common/layout/Header.jsx
import React, { useState, useEffect } from "react";

// 외부 라이브러리
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

// GoingUpDragon/my-app/src/apis/common/
import { fetchCategories } from "../../../apis/common/categoryApi"; // API 함수 가져오기

// GoingUpDragon/my-app/src/components/common/layout
import Logo from "./Logo";

// GoingUpDragon/my-app/src/components/common
import LoginModal from "../utilities/LoginModal";

const Header = ({ inputRef }) => {
  // 카테고리들을 담는 배열 빈 상태로 초기값 설정
  const [categories, setCategories] = useState([]);
  // 에러 발생시 에러를 담는 코드 초기값 null
  const [error, setError] = useState(null);

  // 검색
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [records, setRecords] = useState([
    { type: "lecture", text: "JavaScript for Beginners" },
    { type: "lecture", text: "Advanced React" },
    // 더 많은 항목들
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/SignUp'); // "/signup" 경로로 이동
  };

  // 카테고리 렌더링을 위한 useEffect
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadCategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // 입력값이 변경될 때 상태 업데이트
  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  const handleFormFocus = () => {
    setIsDropdownVisible(true); // 폼 클릭 시 드롭다운 표시
  };

  const handleFormBlur = () => {
    setIsDropdownVisible(false); // 포커스가 벗어나면 드롭다운 숨기기
  };

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
                      {categories.map((category) => (
                        <StyledFirstItem key={category.categoryId}>
                          {category.categoryName}
                          <StyledSecondItemList>
                            {category.subCategories.map((subCategory) => (
                              <StyledSecondNavItem key={subCategory.categoryId}>
                                {subCategory.categoryName}
                                <StyledThirdItemList>
                                  {subCategory.tags.map((tag) => (
                                    <StyledThirdItem key={tag.subjectTagId}>
                                      {tag.subjectTagName}
                                    </StyledThirdItem>
                                  ))}
                                </StyledThirdItemList>
                              </StyledSecondNavItem>
                            ))}
                          </StyledSecondItemList>
                        </StyledFirstItem>
                      ))}
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
                onFocus={handleFormFocus} // 폼 클릭 시 드롭다운 표시
                onBlur={handleFormBlur} // 입력란에서 포커스가 벗어나면 드롭다운 숨기기
              ></StyledFormControl>
              <StyledButton
                type="submit"
                variant="outline-success"
                disabled={!searchInput.trim()}
              >
                검색
              </StyledButton>
            </StyledForm>
            <DropdownContainer isVisible={isDropdownVisible}>
              {records.map((record, index) => (
                <RecordItem key={index} type={record.type}>
                  {record.text}
                </RecordItem>
              ))}
            </DropdownContainer>
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
                <StyledButton variant="outline-success" onClick={goToSignup}>회원가입</StyledButton>
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
            onLoginSuccess={handleLoginSuccess}
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

const StyledLogoCategoryDiv = styled.div``;

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
  white-space: nowrap;

  &:hover {
    color: #000; /* 호버 시 링크 색 변경 */
  }

  /* 카테고리 링크에 마우스를 올렸을 때 서브메뉴 표시 */
  &:hover + ${StyledFirstItemList} {
    display: block;
  }
`;

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

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 중앙 정렬 */
  position: relative;

`;

const StyledForm = styled(Form)`
  display: flex;
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

const DropdownContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const RecordItem = styled.div`
  padding: 0.75rem;
  cursor: pointer;
  background-color: ${({ type }) => (type === "lecture" ? "#e7f7fc" : "#fff")};
  border-radius: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: #f0f0f0;
  }
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

const StyledLoginButton = styled(StyledButton)`
  margin-right: 0.5rem;
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
