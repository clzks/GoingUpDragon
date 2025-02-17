import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination";
import axios from "axios";

const PurchaseLecture = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get("/api/student/purchase-lectures");
        setPurchases(response.data);
      } catch (error) {
        console.error("구매 내역 데이터를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  if (loading) {
    return <LoadingText>구매 내역을 불러오는 중...</LoadingText>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPurchases = purchases.slice(indexOfFirstItem, indexOfLastItem);

  const totalPrice = purchases.reduce((sum, purchase) => sum + purchase.price, 0);

  return (
    <PurchaseWrapper>
      <HeaderContainer>
        <HeaderTitle>구매 내역</HeaderTitle>
        <TotalCount>전체 {purchases.length}개</TotalCount>
      </HeaderContainer>

      {purchases.length > 0 ? (
        <>
          <LectureList>
            {currentPurchases.map((purchase) => (
              <LectureCard key={purchase.id}>
                <Thumbnail src={purchase.thumbnail} alt={purchase.title} />
                <LectureInfo>
                  <LectureTitle>{purchase.title}</LectureTitle>
                  <Instructor>{purchase.instructor}</Instructor>
                  <Rating>★ {purchase.rating} ({purchase.reviews})</Rating>
                </LectureInfo>
                <Price>{purchase.price.toLocaleString()}원</Price>
              </LectureCard>
            ))}
          </LectureList>

          <TotalSection>
            <TotalPrice>합계 : {totalPrice.toLocaleString()}원</TotalPrice>
            <RefundButton>환불하기</RefundButton>
          </TotalSection>

          <PaginationWrapper>
            <Pagination
              items={purchases}
              itemsPerPage={itemsPerPage}
              paginate={setCurrentPage}
              currentPage={currentPage}
            />
          </PaginationWrapper>
        </>
      ) : (
        <NoLectureText>구매한 강의가 없습니다.</NoLectureText>
      )}
    </PurchaseWrapper>
  );
};

export default PurchaseLecture;

// 스타일 정의
const PurchaseWrapper = styled.div`
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

const RefundButton = styled.button`
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
