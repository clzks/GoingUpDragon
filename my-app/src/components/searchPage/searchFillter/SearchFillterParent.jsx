import React from "react";
import SeachFillterOptions from "./SeachFillterChild";
import styled from "styled-components";

const CourseSettings = () => {
  const data = {
    difficulties: {
      title: "난이도",
      items: ["입문", "중급", "고급"]
    },
    classTimes: {
      title: "강의 시간",
      items: ["30분", "1시간", "2시간"]
    },
    languages: {
      title: "사용 언어",
      items: ["한국어", "영어", "일본어"]
    }
  };

  return (
    <StyledSearchFillterSettingsContainer>
      <SeachFillterOptions data={data.difficulties} />
      <SeachFillterOptions data={data.classTimes} />
      <SeachFillterOptions data={data.languages} />
    </StyledSearchFillterSettingsContainer>
  );
};

export default CourseSettings;

const StyledSearchFillterSettingsContainer = styled.div`
  margin-right:16px;
`;
