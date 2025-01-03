import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { latelyLectureCardItems } from "./card/LatelyLectureCardItem";

const LatelyLecture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === latelyLectureCardItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? latelyLectureCardItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <LectureWrapper>
      <Title>최근 학습 강의</Title>
      <Slider>
        <ArrowButton onClick={prevSlide}>
          <FaChevronLeft />
        </ArrowButton>
        <SlideContainer>
          {latelyLectureCardItems.slice(currentIndex, currentIndex + 4).map((lecture) => (
            <LectureCard key={lecture.id}>
              <Thumbnail>
                <img src={lecture.thumbnail} alt="썸네일" />
              </Thumbnail>
              <LectureTitle>{lecture.title}</LectureTitle>
              <LectureProgress>{lecture.progress}</LectureProgress>
            </LectureCard>
          ))}
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

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const LectureCard = styled.div`
  flex: 0 0 auto;
  width: 150px;
  text-align: center;
  padding: 10px;
  margin-bottom: 40px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 10px;
  background-color: #ccc;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const LectureTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const LectureProgress = styled.div`
  font-size: 12px;
  color: #666;
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
