import React from "react";
import styled from "styled-components";

function HorizontalLine({ width = "100%", height = "1px", color = "#ccd5ae" }) {
  return (
    <StyledHorizontalLine
      width={width}
      height={height}
      color={color}
    ></StyledHorizontalLine>
  );
}

export default HorizontalLine;

const StyledHorizontalLine = styled.div`
  width: ${(props) => props.width}; /* 프롭스에서 width 값 적용 */
  height: ${(props) => props.height}; /* 프롭스에서 height 값 적용 */
  background-color: ${(props) => props.color}; /* 프롭스에서 color 값 적용 */
`;
