import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AttendingLecture = () => {
  const [lectures, setLectures] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [showAll, setShowAll] = useState(false);


  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get("/api/student/attending-lectures"); 
        setLectures(response.data);
      } catch (error) {
        console.error("수강 중인 강의 데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchLectures();
  }, []);

  if (loading) {
    return <LoadingText>강의 데이터를 불러오는 중...</LoadingText>;
  }

  const displayedLectures = showAll ? lectures : lectures.slice(0, 8);

  return (
    <LectureWrapper>
      <Header>
        <Title>수강 중인 강의</Title>
        <TotalCount>전체 {lectures.length}개</TotalCount>
      </Header>
      <LectureGrid>
        {displayedLectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail src={lecture.thumbnail} alt={lecture.title} />
            <LectureTitle>{lecture.title}</LectureTitle>
            <ProgressWrapper>
              <ProgressBar
                progress={
                  (parseInt(lecture.progress.split("/")[0]) /
                    parseInt(lecture.progress.split("/")[1])) *
                  100
                }
              />
              <ProgressText>{lecture.progress}</ProgressText>
            </ProgressWrapper>
          </LectureCard>
        ))}
      </LectureGrid>
      <ViewAllButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "돌아가기 >" : "전체보기 >"}
      </ViewAllButton>
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
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-right: 20px;
`;

const TotalCount = styled.span`
  font-size: 14px;
  color: #7cd0d5;
`;

const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
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
