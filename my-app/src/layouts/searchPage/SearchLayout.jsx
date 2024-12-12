import React, { useRef, useState } from "react";

// 외부 라이브러리
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { FaSlidersH } from "react-icons/fa";

// GoingUpDragon/my-app/src
import HorizontalLine from "../../components/common/icons/HorizontalLine";
import Header from "../../components/common/layout/Header";
import ArrowButtonRight from "../../components/common/icons/ArrowButtonRight";
import ArrowButtonLeft from "../../components/common/icons/ArrowButtonLeft";
import Footer from "../../components/common/layout/Footer";
import ScrollTopButton from "../../components/common/utilities/ScrollTopButton";
import SearchCategory from "../../components/searchPage/SearchCategory";
import MainCategoryDatas from "../../components/searchPage/MainCategoryDatas";
import MiddleCategoryBox from "../../components/searchPage/MiddleCategoryBox";
import SkillSearchModal from "../../components/searchPage/SkillSearchModal";
import SearchSortOption from "../../components/searchPage/SearchSortOption";
import SearchFillterParent from "../../components/searchPage/searchFillter/SearchFillterParent";
import SearchCardDatas from "../../components/searchPage/searchCourseCards/SearchCardDatas";

const SearchLayout = () => {
  const [modalShow, setModalShow] = useState(false);
  const inputRef = useRef(null); // 검색창에 대한 참조 생성

  // 각 카테고리의 스크롤을 위한 ref
  const searchCategoryRef = useRef(null);

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // 검색창에 포커스 부여
    }
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" }); // 왼쪽으로 스크롤
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" }); // 오른쪽으로 스크롤
    }
  };

  return (
    <>
      <Header inputRef={inputRef}></Header>
      <HorizontalLine></HorizontalLine>
      <StyledSection>
        <Container>
          <StyledCategoryContainer>
            {/* 왼쪽 화살표 */}
            <ArrowButtonLeft scrollLeft={() => scrollLeft(searchCategoryRef)} />
            <StyledScrollableContainer ref={searchCategoryRef}>
              <SearchCategory onClick={handleSearchIconClick} />
              <MainCategoryDatas />
            </StyledScrollableContainer>
            {/* 오른쪽 화살표 */}
            <ArrowButtonRight
              scrollRight={() => scrollRight(searchCategoryRef)}
            />
          </StyledCategoryContainer>
        </Container>
      </StyledSection>
      <HorizontalLine></HorizontalLine>
      <StyledSection>
        <Container>
          <StyledMiddleCategoryBoxRow>
            <MiddleCategoryBox />
          </StyledMiddleCategoryBoxRow>
        </Container>
      </StyledSection>
      <StyledSection>
        <StyledFilltersContainer>
          <StyledSkillSearchButton
            variant="primary"
            onClick={() => setModalShow(true)}
          >
            <FaSlidersH />
            기술 검색
          </StyledSkillSearchButton>
          <SkillSearchModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <SearchSortOption />
        </StyledFilltersContainer>
      </StyledSection>
      <StyledSection>
        <Container>
          <StyledSearchCourseContainer>
            <SearchFillterParent></SearchFillterParent>
            <StyledInstructorCoursesContainer>
              <SearchCardDatas></SearchCardDatas>
            </StyledInstructorCoursesContainer>
          </StyledSearchCourseContainer>
        </Container>
      </StyledSection>
      <ScrollTopButton></ScrollTopButton>
      <Footer></Footer>
    </>
  );
};

export default SearchLayout;

const StyledCategoryContainer = styled.div`
  display: flex;
  align-items: center; // 수직 중앙 정렬
  justify-content: center; // 선택 사항: 수평 중앙 정렬
  gap: 2rem;
`;

const StyledScrollableContainer = styled.div`
  display: flex;
  overflow-x: hidden; /* 가로 스크롤을 제거 */
  overflow-y: hidden;
  gap: 1rem;
`;

const StyledSearchCourseContainer = styled.div`
  display: flex;
`;

const StyledInstructorCoursesContainer = styled.div``;

const StyledSection = styled.section`
  padding: 16px;
`;

const StyledMiddleCategoryBoxRow = styled(Row)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledSkillSearchButton = styled(Button)`
  display: flex;
  align-items: center;
  white-space: nowrap; /* 줄바꿈 방지 */
  gap: 8px; /* 아이콘과 텍스트 간 간격 추가 */
`;

const StyledFilltersContainer = styled(Container)`
  display: flex;
  justify-content: space-between; /* 자식 요소를 왼쪽 끝, 오른쪽 끝으로 배치 */
  align-items: center; /* 세로로 중앙 정렬 */
  padding: 0;
`;
