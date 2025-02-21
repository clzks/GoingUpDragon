import React from "react";
import MyLectureInstructor from "../MyLectureInstructor";

const MyAllLectureInstructor = ({ courseList }) => {
  return (
    <>
      <MyLectureInstructor courseList={courseList} />
    </>
  );
};

export default MyAllLectureInstructor;
