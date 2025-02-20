// GoingUpDragon/my-app/src/components/qnAPage/header/QnAHeader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import HorizontalLine from "../../common/icons/HorizontalLine";
import styled from "styled-components";

const QnAHeader = ({ title, desc, courseId }) => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledHeaderContainer
        onClick={() => navigate(`/CourseDetail/${courseId}`)}
      >
        <StyledThumnail></StyledThumnail>
        <StyledThumnailInfo>
          <h5>{title}</h5>
          <StyledSubTitle>{desc}</StyledSubTitle>
        </StyledThumnailInfo>
      </StyledHeaderContainer>
      <HorizontalLine></HorizontalLine>
    </div>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  max-width: 1500px; /* 원하는 최대 폭 */
  margin: 0 auto; /* 가운데 정렬 */
  margin-bottom: 30px;
  cursor: pointer; /* 마우스 호버 시 버튼처럼 변경 */
`;

const StyledThumnail = styled.div`
  width: 140px;
  height: 90px;
  background-color: blue;
`;

const StyledThumnailInfo = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSubTitle = styled.span`
  color: gray;
  font-size: 16px;
`;

export default QnAHeader;
