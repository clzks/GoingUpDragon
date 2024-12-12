// GoingUpDragon/my-app/src/components/common/utilities/tag/TagButton.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

const TagButton = ({ tag }) => {
  return <StyledTagButton>{tag}</StyledTagButton>;
};

const StyledTagButton = styled.button`
  border-radius: 20px;
  margin-left: 10px;
  padding: 3px 10px;
  border: none;
`;

export default TagButton;
