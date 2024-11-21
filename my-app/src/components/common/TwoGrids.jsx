// components/common/TwoGrids.jsx
import React, { useState, useEffect, useRef } from "react";

// 외부 라이브러리
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import {
  BsChevronDoubleLeft,
  BsPause,
  BsPlay,
  BsChevronDoubleRight,
} from "react-icons/bs";
import styled from "styled-components";

// 내부 컴포넌트
import TagComponent from "./TagComponent";

const images = [
  "./images/001.png",
  "./images/002.png",
  "./images/003.png",
  "./images/004.png",
  "./images/005.png",
  "./images/006.png",
  "./images/007.png",
  "./images/008.png",
  "./images/009.png",
  "./images/010.png",
  // 추가 이미지 URL을 여기에 추가하세요.
];

function TwoGrids() {
  // autoSlide 초기값을 true로 설정하여 pause 버튼이 처음에 보이게 함
  const [index, setIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // 초기값을 true로 설정
  const slideIntervalRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAutoSlide = () => {
    setAutoSlide((prev) => !prev);
  };

  useEffect(() => {
    if (autoSlide) {
      slideIntervalRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    } else {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [autoSlide]);

  return (
    <StyledContainer>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        fade
        indicators={false}
      >
        {images.map((src, idx) => (
          <Carousel.Item key={idx}>
            <StyledCarouselContainer>
              <StyledCarouselImage src={src} alt={`Slide ${idx + 1}`} />
            </StyledCarouselContainer>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
        <Col sm={3}>
          <StyledButtonContainer>
            <StyledCarouselCounter>{`${index + 1} / ${
              images.length
            }`}</StyledCarouselCounter>
            <StyledCarouselButton
              variant="outline-secondary"
              onClick={handlePrev}
            >
              <BsChevronDoubleLeft />
            </StyledCarouselButton>
            {/* 재생/일시정지 버튼 */}
            <StyledCarouselButton
              variant="outline-secondary"
              onClick={toggleAutoSlide}
            >
              {autoSlide ? <BsPause /> : <BsPlay />}
            </StyledCarouselButton>
            <StyledCarouselButton
              variant="outline-secondary"
              onClick={handleNext}
            >
              <BsChevronDoubleRight />
            </StyledCarouselButton>
          </StyledButtonContainer>
        </Col>
        <Col sm={8}>
          <TagComponent />
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default TwoGrids;

/* 전체 컨테이너 스타일 */
const StyledContainer = styled(Container)`
  /* margin-top: 2rem; */
`;

/* 캐러셀 이미지 컨테이너 */

const StyledCarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  overflow: hidden;
  margin-bottom: 1rem;
  margin-left: 1rem;
  position: relative; /* 버튼 컨테이너의 위치를 캐러셀 내에 고정시키기 위해 설정 */
  margin-top: 1rem;
`;

const StyledCarouselImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 1220px; // 가로 크기 고정
  height: 600px; // 세로 크기 고정
  /* object-fit: cover; 이미지 비율 유지 */
  transition: transform 0.5s ease-in-out; /* 슬라이드 효과를 부드럽게 */
  margin-left: 0rem;
`;

/* 캐러셀 버튼 컨테이너 스타일 */
const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 1rem;
  padding: 5px;
  border: 2px solid #f0f0f0;
  border-radius: 50px;
  background-color: #ffffff;
`;

/* 캐러셀 버튼 스타일 */
const StyledCarouselButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid transparent !important;
  background-color: transparent;
  color: gray;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 10;

  &:hover {
    background-color: #f0f0f0;
    color: gray;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    background-color: #f0f0f0;
    color: gray;
  }
`;

/* 캐러셀 카운터 스타일 */
const StyledCarouselCounter = styled.span`
  margin-right: 5px;
  color: gray;
`;
