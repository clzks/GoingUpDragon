import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { latelyLectureCardItems } from "./card/LatelyLectureCardItem";

const LatelyLecture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === latelyLectureCardItems.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? latelyLectureCardItems.length - 4 : prevIndex - 1
    );
  };

  return (
    <LectureWrapper>
      <Header>
        <Title>최근 학습 강의</Title>
        <TotalCount>전체 {latelyLectureCardItems.length}개</TotalCount>
      </Header>
      <Slider>
        <ArrowButton onClick={prevSlide}>
          <FaChevronLeft />
        </ArrowButton>
        <SlideContainer>
          {latelyLectureCardItems.slice(currentIndex, currentIndex + 4).map((lecture) => (
            <LectureCard key={lecture.id}>
              <Thumbnail>{lecture.thumbnail}</Thumbnail>
              <LectureTitle>{lecture.title}</LectureTitle>
              <ProgressWrapper>
                <ProgressBar
                  progress={
                    (parseInt(lecture.progress.split("/")[0]) / 
                      parseInt(lecture.progress.split("/")[1])) * 100
                  }
                />
                <ProgressText>{lecture.progress}</ProgressText>
              </ProgressWrapper>
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


const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
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

const Slider = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
  gap: 16px;
  transition: transform 0.3s ease-in-out;
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

const Thumbnail = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-bottom: 10px;
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
