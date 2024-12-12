// GoingUpDragon/my-app/src/components/searchPage/searchCourseCards/SearchCourseCards.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
import RatingStarList from "../../common/icons/RatingStarList";

const SearchCourseCards = ({ course }) => {
  return (
    <CardContainer>
      <Thumbnail src={course.thumbnail} alt={`${course.title} 썸네일`} />
      <CardContent>
        <CourseTitle>{course.title}</CourseTitle>
        <InstructorName>{course.instructor}</InstructorName>
        <RatingContainer>
          <RatingStarList rating={course.rating} size="18px" /> {/* 별 렌더링 */}
          <Rating>{course.rating}</Rating>
          <ReviewCount>({course.reviews})</ReviewCount>
        </RatingContainer>
        <Price>{course.price}</Price>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 8px;
  height: 320px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  &:hover img {
    transform: translateY(-10px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const CourseTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 6px;
  line-height: 1.4;
  height: 2.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const InstructorName = styled.p`
  font-size: 14px;
  margin: 0 0 12px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px;
`;

const Rating = styled.span`
  font-size: 14px;
  margin-left: 6px;
  color: #555;
`;

const ReviewCount = styled.span`
  font-size: 12px;
  margin-left: 2px;
  color: #888;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

export default SearchCourseCards;
