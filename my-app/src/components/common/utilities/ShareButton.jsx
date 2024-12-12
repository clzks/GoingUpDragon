// GoingUpDragon/my-app/src/components/common/utilities/ShareButton.jsx
import React from "react";

// 외부 라이브러리
import { FaLink } from "react-icons/fa";
import styled from "styled-components";

const ShareButton = ({ size = "16px" }) => {
  return <StyledLinkButton size={size}></StyledLinkButton>;
};

const StyledLinkButton = styled(FaLink)`
  margin-left: 20px;
  font-size: ${(props) => props.size}; /* size prop을 사용 */
`;

export default ShareButton;
