import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination"; 

const CartLecture = () => {

  const lectures = [
    { id: 1, title: "제대로 파는 html css", instructor: "이호준", rating: 4.9, reviews: 77, price: 55000 },
    { id: 2, title: "프로그래밍 시작하기: 파이썬 입문", instructor: "이호준", rating: 4.8, reviews: 248, price: 33000 },
    { id: 3, title: "한입 크기로 잘라 먹는 리액트", instructor: "이호준", rating: 3.6, reviews: 13, price: 110000 },
    { id: 4, title: "두입 크기로 잘라 먹는 리액트 심화", instructor: "이호준", rating: 3.8, reviews: 6, price: 12000 },
    { id: 5, title: "Vue.js 시작하기", instructor: "이호준", rating: 4.7, reviews: 150, price: 66000 },
    { id: 6, title: "자바스크립트 완전 정복", instructor: "이호준", rating: 4.5, reviews: 98, price: 44000 },
    { id: 7, title: "알고리즘 문제 해결 전략", instructor: "이호준", rating: 4.6, reviews: 35, price: 77000 },
    { id: 8, title: "Next.js로 블로그 만들기", instructor: "이호준", rating: 4.9, reviews: 88, price: 99000 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLectures = lectures.slice(indexOfFirstItem, indexOfLastItem);


  const totalPrice = lectures.reduce((sum, lecture) => sum + lecture.price, 0);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <CartWrapper>
      <Header>장바구니</Header>
      <LectureList>
        {currentLectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Instructor>{lecture.instructor}</Instructor>
              <Rating>★ {lecture.rating} ({lecture.reviews})</Rating>
            </LectureInfo>
            <Price>{lecture.price.toLocaleString()}원</Price>
          </LectureCard>
        ))}
      </LectureList>


      <TotalSection>
        <TotalPrice>합계 : {totalPrice.toLocaleString()}원</TotalPrice>
        <PurchaseButton>구매하기</PurchaseButton>
      </TotalSection>

 
      <Pagination
        items={lectures}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </CartWrapper>
  );
};

export default CartLecture;

// 스타일 정의
const CartWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const Header = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LectureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LectureCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border-radius: 8px;
`;

const LectureInfo = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const LectureTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Instructor = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #ff9900;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const PurchaseButton = styled.button`
  padding: 10px 20px;
  background-color: #7cd0d5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5aa1a4;
  }
`;
