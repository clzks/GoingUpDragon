// GoingUpDragon/my-app/src/components/common/utilities/tag/TagButton.jsx
import React from "react";
import styled from "styled-components";

const TagButton = ({ tag, margin }) => {
  return <StyledTagButton margin={margin}>{tag}</StyledTagButton>;
};

const StyledTagButton = styled.button`
  border-radius: 20px;
  padding: 3px 10px;
  border: none;
  margin: ${(props) =>
    props.margin || "0 0 0 10px"}; /* 기본값: margin-left 10px */
`;

export default TagButton;
