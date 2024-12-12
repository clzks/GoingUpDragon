// GoingUpDragon/my-app/src/components/common/icons/VerticalLine.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

function VerticalLine({ width = "1px", height = "100%", color = "#ccd5ae", margin = "0" }) {
  return (
    <StyledVerticalLine
      width={width}
      height={height}
      color={color}
      margin={margin}
    ></StyledVerticalLine>
  );
}

export default VerticalLine;

const StyledVerticalLine = styled.div`
  width: ${(props) => props.width}; /* 프롭스에서 width 값 적용 */
  height: ${(props) => props.height}; /* 프롭스에서 height 값 적용 */
  background-color: ${(props) => props.color}; /* 프롭스에서 color 값 적용 */
  margin: ${(props) => props.margin}; /* 프롭스에서 margin 값 적용 */
`;
