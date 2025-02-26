import React from "react";
import Introduction from "../Introduction";
import AttendingLecture from "../AttendingLecture";
import Review from "../Review";
import styled from "styled-components";

const HomeStudent = ({ myPageData, lectures, reviewList }) => {
  return (
    <>
      <Introduction myPageData={myPageData} />
      <Divider />
      <AttendingLecture lectures={lectures} />
      <Divider />
      <Review isHome={true} reviewList={reviewList} />
    </>
  );
};

export default HomeStudent;

// 스타일 정의
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;
