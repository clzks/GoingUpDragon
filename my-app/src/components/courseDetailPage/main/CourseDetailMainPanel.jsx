// components/courseDetailPage/main/CourseDetailMainPanel.jsx
import React from "react";
import Curriculum from "./curriculum/Curriculum";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import LectureInfo from "./LectureInfo";
import CourseReviewSection from "./reviewSection/CourseReviewSection";
import SimilarCardList from "./recommendedSection/SimilarCardList";
import InstructorCardList from "./recommendedSection/InstructorCardList";
import PricingPanel from "../SideComponent/PricingPanel";

const CourseDetailMainPanel = ({
  curriculumData,
  description,
  recommendLectureList,
  similarLectureList,
  enrollmentData,
  refList,
}) => {
  function getLectureCount(curriculumData) {
    return curriculumData.reduce((total, section) => {
      return total + section.lectures.length;
    }, 0);
  }
  return (
    <StyledCourseMainPanel>
      <StyledLeftPanel>
        <Curriculum
          curriculumData={curriculumData}
          ref={refList.curriculumRef}
        ></Curriculum>
        <LectureInfo
          description={description}
          ref={refList.infoRef}
        ></LectureInfo>
        <CourseReviewSection ref={refList.reviewRef}></CourseReviewSection>
        <InstructorCardList
          lectureList={recommendLectureList}
        ></InstructorCardList>
        <SimilarCardList lectureList={similarLectureList}></SimilarCardList>
      </StyledLeftPanel>
      <StyledRightPanel>
        <PricingPanel
          data={enrollmentData}
          count={getLectureCount(curriculumData)}
        ></PricingPanel>
      </StyledRightPanel>
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
  position: relative;
  flex: 1;
`;

export default CourseDetailMainPanel;
