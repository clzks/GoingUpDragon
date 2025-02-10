// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards/SearchCardDatas.jsx
import React, { useState, useEffect } from "react";

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

const SearchCardDatas = () => {
  // 동적으로 관리할 필터, 정렬 데이터
  const [mainCategory, setMainCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);
  const [level, setLevel] = useState("모두");
  const [language, setLanguage] = useState("모두");
  const [timeFilter, setTimeFilter] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // 페이지네이션을 구현할때 보통 라이브러리를 사용하거나 아니면 useState 데이터값을 저장했다 사용.
  const ITEMS_PER_PAGE = 32; // 한 페이지당 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState([]); // 강의 리스트
  const [totalCourses, setTotalCourses] = useState(0); // 전체 강의 개수
  const [size, setSize] = useState(32); // 페이지 크기 (한 번에 몇 개 가져올지)

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  // // 현재 페이지에 표시할 데이터 계산
  // const startIdx = (currentPage - 1) * size;
  // const endIdx = startIdx + size;
  // //const currentData = CourseDataSet.slice(startIdx, endIdx);

  // ✅ 기존 방식 유지: instructorId가 있을 때만 실행
  useEffect(() => {
    setLoading(true); // ✅ 로딩 시작

    getCoursesByFilterAndSort({
      mainCategory,
      subCategory,
      level,
      language,
      timeFilter,
      selectedTags,
      sortBy,
      size,
      offset: currentPage * size, // ✅ 페이징 적용
    })
      .then((data) => {
        console.log("📌 필터 적용된 강의 리스트:", data);
        setCourses(formatCourseData(data?.content)); // ✅ 강의 리스트 저장
        setTotalCourses(data?.totalElements || 0); // ✅ 전체 강의 개수 저장
      })
      .catch((error) => {
        console.error("🚨 강의 목록 가져오기 실패:", error);
        setCourses([]); // ✅ 에러 시 빈 배열 설정
      })
      .finally(() => setLoading(false)); // ✅ 로딩 끝;
  }, [
    mainCategory,
    subCategory,
    level,
    language,
    timeFilter,
    selectedTags,
    sortBy,
    currentPage,
    size,
  ]); // ✅ 필터 값 변경 시 API 다시 호출

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
    const totalChunks = Math.ceil(totalCourses / 16);

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
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledCourseListContainer>
  );
};
const StyledCourseListContainer = styled.div``;
export default SearchCardDatas;
