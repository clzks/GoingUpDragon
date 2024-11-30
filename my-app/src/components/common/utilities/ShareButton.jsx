import React from "react";
import { FaLink } from "react-icons/fa";
import styled from "styled-components";

const ShareButton = () => {
  return <StyledLinkButton></StyledLinkButton>;
};

const StyledLinkButton = styled(FaLink)`
  margin-left: 20px;
  font-size: 16px;
`;

export default ShareButton;
