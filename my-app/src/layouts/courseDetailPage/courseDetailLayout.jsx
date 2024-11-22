import React from "react";
import Layout from "../../components/common/layout/Layout";
import DetailCourseBanner from "../../components/courseDetailPage/banner/DetailCourseBanner";

const CourseDetailLayout = () => {
  const lectureInfo = {
    instructor: "이준호",
    mainCategory: "개발 · 프로그래밍",
    secondaryCategory: "프론트엔드 ",
    title: "모던 웹 개발: 프론트엔드 기초부터 심화까지",
    keyPoint:
      "이 강좌는 HTML, CSS, JavaScript의 기본부터 React, Vue.js와 같은 최신 프레임워크까지 아우르며, 실제 프로젝트를 통해 실무 능력을 키우는 데 중점을 둡니다.",
    tags: ["Html", "CSS"],
  };

  const enrollmentInfo = {
    instructor: "이준호",
    rating: 4.8,
    reviews: 133,
    students: 1300,
  };

  return (
    <Layout>
      <DetailCourseBanner
        lectureData={lectureInfo}
        enrollmentData={enrollmentInfo}
      ></DetailCourseBanner>
    </Layout>
  );
};

export default CourseDetailLayout;
