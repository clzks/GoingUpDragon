import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination"; 

const LikeLecture = () => {
  // 강의 데이터 예시
  const lectures = [
    { id: 1, title: "제대로 파는 html css", instructor: "이호준", rating: 4.9, reviews: 77, price: "55,000원" },
    { id: 2, title: "프로그래밍 시작하기: 파이썬 입문", instructor: "이호준", rating: 4.8, reviews: 248, price: "33,000원" },
    { id: 3, title: "한입 크기로 잘라 먹는 리액트", instructor: "이호준", rating: 3.6, reviews: 13, price: "110,000원" },
    { id: 4, title: "두입 크기로 잘라 먹는 리액트 심화", instructor: "이호준", rating: 3.8, reviews: 6, price: "12,000원" },
    { id: 5, title: "Vue.js 시작하기", instructor: "이호준", rating: 4.7, reviews: 150, price: "66,000원" },
    { id: 6, title: "자바스크립트 완전 정복", instructor: "이호준", rating: 4.5, reviews: 98, price: "44,000원" },
    { id: 7, title: "알고리즘 문제 해결 전략", instructor: "이호준", rating: 4.6, reviews: 35, price: "77,000원" },
    { id: 8, title: "Next.js로 블로그 만들기", instructor: "이호준", rating: 4.9, reviews: 88, price: "99,000원" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLectures = lectures.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <LikeWrapper>
      <HeaderTitle>좋아요</HeaderTitle>
      <LectureGrid>
        {currentLectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Instructor>{lecture.instructor}</Instructor>
              <Rating>★ {lecture.rating} ({lecture.reviews})</Rating>
              <Price>{lecture.price}</Price>
            </LectureInfo>
          </LectureCard>
        ))}
      </LectureGrid>
      
      <Pagination
        items={lectures}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
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

const HeaderTitle = styled.h2`
  margin: 20px 0;
  font-size: 25px;
  font-weight: bold;
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
