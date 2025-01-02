import React from "react";
import styled from "styled-components";

const MyLecture = () => {
  // 강의 데이터 예시
  const lectures = [
    {
      id: 1,
      title: "React 기초 강의",
      subtitle: "모바일 프로그래밍",
      progress: "15/107",
    },
    {
      id: 2,
      title: "JavaScript 심화 과정",
      subtitle: "모바일 프로그래밍",
      progress: "5/7",
    },
    {
      id: 3,
      title: "HTML & CSS 디자인",
      subtitle: "모바일 프로그래밍",
      progress: "34/34",
    },
    {
      id: 4,
      title: "Python 데이터 분석",
      subtitle: "모바일 프로그래밍",
      progress: "12/40",
    },
  ];

  return (
    <LectureWrapper>
      <Header>
      <HeaderTitle>내 강의</HeaderTitle>
        <ButtonWrapper>
          <FilterButton>전체</FilterButton>
          <FilterButton>학습중</FilterButton>
          <FilterButton>완강</FilterButton>
        </ButtonWrapper>
      </Header>
      <SortWrapper>
        <SortSelect>
          <option>최신 학습순</option>
          <option>제목순</option>
        </SortSelect>
      </SortWrapper>
      <LectureGrid>
        {lectures.map((lecture) => (
          <LectureCard key={lecture.id}>
            <Thumbnail />
            <LectureInfo>
              <LectureTitle>{lecture.title}</LectureTitle>
              <Subtitle>{lecture.subtitle}</Subtitle>
              <ProgressBar>
                <Progress
                  progress={(parseInt(lecture.progress.split("/")[0]) /
                    parseInt(lecture.progress.split("/")[1])) *
                    100}
                />
              </ProgressBar>
              <ProgressText>{lecture.progress}</ProgressText>
            </LectureInfo>
            <DetailButton>상세 보기</DetailButton>
          </LectureCard>
        ))}
      </LectureGrid>
      <PaginationWrapper>
        <PaginationButton>&lt;</PaginationButton>
        <PageNumber>1</PageNumber>
        <PaginationButton>&gt;</PaginationButton>
      </PaginationWrapper>
    </LectureWrapper>
  );
};

export default MyLecture;

// 스타일 정의
const LectureWrapper = styled.div`
 width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 5px 15px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const SortSelect = styled.select`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ccc;
  border-radius: 8px;
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LectureTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #7cd0d5;
`;

const ProgressText = styled.p`
  font-size: 14px;
  color: #333;
`;

const DetailButton = styled.button`
  align-self: flex-start;
  padding: 5px 10px;
  font-size: 12px;
  color: white;
  background-color: #7cd0d5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  padding: 5px 10px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const PageNumber = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
