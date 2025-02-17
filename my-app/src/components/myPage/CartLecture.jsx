import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination";
import axios from "axios";

const CartLecture = () => {
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchCartLectures = async () => {
      try {
        const response = await axios.get("/api/student/cart-lectures");
        setLectures(response.data);
      } catch (error) {
        console.error("장바구니 강의 데이터를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartLectures();
  }, []);

  if (loading) {
    return <LoadingText>강의 데이터를 불러오는 중...</LoadingText>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLectures = lectures.slice(indexOfFirstItem, indexOfLastItem);

  const totalPrice = lectures.reduce((sum, lecture) => sum + lecture.price, 0);

  return (
    <CartWrapper>
      <HeaderContainer>
        <HeaderTitle>장바구니</HeaderTitle>
        <TotalCount>전체 {lectures.length}개</TotalCount>
      </HeaderContainer>

      {lectures.length > 0 ? (
        <>
          <LectureList>
            {currentLectures.map((lecture) => (
              <LectureCard key={lecture.id}>
                <Thumbnail src={lecture.thumbnail} alt={lecture.title} />
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

          <PaginationWrapper>
            <Pagination
              items={lectures}
              itemsPerPage={itemsPerPage}
              paginate={setCurrentPage}
              currentPage={currentPage}
            />
          </PaginationWrapper>
        </>
      ) : (
        <NoLectureText>장바구니에 담긴 강의가 없습니다.</NoLectureText>
      )}
    </CartWrapper>
  );
};

export default CartLecture;

// 스타일 정의
const CartWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const TotalCount = styled.span`
  font-size: 14px;
  color: #7cd0d5;
  text-align: right;
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

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
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

const PaginationWrapper = styled.div`
  margin-top: 20px;
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
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
