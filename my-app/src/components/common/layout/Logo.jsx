import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogoButton>
      <StyledLogoImage
        src={`${process.env.PUBLIC_URL}/images/tplogo.png`}
        alt="Logo"
      ></StyledLogoImage>
    </StyledLogoButton>
  );
};

const StyledLogoButton = styled.button`
  background-color: transparent;
  border: none;
`;

const StyledLogoImage = styled.img`
  width: 130px; /* 원하는 너비로 설정 */
  height: auto; /* 비율을 유지하면서 높이를 자동 조정 */
  max-width: 130px; /* 최대 너비를 부모 요소에 맞추도록 설정 */
  margin-bottom: 1rem; /* 로고 이미지 아래 여백 추가 */
`;

export default Logo;
