import React from "react";
import CourseList from "./SearchCourseList";
import InstructorList from "../instructorList/InstructorList";
import SearchPagination from "../searchPagination/SearchPagination";
import styled from "styled-components";

const SearchCardDatas = () => {

  const dataset1 = [
    {
      thumbnail: "/images/041.png",
      title: "React 강의",
      instructor: "홍길동",
      rating: 4,
      reviews: 1,
      price: "₩30,000"
    },
    {
      thumbnail: "/images/042.png",
      title: "파이썬 프로그래밍 완벽 가이드",
      instructor: "이파이썬",
      rating: 5,
      reviews: 200,
      price: "₩40,000"
    },
    {
      thumbnail: "/images/043.png",
      title: "실전 개발 마스터 클래스",
      instructor: "김코딩 전문가",
      rating: 3,
      reviews: 1111,
      price: "무료"
    },
    {
      thumbnail: "/images/043.png",
      title: "JavaScript 강의",
      instructor: "이순신",
      rating: 2,
      reviews: 27,
      price: "₩110,000"
    }
  ];

  const dataset2 = [
    {
      thumbnail: "/images/044.png",
      title: "C++ 기초 강의",
      instructor: "박찬호",
      rating: 4,
      reviews: 57,
      price: "₩20,000"
    },
    {
      thumbnail: "/images/045.png",
      title: "데이터 분석 전문가 과정",
      instructor: "이데이터",
      rating: 5,
      reviews: 999,
      price: "₩50,000"
    },
    {
      thumbnail: "/images/046.png",
      title: "알고리즘 마스터 클래스",
      instructor: "정석",
      rating: 4,
      reviews: 345,
      price: "₩70,000"
    },
    {
      thumbnail: "/images/047.png",
      title: "HTML/CSS 기초",
      instructor: "김프론트",
      rating: 3,
      reviews: 88,
      price: "₩10,000"
    }
  ];

  const dataset3 = [
    {
      thumbnail: "/images/048.png",
      title: "Node.js 실전 프로젝트",
      instructor: "유노드",
      rating: 4,
      reviews: 340,
      price: "₩80,000"
    },
    {
      thumbnail: "/images/049.png",
      title: "리액트 네이티브 개발",
      instructor: "박리액트",
      rating: 5,
      reviews: 1280,
      price: "₩90,000"
    },
    {
      thumbnail: "/images/050.png",
      title: "MySQL 고급 쿼리",
      instructor: "이디비",
      rating: 4,
      reviews: 505,
      price: "₩60,000"
    },
    {
      thumbnail: "/images/007.png",
      title: "UX/UI 디자인 마스터 클래스",
      instructor: "디자이너",
      rating: 5,
      reviews: 1000,
      price: "₩100,000"
    }
  ];

  const dataset4 = [
    {
      thumbnail: "/images/014.png",
      title: "Django 웹 개발 입문",
      instructor: "장고코딩",
      rating: 3,
      reviews: 200,
      price: "₩50,000"
    },
    {
      thumbnail: "/images/013.png",
      title: "React와 Redux로 프로젝트 만들기",
      instructor: "리액트마스터",
      rating: 4,
      reviews: 760,
      price: "₩120,000"
    },
    {
      thumbnail: "/images/012.png",
      title: "웹 보안 기초",
      instructor: "보안전문가",
      rating: 5,
      reviews: 1100,
      price: "₩75,000"
    },
    {
      thumbnail: "/images/011.png",
      title: "프로그래밍 기초 강의",
      instructor: "초보자",
      rating: 2,
      reviews: 56,
      price: "₩15,000"
    }
  ];

  const dataset5 = [
    {
      thumbnail: "/images/050.png",
      title: "Django 웹 개발 입문",
      instructor: "장고코딩",
      rating: 3,
      reviews: 200,
      price: "₩50,000"
    },
    {
      thumbnail: "/images/049.png",
      title: "React와 Redux로 프로젝트 만들기",
      instructor: "리액트마스터",
      rating: 4,
      reviews: 760,
      price: "₩120,000"
    },
    {
      thumbnail: "/images/048.png",
      title: "웹 보안 기초",
      instructor: "보안전문가",
      rating: 5,
      reviews: 1100,
      price: "₩75,000"
    },
    {
      thumbnail: "/images/047.png",
      title: "프로그래밍 기초 강의",
      instructor: "초보자",
      rating: 2,
      reviews: 56,
      price: "₩15,000"
    }
  ];
  
  const dataset6 = [
    {
      thumbnail: "/images/046.png",
      title: "Django 웹 개발 입문",
      instructor: "장고코딩",
      rating: 3,
      reviews: 200,
      price: "₩50,000"
    },
    {
      thumbnail: "/images/045.png",
      title: "React와 Redux로 프로젝트 만들기",
      instructor: "리액트마스터",
      rating: 4,
      reviews: 760,
      price: "₩120,000"
    },
    {
      thumbnail: "/images/044.png",
      title: "웹 보안 기초",
      instructor: "보안전문가",
      rating: 5,
      reviews: 1100,
      price: "₩75,000"
    },
    {
      thumbnail: "/images/043.png",
      title: "프로그래밍 기초 강의",
      instructor: "초보자",
      rating: 2,
      reviews: 56,
      price: "₩15,000"
    }
  ];
  
  const dataset7 = [
    {
      thumbnail: "/images/042.png",
      title: "Django 웹 개발 입문",
      instructor: "장고코딩",
      rating: 3,
      reviews: 200,
      price: "₩50,000"
    },
    {
      thumbnail: "/images/041.png",
      title: "React와 Redux로 프로젝트 만들기",
      instructor: "리액트마스터",
      rating: 4,
      reviews: 760,
      price: "₩120,000"
    },
    {
      thumbnail: "/images/040.png",
      title: "웹 보안 기초",
      instructor: "보안전문가",
      rating: 5,
      reviews: 1100,
      price: "₩75,000"
    },
    {
      thumbnail: "/images/039.png",
      title: "프로그래밍 기초 강의",
      instructor: "초보자",
      rating: 2,
      reviews: 56,
      price: "₩15,000"
    }
  ];
  
  const dataset8 = [
    {
      thumbnail: "/images/038.png",
      title: "Django 웹 개발 입문",
      instructor: "장고코딩",
      rating: 3,
      reviews: 200,
      price: "₩50,000"
    },
    {
      thumbnail: "/images/037.png",
      title: "React와 Redux로 프로젝트 만들기",
      instructor: "리액트마스터",
      rating: 4,
      reviews: 760,
      price: "₩120,000"
    },
    {
      thumbnail: "/images/036.png",
      title: "웹 보안 기초",
      instructor: "보안전문가",
      rating: 5,
      reviews: 1100,
      price: "₩75,000"
    },
    {
      thumbnail: "/images/035.png",
      title: "프로그래밍 기초 강의",
      instructor: "초보자",
      rating: 2,
      reviews: 56,
      price: "₩15,000"
    }
  ];  

  return (
    <StyledCourseListContainer>
      <CourseList courses={dataset1} />
      <CourseList courses={dataset2} />
      <CourseList courses={dataset3} />
      <CourseList courses={dataset4} />
      <InstructorList />
      <CourseList courses={dataset5} />
      <CourseList courses={dataset6} />
      <CourseList courses={dataset7} />
      <CourseList courses={dataset8} />
      <SearchPagination />
    </StyledCourseListContainer>
  );
};

const StyledCourseListContainer = styled.div``;

export default SearchCardDatas;
