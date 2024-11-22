import React from "react";
import styled from "styled-components";

// Styled component for the Naver icon
const StyledNaverIcon = styled.div`
  width: ${(props) => props.width || "48px"}; /* 기본 너비 */
  height: ${(props) => props.height || "48px"}; /* 기본 높이 */
  background-image: url("/images/naverIcon.png"); /* 이미지 경로 */
  background-size: cover; /* 이미지를 크기에 맞게 채움 */
  background-position: center; /* 이미지 중앙 정렬 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
`;

const NaverIcon = ({ width, height }) => {
  return <StyledNaverIcon width={width} height={height} />;
};

export default NaverIcon;
