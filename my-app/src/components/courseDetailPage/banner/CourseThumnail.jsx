// GoingUpDragon/my-app/src/components/courseDetailPage/banner/CourseThumnail.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

const CourseThumnail = () => {
  return <StyledThumnail></StyledThumnail>;
};

const StyledThumnail = styled.div`
  position: absolute; /* 부모를 기준으로 위치 지정 */
  width: 368px;
  height: 240px;
  background-color: white;
  right: 360px; /* 부모의 오른쪽 끝에서 10px 떨어짐 */
  top: 120px; /* 부모의 위쪽에서 20px 떨어짐 */
  border-radius: 10px;
`;

export default CourseThumnail;
