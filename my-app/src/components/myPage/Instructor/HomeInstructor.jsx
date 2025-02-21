import React from "react";
import Introduction from "../Introduction";
import Review from "../Review";
import MyLectureInstructor from "../MyLectureInstructor";
import QnA from "../QnA";
import styled from "styled-components";

const HomeInstructor = ({ myPageData }) => {
  return (
    <>
      <Introduction myPageData={myPageData}></Introduction>
      <Divider></Divider>
      <MyLectureInstructor
        courseList={myPageData?.courseList}
      ></MyLectureInstructor>
      <Divider></Divider>
      <Review reviewList={myPageData?.reviewList}></Review>
      <Divider></Divider>
      <QnA qnAList={myPageData?.qnAList}></QnA>
    </>
  );
};

export default HomeInstructor;

// 스타일 정의
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;
