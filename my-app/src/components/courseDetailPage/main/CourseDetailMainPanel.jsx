import React from 'react'
import CourseNavigation from './CourseNavigation'
import HorizontalLine from '../../common/icons/HorizontalLine'
import Curriculum from './Curriculum'
import styled from "styled-components";
import { Container } from 'react-bootstrap';

const CourseDetailMainPanel = () => {
  return (
    <StyledCourseMainPanel>
        <CourseNavigation></CourseNavigation>
        <HorizontalLine></HorizontalLine>
        <Curriculum></Curriculum>
    </StyledCourseMainPanel>
  )
}

const StyledCourseMainPanel = styled(Container)`

`

export default CourseDetailMainPanel