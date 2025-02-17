import React, { useState } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination";
import { qnaItems } from "./Item/QnAItem";

const QnA = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = qnaItems.slice(indexOfFirstItem, indexOfLastItem);

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
          items={qnaItems}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </PaginationWrapper>
    </QnAWrapper>
  );
};

export default QnA;

// 스타일 정의
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
