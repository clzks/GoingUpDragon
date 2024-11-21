// src/components/TagComponent.js
import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";

// 내부 컴포넌트들
import OvalButton from "./OvalButton";
import ArrowButton from "./ArrowButton";

const tags = [
  "이게 전부 9,900원",
  "최신 트렌드",
  "이 모든 게 단 3일 동안",
  "신규 등록 강의",
  "자바스크립트 일타강사 강의 모음",
  "요즘 뜨는 강사",
  "가장 많은 선택을 받은 강의는?",
  "주니어 강좌_어린이를 위한 코딩 수업",
  "시니어 강좌_도전! 스마트폰 마스터하기",
  "엄마표 코딩 수업 노하우",
];

const TagComponent = () => {
  // 모든 태그의 상태를 관리하는 배열 (초기값은 모두 비활성화 상태)
  const [activeTags, setActiveTags] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [showAllTags, setShowAllTags] = useState(false);

  // 모든 태그 표시 여부를 토글하는 함수
  function toggleShowAllTags() {
    setShowAllTags((prev) => !prev);
  }

  // 특정 태그 클릭 시, 해당 태그만 활성화하고 나머지는 비활성화하는 함수
  function handleTagClick(index) {
    // 새 배열을 만들어서 상태를 업데이트
    const newActiveTags = Array(activeTags.length).fill(false); // 모든 태그를 비활성화 상태로 초기화
    newActiveTags[index] = true; // 클릭된 태그만 활성화 상태로 설정
    setActiveTags(newActiveTags); // 상태 업데이트
  }

  return (
    <div>
      <StyledTagContainer>
        {tags.slice(0, 4).map((tag, index) => (
          <OvalButton
            key={index}
            isActive={activeTags[index]}
            onClick={() => handleTagClick(index)}
            label={tag}
          />
        ))}
        <ArrowButton onClick={toggleShowAllTags} />
      </StyledTagContainer>
      {showAllTags && (
        <>
          <StyledTagDropdown>
            <StyledTagBox>
              {tags.slice(4).map((tag, index) => (
                <OvalButton
                  key={index + 4}
                  isActive={activeTags[index + 4]}
                  onClick={() => handleTagClick(index + 4)}
                  label={tag}
                />
              ))}
            </StyledTagBox>
          </StyledTagDropdown>
        </>
      )}
    </div>
  );
};

export default TagComponent;

const StyledTagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px; /* 태그 간격 */
  flex-wrap: wrap; /* 줄 바꿈 */
  max-width: 1000px; /* 태그 영역 최대 너비 조정 */
  margin: 0 auto; /* 가운데 정렬 */
  justify-content: right; /* 태그들이 중앙에 위치하도록 정렬 */
  gap: 5px;
  margin-left: 10px;
  margin-top: 12px;
`;

const StyledTagDropdown = styled.div`
  margin-top: 5px; /* 화살표 버튼 아래에 위치 */
  display: flex;
  flex-direction: row; /* 태그들이 한 줄에 정렬 */
  gap: 10px; /* 태그 간격 */
  position: relative; /* 부모 요소 기준으로 위치 설정 */
  justify-content: center; /* 중앙 정렬 */
`;

const StyledTagBox = styled.div`
  border: 1px solid #f0f0f0; /* 박스 외곽선 */
  border-radius: 10px; /* 둥근 모서리 */
  padding: 5px; /* 패딩 추가 */
  background-color: white; /* 배경색 */
  max-width: 600px; /* 최대 너비 조정 */
`;
