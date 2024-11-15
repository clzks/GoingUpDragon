// src/components/MainCards.jsx
// 외부 라이브러리
import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const MainCards = () => {
  // 카드 그룹 데이터들
  const cardsGroupData = [
    {
      subtitle: "이런 강의는 어때요?",
      cards: [
        //데이터 (1)
        {
          title: "재대로 파는 html css",
          text: "이 강좌는 html css의 기초를 다룹니다.",
          imageUrl: "./images/011.png",
          instructor: "이순신",
          rating: 4.9,
          numReviews: 77,
          price: "55,000원",
        },
        //데이터 (2)
        {
          title: "프로그래밍 시작하기:파이썬 입문",
          text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
          imageUrl: "./images/012.png",
          instructor: "강감찬",
          rating: 4.8,
          numReviews: 248,
          price: "33,000원",
        },
        //데이터 (3)
        {
          title: "한입 크기로 잘라먹는 리엑트",
          text: "이 강좌는 리엑트의 기초를 다룹니다.",
          imageUrl: "./images/013.png",
          instructor: "지식의 나무",
          rating: 3.6,
          numReviews: 13,
          price: "155,000원",
        },
        //데이터 (4)
        {
          title: "제일 쉬운 리눅스 커널",
          text: "이 강좌는 리눅스의 기초를 다룹니다.",
          imageUrl: "./images/014.png",
          instructor: "강의 마스터",
          rating: 4.5,
          numReviews: 772,
          price: "무료",
        },
        //데이터 (5)
        {
          title: "정보처리기사 실기 일주일 정복",
          text: "이 강좌는 정보처리기사 실기의 기초를 다룹니다.",
          imageUrl: "./images/015.png",
          instructor: "학습의 안내자",
          rating: 2.7,
          numReviews: 123,
          price: "11,000원",
        },
        //데이터 (6)
        {
          title: "초등 스크래치 코딩 기초",
          text: "이 강좌는 스크래치의 기초를 다룹니다.",
          imageUrl: "./images/016.png",
          instructor: "컴퓨터 선생님",
          rating: 4.8,
          numReviews: 30,
          price: "110,000원",
        },
        //데이터 (7)
        {
          title: "엄마표 코딩",
          text: "이 강좌는 초등 코딩의 기초를 다룹니다.",
          imageUrl: "./images/017.png",
          instructor: "다연이 엄마",
          rating: 4.3,
          numReviews: 870,
          price: "30,000원",
        },
        //데이터 (8)
        {
          title: "할아버지 할머니도 코딩해요",
          text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
          imageUrl: "./images/018.png",
          instructor: "행복 센터",
          rating: 4.9,
          numReviews: 7,
          price: "무료",
        },
        //데이터 (9)
        {
          title: "일타 자바스크립트 기초반",
          text: "이 강좌는 자바스크립트의 기초를 다룹니다.",
          imageUrl: "./images/019.png",
          instructor: "일타 조컴",
          rating: 4.9,
          numReviews: 1250,
          price: "22,000원",
        },
        //데이터 (10)
        {
          title: "스마트폰 100% 사용하기",
          text: "이 강좌는 시니어를 위한 스마트폰 사용법을 다룹니다.",
          imageUrl: "./images/020.png",
          instructor: "착한 손주",
          rating: 4.7,
          numReviews: 35,
          price: "5,000원",
        },
      ],
    },
    {
      subtitle: "무료 강의 추천 리스트",
      cards: [
        //데이터 (1)
        {
          title: "선생님 토끼의 실전 자바",
          text: "웹 개발에 필요한 자바 기초 기술을 배웁니다.",
          imageUrl: "./images/021.png",
          instructor: "선생님토끼",
          rating: 4.6,
          numReviews: 7942,
          price: "무료",
        },
        //데이터 (2)
        {
          title: "초보자를 위한  프로그래밍 입문",
          text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
          imageUrl: "./images/022.png",
          instructor: "강감찬",
          rating: 5.0,
          numReviews: 3,
          price: "무료",
        },
        //데이터 (3)
        {
          title: "한입 크기로 잘라먹는 리엑트",
          text: "이 강좌는 리엑트의 기초를 다룹니다.",
          imageUrl: "./images/013.png",
          instructor: "지식의 나무",
          rating: 3.6,
          numReviews: 13,
          price: "155,000원",
        },
        //데이터 (4)
        {
          title: "제일 쉬운 리눅스 커널",
          text: "이 강좌는 리눅스의 기초를 다룹니다.",
          imageUrl: "./images/014.png",
          instructor: "강의 마스터",
          rating: 4.5,
          numReviews: 772,
          price: "무료",
        },
        //데이터 (5)
        {
          title: "정보처리기사 실기 일주일 정복",
          text: "이 강좌는 정보처리기사 실기의 기초를 다룹니다.",
          imageUrl: "./images/015.png",
          instructor: "학습의 안내자",
          rating: 2.7,
          numReviews: 123,
          price: "11,000원",
        },
        //데이터 (6)
        {
          title: "초등 스크래치 코딩 기초",
          text: "이 강좌는 스크래치의 기초를 다룹니다.",
          imageUrl: "./images/016.png",
          instructor: "컴퓨터 선생님",
          rating: 4.8,
          numReviews: 30,
          price: "110,000원",
        },
        //데이터 (7)
        {
          title: "엄마표 코딩",
          text: "이 강좌는 초등 코딩의 기초를 다룹니다.",
          imageUrl: "./images/017.png",
          instructor: "다연이 엄마",
          rating: 4.3,
          numReviews: 870,
          price: "30,000원",
        },
        //데이터 (8)
        {
          title: "할아버지 할머니도 코딩해요",
          text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
          imageUrl: "./images/018.png",
          instructor: "행복 센터",
          rating: 4.9,
          numReviews: 7,
          price: "무료",
        },
        //데이터 (9)
        {
          title: "일타 자바스크립트 기초반",
          text: "이 강좌는 자바스크립트의 기초를 다룹니다.",
          imageUrl: "./images/019.png",
          instructor: "일타 조컴",
          rating: 4.9,
          numReviews: 1250,
          price: "22,000원",
        },
        //데이터 (10)
        {
          title: "스마트폰 100% 사용하기",
          text: "이 강좌는 시니어를 위한 스마트폰 사용법을 다룹니다.",
          imageUrl: "./images/020.png",
          instructor: "착한 손주",
          rating: 4.7,
          numReviews: 35,
          price: "5,000원",
        },
      ],
    },
    {
      subtitle: "초심자 추천 리스트",
      cards: [
        //데이터 (1)
        {
          title: "실전 개발 마스터 클래스",
          text: "초보 개발자를 위한 마스터 클래스 강의입니다.",
          imageUrl: "./images/031.png",
          instructor: "김코딩 전문가",
          rating: 4.1,
          numReviews: 1111,
          price: "99,000원",
        },
        //데이터 (2)
        {
          title: "현업에서 통하는 개발 스킬",
          text: "웹 개발에 필요한 실전 기술을 배웁니다.",
          imageUrl: "./images/032.png",
          instructor: "이진호 개발자",
          rating: 4.7,
          numReviews: 3,
          price: "89,000원",
        },
        //데이터 (3)
        {
          title: "클라우드 개발 완전 정복",
          text: "이 강좌는 클라우드 개발의 정석을 다룹니다.",
          imageUrl: "./images/033.png",
          instructor: "민수클",
          rating: 4.8,
          numReviews: 113,
          price: "무료",
        },
        //데이터 (4)
        {
          title: "프로그래밍 기초부터 심화까지",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "./images/034.png",
          instructor: "정수현 코더",
          rating: 3.4,
          numReviews: 150,
          price: "120,000원",
        },
        //데이터 (5)
        {
          title: "코드로 만드는 나만의 앱",
          text: "앱 개발에 필요한 기초 기술을 배웁니다.",
          imageUrl: "./images/035.png",
          instructor: "박소영 앱 전문가",
          rating: 2.1,
          numReviews: 200,
          price: "무료",
        },
        //데이터 (6)
        {
          title: "시니어를 위한 컴퓨터 기초 입문",
          text: "이 강좌는 컴퓨터 사용의 기초를 다룹니다.",
          imageUrl: "./images/036.png",
          instructor: "시니어 평생교육원",
          rating: 4.8,
          numReviews: 1270,
          price: "5,000원",
        },
        //데이터 (7)
        {
          title: "AI와 함께 짜는 코딩",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "./images/037.png",
          instructor: "쉬운 길",
          rating: 4.8,
          numReviews: 365,
          price: "30,000원",
        },
        //데이터 (8)
        {
          title: "입문자를 위한 알고리름 핵심 이론",
          text: "알고리즘에 대한 기초 지식을 배웁니다.",
          imageUrl: "./images/038.png",
          instructor: "아이티 고",
          rating: 4.6,
          numReviews: 35,
          price: "45,000원",
        },
        //데이터 (9)
        {
          title: "실전 웹사이트 제작(초급)",
          text: "이 강좌는 웹사이트 제작의 기초를 다룹니다.",
          imageUrl: "./images/039.png",
          instructor: "제이영",
          rating: 4.5,
          numReviews: 28,
          price: "77,000원",
        },
        //데이터 (10)
        {
          title: "초심자를 위한 코딩",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "./images/040.png",
          instructor: "코딩 아카데미",
          rating: 4.8,
          numReviews: 240,
          price: "20,000원",
        },
      ],
    },
    {
      subtitle: "강사들 추천 pick",
      cards: [
        //데이터 (1)
        {
          title: "김코딩의 python 끝판왕 몰아보기",
          text: "인기 강사들이 추천하는 파이썬 강의 모음입니다.",
          imageUrl: "./images/041.png",
          instructor: "김코딩 전문가",
          rating: 4.1,
          numReviews: 850,
          price: "145,000원",
        },
        //데이터 (2)
        {
          title: "이진호의 프론트부터 백엔드까지 완전 공략",
          text: "웹 개발에 필요한 기초 기술을 배웁니다.",
          imageUrl: "./images/042.png",
          instructor: "이진호 개발자",
          rating: 4.3,
          numReviews: 12,
          price: "35,000원",
        },
        //데이터 (3)
        {
          title: "민수클의 풀스텍 프로젝트 찍먹하기",
          text: "이 강좌는 풀스텍의 기초를 다룹니다.",
          imageUrl: "./images/043.png",
          instructor: "민수클",
          rating: 3.5,
          numReviews: 122,
          price: "50,000원",
        },
        //데이터 (4)
        {
          title: "초심자를 위한 코딩 기초 중의 기초",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "./images/044.png",
          instructor: "코딩이 젤 쉬웠어요",
          rating: 4.8,
          numReviews: 195,
          price: "40,000원",
        },
        //데이터 (5)
        {
          title: "강사 추천 강의",
          text: "인기 강사들이 추천하는 강의 모음입니다.",
          imageUrl: "./images/045.png",
          instructor: "강사 그룹",
          rating: 4.9,
          numReviews: 150,
          price: "60,000원",
        },
        //데이터 (6)
        {
          title: "웹 개발 고급",
          text: "웹 개발에 필요한 고급 기술을 배웁니다.",
          imageUrl: "./images/046.png",
          instructor: "Instructor B",
          rating: 4.7,
          numReviews: 185,
          price: "245,000원",
        },
        //데이터 (7)
        {
          title: "자바 고급 과정",
          text: "이 강좌는 자바의 고급 과정을 다룹니다.",
          imageUrl: "./images/047.png",
          instructor: "자바신",
          rating: 4.0,
          numReviews: 125,
          price: "150,000원",
        },
        //데이터 (8)
        {
          title: "초심자를 위한 코딩",
          text: "코딩 초심자를 위한 쉬운 강의입니다.",
          imageUrl: "./images/048.png",
          instructor: "코딩의 신",
          rating: 4.8,
          numReviews: 95,
          price: "40,000원",
        },
        //데이터 (9)
        {
          title: "프로그래밍 입문",
          text: "이 강좌는 프로그래밍의 기초를 다룹니다.",
          imageUrl: "./images/049.png",
          instructor: "개발의 기사",
          rating: 4.5,
          numReviews: 120,
          price: "52,000원",
        },
        //데이터 (10)
        {
          title: "중급자를 위한 코딩",
          text: "코딩 중급자를 위한 쉬운 강의입니다.",
          imageUrl: "./images/050.png",
          instructor: "코딩의 신",
          rating: 3.8,
          numReviews: 495,
          price: "40,000원",
        },
      ],
    },
  ];

  return (
    <StyledMainCardsContainer>
      {cardsGroupData.map((group, index) => (
        <>
          <StyledCardsSubtitle key={`subtitle-${index}`}>
            {group.subtitle}
          </StyledCardsSubtitle>
          <Cards key={index} subtitle={group.subtitle} cardData={group.cards} />
        </>
      ))}
    </StyledMainCardsContainer>
  );
};

export default MainCards;

// 내부 스타일 컴포넌트 정의
const StyledMainCardsContainer = styled.div`
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