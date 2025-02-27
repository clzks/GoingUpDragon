import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MyLectureStudent = ({ lectures }) => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchLectures = async () => {
  //     try {
  //       const response = await axios.get("/api/student/lectures");
  //       setLectures(response.data);
  //     } catch (error) {
  //       console.error("강의 데이터를 불러오지 못했습니다:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLectures();
  // }, []);

  const displayedLectures = showAll
    ? lectures || []
    : lectures?.slice(0, 6) || [];

  if (loading) {
    return <LoadingText>강의 데이터를 불러오는 중...</LoadingText>;
  }

  return (
    <LectureWrapper>
      <Header>
        <HeaderTitle>내 강의</HeaderTitle>
      </Header>

      <LectureGrid hasLectures={lectures?.length > 0}>
        {lectures?.length > 0 ? (
          displayedLectures.map((lecture) => (
            <LectureCard key={lecture.id}>
              <Thumbnail src={lecture.thumbnail} alt={lecture.title} />
              <LectureInfo>
                <LectureTitle>{lecture.courseTitle}</LectureTitle>
                <Subtitle>{lecture.courseDescription}</Subtitle>
                <ProgressBar>
                  <Progress
                    progress={
                      lecture.progress
                        ? (parseInt(lecture.progress.split("/")[0]) /
                            parseInt(lecture.progress.split("/")[1])) *
                          100
                        : 100 // progress가 없으면 50%로 처리
                    }
                  />
                </ProgressBar>
                <ProgressText>{lecture.progress || "100% 완료"}</ProgressText>{" "}
                {/* progress가 없으면 50%로 텍스트 처리 */}
              </LectureInfo>
              <DetailButton>상세 보기</DetailButton>
            </LectureCard>
          ))
        ) : (
          <NoLectureText>수강 중인 강의가 없습니다.</NoLectureText>
        )}
      </LectureGrid>

      {lectures?.length > 0 && (
        <ButtonWrapper>
          <ViewAllButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "돌아가기 >" : "전체보기 >"}
          </ViewAllButton>
        </ButtonWrapper>
      )}
    </LectureWrapper>
  );
};

export default MyLectureStudent;

// 스타일 정의
const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
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

const LectureGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;
  min-height: ${({ hasLectures }) => (hasLectures ? "auto" : "150px")};
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  width: calc(25% - 20px);
  min-width: 240px;
  max-width: 320px;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 4px;
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

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;

const NoLectureText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #888;
  width: 100%;
`;