// components/courseDetailPage/main/recommendedSection/InstructorCardList.jsx
import React, { useState, useEffect } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
import Cards from "../../../common/card/Cards";
import { getCourseList } from "../../../../apis/common/courseApi";
import { formatCourseData } from "../../../common/utilities/CourseUtils";

const InstructorCardList = ({ courseData }) => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    if (!courseData?.instructorId) return; // ✅ instructorId 없으면 실행 안 함

    getCourseList(courseData?.instructorId)
      .then((data) => {
        console.log("📌 강사 ID별 강의 리스트:", data);

        setCourseList(formatCourseData(data)); // ✅ 변환된 데이터 저장
      })
      .catch((error) => {
        console.error("🚨 강의 목록 가져오기 실패:", error);
        setCourseList([]); // ✅ 에러 시 빈 배열 설정
      });
  }, [courseData?.instructorId, courseData?.courseId]); // ✅ instructorId 변경될 때마다 실행

  return (
    <StyledMainCardContainer>
      <StyledCardsSubtitle>
        {courseData?.instructorName} 님의 다른 강의
      </StyledCardsSubtitle>
      <Cards
        //subtitle={courseList.subtitle}
        cardData={courseList}
        maxWidth="800px"
        cardsToShow={3}
      ></Cards>
    </StyledMainCardContainer>
  );
};

// 내부 스타일 컴포넌트 정의
const StyledMainCardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
`;

const StyledCardsSubtitle = styled.h2`
  text-align: left;
  font-weight: bold;
`;

export default InstructorCardList;
