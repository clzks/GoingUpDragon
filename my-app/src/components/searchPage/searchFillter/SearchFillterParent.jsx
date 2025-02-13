// GoingUpDragon/my-app/src/components/searchPage/searchFillter/SearchFillterParent.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/searchPage/searchFillter
import SeachFillterOptions from "./SeachFillterChild";
import SearchFillterDatas from "./SearchFillterDatas.json"; // JSON 데이터 가져오기

const CourseSettings = ({ onSelect }) => {
  // JSON 데이터에서 필요한 부분만 추출
  const { difficulties, classTimes, languages } = SearchFillterDatas[0];

  return (
    <StyledSearchFillterSettingsContainer>
      {/* 각 항목을 SeachFillterOptions 컴포넌트에 전달 */}
      <SeachFillterOptions
        data={{ ...difficulties, key: "level" }}
        onSelect={onSelect}
      />
      <SeachFillterOptions
        data={{ ...classTimes, key: "time" }}
        onSelect={onSelect}
      />
      <SeachFillterOptions
        data={{ ...languages, key: "language" }}
        onSelect={onSelect}
      />
    </StyledSearchFillterSettingsContainer>
  );
};

export default CourseSettings;

const StyledSearchFillterSettingsContainer = styled.div`
  margin-right: 16px;
`;
