import React, { useState } from "react";
import styled from "styled-components";

const MyLectureInstructor = () => {
  const [showAll, setShowAll] = useState(false);

  const lectures = [
    { id: 1, title: "React 기초 강의", price: "55,000원", rating: 4.9, reviews: 77 },
    { id: 2, title: "JavaScript 심화 과정", price: "33,000원", rating: 4.8, reviews: 248 },
    { id: 3, title: "HTML & CSS 디자인", price: "110,000원", rating: 3.6, reviews: 13 },
    { id: 4, title: "Python 데이터 분석", price: "12,000원", rating: 3.8, reviews: 6 },
    { id: 5, title: "Node.js 기본 개념", price: "77,000원", rating: 4.6, reviews: 35 },
    { id: 6, title: "MongoDB 실무 활용", price: "99,000원", rating: 4.9, reviews: 88 },
    { id: 7, title: "TypeScript 기초", price: "66,000원", rating: 4.7, reviews: 150 },
    { id: 8, title: "Next.js를 활용한 웹 개발", price: "44,000원", rating: 4.5, reviews: 98 },
    { id: 9, title: "Django 웹 개발 기초", price: "77,000원", rating: 5.0, reviews: 28 },
    { id: 10, title: "Docker로 배포하기", price: "55,000원", rating: 4.9, reviews: 77 },
  ];

  const displayedLectures = showAll ? lectures : lectures.slice(0, 6);

  return (
    <LectureWrapper>
      <Header>
        <HeaderTitle>강의</HeaderTitle>
        <TotalCount>
          전체 <TotalHighlight>{lectures.length}개</TotalHighlight>
        </TotalCount>
      </Header>
      <LectureGrid>
        {displayedLectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Rating>⭐ {lecture.rating} ({lecture.reviews})</Rating>
              <Price>{lecture.price}</Price>
            </LectureInfo>
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

export default MyLectureInstructor;

// 스타일 정의
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
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  align-items: flex-start;
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
