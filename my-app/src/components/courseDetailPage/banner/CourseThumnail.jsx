import React from "react";
import styled from "styled-components";

const CourseThumnail = () => {
  return <StyledThumnail></StyledThumnail>;
};

const StyledThumnail = styled.div`
  position: absolute; /* 부모를 기준으로 위치 지정 */
  width: 640px;
  height: 360px;
  background-color: white;
  right: 360px; /* 부모의 오른쪽 끝에서 10px 떨어짐 */
  top: 200px; /* 부모의 위쪽에서 20px 떨어짐 */
  border-radius: 10px;
`;

export default CourseThumnail;
