import React from "react";
import Layout from "../../components/common/layout/Layout";
import DetailCourseBanner from "../../components/courseDetailPage/banner/DetailCourseBanner";
import CourseNavigation from "../../components/courseDetailPage/navigation/CourseNavigation";
import Curriculum from "../../components/courseDetailPage/main/curriculum/Curriculum";
import CourseDetailMainPanel from "../../components/courseDetailPage/main/CourseDetailMainPanel";

const CourseDetailLayout = () => {
  const lectureInfo = {
    instructor: "이준호",
    mainCategory: "개발 · 프로그래밍",
    secondaryCategory: "프론트엔드 ",
    title: "모던 웹 개발: 프론트엔드 기초부터 심화까지",
    keyPoint:
      "이 강좌는 HTML, CSS, JavaScript의 기본부터 React, Vue.js와 같은 최신 프레임워크까지 아우르며, 실제 프로젝트를 통해 실무 능력을 키우는 데 중점을 둡니다.",
    tags: ["Html", "CSS"],
    description: [
      "모던 웹 개발: 프론트엔드 기초부터 심화까지 강좌는 웹 애플리케이션의 프론트엔드 개발에 필요한 필수 기술과 최신 트렌드를 심층적으로 다룹니다. 강의는 다음과 같은 주요 주제로 구성됩니다",
      "기초 개념 : HTML, CSS, JavaScript의 기본 문법과 사용법을 익히고, 웹 페이지 구조와 스타일링의 기초를 다집니다. 반응형 디자인: 다양한 디바이스에 적합한 웹 페이지를 만들기 위한 미디어 쿼리와 Flexbox, Grid 레이아웃 기법을 학습합니다.",
      "반응형 디자인: 다양한 디바이스에 적합한 웹 페이지를 만들기 위한 미디어 쿼리와 Flexbox, Grid 레이아웃 기법을 학습합니다.",
      "JavaScript 심화: 비동기 프로그래밍, DOM 조작, 이벤트 핸들링 등 JavaScript의 고급 기능을 통해 동적인 사용자 경험을 구현합니다.",
      "프레임워크 소개: React와 Vue.js와 같은 현대적인 JavaScript 프레임워크의 개념과 기본 사용법을 배워, 실제 애플리케이션 개발에 적용합니다.",
      "프로젝트 기반 학습: 실전 프로젝트를 통해 배운 기술을 활용하고, 팀워크와 문제 해결 능력을 기릅니다.",
      "이 강좌는 초보자는 물론, 프론트엔드 개발을 더 깊이 이해하고 싶은 중급자에게도 적합하며, 수강 후에는 실무에서 요구되는 프론트엔드 개발 능력을 갖추게 될 것입니다.",
    ],
  };

  const enrollmentInfo = {
    instructor: "이준호",
    rating: 4.8,
    reviews: 133,
    students: 1300,
  };

  const curriculum = [
    {
      sectionTitle: "HTML 기초",
      lectures: [
        { title: "HTML 소개", duration: "10:30" },
        { title: "HTML 태그와 속성", duration: "12:45" },
        { title: "웹페이지 구조화", duration: "15:00" },
        { title: "폼과 입력 요소", duration: "18:20" },
      ],
    },
    {
      sectionTitle: "CSS 기초",
      lectures: [
        { title: "CSS 시작하기", duration: "11:20" },
        { title: "선택자와 속성", duration: "14:10" },
        { title: "박스 모델 이해", duration: "13:50" },
        { title: "포지셔닝과 레이아웃", duration: "16:40" },
        { title: "반응형 디자인 기초", duration: "17:15" },
      ],
    },
    {
      sectionTitle: "JavaScript 필수 개념",
      lectures: [
        { title: "변수와 데이터 타입", duration: "12:30" },
        { title: "함수와 스코프", duration: "14:00" },
        { title: "DOM 조작", duration: "15:45" },
        { title: "이벤트와 핸들링", duration: "13:30" },
      ],
    },
    {
      sectionTitle: "React 기본",
      lectures: [
        { title: "React란 무엇인가?", duration: "10:45" },
        { title: "컴포넌트와 JSX", duration: "14:15" },
        { title: "Props와 State", duration: "13:50" },
        { title: "React 이벤트 처리", duration: "15:20" },
        { title: "React 프로젝트 구조화", duration: "16:10" },
      ],
    },
    {
      sectionTitle: "Vue.js 기본",
      lectures: [
        { title: "Vue.js 소개", duration: "12:00" },
        { title: "Vue 컴포넌트 기초", duration: "14:30" },
        { title: "템플릿 문법 이해", duration: "13:20" },
        { title: "Vue 디렉티브 사용법", duration: "15:40" },
        { title: "Vue 프로젝트 설정", duration: "17:00" },
      ],
    },
    {
      sectionTitle: "웹 API와 Ajax",
      lectures: [
        { title: "웹 API 개요", duration: "12:50" },
        { title: "Fetch API 사용법", duration: "14:20" },
        { title: "JSON 데이터 다루기", duration: "13:10" },
        { title: "비동기 프로그래밍 이해", duration: "15:30" },
      ],
    },
    {
      sectionTitle: "실제 프로젝트",
      lectures: [
        { title: "Todo 리스트 만들기", duration: "18:20" },
        { title: "Weather 앱 개발", duration: "20:00" },
        { title: "React와 API 통합", duration: "22:10" },
        { title: "Vue.js로 SPA 구현", duration: "24:00" },
      ],
    },
    {
      sectionTitle: "최종 프로젝트 및 리뷰",
      lectures: [
        { title: "프로젝트 제출", duration: "25:00" },
        { title: "코드 리뷰 및 피드백", duration: "18:30" },
        { title: "최종 발표 및 Q&A", duration: "20:15" },
      ],
    },
  ];

  return (
    <Layout>
      <DetailCourseBanner
        lectureData={lectureInfo}
        enrollmentData={enrollmentInfo}
      ></DetailCourseBanner>
      <CourseNavigation></CourseNavigation>
      <CourseDetailMainPanel
        curriculumData={curriculum}
        description={lectureInfo.description}
      ></CourseDetailMainPanel>
    </Layout>
  );
};

export default CourseDetailLayout;
