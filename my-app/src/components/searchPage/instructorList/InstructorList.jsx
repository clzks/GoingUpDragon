import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ArrowButtonLeft from '../../common/icons/ArrowButtonLeft';
import ArrowButtonRight from "../../common/icons/ArrowButtonRight"

const InstructorList = () => {
  const instructors = [
    { name: "홍길동", profileImage: "/images/012.png" },
    { name: "이파이썬", profileImage: "/images/013.png" },
    { name: "김코딩 전문가", profileImage: "/images/014.png" },
    { name: "이진호 개발자", profileImage: "/images/015.png" },
    { name: "민수클", profileImage: "/images/016.png" },
    { name: "정수현 코더", profileImage: "/images/017.png" },
    { name: "박소영 앱 전문가", profileImage: "/images/018.png" },
    { name: "최데이터베이스", profileImage: "/images/019.png" },
    { name: "박접근성", profileImage: "/images/020.png" },
    { name: "코드스킬", profileImage: "/images/021.png" },
  ];

  const [startIndex, setStartIndex] = useState(0); // 현재 보이는 첫 번째 강사의 인덱스를 추적
  const containerRef = useRef(null); // 스크롤을 제어하기 위한 ref

  // 왼쪽 화살표 클릭 시 첫 번째 강사를 1명씩 왼쪽으로 이동
  const handleScrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); // 첫 번째 강사를 1명씩 왼쪽으로 이동
    }
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // 스크롤을 왼쪽으로 200px 이동
    }
  };

  // 오른쪽 화살표 클릭 시 첫 번째 강사를 1명씩 오른쪽으로 이동
  const handleScrollRight = () => {
    if (startIndex + 8 < instructors.length) {
      setStartIndex(startIndex + 1); // 첫 번째 강사를 1명씩 오른쪽으로 이동
    }
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // 스크롤을 오른쪽으로 200px 이동
    }
  };

  return (
    <>
      <InstructorTitle>강의 제공 강사들</InstructorTitle>
      <InstructorContainer ref={containerRef}>
        <ArrowButtonLeft scrollLeft={handleScrollLeft} />
        {instructors.slice(startIndex, startIndex + 8).map((instructor, index) => (
          <InstructorItem key={index}>
            <ProfileImage src={instructor.profileImage} alt={instructor.name} />
            <InstructorName>{instructor.name}</InstructorName>
          </InstructorItem>
        ))}
        <ArrowButtonRight scrollRight={handleScrollRight} />
      </InstructorContainer>
    </>
  );
};

export default InstructorList;

// 스타일 컴포넌트
const InstructorTitle = styled.h2`
  margin-top: 16px;
  text-align: center;
  font-weight: bold;
`;

const InstructorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;
  margin-top: 20px;
  overflow-x: auto; /* Enables horizontal scrolling */
  padding: 0 10px;
  position: relative;
`;

const InstructorItem = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const InstructorName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;