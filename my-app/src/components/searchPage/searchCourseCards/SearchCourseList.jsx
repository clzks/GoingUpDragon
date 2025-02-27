// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards/SearchCourseList.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards
import SearchCourseCards from "./SearchCourseCards";

const CourseList = ( { courses } ) => {
  // console.log("c2", courses);

  return (
    <StyledSearchCourseCardsContainer>
      {courses.map((course, index) => (
        <SearchCourseCards key={index} course={course} />
      ))}
    </StyledSearchCourseCardsContainer>
  );
};

export default CourseList;

const StyledSearchCourseCardsContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열로 구성 */
`;
