// GoingUpDragon/my-app/src/components/qnAPage/answer/AnswerCard.jsx
import React from "react";
import LikeButton from "../../common/utilities/LikeButton";

// 외부 라이브러리
import styled from "styled-components";
import HorizontalLine from "../../common/icons/HorizontalLine";

const AnswerCard = ({ answerInfo, timeStamp }) => {
  return (
    <div>
      <StyledHeader>
        <StyledLikePanel>
          <LikeButton size = "20px"></LikeButton>
          <StyledLikes>123</StyledLikes>
        </StyledLikePanel>
        <DummyProfile></DummyProfile>
        <NameTimePanel>
          <StyledNickName>{answerInfo.nickName}</StyledNickName>
          <StyledTimeDisplay>{timeStamp}</StyledTimeDisplay>
        </NameTimePanel>
      </StyledHeader>
      <StyledAnswer>
        {answerInfo.answer}
      </StyledAnswer>
      <HorizontalLine></HorizontalLine>
    </div>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center; /* 자식들의 세로 중심 정렬 */
`;

const StyledLikePanel = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  width: 50px; /* 아이콘과 숫자를 감싸는 컨테이너 크기 */
`;

const StyledLikes = styled.span`
  margin-top: 3px;
  text-align: center;
`;

const DummyProfile = styled.div`
  width: 40px; /* 동그라미의 가로 크기 */
  height: 40px; /* 동그라미의 세로 크기 */
  background-color: gray; /* 회색 배경 */
  border-radius: 50%; /* 완전한 원으로 만들기 */
  margin-left : 10px;
`;

const NameTimePanel = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  //width: 50px; /* 아이콘과 숫자를 감싸는 컨테이너 크기 */
`;

const StyledNickName = styled.span`
  font-size: 18px;
  font-weight : 600;
`;

const StyledTimeDisplay = styled.span`
  font-size: 16px;
  color : gray;
`;

const StyledAnswer = styled.div`
  margin-top: 30px;
  margin-left : 25px;
  size: 18px;
  font-weight: 600;
  margin-bottom: 50px;
`;

export default AnswerCard;
