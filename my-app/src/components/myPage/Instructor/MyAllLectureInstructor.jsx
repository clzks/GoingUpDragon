import React from "react";
import MyLectureInstructor from "../MyLectureInstructor";

const MyAllLectureInstructor = ({ courseList, isHome }) => {
  return (
    <>
      <MyLectureInstructor courseList={courseList} isHome={isHome} />
    </>
  );
};

export default MyAllLectureInstructor;
