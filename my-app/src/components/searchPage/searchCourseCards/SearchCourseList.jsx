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
    display:flex;
`;
