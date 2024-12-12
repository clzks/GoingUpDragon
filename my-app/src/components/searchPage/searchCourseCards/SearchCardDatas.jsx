// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards/SearchCardDatas.jsx
import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards
import CourseList from "./SearchCourseList";

// GoingUpDragon/my-app/src/components/searchPage
import InstructorList from "../instructorList/InstructorList";
import SearchPagination from "../searchPagination/SearchPagination";

// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards
import CourseDataSet from "./CourseDataSet.json";

const SearchCardDatas = () => {
  // 페이지네이션을 구현할때 보통 라이브러리를 사용하거나 아니면 useState 데이터값을 저장했다 사용.
  const ITEMS_PER_PAGE = 32; // 한 페이지당 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 페이지에 표시할 데이터 계산
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentData = CourseDataSet.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 데이터 렌더링 함수
  const renderContent = () => {
    const content = [];
    const totalChunks = Math.ceil(currentData.length / 16);
  
    for (let i = 0; i < currentData.length; i += 16) {
      const chunk = currentData.slice(i, i + 16); // 강의 16개씩 분할
      content.push(<CourseList key={`course-${i}`} courses={chunk} />);
  
      // 강사 목록 삽입 (마지막 chunk 이후에는 강사 리스트 추가 안 함)
      if (i + 16 < currentData.length && i / 16 + 1 < totalChunks) {
        content.push(<InstructorList key={`instructors-${i}`} />);
      }
    }
  
    return content;
  };
  

  return (
    <StyledCourseListContainer>
      {renderContent()}
      <SearchPagination
        totalItems={CourseDataSet.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledCourseListContainer>
  );
};
const StyledCourseListContainer = styled.div``;
export default SearchCardDatas;
