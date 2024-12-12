// GoingUpDragon/my-app/src/components/mainPage/TwoGrids.jsx
import React, { useState, useRef } from "react";

// // 외부 라이브러리
import Slider from "react-slick";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  BsPause,
  BsPlay,
} from "react-icons/bs";

// GoingUpDragon/my-app/src/components/mainPage
import TagComponent from "./TagComponent"; // 태그 컴포넌트 import

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
];

function TwoGrids() {
  const [autoSlide, setAutoSlide] = useState(true); // 자동 슬라이드 상태
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 번호
  const sliderRef = useRef(null); // Slider 접근용 Ref

  const getIndex = ( index ) => {
    console.log(index);
    sliderRef.current.slickGoTo(index);
  }

  const toggleAutoSlide = () => {
    setAutoSlide((prev) => {
      const newState = !prev;
      if (newState) {
        // Play 슬라이드
        sliderRef.current.slickPlay();
      } else {
        // Pause 슬라이드
        sliderRef.current.slickPause();
      }
      return newState;
    });
  };

  // React Slick 설정
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoSlide,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentIndex(next),
    arrows: false, // 기본 화살표 비활성화
  };

  return (
    <StyledContainer>
      {/* 캐러셀 영역 */}
      <StyledCarouselContainer>
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, idx) => (
            <StyledSlide key={idx}>
              <StyledImage src={src} alt={`Slide ${idx + 1}`} />
            </StyledSlide>
          ))}
        </Slider>
      </StyledCarouselContainer>

      {/* 버튼과 태그를 포함한 컨트롤 패널 */}
      <StyledControlAndTagContainer>
        <StyledControlPanel>
          <StyledCarouselCounter>
            {`${currentIndex + 1} / ${images.length}`}
          </StyledCarouselCounter>
          <StyledCarouselButton onClick={() => sliderRef.current.slickPrev()}>
            <FaChevronLeft />
          </StyledCarouselButton>
          <StyledCarouselButton onClick={toggleAutoSlide}>
            {autoSlide ? <BsPause /> : <BsPlay />}
          </StyledCarouselButton>
          <StyledCarouselButton onClick={() => sliderRef.current.slickNext()}>
            <FaChevronRight />
          </StyledCarouselButton>
        </StyledControlPanel>

        <StyledTagContainer>
          <TagComponent onIndex={getIndex} />
        </StyledTagContainer>
      </StyledControlAndTagContainer>
    </StyledContainer>
  );
}

export default TwoGrids;

// 스타일 컴포넌트
const StyledContainer = styled.div`
  margin-top: 2rem;
`;

const StyledCarouselContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const StyledSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 div에 맞춤 */
`;

const StyledControlAndTagContainer = styled.div`
  display: flex;
  justify-content: center; /* 버튼과 태그를 중앙으로 배치 */
  align-items: start;
  gap: 80px; /* 버튼과 태그 사이의 간격 */
  margin-top: 10px;
  width: 100%;
`;

const StyledControlPanel = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 10px;
  position: relative;
  margin-right: 20px;
`;

const StyledCarouselButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`;

const StyledCarouselCounter = styled.span`
  color: gray;
`;

const StyledTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;