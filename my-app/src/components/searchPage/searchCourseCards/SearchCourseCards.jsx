import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const SearchCourseCards = ({ course }) => {
  return (
    <CardContainer>
      <Thumbnail src={course.thumbnail} alt={`${course.title} 썸네일`} />
      <CardContent>
        <CourseTitle>{course.title}</CourseTitle>
        <InstructorName>{course.instructor}</InstructorName>
        <RatingContainer>
          {[...Array(5)].map((star, index) => {
            return (
              <StarIcon
                key={index}
                filled={index < course.rating}
              >
                <FaStar />
              </StarIcon>
            );
          })}
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
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const CourseTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 6px;
  line-height: 1.4; /* 줄 간격 */
  height: 2.8em; /* 2줄의 높이를 고정 (line-height * 2) */
  overflow: hidden; /* 넘친 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
  display: -webkit-box; /* 유연한 박스 */
  -webkit-line-clamp: 2; /* 2줄로 제한 */
  -webkit-box-orient: vertical; /* 수직 정렬 */
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

const StarIcon = styled.div`
  color: ${(props) => (props.filled ? "#ffc107" : "#e4e5e9")};
  font-size: 18px; /* 기존 20px에서 줄임 */
  margin-right: 4px;
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
