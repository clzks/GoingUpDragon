// components/courseDetailPage/main/curriculum/Curriculum.jsx
import React, { useState, useEffect, forwardRef } from "react";
import styled from "styled-components";

import Accordion from "react-bootstrap/Accordion";
import CurriculumItem from "./CurriculumItem";
import ToggleButton from "./ToggleButton";

const Curriculum = forwardRef(({ curriculumData }, ref) => {
  const [isExpanded, setExpanded] = useState(false);

  const [activeKey, setActiveKey] = useState([]); // 기본으로 첫 번째 아이템 열기

  useEffect(() => {
    // 모든 섹션이 열려 있는지 확인하여 isExpanded 업데이트
    const isAllExpanded =
      curriculumData.length > 0 && activeKey.length === curriculumData.length;

    setExpanded(isAllExpanded);
  }, [activeKey, curriculumData]);

  function handleToggle() {
    setExpanded((prev) => !prev);

    if (!isExpanded) {
      // 모든 헤더를 열기
      setActiveKey(curriculumData.map((_, index) => index.toString()));
    } else {
      // 모든 헤더를 닫기
      setActiveKey([]);
    }
  }

  return (
    <StyledCurriculumContainer ref={ref}>
      <StyledTitleText>커리큘럼</StyledTitleText>
      <ToggleButton
        onClick={handleToggle}
        isExpanded={isExpanded}
      ></ToggleButton>
      <StyledCourseAccordion>
        <Accordion
          activeKey={activeKey}
          onSelect={(key) => setActiveKey(key)}
          alwaysOpen
        >
          {curriculumData.map((curriculum, index) => (
            <CurriculumItem
              key={index}
              lectures={curriculum.lectures}
              sectionTitle={curriculum.sectionTitle}
              eventKey={index.toString()}
              number={index + 1}
            ></CurriculumItem>
          ))}
        </Accordion>
      </StyledCourseAccordion>
    </StyledCurriculumContainer>
  );
});

const StyledCurriculumContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 150px;
`;

const StyledTitleText = styled.h2`
  margin-top: 60px;
  margin-bottom: 60px;
  font-weight: 700; /* 굵은 글씨 */
`;

const StyledCourseAccordion = styled.div`
  margin-top: 30px;
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
