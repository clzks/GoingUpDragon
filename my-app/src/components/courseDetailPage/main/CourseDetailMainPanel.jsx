import React from "react";
import Curriculum from "./curriculum/Curriculum";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import LectureInfo from "./LectureInfo";
import CourseReviewSection from "./reviewSection/CourseReviewSection";
import QnASection from "./QnASection";

const CourseDetailMainPanel = ({ curriculumData, description }) => {
  return (
    <StyledCourseMainPanel>
      <StyledLeftPanel>
        <Curriculum curriculumData={curriculumData}></Curriculum>
        <LectureInfo description={description}></LectureInfo>
        <CourseReviewSection></CourseReviewSection>
        <QnASection></QnASection>
      </StyledLeftPanel>
      <StyledRightPanel></StyledRightPanel>
    </StyledCourseMainPanel>
  );
};

const StyledCourseMainPanel = styled(Container)`
  display: flex;

  > * {
    margin-left: 50px;
  }
`;

const StyledLeftPanel = styled.div`
  flex: 2;
`;

const StyledRightPanel = styled.div`
  flex: 1;
`;

export default CourseDetailMainPanel;
