import React from "react";
import Introduction from "../Introduction";
import Review from "../Review";
import MyLectureInstructor from "../MyLectureInstructor";
import QnA from "./QnA";
import styled from "styled-components";

const HomeInstructor = () => {
  return (
    <>
      <Introduction />
      <Divider />
      <MyLectureInstructor/>
      <Divider />
      <Review />
      <Divider />
      <QnA />
    </>
  );
};

export default HomeInstructor;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;