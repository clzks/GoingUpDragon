// GoingUpDragon/my-app/src/layouts/findAccountPage/AccountRecoveryTabs.jsx

// 외부 라이브러리 임포트
import React, { useState } from 'react'; // React와 상태 관리 훅 useState
import styled from 'styled-components'; // 스타일드 컴포넌트

// 내부 컴포넌트 임포트
// GoingUpDragon/my-app/src/components/common/layout/Logo.jsx
import Logo from '../../components/common/layout/Logo';  // 로고 컴포넌트

// GoingUpDragon/my-app/src/components/findAccountPage/..
import FindIdInput from '../../components/findAccountPage/FindIdInput'; // 아이디 찾기 입력 컴포넌트
import FindPasswordInput from '../../components/findAccountPage/FindPasswordInput'; // 비밀번호 찾기 입력 컴포넌트
import FindPasswordOutput from '../../components/findAccountPage/FindPasswordOutput'; // 비밀번호 찾기 결과 컴포넌트

// 계정 복구 탭 컴포넌트 정의
const AccountRecoveryTabs = () => {
  // 상태 변수 설정
  const [activeTab, setActiveTab] = useState('아이디 찾기'); // 현재 활성화된 탭 상태
  const [isPassWordSent, setIsPassWordSent] = useState(false); // 비밀번호 전송 여부 상태

  /**
   * 비밀번호 찾기 성공 핸들러
   * 비밀번호 전송 성공 시 상태를 갱신합니다.
   */
  function handlePassWordSuccess() {
    setIsPassWordSent(true); // 비밀번호 전송 상태를 true로 업데이트
  }

  return (
    <StyledContainer>
      {/* 로고 컴포넌트 출력 */}
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>

      {/* 탭 버튼들 */}
      <StyledTabsWrapper>
        {/* 아이디 찾기 탭 버튼 */}
        <StyledTabButton
          active={activeTab === '아이디 찾기'}
          rightBorder={true} // 오른쪽 테두리 표시
          onClick={() => {
            setActiveTab('아이디 찾기'); // 현재 탭을 '아이디 찾기'로 설정
            setIsPassWordSent(false); // 비밀번호 전송 상태 초기화
          }}
        >
          아이디 찾기
        </StyledTabButton>

        {/* 비밀번호 찾기 탭 버튼 */}
        <StyledTabButton
          active={activeTab === '비밀번호 찾기'}
          onClick={() => {
            setActiveTab('비밀번호 찾기'); // 현재 탭을 '비밀번호 찾기'로 설정
            setIsPassWordSent(false); // 비밀번호 전송 상태 초기화
          }}
        >
          비밀번호 찾기
        </StyledTabButton>
      </StyledTabsWrapper>

      {/* 탭 내용 출력 */}
      {activeTab === '아이디 찾기' && <FindIdInput />} 
      {activeTab === '비밀번호 찾기' &&
        (isPassWordSent ? (
          <FindPasswordOutput /> // 비밀번호 찾기 성공 시 결과 컴포넌트 출력
        ) : (
          <FindPasswordInput onSuccess={handlePassWordSuccess} /> // 입력 컴포넌트 출력
        ))}
    </StyledContainer>
  );
};

export default AccountRecoveryTabs;

/* --------------------------- */
/* 스타일드 컴포넌트 정의      */
/* --------------------------- */

// 전체 컨테이너 스타일 정의
const StyledContainer = styled.div`
  max-width: 800px; /* 최대 너비 */
  margin: 100px auto; /* 수직 중앙 정렬 */
  padding: 20px; /* 내부 여백 */
`;

// 로고 컴포넌트를 감싸는 래퍼 스타일 정의
const StyledLogoWrapper = styled.div`
  display: flex; /* 가로 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  margin-bottom: 20px; /* 아래 여백 */
`;

// 탭 버튼 래퍼 스타일 정의
const StyledTabsWrapper = styled.div`
  display: flex; /* 가로로 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  margin-bottom: 20px; /* 아래 여백 */
`;

// 탭 버튼 스타일 정의
const StyledTabButton = styled.button`
  background: none; /* 배경 제거 */
  border: none; /* 테두리 제거 */
  color: ${(props) => (props.active ? '#8A2BE2' : 'grey')}; /* 활성화 여부에 따른 색상 */
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')}; /* 텍스트 굵기 */
  font-size: ${(props) => (props.active ? '1.5em' : '1.2em')}; /* 글자 크기 */
  padding: 15px 25px; /* 내부 여백 */
  cursor: pointer; /* 마우스 포인터 */
  outline: none; /* 포커스 아웃라인 제거 */
  border-right: ${(props) => (props.rightBorder ? '1px solid #e0e0e0' : 'none')}; /* 오른쪽 테두리 설정 */

  &:hover {
    color: #8A2BE2; /* 호버 시 텍스트 색상 변경 */
  }
`;
