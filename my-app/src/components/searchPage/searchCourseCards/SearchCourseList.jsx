import React from "react";
import SearchCourseCards from "./SearchCourseCards";
import styled from "styled-components";

const CourseList = ( { courses } ) => {

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
