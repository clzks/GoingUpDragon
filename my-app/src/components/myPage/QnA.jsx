import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination";
import axios from "axios";

const QnA = () => {
  const [qnaItems, setQnaItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchQnA = async () => {
      try {
        const response = await axios.get("/api/user/qna");
        setQnaItems(response.data);
      } catch (error) {
        console.error("Q&A 데이터를 불러오지 못했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQnA();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = qnaItems.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <LoadingText>Q&A 데이터를 불러오는 중...</LoadingText>;
  }

  return (
    <QnAWrapper>
      <Header>Q&A</Header>
      <QuestionList>
        {qnaItems.length > 0 ? (
          currentItems.map((question) => (
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
          ))
        ) : (
          <NoQnAText>등록된 Q&A가 없습니다.</NoQnAText>
        )}
      </QuestionList>
      {qnaItems.length > 0 && (
        <PaginationWrapper>
          <Pagination
            items={qnaItems}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </PaginationWrapper>
      )}
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
  margin: 40px 0;
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

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;

const NoQnAText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #888;
  margin: 20px 0;
`;
