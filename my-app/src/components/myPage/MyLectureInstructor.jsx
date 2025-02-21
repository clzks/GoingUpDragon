import React, { useState } from "react";
import styled from "styled-components";

const MyLectureInstructor = ({ courseList }) => {
  const [showAll, setShowAll] = useState(false);

  console.log("MyLectureInstructor의 courseList :", courseList);
  const displayedLectures = showAll
    ? Array.isArray(courseList)
      ? courseList
      : []
    : courseList?.slice(0, 4) || [];

  return (
    <LectureWrapper>
      <Header>
        <HeaderTitle>강의</HeaderTitle>
        <TotalCount>
          전체 <TotalHighlight>{courseList?.length}개</TotalHighlight>
        </TotalCount>
      </Header>

      <LectureGrid hasLectures={courseList?.length > 0}>
        {courseList?.length > 0 ? (
          displayedLectures.map((lecture) => (
            <LectureCard key={lecture.courseId}>
              <Thumbnail src={lecture.thumbnail} alt={lecture.courseTitle} />
              <LectureInfo>
                <LectureTitle>{lecture.courseTitle}</LectureTitle>
                <Rating>
                  ⭐ {lecture.rate} ({lecture.reviewCount})
                </Rating>
                <Price>{lecture.price.toLocaleString()}원</Price>
              </LectureInfo>
            </LectureCard>
          ))
        ) : (
          <NoLectureText>등록된 강의가 없습니다.</NoLectureText>
        )}
      </LectureGrid>

      {courseList?.length > 0 && (
        <ButtonWrapper>
          <ViewAllButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "돌아가기 >" : "전체보기 >"}
          </ViewAllButton>
        </ButtonWrapper>
      )}
    </LectureWrapper>
  );
};

export default MyLectureInstructor;

// 스타일 컴포넌트 (팀원 코드 적용)
const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const TotalCount = styled.span`
  font-size: 16px;
  color: #777;
`;

const TotalHighlight = styled.span`
  font-size: 16px;
  color: #7cd0d5;
  font-weight: bold;
`;

const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  min-height: ${({ hasLectures }) => (hasLectures ? "auto" : "150px")};
  justify-items: start;
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  align-items: center;
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;

const Thumbnail = styled.img`
  width: 190px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;

const LectureTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #ff9900;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: left;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ViewAllButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const NoLectureText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #888;
  width: 100%;
`;
