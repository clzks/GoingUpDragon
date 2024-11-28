import React from "react";
import CourseNavigation from "../navigation/CourseNavigation";
import Curriculum from "./Curriculum";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import HorizontalLine from "../../common/icons/HorizontalLine";

const CourseDetailMainPanel = ({ curriculumData }) => {
  return (
    <StyledCourseMainPanel>
      <Curriculum curriculumData={curriculumData}></Curriculum>
    </StyledCourseMainPanel>
  );
};

const StyledCourseMainPanel = styled(Container)``;

export default CourseDetailMainPanel;
