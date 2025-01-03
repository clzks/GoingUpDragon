import React from "react";
import styled from "styled-components";

const LikeLecture = () => {
  // 강의 데이터 예시
  const lectures = [
    {
      id: 1,
      title: "제대로 파는 html css",
      instructor: "이호준",
      rating: 4.9,
      reviews: 77,
      price: "55,000원",
    },
    {
      id: 2,
      title: "프로그래밍 시작하기: 파이썬 입문",
      instructor: "이호준",
      rating: 4.8,
      reviews: 248,
      price: "33,000원",
    },
    {
      id: 3,
      title: "한입 크기로 잘라 먹는 리액트",
      instructor: "이호준",
      rating: 3.6,
      reviews: 13,
      price: "110,000원",
    },
    {
      id: 4,
      title: "두입 크기로 잘라 먹는 리액트 심화",
      instructor: "이호준",
      rating: 3.8,
      reviews: 6,
      price: "12,000원",
    },
  ];

  return (
    <LikeWrapper>
      <Header>
      <HeaderTitle>좋아요</HeaderTitle>
        <SortSelect>
          <option>최신순</option>
          <option>인기순</option>
        </SortSelect>
      </Header>
      <LectureGrid>
        {lectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Instructor>{lecture.instructor}</Instructor>
              <Rating>
                ★ {lecture.rating} ({lecture.reviews})
              </Rating>
              <Price>{lecture.price}</Price>
            </LectureInfo>
          </LectureCard>
        ))}
      </LectureGrid>
      <PaginationWrapper>
        <PaginationButton>&lt;</PaginationButton>
        <PageNumber>1</PageNumber>
        <PaginationButton>&gt;</PaginationButton>
      </PaginationWrapper>
    </LikeWrapper>
  );
};

export default LikeLecture;

// 스타일 정의
const LikeWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const SortSelect = styled.select`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ccc;
  border-radius: 8px;
  margin-bottom: 10px;
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

const Instructor = styled.p`
  font-size: 14px;
  color: #555;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #ff9900;
`;

const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const PageNumber = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
