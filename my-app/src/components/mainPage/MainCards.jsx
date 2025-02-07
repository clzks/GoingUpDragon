// GoingUpDragon/my-app/src/components/mainPage/MainCards.jsx
import React, { useState, useEffect } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
import Cards from "../common/card/Cards";

import {
  getHighRatingCourseList,
  getFreeCourseList,
  getCourseListByLevel,
} from "../../apis/common/courseApi";

const MainCards = () => {
  const [highRateCourseList, setHighRateCourseList] = useState([]);
  const [freeCourseList, setFreeCourseList] = useState([]);
  const [easyCourseList, setEasyCourseList] = useState([]);

  useEffect(() => {
    getHighRatingCourseList()
      .then((data) => {
        console.log("📌 3.5점 이상인 강의 리스트:", data);

        const formattedCourses = data.map((course) => ({
          title: course.courseTitle,
          text: course.courseDescription,
          imageUrl: "", // 필요하면 백엔드에서 추가
          instructor: course.instructorName,
          rating: course.rate,
          numReviews: course.reviewCount,
          price: course.price,
          level: course.courseLevel,
          tag: course.subjectTagNames, // ✅ 배열 그대로 사용
          courseId: course.courseId,
          enrollmentCount: course.enrollmentCount,
        }));

        setHighRateCourseList(formattedCourses); // ✅ 변환된 데이터 저장
      })
      .catch((error) => {
        console.error("🚨 강의 목록 가져오기 실패:", error);
        setHighRateCourseList([]); // ✅ 에러 시 빈 배열 설정
      });
  }, []);

  useEffect(() => {
    getCourseListByLevel()
      .then((data) => {
        console.log("📌 무료 강의 리스트:", data);

        const formattedCourses = data.map((course) => ({
          title: course.courseTitle,
          text: course.courseDescription,
          imageUrl: "", // 필요하면 백엔드에서 추가
          instructor: course.instructorName,
          rating: course.rate,
          numReviews: course.reviewCount,
          price: course.price,
          level: course.courseLevel,
          tag: course.subjectTagNames, // ✅ 배열 그대로 사용
          courseId: course.courseId,
          enrollmentCount: course.enrollmentCount,
        }));

        setEasyCourseList(formattedCourses); // ✅ 변환된 데이터 저장
      })
      .catch((error) => {
        console.error("🚨 강의 목록 가져오기 실패:", error);
        setEasyCourseList([]); // ✅ 에러 시 빈 배열 설정
      });
  }, []);

  useEffect(() => {
    getFreeCourseList()
      .then((data) => {
        console.log("📌 무료 강의 리스트:", data);

        const formattedCourses = data.map((course) => ({
          title: course.courseTitle,
          text: course.courseDescription,
          imageUrl: "", // 필요하면 백엔드에서 추가
          instructor: course.instructorName,
          rating: course.rate,
          numReviews: course.reviewCount,
          price: course.price,
          level: course.courseLevel,
          tag: course.subjectTagNames, // ✅ 배열 그대로 사용
          courseId: course.courseId,
          enrollmentCount: course.enrollmentCount,
        }));

        setFreeCourseList(formattedCourses); // ✅ 변환된 데이터 저장
      })
      .catch((error) => {
        console.error("🚨 강의 목록 가져오기 실패:", error);
        setFreeCourseList([]); // ✅ 에러 시 빈 배열 설정
      });
  }, []);

  return (
    <StyledMainCardsContainer>
      {/* {cardsGroupData.map((group, index) => (
        <div key={index}>
          <StyledCardsSubtitle>{group.subtitle}</StyledCardsSubtitle>
          <Cards subtitle={group.subtitle} cardData={group.cards} />
        </div>
      ))} */}
      <StyledCardsSubtitle>이런 강의는 어때요?</StyledCardsSubtitle>
      <Cards cardData={highRateCourseList}></Cards>
      <StyledCardsSubtitle>무료 강의 추천 리스트</StyledCardsSubtitle>
      <Cards cardData={freeCourseList}></Cards>
      <StyledCardsSubtitle>초심자 추천 리스트</StyledCardsSubtitle>
      <Cards cardData={easyCourseList}></Cards>
    </StyledMainCardsContainer>
  );
};

export default MainCards;

// 내부 스타일 컴포넌트 정의
const StyledMainCardsContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 1300px;
`;

const StyledCardsSubtitle = styled.h2`
  text-align: left;
  margin-right: 900px;
  font-weight: bold;
`;
