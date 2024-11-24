import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

const SharpTagComponent = ({ tags }) => {
  return (
    <StyledSharpTag>
      <span>#</span>
      {/* tags 배열을 순회하며 TagButton 컴포넌트를 렌더링 */}
      {tags.map((tag, index) => (
        <TagButton key={index} tag={tag} />
      ))}
    </StyledSharpTag>
  );
};

const StyledSharpTag = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 50px;
`;

export default SharpTagComponent;
