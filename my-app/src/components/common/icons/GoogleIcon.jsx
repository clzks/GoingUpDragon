// GoingUpDragon/my-app/src/components/common/icons/GoogleIcon.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
const GoogleLogo = ({ width = "48px", height = "48px" }) => (
  <StyledSVG
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <title>Google Logo</title>
    <clipPath id="g">
      <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
    </clipPath>
    <g className="colors" clipPath="url(#g)">
      <path fill="#FBBC05" d="M0 37V11l17 13z" />
      <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
      <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
      <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
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
export default GoogleLogo;
