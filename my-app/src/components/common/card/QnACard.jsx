// GoingUpDragon/my-app/src/components/common/card/QnACard.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import HorizontalLine from "../icons/HorizontalLine";
import SharpTagComponent from "../utilities/tag/SharpTagComponent";
import LikeButton from "../utilities/LikeButton";

const QnACard = () => {
  return (
    <StyledCardContainer>
      <StyledCardMainPanel>
        <StyledTitlePanel>
          HTML에서 이미지를 가운데 정렬 하는 방법은??
        </StyledTitlePanel>
        <StyledContentPanel>
          HTML을 사용해서 웹페이지에 이미지를 삽입했는데, 이 이미지를 화면
          중앙에 배치하고 싶습니다. CSS의 text-align 속성을 시도해 보았지만
          제대로 출력되지 않는 현상이 발생하고 있습니다. 이런 경우는 어떻게 하면
          좋을까요?
        </StyledContentPanel>
        <StyledSharpTag>
          <SharpTagComponent
            tags={["HTML", "CSS", "이미지 정렬"]}
          ></SharpTagComponent>
        </StyledSharpTag>
      </StyledCardMainPanel>
      <HorizontalLine></HorizontalLine>
      <StyledCardFooter>
        <div>
          <StyledId>id</StyledId>
          <span>·</span>
          <StyledDate>n주 전</StyledDate>
        </div>
        <div>
          <StyledLike>
            <LikeButton></LikeButton>
            <span>0</span>
          </StyledLike>
          <StyledView>
            <FaEye></FaEye>
            <span>10</span>
          </StyledView>
          <StyledReview>
            <FaRegCommentAlt></FaRegCommentAlt>
            <span>0</span>
          </StyledReview>
        </div>
      </StyledCardFooter>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
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

const StyledTitlePanel = styled.h5`
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledContentPanel = styled.h6`
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
  margin-top: 30px;
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
`;

const StyledDate = styled.span`
  margin-left: 10px;
`;

const StyledLike = styled.span`
  display: flex;
  align-items: center;
`;

const StyledView = styled.span`
  display: flex;
  align-items: center;
`;

const StyledReview = styled.span`
  display: flex;
  align-items: center;
`;

export default QnACard;
