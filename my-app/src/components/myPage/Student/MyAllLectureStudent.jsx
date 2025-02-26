import React from "react";
import MyLectureStudent from "../MyLectureStudent";

const MyAllLectureStudent = ({ lectures }) => {
  return (
    <>
      <MyLectureStudent lectures={lectures} />
    </>
  );
};

export default MyAllLectureStudent;
