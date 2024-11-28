import React from "react";
import styled from "styled-components";

import Accordion from "react-bootstrap/Accordion";
import CurriculumItem from "./CurriculumItem";

const Curriculum = ({ curriculumData }) => {
  return (
    <StyledCourseAccordion>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <CurriculumItem></CurriculumItem>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </StyledCourseAccordion>
  );
};

const StyledCourseAccordion = styled.div`
  .accordion-button::after {
    position: absolute;
    left: 1rem; /* 왼쪽 위치 */
    right: auto; /* 오른쪽 기본값 제거 */
  }

  .accordion-button {
    padding-left: 4.5rem; /* 왼쪽 아이콘 공간 확보 */
    background-color: #7cd0d5;
  }
`;

export default Curriculum;
