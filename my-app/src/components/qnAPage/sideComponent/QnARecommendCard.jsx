// GoingUpDragon/my-app/src/components/qnAPage/sideComponent/QnARecommendCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

// 외부 라이브러리
import styled from "styled-components";
import HorizontalLine from "../../common/icons/HorizontalLine";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import timeAgo from "../../common/utilities/TimeAgo";

const QnARecommendCard = ({ isLast = false, qnaData }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return "날짜 없음"; // null 체크
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ko-KR", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\. /g, ".")
      .replace(/\.$/, "");
  };

  return (
    <StyledCardContainer onClick={() => navigate(`/qna/${qnaData?.qnaId}`)}>
      <StyledCardTitle>{qnaData.title}</StyledCardTitle>
      <StyledCardFooter>
        <div>
          <StyledCardDate>{formatDate(qnaData.createAt)}</StyledCardDate>
        </div>
        <div>
          <StyledThumbUp></StyledThumbUp>
          <span>{qnaData.qnaLike}</span>
          <StyledEye></StyledEye>
          <span>{qnaData.viewCount}</span>
          <StyledComment></StyledComment>
          <span>{qnaData.replyCount}</span>
        </div>
      </StyledCardFooter>
      {isLast ? <></> : <HorizontalLine></HorizontalLine>}
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.button`
  all: unset; /* 모든 기본 버튼 스타일 초기화 */
  height: 110px;
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledCardTitle = styled.div`
  height: 48px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 12px;
  display: block; /* 기본적으로 block 설정 */

  @supports (-webkit-line-clamp: 2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

const StyledCardFooter = styled.div`
  justify-content: space-between; /* 양쪽 정렬 */
  display: flex;
  font-size: 14px;
  margin-bottom: 5px;
`;

const StyledCardDate = styled.span`
  color: gray;
  margin-right: 2px;
`;

const StyledThumbUp = styled(FaRegThumbsUp)`
  margin-right: 3px;
  color: gray;
`;

const StyledEye = styled(FaEye)`
  margin-right: 3px;
  margin-left: 10px;
  color: gray;
`;

const StyledComment = styled(FaRegCommentAlt)`
  margin-right: 3px;
  margin-left: 10px;
  color: gray;
`;

export default QnARecommendCard;
