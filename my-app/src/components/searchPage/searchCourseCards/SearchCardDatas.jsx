// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards/SearchCardDatas.jsx
import React, { useState, useEffect, useRef } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards
import CourseList from "./SearchCourseList";

// GoingUpDragon/my-app/src/components/searchPage
import InstructorList from "../instructorList/InstructorList";
import SearchPagination from "../searchPagination/SearchPagination";

// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards
//import CourseDataSet from "./CourseDataSet.json";

import { getCoursesByFilterAndSort } from "../../../apis/common/courseApi";
import { formatCourseData } from "../../common/utilities/CourseUtils";

const SearchCardDatas = ({
  mainCategory,
  subCategory,
  sortBy,
  level,
  language,
  timeFilter,
  selectedTags,
}) => {
  // 동적으로 관리할 필터, 정렬 데이터
  //const [selectedTags, setSelectedTags] = useState([]);
  const isFirstRender = useRef(true);

  // 페이지네이션을 구현할때 보통 라이브러리를 사용하거나 아니면 useState 데이터값을 저장했다 사용.
  //const ITEMS_PER_PAGE = 32; // 한 페이지당 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState([]); // 강의 리스트
  const [totalCourses, setTotalCourses] = useState(0); // 전체 강의 개수
  const [size, setSize] = useState(32); // 페이지 크기 (한 번에 몇 개 가져올지)

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 첫 번째 실행 막음
    }

    setLoading(true);

    getCoursesByFilterAndSort({
      mainCategory,
      subCategory,
      level,
      language,
      timeFilter,
      selectedTags,
      sortBy,
      size,
      offset: (currentPage - 1) * size,
    })
      .then((data) => {
        console.log("📌 필터 적용된 강의 리스트:", data);
        setCourses(formatCourseData(data?.content));
        setTotalCourses(data?.totalElements || 0);
      })
      .catch((error) => {
        console.error("🚨 강의 목록 가져오기 실패:", error);
        setCourses([]);
      })
      .finally(() => {
        setLoading(false);
        console.log(
          "🚀 API 마무리 - mainCategory:",
          mainCategory,
          "subCategory:",
          subCategory,
          "subjectTags",
          selectedTags
        );
      });
  }, [
    mainCategory,
    subCategory, // ✅ subCategory 변경 시 API 호출 보장
    level,
    language,
    timeFilter,
    selectedTags,
    sortBy,
    currentPage,
    size,
  ]);

  useEffect(() => {
    if (!loading && courses.length > 0) {
      setContent(renderContent()); // ✅ 데이터 로딩 완료 후 실행
    }
  }, [loading, courses]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 데이터 렌더링 함수
  const renderContent = () => {
    const content = [];
    //const totalChunks = Math.ceil(totalCourses / 16);

    for (let i = 0; i < totalCourses; i += 16) {
      const chunk = courses.slice(i, i + 16); // 강의 16개씩 분할
      content.push(<CourseList key={`course-${i}`} courses={chunk} />);

      // 강사 목록 삽입 (마지막 chunk 이후에는 강사 리스트 추가 안 함)
      if (i + 16 < courses.length) {
        content.push(<InstructorList key={`instructors-${i}`} />);
      }
    }

    return content;
  };

  return (
    <StyledCourseListContainer>
      {loading ? <p>⏳ 로딩 중...</p> : content}
      <SearchPagination
        totalItems={totalCourses}
        itemsPerPage={size}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledCourseListContainer>
  );
};
const StyledCourseListContainer = styled.div``;
export default SearchCardDatas;
