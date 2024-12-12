// GoingUpDragon/my-app/src/components/courseDetailPage/main/curriculum/CurriculumItem.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import { Accordion } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";

const CurriculumItem = ({ eventKey, sectionTitle, lectures, number }) => {
  const titleText = `섹션 ${number}. ${sectionTitle}`;

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{titleText}</Accordion.Header>
      <StyledLectureContainer>
        {lectures.map((lecture, index) => (
          <StyledLectureItem key={index}>
            <FaPlayCircle></FaPlayCircle>
            <StyledItemText>{lecture.title}</StyledItemText>
            <StyledItemTime>{lecture.duration}</StyledItemTime>
          </StyledLectureItem>
        ))}
      </StyledLectureContainer>
    </Accordion.Item>
  );
};

const StyledLectureContainer = styled(Accordion.Body)`
  width: 100%;
  display: block;
  padding: 0; /* 내부 여백 제거 */
  margin: 0; /* 외부 여백 제거 */
`;

const StyledLectureItem = styled.button`
  width: 100%;
  height: 60px;
  margin: 0;
  order: 1px solid #ddd; /* 선 명확히 보이게 추가 */
  border: #b0e8f1 solid 1px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative; /* 상대 위치를 기준으로 배치 */
  padding-left: 20px;
`;

const StyledItemText = styled.div`
  display: flex;
  margin-left: 16px; /* 아이콘과 텍스트 간 간격 조정 */
  flex: 1; /* 남은 공간을 차지 */
`;

const StyledItemTime = styled.div`
  position: absolute; /* 부모 기준 위치를 고정 */
  right: 30px; /* 오른쪽 끝으로 밀기 */
  text-align: right;
`;

export default CurriculumItem;
