// GoingUpDragon/my-app/src/layouts/courseDetailPage/courseDetailLayout.jsx
import React, { useRef, useEffect, useState } from "react";

// GoingUpDragon/my-app/src
import Layout from "../../components/common/layout/Layout";
import DetailCourseBanner from "../../components/courseDetailPage/banner/DetailCourseBanner";
import CourseNavigation from "../../components/courseDetailPage/navigation/CourseNavigation";
import CourseDetailMainPanel from "../../components/courseDetailPage/main/CourseDetailMainPanel";
import { getCourseReviews } from "../../apis/courseDetailPage/courseDetailApi";

const CourseDetailLayout = () => {
  const refList = {
    curriculumRef: useRef(null),
    infoRef: useRef(null),
    reviewRef: useRef(null),
  };

  var courseId = 5641;

  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    getCourseReviews(courseId)
      .then((data) => setReviewData(data))
      .catch((error) => console.error("리뷰 가져오기 실패:", error));
  }, [courseId]);

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
    price: 33000,
    duration: "무제한",
    difficulty: "쉬움",
    badge: "발급",
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

  const recommendLectureList = {
    subtitle: "이준호님의 다른 강의",
    cards: [
      // 데이터 (1)
      {
        title: "재대로 파는 html css",
        text: "이 강좌는 html css의 기초를 다룹니다.",
        imageUrl: "/images/011.png",
        instructor: "이순신",
        rating: 4.9,
        numReviews: 77,
        price: "55,000원",
        level: "입문",
        tag: ["개발", "웹 디자인"],
      },
      // 데이터 (2)
      {
        title: "프로그래밍 시작하기: 파이썬 입문",
        text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
        imageUrl: "/images/012.png",
        instructor: "강감찬",
        rating: 4.8,
        numReviews: 248,
        price: "33,000원",
        level: "초급",
        tag: ["프론트엔드", "파이썬", "기초"],
      },
      // 데이터 (3)
      {
        title: "한입 크기로 잘라먹는 리엑트",
        text: "이 강좌는 리엑트의 기초를 다룹니다.",
        imageUrl: "/images/013.png",
        instructor: "지식의 나무",
        rating: 3.6,
        numReviews: 13,
        price: "155,000원",
        level: "입문",
        tag: ["리엑트", "프론트엔드"],
      },
      // 데이터 (4)
      {
        title: "제일 쉬운 리눅스 커널",
        text: "이 강좌는 리눅스의 기초를 다룹니다.",
        imageUrl: "/images/014.png",
        instructor: "강의 마스터",
        rating: 4.5,
        numReviews: 772,
        price: "무료",
        level: "입문",
        tag: ["리눅스", "시스템 프로그래밍"],
      },
      // 데이터 (5)
      {
        title: "정보처리기사 실기 일주일 정복",
        text: "이 강좌는 정보처리기사 실기의 기초를 다룹니다.",
        imageUrl: "/images/015.png",
        instructor: "학습의 안내자",
        rating: 2.7,
        numReviews: 123,
        price: "11,000원",
        level: "중급",
        tag: ["자격증", "정보처리기사"],
      },
      // 데이터 (6)
      {
        title: "초등 스크래치 코딩 기초",
        text: "이 강좌는 스크래치의 기초를 다룹니다.",
        imageUrl: "/images/016.png",
        instructor: "컴퓨터 선생님",
        rating: 4.8,
        numReviews: 30,
        price: "110,000원",
        level: "입문",
        tag: ["코딩교육", "초등교육"],
      },
      // 데이터 (7)
      {
        title: "엄마표 코딩",
        text: "이 강좌는 초등 코딩의 기초를 다룹니다.",
        imageUrl: "/images/017.png",
        instructor: "다연이 엄마",
        rating: 4.3,
        numReviews: 870,
        price: "30,000원",
        level: "입문",
        tag: ["교육", "코딩"],
      },
      // 데이터 (8)
      {
        title: "할아버지 할머니도 코딩해요",
        text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
        imageUrl: "/images/018.png",
        instructor: "행복 센터",
        rating: 4.9,
        numReviews: 7,
        price: "무료",
        level: "입문",
        tag: ["시니어", "코딩"],
      },
      // 데이터 (9)
      {
        title: "일타 자바스크립트 기초반",
        text: "이 강좌는 자바스크립트의 기초를 다룹니다.",
        imageUrl: "/images/019.png",
        instructor: "일타 조컴",
        rating: 4.9,
        numReviews: 1250,
        price: "22,000원",
        level: "초급",
        tag: ["자바스크립트", "웹 개발"],
      },
      // 데이터 (10)
      {
        title: "스마트폰 100% 사용하기",
        text: "이 강좌는 시니어를 위한 스마트폰 사용법을 다룹니다.",
        imageUrl: "/images/020.png",
        instructor: "착한 손주",
        rating: 4.7,
        numReviews: 35,
        price: "5,000원",
        level: "입문",
        tag: ["시니어", "스마트폰"],
      },
    ],
  };
  const similarLectureList = {
    subtitle: "비슷한 강의 추천",
    cards: [
      // 데이터 (1)
      {
        title: "선생님 토끼의 실전 자바",
        text: "웹 개발에 필요한 자바 기초 기술을 배웁니다.",
        imageUrl: "/images/021.png",
        instructor: "선생님토끼",
        rating: 4.6,
        numReviews: 7942,
        price: "무료",
        level: "초급",
        tag: ["웹 개발", "자바"],
      },
      // 데이터 (2)
      {
        title: "초보자를 위한 프로그래밍 입문",
        text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
        imageUrl: "/images/022.png",
        instructor: "강감찬",
        rating: 5.0,
        numReviews: 3,
        price: "무료",
        level: "초급",
        tag: ["프로그래밍", "입문"],
      },
      // 데이터 (3)
      {
        title: "실전 코딩: 웹 개발 마스터하기",
        text: "웹 개발에 필요한 기초 기술을 배웁니다.",
        imageUrl: "./images/023.png",
        instructor: "코드비전",
        rating: 4.2,
        numReviews: 513,
        price: "무료",
        level: "초급",
        tag: ["웹 개발", "코딩"],
      },
      // 데이터 (4)
      {
        title: "Python으로 시작하는 데이터 과학",
        text: "이 강좌는 파이썬의 기초를 다룹니다.",
        imageUrl: "./images/024.png",
        instructor: "프로그랩",
        rating: 4.7,
        numReviews: 63,
        price: "무료",
        level: "초급",
        tag: ["파이썬", "데이터 과학"],
      },
      // 데이터 (5)
      {
        title: "모바일 프로그래밍",
        text: "모바일 프로그래밍에 필요한 기초 기술을 배웁니다.",
        imageUrl: "./images/025.png",
        instructor: "코드스킬",
        rating: 1.7,
        numReviews: 40,
        price: "무료",
        level: "초급",
        tag: ["모바일", "프로그래밍"],
      },
      // 데이터 (6)
      {
        title: "프론트엔드 기초 연습",
        text: "이 강좌는 프론트엔드의 기초를 다룹니다.",
        imageUrl: "./images/026.png",
        instructor: "프론트맨",
        rating: 3.8,
        numReviews: 77,
        price: "무료",
        level: "초급",
        tag: ["프론트엔드", "기초"],
      },
      // 데이터 (7)
      {
        title: "프론트엔드 실전 연습",
        text: "프론트엔드 개발에 필요한 실전 기술을 배웁니다.",
        imageUrl: "./images/027.png",
        instructor: "프론트맨",
        rating: 4.5,
        numReviews: 54,
        price: "무료",
        level: "중급",
        tag: ["프론트엔드", "실전"],
      },
      // 데이터 (8)
      {
        title: "리엑트 부트스트랩 100% 활용하기",
        text: "이 강좌는 리엑트 부트스트랩의 기초를 다룹니다.",
        imageUrl: "./images/028.png",
        instructor: "생각의 틀",
        rating: 4.5,
        numReviews: 120,
        price: "무료",
        level: "중급",
        tag: ["리엑트", "부트스트랩"],
      },
      // 데이터 (9)
      {
        title: "친구와 함께 하는 엔트리 코딩",
        text: "엔트리 코딩 프로그램의 기초를 배웁니다.",
        imageUrl: "./images/029.png",
        instructor: "코딩선생님",
        rating: 4.2,
        numReviews: 540,
        price: "무료",
        level: "초급",
        tag: ["엔트리", "코딩"],
      },
      // 데이터 (10)
      {
        title: "정보교과서 평가문제 풀이",
        text: "이 강좌는 정보 교과서 관련 기초 지식을 다룹니다.",
        imageUrl: "./images/030.png",
        instructor: "정컴쌤",
        rating: 4.9,
        numReviews: 125000,
        price: "무료",
        level: "초급",
        tag: ["정보", "교과서"],
      },
    ],
  };
  return (
    <Layout>
      <DetailCourseBanner
        lectureData={lectureInfo}
        enrollmentData={enrollmentInfo}
      ></DetailCourseBanner>
      <CourseNavigation refList={refList}></CourseNavigation>
      <CourseDetailMainPanel
        curriculumData={curriculum}
        description={lectureInfo.description}
        recommendLectureList={recommendLectureList}
        similarLectureList={similarLectureList}
        enrollmentData={enrollmentInfo}
        reviewData={reviewData}
        refList={refList}
      ></CourseDetailMainPanel>
    </Layout>
  );
};

export default CourseDetailLayout;
