import React from "react";
import styled from "styled-components";

const LectureInfo = ({ description }) => {
  return (
    <div>
      <StyledMainDescription>{description[0]}</StyledMainDescription>
      <ul>
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index + 1}>
            {index + 1}. {description[index + 1]}
          </li>
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

const StyledSubDescription = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
`;

export default LectureInfo;
