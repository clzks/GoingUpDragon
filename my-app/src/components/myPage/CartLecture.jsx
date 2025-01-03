import React from "react";
import styled from "styled-components";

const CartLecture = () => {
  // 장바구니 데이터 예시
  const lectures = [
    {
      id: 1,
      title: "제대로 파는 html css",
      instructor: "이호준",
      rating: 4.9,
      reviews: 77,
      price: 55000,
    },
    {
      id: 2,
      title: "제대로 파는 html css",
      instructor: "이호준",
      rating: 4.9,
      reviews: 77,
      price: 55000,
    },
    {
      id: 3,
      title: "제대로 파는 html css",
      instructor: "이호준",
      rating: 4.9,
      reviews: 77,
      price: 55000,
    },
  ];

  const totalPrice = lectures.reduce((sum, lecture) => sum + lecture.price, 0);

  return (
    <CartWrapper>
      <Header>장바구니</Header>
      <LectureList>
        {lectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Instructor>{lecture.instructor}</Instructor>
              <Rating>
                ★ {lecture.rating} ({lecture.reviews})
              </Rating>
            </LectureInfo>
            <Price>{lecture.price.toLocaleString()}원</Price>
          </LectureCard>
        ))}
      </LectureList>
      <TotalSection>
        <TotalPrice>합계 : {totalPrice.toLocaleString()}원</TotalPrice>
        <PurchaseButton>구매하기</PurchaseButton>
      </TotalSection>
      <PaginationWrapper>
        <PaginationButton>&lt;</PaginationButton>
        <PageNumber>1</PageNumber>
        <PaginationButton>&gt;</PaginationButton>
      </PaginationWrapper>
    </CartWrapper>
  );
};

export default CartLecture;

// 스타일 정의
const CartWrapper = styled.div`
 width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
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
    background-color: #7cd0d5;
  }
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
