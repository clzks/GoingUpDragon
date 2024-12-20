// GoingUpDragon/my-app/src/components/findAccountPage/FindPassWordOutput.jsx

// 외부 라이브러리
import React from 'react'; // React 임포트
import styled from 'styled-components'; // 스타일드 컴포넌트를 사용하기 위한 임포트

/**
 * FindPassWordOutPut 컴포넌트
 * - 비밀번호 찾기 완료 후 결과 화면을 렌더링하는 컴포넌트
 * - "비밀번호 이메일 발송" 메시지와 결과 패널을 표시
 */
const FindPasswordOutput = () => {
  return (
    <StyledContainer>
      {/* '비밀번호 이메일 발송' 메시지 */}
      <StyledMessage>비밀번호 이메일 발송</StyledMessage>

      {/* 결과 패널 */}
      <StyledPanel>
        <StyledPanelText>
          이메일로 비밀번호가
          <br />
          발송되었습니다.
        </StyledPanelText>
      </StyledPanel>
    </StyledContainer>
  );
};

export default FindPasswordOutput;

/* ------------------------------------- */
/* Styled Components 정의 (스타일 영역) */
/* ------------------------------------- */

// 컴포넌트 전체 컨테이너 스타일
const StyledContainer = styled.div`
  text-align: center; /* 텍스트를 가로 방향 중앙 정렬 */
  margin-top: 20px; /* 상단 여백 추가 */
`;

// 상단 메시지 스타일
const StyledMessage = styled.p`
  font-size: 2.0em; /* 텍스트 크기 설정 */
  color: #333; /* 텍스트 색상 */
  font-weight: bold; /* 텍스트를 굵게 설정 */
`;

// 결과 패널 스타일
const StyledPanel = styled.div`
  width: 450px; /* 패널의 너비 */
  height: 250px; /* 패널의 높이 */
  margin: 20px auto; /* 패널을 중앙 정렬 */
  border: 1px solid black; /* 테두리 색상 및 굵기 */
  border-radius: 0px; /* 테두리 모서리 직각 설정 */
  display: flex; /* 내부 텍스트를 정렬하기 위해 flex 사용 */
  justify-content: center; /* 텍스트를 가로 방향 중앙 정렬 */
  align-items: center; /* 텍스트를 세로 방향 중앙 정렬 */
  background-color: #ffffff; /* 배경색 */
`;

// 패널 내부 텍스트 스타일
const StyledPanelText = styled.p`
  font-size: 1.5em; /* 텍스트 크기 */
  color: black; /* 텍스트 색상 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  font-weight: bold; /* 텍스트를 굵게 설정 */
  line-height: 1.5; /* 줄 간격 조정 */
`;
