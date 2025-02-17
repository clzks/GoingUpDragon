import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination";
import axios from "axios";

const LikeLecture = () => {
  const [lectures, setLectures] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchLikedLectures = async () => {
      try {
        const response = await axios.get("/api/student/liked-lectures"); 
        setLectures(response.data);
      } catch (error) {
        console.error("좋아요 한 강의 데이터를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedLectures();
  }, []);

  if (loading) {
    return <LoadingText>좋아요 한 강의 데이터를 불러오는 중...</LoadingText>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLectures = lectures.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <LikeWrapper>
      <Header>
        <HeaderTitle>좋아요</HeaderTitle>
        <TotalCount>전체 {lectures.length}개</TotalCount>
      </Header>
      {lectures.length > 0 ? (
        <>
          <LectureGrid>
            {currentLectures.map((lecture) => (
              <LectureCard key={lecture.id}>
                <Thumbnail src={lecture.thumbnail} alt={lecture.title} />
                <LectureInfo>
                  <LectureTitle>{lecture.title}</LectureTitle>
                  <Instructor>{lecture.instructor}</Instructor>
                  <Rating>★ {lecture.rating} ({lecture.reviews})</Rating>
                  <Price>{lecture.price}</Price>
                </LectureInfo>
              </LectureCard>
            ))}
          </LectureGrid>
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
        <NoLectureText>좋아요 한 강의가 없습니다.</NoLectureText>
      )}
    </LikeWrapper>
  );
};

export default LikeLecture;

// 스타일 정의
const LikeWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
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

const TotalCount = styled.span`
  font-size: 14px;
  color: #7cd0d5;
  text-align: right;
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

const Thumbnail = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
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
