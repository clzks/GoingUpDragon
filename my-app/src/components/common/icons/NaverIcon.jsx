// GoingUpDragon/my-app/src/components/common/icons/NaverIcon.jsx
import React from 'react';
import styled from 'styled-components';

// NaverIcon 컴포넌트 정의
const NaverIcon = ({ width = "48px", height = "48px" }) => (
  <StyledSVG
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <title>Naver Logo</title>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#03C75A"
        d="M0 0h48v48H0z"
      />
      <path
        fill="#FFF"
        d="M27.616 25.525l-5.362-7.61h-4.91v13.17h4.197v-7.61l5.37 7.61h4.91v-13.17h-4.205z"
      />
    </g>
  </StyledSVG>
);

// Styled component for the SVG with dynamic size props
const StyledSVG = styled.svg`
  width: ${(props) => props.width || "48px"}; /* 기본 너비 */
  height: ${(props) => props.height || "48px"}; /* 기본 높이 */
  max-height: 100vh; /* 화면 높이에 맞게 제한 */
  max-width: 100vw; /* 화면 너비에 맞게 제한 */
`;

export default NaverIcon;
