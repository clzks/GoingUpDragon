import React, { useRef } from "react";

// 외부 라이브러리
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { FaSlidersH } from "react-icons/fa";
import { Stack } from "react-bootstrap";

// 공통 컴포넌트
import VerticalLine from "../../components/common/icons/VerticalLine";
import HorizontalLine from "../../components/common/icons/HorizontalLine";
import Header from "../../components/common/layout/Header";

// 검색 페이지 컴포넌트
import SearchCategory from "../../components/searchPage/SearchCategory";
import MainCategoryDatas from "../../components/searchPage/MainCategoryDatas";
import MiddleCategoryBox from "../../components/searchPage/MiddleCategoryBox";
import SkillSearchModal from "../../components/searchPage/SkillSearchModal";
import SearchSortOption from "../../components/searchPage/SearchSortOption";
import ArrowButtonRight from "../../components/searchPage/ArrowButtonRight";
import ArrowButtonLeft from "../../components/searchPage/ArrowButtonLeft";
import HorizontalScroll from "../../components/searchPage/test1/HorizontalScroll";

const SearchLayout = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const inputRef = useRef(null); // 검색창에 대한 참조 생성
  const scrollRef = useRef(null);

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // 검색창에 포커스 부여
    }
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <Header inputRef={inputRef}></Header>
      <HorizontalLine></HorizontalLine>
      <StyledSection ref={scrollRef}>
        <Container>
          <Row>
            {/* 왼쪽 화살표 */}
              <StyledCol xs={1}>
                  <ArrowButtonLeft onClick={scrollLeft}/>
              </StyledCol>
            <StyledCol xs={1}>
              <SearchCategory onClick={handleSearchIconClick} />
            </StyledCol>
            <StyledColHorizontalCenter xs={1}>
              <VerticalLine />
            </StyledColHorizontalCenter>
            <StyledColVerticalCenter xs={8} >
              <MainCategoryDatas />
            </StyledColVerticalCenter>
            {/* 오른쪽 화살표 */}
              <StyledCol xs={1}>
                  <ArrowButtonRight onClick={scrollRight} />
              </StyledCol>
          </Row>
        </Container>
      </StyledSection>
      <HorizontalLine></HorizontalLine>
      <HorizontalScroll></HorizontalScroll>
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
          <Stack gap={3}>
            <div className="p-2">First item</div>
            <div className="p-2">Second item</div>
            <div className="p-2">Third item</div>
          </Stack>
        </Container>
      </StyledSection>
    </>
  );
};

export default SearchLayout;

const StyledSection = styled.section`
  padding: 16px;
`;

const StyledColHorizontalCenter = styled(Col)`
  display: flex;
  justify-content: center; /* 수평 위치 조정: start, center, end, space-between 등 */
`;

const StyledColVerticalCenter = styled(Col)`
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
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
