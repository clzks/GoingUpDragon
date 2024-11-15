// src/components/MainCards.jsx
// 외부 라이브러리
import React from 'react';
import styled from 'styled-components';
import CardsPick from './CardsPick';

const MainCardsPick = () => {
  // 카드 그룹 데이터들
  const cardsGroupData = [
    {
      subtitle: "강사들 추천 pick",
      cards: [
        //데이터 (1)
        {
          title: "김코딩의 python 끝판왕 몰아보기",
          text: "인기 강사들이 추천하는 파이썬 강의 모음입니다.",
          imageUrl: "/images/041.png",
          instructor: "김코딩 전문가",
        },
        //데이터 (2)
        {
          title: "이진호의 프론트부터 백엔드까지 완전 공략",
          text: "웹 개발에 필요한 기초 기술을 배웁니다.",
          imageUrl: "/images/042.png",
          instructor: "이진호 개발자",
        },
        //데이터 (3)
        {
          title: "민수클의 풀스텍 프로젝트 찍먹하기",
          text: "이 강좌는 풀스텍의 기초를 다룹니다.",
          imageUrl: "/images/043.png",
          instructor: "민수클",
        },
        //데이터 (4)
        {
          title: "초심자를 위한 코딩 기초 중의 기초",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "/images/044.png",
          instructor: "코딩이 젤 쉬웠어요",
        },
        //데이터 (5)
        {
          title: "강사 추천 강의",
          text: "인기 강사들이 추천하는 강의 모음입니다.",
          imageUrl: "/images/045.png",
          instructor: "강사 그룹",
        },
        //데이터 (6)
        {
          title: "웹 개발 고급",
          text: "웹 개발에 필요한 고급 기술을 배웁니다.",
          imageUrl: "/images/046.png",
          instructor: "Instructor B",
        },
        //데이터 (7)
        {
          title: "자바 고급 과정",
          text: "이 강좌는 자바의 고급 과정을 다룹니다.",
          imageUrl: "/images/047.png",
          instructor: "자바신",
        },
        //데이터 (8)
        {
          title: "초심자를 위한 코딩",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "/images/048.png",
          instructor: "코딩의 신",
        },
        //데이터 (9)
        {
          title: "프로그래밍 입문",
          text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
          imageUrl: "/images/049.png",
          instructor: "개발의 기사",
        },
        //데이터 (10)
        {
          title: "중급자를 위한 코딩",
          text: "코딩 중급자를 위한 쉬운 강의입니다.",
          imageUrl: "/images/050.png",
          instructor: "코딩의 신",
        },
      ],
    },
  ];

  return (
    <StyledMainCardsPickContainer>
      {cardsGroupData.map((group, index) => (
        <React.Fragment key={index}>
          <StyledCardsSubtitle>{group.subtitle}</StyledCardsSubtitle>
          <CardsPick subtitle={group.subtitle} cardData={group.cards} /> {/* 여기서 CardsPick을 사용 */}
        </React.Fragment>
      ))}
    </StyledMainCardsPickContainer>
  );
};

export default MainCardsPick;

// 내부 스타일 컴포넌트 정의
const StyledMainCardsPickContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 1300px;
`;

const StyledCardsSubtitle = styled.h2`
  text-align: left;
  margin-right: 900px;
  font-weight: bold;
`;
