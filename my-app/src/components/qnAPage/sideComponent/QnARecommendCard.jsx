// GoingUpDragon/my-app/src/components/qnAPage/sideComponent/QnARecommendCard.jsx

import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import HorizontalLine from "../../common/icons/HorizontalLine";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const QnARecommendCard = ({ isLast = false }) => {
  return (
    <StyledCardContainer>
      <StyledCardTitle>
        마우스 오버 이벤트가 특정 영역 안에서만 이루어 졌으면 좋겠습니다. 마우스
        오버 이벤트가 특정 영역 안에서만 이루어 졌으면 좋겠습니다.
      </StyledCardTitle>
      <StyledCardFooter>
        <div>
          <StyledCardDate>YY.MM.NN</StyledCardDate>
        </div>
        <div>
          <StyledThumbUp></StyledThumbUp>
          <span>100</span>
          <StyledEye></StyledEye>
          <span>90</span>
          <StyledComment></StyledComment>
          <span>37</span>
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
  display: -webkit-box; /* Flexbox처럼 동작 */
  -webkit-box-orient: vertical; /* 수직 정렬 방향 */
  -webkit-line-clamp: 2; /* 2줄로 제한 */
  overflow: hidden; /* 넘치는 내용 숨김 */
  text-overflow: ellipsis; /* 생략부호(...) 처리 */
  margin-bottom: 12px;
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
