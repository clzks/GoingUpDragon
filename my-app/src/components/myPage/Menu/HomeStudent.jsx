import React from "react";
import Introduction from "../Introduction";
import AttendingLecture from "../AttendingLecture";
import Review from "../Review";
import styled from "styled-components";

const HomeStudent = () => {
  return (
    <>
      <Introduction />
      <Divider />
      <AttendingLecture />
      <Divider />
      <Review />
    </>
  );
};

export default HomeStudent;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
`;