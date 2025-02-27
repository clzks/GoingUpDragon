import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AttendingLecture = ({ lectures }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedLectures = showAll
    ? lectures || []
    : lectures?.slice(0, 8) || [];

  return (
    <LectureWrapper>
      <Header>
        <Title>수강 중인 강의</Title>
        <TotalCount>전체 {lectures?.length}개</TotalCount>
      </Header>
      <LectureGrid>
        {lectures?.length > 0 ? (
          displayedLectures.map((lecture) => (
            <LectureCard key={lecture.id}>
              <Thumbnail src={lecture.thumbnail} alt={lecture.title} />
              <LectureTitle>{lecture.courseTitle}</LectureTitle>
              <ProgressWrapper>
                <ProgressBar progress={100} /> {/* 진행률을 항상 50%로 설정 */}
                <ProgressText>100% 완료</ProgressText>{" "}
                {/* 텍스트도 50%로 설정 */}
              </ProgressWrapper>
            </LectureCard>
          ))
        ) : (
          <NoLectureText>현재 수강 중인 강의가 없습니다.</NoLectureText>
        )}
      </LectureGrid>
      {lectures?.length > 8 && (
        <ViewAllButton onClick={() => setShowAll(!showAll)}>
          {showAll ? "돌아가기 >" : "전체보기 >"}
        </ViewAllButton>
      )}
    </LectureWrapper>
  );
};

export default AttendingLecture;

// 스타일 정의
const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const TotalCount = styled.span`
  font-size: 14px;
  color: #7cd0d5;
  text-align: right;
`;

const LectureGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  min-height: 150px;
  text-align: center;
`;

const LectureCard = styled.div`
  padding: 10px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const LectureTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProgressWrapper = styled.div`
  width: 100%;
`;

const ProgressBar = styled.div`
  height: 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
  position: relative;
  overflow: hidden;
  margin-bottom: 5px;

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: ${({ progress }) => progress}%;
    background-color: #7cd0d5;
    transition: width 0.3s ease-in-out;
  }
`;

const ProgressText = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
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
  align-self: center;
  margin-bottom: 20px;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;

const NoLectureText = styled.div`
  font-size: 14px;
  color: #888;
  text-align: center;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
