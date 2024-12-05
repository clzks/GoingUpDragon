import React, { useRef } from "react";

// 외부 라이브러리
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { FaSlidersH } from "react-icons/fa";

// 공통 컴포넌트
import VerticalLine from "../../components/common/icons/VerticalLine";
import HorizontalLine from "../../components/common/icons/HorizontalLine";
import Header from "../../components/common/layout/Header";
import ArrowButtonRight from "../../components/common/icons/ArrowButtonRight";
import ArrowButtonLeft from "../../components/common/icons/ArrowButtonLeft";
import Footer from "../../components/common/layout/Footer";
import ScrollTopButton from "../../components/common/utilities/ScrollTopButton"

// 검색 페이지 컴포넌트
import SearchCategory from "../../components/searchPage/SearchCategory";
import MainCategoryDatas from "../../components/searchPage/MainCategoryDatas";
import MiddleCategoryBox from "../../components/searchPage/MiddleCategoryBox";
import SkillSearchModal from "../../components/searchPage/SkillSearchModal";
import SearchSortOption from "../../components/searchPage/SearchSortOption";
import SearchFillterParent from "../../components/searchPage/searchFillter/SearchFillterParent";
import SearchCardDatas from "../../components/searchPage/searchCourseCards/SearchCardDatas";

const SearchLayout = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const inputRef = useRef(null); // 검색창에 대한 참조 생성

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // 검색창에 포커스 부여
    }
  };

  return (
    <>
      <Header inputRef={inputRef}></Header>
      <HorizontalLine></HorizontalLine>
      <StyledSection>
        <Container>
        <Row>
            {/* 왼쪽 화살표 */}
              <StyledCol xs={1}>
                <ArrowButtonLeft/>
              </StyledCol>
              <StyledCol>
              <SearchCategory onClick={handleSearchIconClick} />
              <VerticalLine margin="0px 20px" />
              <MainCategoryDatas />
              </StyledCol>
            {/* 오른쪽 화살표 */}
              <StyledCol xs={1}>
                  <ArrowButtonRight/>
              </StyledCol>
          </Row>
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

const StyledSearchCourseContainer = styled.div`
  display:flex
`

const StyledInstructorCoursesContainer = styled.div`

`

const StyledSection = styled.section`
  padding: 16px;
`;

const StyledCol = styled(Col)`
  display: flex;
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