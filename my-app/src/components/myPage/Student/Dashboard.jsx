import React from "react";
import LatelyLecture from "../LatelyLecture";
import Badge from "../Badge";
import SkillTag from "../SkillTag";

const Dashboard = ({ skills }) => {
  return (
    <>
      <LatelyLecture />
      <Badge />
      <SkillTag skills={skills} />
    </>
  );
};

export default Dashboard;
