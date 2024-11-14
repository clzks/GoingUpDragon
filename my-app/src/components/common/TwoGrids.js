import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { BsChevronDoubleLeft, BsPause, BsChevronDoubleRight } from 'react-icons/bs';
import './TwoGrids.css'; // CSS 파일 import
import TagComponent from './TagComponent';


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
  const [index, setIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
  };

  const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleAutoSlide = () => {
      setAutoSlide((prev) => !prev);
  };

  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
        slideInterval = setInterval(() => {
            handleNext();
        }, 3000); // 3초마다 다음 슬라이드로 넘어감
    }
    return () => {
        if (slideInterval) clearInterval(slideInterval);
    };
}, [autoSlide, index]);


  return (
    <Container>
              <Carousel activeIndex={index} onSelect={handleSelect} fade>
              {images.map((src, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="carousel-image-container">
                            <img className="carousel-image" src={src} alt={`Slide ${idx + 1}`} />
                        </div>
                    </Carousel.Item>
                ))}
              </Carousel>
      <Row>
        <Col sm={3}>
        <div className="button-container">
                <span className="carousel-counter">{`${index + 1} / ${images.length}`}</span>
                {/* 이전 슬라이드 버튼 */}
                <Button variant="outline-secondary" onClick={handlePrev} className="carousel-button">
                    <BsChevronDoubleLeft />
                </Button>
                {/* 포즈 버튼 */}
                <Button variant="outline-secondary" onClick={toggleAutoSlide} className="carousel-button">
                    {autoSlide ? <BsPause /> : <BsPause />}
                </Button>
                {/* 다음 슬라이드 버튼 */}
                <Button variant="outline-secondary" onClick={handleNext} className="carousel-button">
                    <BsChevronDoubleRight />
                </Button>
            </div>
        </Col>
        <Col sm={8}>
        <TagComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default TwoGrids;