// src/components/MainCards.js
import React from 'react';
import Cards from './Cards';
import './MainCards.css'; // 스타일 관리용 CSS 파일 import

const MainCards = () => {
  // 카드 그룹 데이터들
  const cardsGroupData = [
    {
      subtitle: '이런 강의는 어때요?',
      cards: [
        {
          title: '재대로 파는 html css',
          text: '이 강좌는 html css의 기초를 다룹니다.',
          imageUrl: './images/011.png',
          instructor: '이순신',
          rating: 4.9,
          numReviews: 77,
          price: '55,000원',
        },
        // 추가 데이터 (총 1/10개)
        {
          title: '프로그래밍 시작하기:파이썬 입문',
          text: '이 강좌는 프로그래밍의 기초를 다룹니다.',
          imageUrl: './images/012.png',
          instructor: '강감찬',
          rating: 4.8,
          numReviews: 248,
          price: '33,000원',
        },
        // 추가 데이터 (총 2/10개)
        {
          title: '한입 크기로 잘라먹는 리엑트',
          text: '이 강좌는 리엑트의 기초를 다룹니다.',
          imageUrl: './images/013.png',
          instructor: '지식의 나무',
          rating: 3.6,
          numReviews: 13,
          price: '155,000원',
        },
        // 추가 데이터 (총 3/10개)
        {
          title: '제일 쉬운 리눅스 커널',
          text: '이 강좌는 리눅스의 기초를 다룹니다.',
          imageUrl: './images/014.png',
          instructor: '강의 마스터',
          rating: 4.5,
          numReviews: 772,
          price: '무료',
        },
        // 추가 데이터 (총 4/10개)
        {
          title: '정보처리기사 실기 일주일 정복',
          text: '이 강좌는 정보처리기사 실기의 기초를 다룹니다.',
          imageUrl: './images/015.png',
          instructor: '학습의 안내자',
          rating: 2.7,
          numReviews: 123,
          price: '11,000원',
        },
        // 추가 데이터 (총 5/10개)
        {
          title: '초등 스크래치 코딩 기초',
          text: '이 강좌는 스크래치의 기초를 다룹니다.',
          imageUrl: './images/016.png',
          instructor: '컴퓨터 선생님',
          rating: 4.8,
          numReviews: 30,
          price: '110,000원',
        },
        // 추가 데이터 (총 6/10개)
        {
          title: '엄마표 코딩',
          text: '이 강좌는 초등 코딩의 기초를 다룹니다.',
          imageUrl: './images/017.png',
          instructor: '다연이 엄마',
          rating: 4.3,
          numReviews: 870,
          price: '30,000원',
        },
        // 추가 데이터 (총 7/10개)
        {
          title: '할아버지 할머니도 코딩해요',
          text: '이 강좌는 프로그래밍의 기초를 다룹니다.',
          imageUrl: './images/018.png',
          instructor: '행복 센터',
          rating: 4.9,
          numReviews: 7,
          price: '무료',
        },
        // 추가 데이터 (총 8/10개)
        {
          title: '일타 자바스크립트 기초반',
          text: '이 강좌는 자바스크립트의 기초를 다룹니다.',
          imageUrl: './images/019.png',
          instructor: '일타 조컴',
          rating: 4.9,
          numReviews: 1250,
          price: '22,000원',
        },
        // 추가 데이터 (총 9/10개)
        {
          title: '스마트폰 100% 사용하기',
          text: '이 강좌는 시니어를 위한 스마트폰 사용법을 다룹니다.',
          imageUrl: './images/020.png',
          instructor: '착한 손주',
          rating: 4.7,
          numReviews: 35,
          price: '5,000원',
        },
        // 추가 데이터 (총 10/10개)
      ],
    },
    {
      subtitle: '무료 강의 추천 리스트',
      cards: [
        {
          title: '선생님 토끼의 실전 자바',
          text: '웹 개발에 필요한 자바 기초 기술을 배웁니다.',
          imageUrl: './images/021.png',
          instructor: '선생님토끼',
          rating: 4.6,
          numReviews: 7942,
          price: '무료',
        },
        // 추가 데이터 (총 1/10개)
        {
          title: '초보자를 위한  프로그래밍 입문',
          text: '이 강좌는 프로그래밍의 기초를 다룹니다.',
          imageUrl: './images/022.png',
          instructor: '강감찬',
          rating: 5.0,
          numReviews: 3,
          price: '무료',
        },
        // 추가 데이터 (총 2/10개)
        {
          title: '실전 코딩: 웹 개발 마스터하기',
          text: '웹 개발에 필요한 기초 기술을 배웁니다.',
          imageUrl: './images/023.png',
          instructor: '코드비전',
          rating: 4.2,
          numReviews: 513,
          price: '무료',
        },
        // 추가 데이터 (총 3/10개)
        {
          title: 'Python으로 시작하는 데이터 과학',
          text: '이 강좌는 파이썬의 기초를 다룹니다.',
          imageUrl: './images/024.png',
          instructor: '프로그랩',
          rating: 4.7,
          numReviews: 63,
          price: '무료',
        },
        // 추가 데이터 (총 4/10개)
        {
          title: '모바일 프로그래밍',
          text: '모바일 프로그래밍에 필요한 기초 기술을 배웁니다.',
          imageUrl: './images/025.png',
          instructor: '코드스킬',
          rating: 1.7,
          numReviews: 40,
          price: '무료',
        },
        // 추가 데이터 (총 5/10개)
        {
          title: '프론트엔드 기초 연습',
          text: '이 강좌는 프론트엔드의 기초를 다룹니다.',
          imageUrl: './images/026.png',
          instructor: '프론트맨',
          rating: 3.8,
          numReviews: 77,
          price: '무료',
        },
        // 추가 데이터 (총 6/10개)
        {
          title: '프론트엔드 실전 연습',
          text: '프론트엔드 개발에 필요한 실전 기술을 배웁니다.',
          imageUrl: './images/027.png',
          instructor: '프론트맨',
          rating: 4.5,
          numReviews: 54,
          price: '무료',
        },
        // 추가 데이터 (총 7/10개)
        {
          title: '리엑트 부트스트랩 100% 활용하기',
          text: '이 강좌는 리엑트 부트스트랩의 기초를 다룹니다.',
          imageUrl: './images/028.png',
          instructor: '생각의 틀',
          rating: 4.5,
          numReviews: 120,
          price: '무료',
        },
        // 추가 데이터 (총 8/10개)
        {
          title: '친구와 함께 하는 엔트리 코딩',
          text: '엔트리 코딩 프로그램의 기초를 배웁니다.',
          imageUrl: './images/029.png',
          instructor: '코딩선생님',
          rating: 4.2,
          numReviews: 540,
          price: '무료',
        },
        // 추가 데이터 (총 9/10개)
        {
          title: '정보교과서 평가문제 풀이',
          text: '이 강좌는 정보 교과서 관련 기초 지식을 다룹니다.',
          imageUrl: './images/030.png',
          instructor: '정컴쌤',
          rating: 4.9,
          numReviews: 125000,
          price: '무료',
        },
        // 추가 데이터 (총 10/10개)
      ],
    },
    {
      subtitle: '초심자 추천 리스트',
      cards: [
        {
          title: '실전 개발 마스터 클래스',
          text: '초보 개발자를 위한 마스터 클래스 강의입니다.',
          imageUrl: './images/031.png',
          instructor: '김코딩 전문가',
          rating: 4.1,
          numReviews: 1111,
          price: '99,000원',
        },
        // 추가 데이터 (총 1/10개)
        {
          title: '현업에서 통하는 개발 스킬',
          text: '웹 개발에 필요한 실전 기술을 배웁니다.',
          imageUrl: './images/032.png',
          instructor: '이진호 개발자',
          rating: 4.7,
          numReviews: 3,
          price: '89,000원',
        },
        // 추가 데이터 (총 2/10개)
        {
          title: '클라우드 개발 완전 정복',
          text: '이 강좌는 클라우드 개발의 정석을 다룹니다.',
          imageUrl: './images/033.png',
          instructor: '민수클',
          rating: 4.8,
          numReviews: 113,
          price: '무료',
        },
        // 추가 데이터 (총 3/10개)
        {
          title: '프로그래밍 기초부터 심화까지',
          text: '코딩 초심자를 위한 쉬운 강의입니다.',
          imageUrl: './images/034.png',
          instructor: '정수현 코더',
          rating: 3.4,
          numReviews: 150,
          price: '120,000원',
        },
        // 추가 데이터 (총 4/10개)
        {
          title: '코드로 만드는 나만의 앱',
          text: '앱 개발에 필요한 기초 기술을 배웁니다.',
          imageUrl: './images/035.png',
          instructor: '박소영 앱 전문가',
          rating: 2.1,
          numReviews: 200,
          price: '무료',
        },
        // 추가 데이터 (총 5/10개)
        {
          title: '시니어를 위한 컴퓨터 기초 입문',
          text: '이 강좌는 컴퓨터 사용의 기초를 다룹니다.',
          imageUrl: './images/036.png',
          instructor: '시니어 평생교육원',
          rating: 4.8,
          numReviews: 1270,
          price: '5,000원',
        },
        // 추가 데이터 (총 6/10개)
        {
          title: 'AI와 함께 짜는 코딩',
          text: '코딩 초심자를 위한 쉬운 강의입니다.',
          imageUrl: './images/037.png',
          instructor: '쉬운 길',
          rating: 4.8,
          numReviews: 365,
          price: '30,000원',
        },
       // 추가 데이터 (총 7/10개)
        {
          title: '입문자를 위한 알고리름 핵심 이론',
          text: '알고리즘에 대한 기초 지식을 배웁니다.',
          imageUrl: './images/038.png',
          instructor: '아이티 고',
          rating: 4.6,
          numReviews: 35,
          price: '45,000원',
        },
        // 추가 데이터 (총 8/10개)
        {
          title: '실전 웹사이트 제작(초급)',
          text: '이 강좌는 웹사이트 제작의 기초를 다룹니다.',
          imageUrl: './images/039.png',
          instructor: '제이영',
          rating: 4.5,
          numReviews: 28,
          price: '77,000원',
        },
        // 추가 데이터 (총 9/10개)
        {
          title: '초심자를 위한 코딩',
          text: '코딩 초심자를 위한 쉬운 강의입니다.',
          imageUrl: './images/040.png',
          instructor: '코딩 아카데미',
          rating: 4.8,
          numReviews: 240,
          price: '20,000원',
        },
        // 추가 데이터 (총 10/10개)
      ],      
    },
    {
      subtitle: '강사들 추천 pick',
      cards: [
        {
          title: '김코딩의 python 끝판왕 몰아보기',
          text: '인기 강사들이 추천하는 파이썬 강의 모음입니다.',
          imageUrl: './images/041.png',
          instructor: '김코딩 전문가',
          rating: 4.1,
          numReviews: 850,
          price: '145,000원',
        },
        // 추가 데이터 (총 1/10개)
        {
          title: '이진호의 프론트부터 백엔드까지 완전 공략',
          text: '웹 개발에 필요한 기초 기술을 배웁니다.',
          imageUrl: './images/042.png',
          instructor: '이진호 개발자',
          rating: 4.3,
          numReviews: 12,
          price: '35,000원',
        },
        // 추가 데이터 (총 2/10개)
        {
          title: '민수클의 풀스텍 프로젝트 찍먹하기',
          text: '이 강좌는 풀스텍의 기초를 다룹니다.',
          imageUrl: './images/043.png',
          instructor: '민수클',
          rating: 3.5,
          numReviews: 122,
          price: '50,000원',
        },
        // 추가 데이터 (총 3/10개)
        {
          title: '초심자를 위한 코딩 기초 중의 기초',
          text: '코딩 초심자를 위한 쉬운 강의입니다.',
          imageUrl: './images/044.png',
          instructor: '코딩이 젤 쉬웠어요',
          rating: 4.8,
          numReviews: 195,
          price: '40,000원',
        },
        // 추가 데이터 (총 4/10개)
        {
          title: '강사 추천 강의',
          text: '인기 강사들이 추천하는 강의 모음입니다.',
          imageUrl: './images/045.png',
          instructor: '강사 그룹',
          rating: 4.9,
          numReviews: 150,
          price: '60,000원',
        },
        // 추가 데이터 (총 5/10개)
        {
          title: '웹 개발 고급',
          text: '웹 개발에 필요한 고급 기술을 배웁니다.',
          imageUrl: './images/046.png',
          instructor: 'Instructor B',
          rating: 4.7,
          numReviews: 185,
          price: '245,000원',
        },
        // 추가 데이터 (총 6/10개)
        {
          title: '자바 고급 과정',
          text: '이 강좌는 자바의 고급 과정을 다룹니다.',
          imageUrl: './images/047.png',
          instructor: '자바신',
          rating: 4.0,
          numReviews: 125,
          price: '150,000원',
        },
        // 추가 데이터 (총 7/10개)
        {
          title: '초심자를 위한 코딩',
          text: '코딩 초심자를 위한 쉬운 강의입니다.',
          imageUrl: './images/048.png',
          instructor: '코딩의 신',
          rating: 4.8,
          numReviews: 95,
          price: '40,000원',
        },
        // 추가 데이터 (총 8/10개)
        {
          title: '프로그래밍 입문',
          text: '이 강좌는 프로그래밍의 기초를 다룹니다.',
          imageUrl: './images/049.png',
          instructor: '개발의 기사',
          rating: 4.5,
          numReviews: 120,
          price: '52,000원',
        },
        // 추가 데이터 (총 9/10개)
        {
          title: '중급자를 위한 코딩',
          text: '코딩 중급자를 위한 쉬운 강의입니다.',
          imageUrl: './images/050.png',
          instructor: '코딩의 신',
          rating: 3.8,
          numReviews: 495,
          price: '40,000원',
        },
        // 추가 데이터 (총 10/10개)
      ],
    },
  ];

  return (
    <div className="main-cards-container">
      {cardsGroupData.map((group, index) => (
        <Cards key={index} subtitle={group.subtitle} cardData={group.cards} />
      ))}
    </div>
  );
};

export default MainCards;
