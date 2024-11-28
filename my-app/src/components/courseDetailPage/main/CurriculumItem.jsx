import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

const CurriculumItem = ({ eventKey, sectionTitle, lectures, number }) => {
  const titleText = `섹션 ${number}. ${sectionTitle}`;

  const lectureses = [
    { id: 1, title: "1. 강의 소개" },
    { id: 2, title: "2. 설치 방법" },
    { id: 3, title: "3. 첫 번째 프로젝트" },
  ];

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{titleText}</Accordion.Header>
      <Accordion.Body>
        <StyledLectureContainer>
          {lectureses.map((lecture) => (
            <button key={lecture.id}>{lecture.title}</button>
          ))}
        </StyledLectureContainer>
      </Accordion.Body>
    </Accordion.Item>
  );
};

const StyledLectureContainer = styled.div`
  width: 100%;
  display: flex;
`;

const StyledLectureItem = styled.button``;

export default CurriculumItem;
