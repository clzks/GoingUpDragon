import React, { useState } from "react";
import styled from "styled-components";

const MyLectureStudent = () => {
  const [showAll, setShowAll] = useState(false);

  const lectures = [
    { id: 1, title: "React 기초 강의", subtitle: "모바일 프로그래밍", progress: "15/107" },
    { id: 2, title: "JavaScript 심화 과정", subtitle: "모바일 프로그래밍", progress: "5/7" },
    { id: 3, title: "HTML & CSS 디자인", subtitle: "모바일 프로그래밍", progress: "34/34" },
    { id: 4, title: "Python 데이터 분석", subtitle: "모바일 프로그래밍", progress: "12/40" },
    { id: 5, title: "Node.js 기본 개념", subtitle: "웹 프로그래밍", progress: "20/50" },
    { id: 6, title: "MongoDB 실무 활용", subtitle: "데이터베이스", progress: "8/30" },
    { id: 7, title: "TypeScript 기초", subtitle: "프론트엔드 개발", progress: "3/10" },
    { id: 8, title: "Next.js를 활용한 웹 개발", subtitle: "프론트엔드", progress: "10/20" },
    { id: 9, title: "Django 웹 개발 기초", subtitle: "백엔드 개발", progress: "7/25" },
    { id: 10, title: "Docker로 배포하기", subtitle: "DevOps", progress: "5/15" },
  ];

  const displayedLectures = showAll ? lectures : lectures.slice(0, 6);

  return (
    <LectureWrapper>
      <Header>
        <HeaderTitle>내 강의</HeaderTitle>
      </Header>
      <LectureGrid>
        {displayedLectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Subtitle>{lecture.subtitle}</Subtitle>
              <ProgressBar>
                <Progress
                  progress={(parseInt(lecture.progress.split("/")[0]) /
                    parseInt(lecture.progress.split("/")[1])) *
                    100}
                />
              </ProgressBar>
              <ProgressText>{lecture.progress}</ProgressText>
            </LectureInfo>
            <DetailButton>상세 보기</DetailButton>
          </LectureCard>
        ))}
      </LectureGrid>
      
      <ButtonWrapper>
        <ViewAllButton onClick={() => setShowAll(!showAll)}>
          {showAll ? "돌아가기 >" : "전체보기 >"}
        </ViewAllButton>
      </ButtonWrapper>
    </LectureWrapper>
  );
};

export default MyLectureStudent;

// 스타일 정의
const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ccc;
  border-radius: 8px;
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LectureTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #7cd0d5;
`;

const ProgressText = styled.p`
  font-size: 14px;
  color: #333;
`;

const DetailButton = styled.button`
  align-self: flex-start;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  background-color: #7cd0d5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
