// GoingUpDragon/my-app/src/components/common/utilities/tag/SharpTagComponent.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components/common/utilities/tag
import TagButton from "./TagButton";

const SharpTagComponent = ({ mainCategory, subCategory, tags, tagIds }) => {
  const navigate = useNavigate();

  return (
    <StyledSharpTag>
      <span>#</span>
      {/* tags 배열을 순회하며 TagButton 컴포넌트를 렌더링 */}
      {tags?.map((tag, index) => {
        const tagId = tagIds?.[index];
        console.log("StyledSharpTag", tagId);
        return (
          // ✅ return 추가
          <TagButton
            key={index}
            tag={tag}
            onClick={() =>
              navigate(
                `/Search/?mainCategory=${mainCategory}&subCategory=${subCategory}&subjectTags=${tagId}`
              )
            }
          />
        );
      })}
    </StyledSharpTag>
  );
};

const StyledSharpTag = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 50px;
`;

export default SharpTagComponent;
