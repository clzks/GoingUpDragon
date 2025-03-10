import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../common/utilities/Pagination";
import { getQnAByinstructorId } from "../../apis/qnAPage/qnaApi";

const QnA = ({ qnAList, isHome }) => {
  const [qnaData, setQnAData] = useState(qnAList || []); // 데이터를 저장할 상태
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const { infoId } = useParams(); // URL에서 infoId 가져오기

  // ✅ QnA 데이터 가져오기
  useEffect(() => {
    if (!isHome && infoId) {
      setLoading(true);
      getQnAByinstructorId(infoId)
        .then((data) => {
          console.log("✅ 강사 QnA 불러오기 성공:", data);
          setQnAData(Array.isArray(data) ? data : []);
        })
        .catch((error) => {
          console.error("❌ 강사 QnA 가져오기 실패:", error);
          setQnAData([]); // 오류 발생 시 빈 배열 처리
        })
        .finally(() => setLoading(false));
    } else {
      setQnAData(qnAList || []);
    }
  }, [isHome, infoId, qnAList]);

  // ✅ 페이지네이션 처리 (qnaData를 기준으로 해야 함)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(qnaData)
    ? qnaData.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  return (
    <QnAWrapper>
      <Header>Q&A</Header>

      {/* ✅ 로딩 중이면 로딩 메시지 표시 */}
      {loading ? (
        <LoadingText>Q&A 불러오는 중...</LoadingText>
      ) : (
        <>
          <QuestionList>
            {qnaData.length > 0 ? (
              currentItems.map((question) => {
                const tags = [
                  question.tag1,
                  question.tag2,
                  question.tag3,
                ].filter((tag) => tag !== null);
                return (
                  <QuestionCard
                    key={question.qnaId}
                    onClick={() => navigate(`/qna/${question?.qnaId}`)}
                  >
                    <QuestionHeader>
                      <Title>{question.title || "제목 없음"}</Title>
                      <Info>
                        <Tags>
                          {tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                          ))}
                        </Tags>
                        <Meta>
                          {question.createAt} · 조회 {question.viewCount} · 댓글{" "}
                          {question.replyCount}
                        </Meta>
                      </Info>
                    </QuestionHeader>
                    <Content>{question.main}</Content>
                  </QuestionCard>
                );
              })
            ) : (
              <NoQnAText>등록된 Q&A가 없습니다.</NoQnAText>
            )}
          </QuestionList>

          {/* ✅ 페이지네이션을 qnaData 기준으로 적용 */}
          {!isHome && qnaData.length > 0 && (
            <PaginationWrapper>
              <Pagination
                items={qnaData}
                itemsPerPage={itemsPerPage}
                paginate={paginate}
                currentPage={currentPage}
              />
            </PaginationWrapper>
          )}
        </>
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
  cursor: pointer;
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
