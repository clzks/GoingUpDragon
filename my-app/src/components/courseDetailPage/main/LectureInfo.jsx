import React from "react";
import styled from "styled-components";

const LectureInfo = ({ description }) => {
  return (
    <div>
      <StyledTitleText>강의 소개</StyledTitleText>
      <StyledMainDescription>{description[0]}</StyledMainDescription>
      <ul>
        {Array.from({ length: 5 }, (_, index) => (
          <StyledLi key={index + 1}>
            {index + 1}. {description[index + 1]}
          </StyledLi>
        ))}
      </ul>
      <StyledSubDescription>{description[6]}</StyledSubDescription>
    </div>
  );
};

const StyledMainDescription = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
`;

const StyledTitleText = styled.h2`
  margin-top: 100px;
  margin-bottom: 100px;
  font-weight: 700; /* 굵은 글씨 */
`;

const StyledLi = styled.li`
  margin-bottom: 20px;
`;

const StyledSubDescription = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
`;

export default LectureInfo;
