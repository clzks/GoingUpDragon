import React from "react";
import styled from "styled-components";

import Accordion from "react-bootstrap/Accordion";
import CurriculumItem from "./CurriculumItem";

const Curriculum = ({ curriculumData }) => {
  return (
    <div>
      <StyledTitleText>커리큘럼</StyledTitleText>
      <StyledCourseAccordion>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          {curriculumData.map((curriculum, index) => (
            <CurriculumItem
              key={index}
              lectures={curriculum.lectures}
              sectionTitle={curriculum.sectionTitle}
              eventKey={index}
              number={index + 1}
            ></CurriculumItem>
          ))}
        </Accordion>
      </StyledCourseAccordion>
    </div>
  );
};

const StyledTitleText = styled.h2`
  margin-top: 60px;
  margin-bottom: 60px;

  margin-left: 50px;
  font-weight: 700; /* 굵은 글씨 */
`;

const StyledCourseAccordion = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  .accordion-button::after {
    position: absolute;
    left: 1rem; /* 왼쪽 위치 */
    right: auto; /* 오른쪽 기본값 제거 */
  }

  .accordion-button {
    padding-left: 4.5rem; /* 왼쪽 아이콘 공간 확보 */
    background-color: #b0e8f1;
    outline: none; /* 기본 포커스 아웃라인 제거 */
    box-shadow: none !important; /* 하이라이트 제거 */
  }

  .accordion-button:focus {
    outline: none; /* 포커스 상태에서도 아웃라인 제거 */
    box-shadow: none !important; /* 포커스 시 하이라이트 제거 */
  }

  .accordion-collapse {
    transition: height 0.2s ease !important; /* 트랜지션 시간 0.2초로 설정 */
  }

  .accordion-collapse.collapsing {
    transition: height 0.2s ease !important; /* 열릴 때와 닫힐 때 동일한 시간 적용 */
  }
`;

export default Curriculum;
