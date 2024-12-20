// GoingUpDragon/my-app/src/components/findAccountPage/findIdOutput.jsx

import React from 'react';
import styled from 'styled-components';

const FindIdOutput = () => {
  // 마스킹된 사용자 데이터
  const maskedEmail = 'g****@gmail.com'; // 이메일 예시
  const maskedId = 'abcabc123'; // 사용자 ID 예시

  return (
    <StyledContainer>
      {/* 사용자 이메일 정보와 비밀번호 찾기 버튼 */}
      <StyledPanel>
        <StyledRow>
          <StyledTextContainer>
            <StyledImage src="/images/google_logo.png" alt="Google Logo" />
            <span>{maskedEmail}</span>
          </StyledTextContainer>
          <StyledButtonContainer>
            {/* eslint-disable-next-line no-use-before-define */} 
            <StyledPasswordButton>비밀번호 찾기</StyledPasswordButton>
          </StyledButtonContainer>
        </StyledRow>

        {/* 사용자 ID 정보와 비밀번호 찾기 버튼 */}
        <StyledRow>
          <StyledTextContainer>
            <StyledImage src="/images/profile.png" alt="Profile Icon" />
            <span>{maskedId}</span>
          </StyledTextContainer>
          <StyledButtonContainer>
            {/* eslint-disable-next-line no-use-before-define */} 
            <StyledPasswordButton>비밀번호 찾기</StyledPasswordButton>
          </StyledButtonContainer>
        </StyledRow>
      </StyledPanel>

      {/* eslint-disable-next-line no-use-before-define */}
      <StyledButton>로그인</StyledButton>
    </StyledContainer>
  );
};

export default FindIdOutput;

/* --- Styled Components Section --- */

// StyledContainer: 컴포넌트 전체를 감싸는 컨테이너
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  gap: 10px; /* 각 항목 사이 간격 */
`;

// StyledPanel: 이메일 및 ID 정보를 보여주는 패널
const StyledPanel = styled.div`
  width: 500px;
  height: 200px; /* 패널 높이 */
  padding: 20px; /* 내부 여백 */
  border: 1px solid #ccc; /* 회색 테두리 */
  border-radius: 0px; /* 모서리 둥글기 설정 */
  background-color: #ffffff; /* 배경색 */
  text-align: center;
  margin-bottom: 20px; /* 하단 간격 */
`;

// StyledRow: 이메일/ID와 버튼을 배치하는 행
const StyledRow = styled.div`
  display: flex; /* 내부 요소를 가로 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 텍스트와 버튼 간격 설정 */
  width: 100%; /* 행의 너비를 전체로 설정 */
  padding: 5px 0; /* 위아래 간격 설정 */
`;

// StyledTextContainer: 이메일/ID 텍스트와 아이콘을 감싸는 컨테이너
const StyledTextContainer = styled.div`
  display: flex; /* 텍스트와 아이콘을 가로로 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  gap: 10px; /* 텍스트와 아이콘 간 간격 */
  flex: 1; /* 남는 공간을 차지하도록 설정 */
`;

// StyledButtonContainer: 비밀번호 찾기 버튼을 감싸는 컨테이너
const StyledButtonContainer = styled.div`
  display: flex; /* 버튼을 가로로 정렬 */
  justify-content: flex-end; /* 버튼을 오른쪽으로 정렬 */
  flex-shrink: 0; /* 버튼 영역이 축소되지 않도록 설정 */
`;

// StyledImage: 텍스트 옆에 표시되는 아이콘
const StyledImage = styled.img`
  width: 40px; /* 아이콘의 너비 */
  height: 40px; /* 아이콘의 높이 */
`;


// StyledButton: 로그인 버튼과 비밀번호 찾기 버튼의 공통 스타일
const StyledButton = styled.button`
  width: 500px; /* 버튼 너비 */
  padding: 10px 10px; /* 버튼 내부 여백 */
  font-size: 1em; /* 버튼 텍스트 크기 */
  background-color: #ffffff; /* 배경색 */
  color: black; /* 텍스트 색상 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 4px; /* 모서리 둥글기 */
  cursor: pointer; /* 마우스 포인터 표시 */

  &:hover {
    background-color: #f0f0f0; /* 마우스 올렸을 때 배경색 변경 */
  }
`;

// StyledPasswordButton: 비밀번호 찾기 버튼
const StyledPasswordButton = styled(StyledButton)`
  width: 150px; /* 버튼의 너비 */
`;