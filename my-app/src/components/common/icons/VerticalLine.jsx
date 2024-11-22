import React from "react";
import styled from "styled-components";

function VerticalLine({ width = "1px", height = "100%", color = "#ccd5ae" }) {
  return (
    <StyledVerticalLine
      width={width}
      height={height}
      color={color}
    ></StyledVerticalLine>
  );
}

export default VerticalLine;

const StyledVerticalLine = styled.div`
  width: ${(props) => props.width}; /* 프롭스에서 width 값 적용 */
  height: ${(props) => props.height}; /* 프롭스에서 height 값 적용 */
  background-color: ${(props) => props.color}; /* 프롭스에서 color 값 적용 */
`;
