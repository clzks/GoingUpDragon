import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../../common/utilities/Pagination";

const QnA = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const questions = [
    {
      id: 1,
      title: "HTML에서 이미지를 가운데 정렬하려면 어떻게 해야 하나요?",
      content:
        "HTML을 사용할 때 이미지를 중앙에 정렬하고 싶다면, CSS를 활용하는 것이 일반적입니다. 가장 간단한 방법은 'text-align: center;'를 사용하는 것입니다. 또한, 'flexbox'나 'grid'를 활용하여 더욱 정밀하게 정렬할 수도 있습니다. 예를 들어, 부모 요소에 'display: flex; justify-content: center; align-items: center;'를 적용하면 간단히 해결됩니다.",
      tags: ["HTML", "CSS"],
      date: "2024.10.14",
      views: 123,
      replies: 3,
    },
    {
      id: 2,
      title: "React에서 어떤 상태 관리 라이브러리가 가장 좋은가요?",
      content:
        "React에서 상태 관리를 위해 다양한 라이브러리를 사용할 수 있습니다. 가장 많이 사용되는 라이브러리는 Redux이며, 전역 상태 관리를 위한 강력한 도구입니다. 또한, MobX, Zustand, Recoil, Context API 등도 상황에 따라 유용하게 사용할 수 있습니다. 프로젝트의 복잡성, 팀의 규모, 학습 곡선을 고려해 적합한 라이브러리를 선택하는 것이 중요합니다.",
      tags: ["React", "State"],
      date: "2023.9.12",
      views: 89,
      replies: 5,
    },
    {
      id: 3,
      title: "Python에서 데이터 프레임을 어떻게 다룰 수 있나요?",
      content:
        "Python에서 데이터 프레임을 다루기 위해 주로 Pandas 라이브러리를 사용합니다. Pandas는 데이터 조작 및 분석에 강력한 도구를 제공하며, 데이터 프레임을 생성, 수정, 필터링 및 통계 계산과 같은 다양한 작업을 수행할 수 있습니다. 예를 들어, 'df.loc'와 'df.iloc'를 사용하여 데이터를 선택하거나, 'groupby'를 활용해 데이터를 집계할 수 있습니다.",
      tags: ["Python", "Pandas"],
      date: "2023.7.20",
      views: 102,
      replies: 4,
    },
    {
      id: 4,
      title: "JavaScript에서 이벤트 위임은 무엇인가요?",
      content:
        "이벤트 위임은 부모 요소에 이벤트 리스너를 추가하여 자식 요소들의 이벤트를 관리하는 기법입니다. 이는 동적으로 생성된 요소에도 이벤트를 적용할 수 있다는 장점이 있습니다. 예를 들어, 'document.addEventListener'를 사용하여 특정 컨테이너 내의 클릭 이벤트를 처리하고, 이벤트 대상의 'event.target'을 활용해 세부 처리를 할 수 있습니다.",
      tags: ["JavaScript", "Event"],
      date: "2023.5.3",
      views: 67,
      replies: 2,
    },
    {
      id: 5,
      title: "CSS Flexbox의 기본 정렬 방법은 무엇인가요?",
      content:
        "Flexbox는 CSS에서 레이아웃을 구성하는 데 매우 유용한 도구입니다. Flexbox를 사용하면 축 기준으로 아이템을 정렬하거나 공간을 균등하게 분배할 수 있습니다. 기본적으로 부모 요소에 'display: flex;'를 설정하고, 'justify-content'와 'align-items' 속성을 사용하여 주축과 교차축 정렬을 쉽게 조정할 수 있습니다.",
      tags: ["CSS", "Flexbox"],
      date: "2023.3.18",
      views: 48,
      replies: 1,
    },
    {
      id: 6,
      title: "Node.js에서 Express를 어떻게 사용할 수 있나요?",
      content:
        "Express는 Node.js에서 널리 사용되는 웹 애플리케이션 프레임워크로, 라우팅 및 미들웨어 기능을 제공합니다. Express를 사용하면 간단한 코드로 서버를 구성하고 요청을 처리할 수 있습니다. 예를 들어, 'app.get()'으로 특정 경로의 GET 요청을 처리하거나, 'app.use()'로 미들웨어를 등록할 수 있습니다.",
      tags: ["Node.js", "Express"],
      date: "2023.2.25",
      views: 75,
      replies: 0,
    },
    {
      id: 7,
      title: "SQL에서 JOIN의 종류와 차이점은 무엇인가요?",
      content:
        "SQL JOIN은 두 개 이상의 테이블을 연결하여 데이터를 결합하는 데 사용됩니다. 주요 JOIN 유형에는 INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN이 있습니다. INNER JOIN은 공통된 데이터만 반환하고, LEFT JOIN과 RIGHT JOIN은 한쪽 테이블의 모든 데이터를 포함합니다. FULL OUTER JOIN은 두 테이블의 모든 데이터를 포함합니다.",
      tags: ["SQL", "Database"],
      date: "2023.1.11",
      views: 56,
      replies: 6,
    },
  ];
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <QnAWrapper>
      <Header>Q&A</Header>
      <QuestionList>
        {currentItems.map((question) => (
          <QuestionCard key={question.id}>
            <QuestionHeader>
              <Title>{question.title}</Title>
              <Info>
                <Tags>
                  {question.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>
                <Meta>{question.date} · 조회 {question.views} · 댓글 {question.replies}</Meta>
              </Info>
            </QuestionHeader>
            <Content>{question.content}</Content>
          </QuestionCard>
        ))}
      </QuestionList>
      <PaginationWrapper>
        <Pagination
          items={questions}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </PaginationWrapper>
    </QnAWrapper>
  );
};

export default QnA;

const QnAWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  margin: 20px 0;
`;

const Header = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionCard = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: #666;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #f1f1f1;
  color: #555;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const Meta = styled.span`
  font-size: 12px;
  color: #999;
`;

const Content = styled.p`
  font-size: 14px;
  color: #444;
  margin: 0;
`;

const PaginationWrapper = styled.div`
  margin-top: 20px;
`;
