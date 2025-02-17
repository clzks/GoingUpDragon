import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const LatelyLecture = () => {
  const [lectures, setLectures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatelyLectures = async () => {
      try {
        const response = await axios.get("/api/user/lately-lectures");
        setLectures(response.data);
      } catch (error) {
        console.error("최근 학습 강의를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatelyLectures();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= lectures.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lectures.length - 4 : prevIndex - 1
    );
  };

  if (loading) {
    return <LoadingText>최근 학습 강의를 불러오는 중...</LoadingText>;
  }

  return (
    <LectureWrapper>
      <Header>
        <Title>최근 학습 강의</Title>
        <TotalCount>전체 {lectures.length}개</TotalCount>
      </Header>
      <Slider>
        <ArrowButton onClick={prevSlide}>
          <FaChevronLeft />
        </ArrowButton>
        <SlideContainer>
          {lectures.length > 0 ? (
            lectures.slice(currentIndex, currentIndex + 4).map((lecture) => (
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
            ))
          ) : (
            <NoLectureText>최근 학습한 강의가 없습니다.</NoLectureText>
          )}
        </SlideContainer>
        <ArrowButton onClick={nextSlide}>
          <FaChevronRight />
        </ArrowButton>
      </Slider>
    </LectureWrapper>
  );
};

export default LatelyLecture;

// 스타일 정의
const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const TotalCount = styled.span`
  font-size: 14px;
  color: #7cd0d5;
  text-align: right;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 150px;
`;

const LectureCard = styled.div`
  width: 200px;
  height: 240px;
  padding: 10px;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: none;
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

const ArrowButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  &:hover {
    color: #000;
  }
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
