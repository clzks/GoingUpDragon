// GoingUpDragon/my-app/src/components/common/card/QnACard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
// 외부 라이브러리
import styled from "styled-components";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

import HorizontalLine from "../icons/HorizontalLine";
import SharpTagComponent from "../utilities/tag/SharpTagComponent";
import timeAgo from "../utilities/TimeAgo";

const QnACard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <StyledCardContainer onClick={() => navigate(`/qna/${data?.qnaId}`)}>
      <StyledCardMainPanel>
        <StyledTitlePanel>{data?.title}</StyledTitlePanel>
        <StyledContentPanel>{data?.main}</StyledContentPanel>
        <StyledSharpTag>
          <SharpTagComponent
          // tags={["HTML", "CSS", "이미지 정렬"]}
          ></SharpTagComponent>
        </StyledSharpTag>
      </StyledCardMainPanel>
      <HorizontalLine></HorizontalLine>
      <StyledCardFooter>
        <div>
          <StyledId>{data?.studentName}</StyledId>
          <span>·</span>
          <StyledDate>{timeAgo(data?.createAt)}</StyledDate>
        </div>
        <div>
          <StyledLike>
            <FaRegThumbsUp></FaRegThumbsUp>
            <span>{data?.qnaLike}</span>
          </StyledLike>
          <StyledView>
            <FaEye></FaEye>
            <span>{data?.viewCount}</span>
          </StyledView>
          <StyledReview>
            <FaRegCommentAlt></FaRegCommentAlt>
            <span>{data?.replyCount}</span>
          </StyledReview>
        </div>
      </StyledCardFooter>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.button`
  all: unset; /* 기본 버튼 스타일 초기화 */
  display: block; /* div처럼 블록 요소로 설정 */
  width: 800px;
  height: 270px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const StyledCardMainPanel = styled.div`
  height: 200px;
`;

const StyledTitlePanel = styled.span`
  height: 60px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledContentPanel = styled.span`
  font-size: 16px;
  height: 48px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 원하는 줄 수로 변경 (예: 3으로 설정하면 3줄) */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(128, 128, 128, 1);
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  line-height: 1.5; /* 기본 값보다 약간 넓게 설정 */
`;

const StyledSharpTag = styled.div`
  margin-top: 45px;
  margin-left: -20px; /* 왼쪽으로 20px 이동 */
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양쪽 정렬 */
  height: 40px;
  color: gray;
`;

const StyledId = styled.span`
  margin-left: 30px;
  margin-right: 10px;
  font-size: 16px;
`;

const StyledDate = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const StyledLike = styled.span`
  margin-right: 20px;
`;

const StyledView = styled.span`
  margin-right: 20px;
`;

const StyledReview = styled.span`
  margin-right: 20px;
`;

export default QnACard;
