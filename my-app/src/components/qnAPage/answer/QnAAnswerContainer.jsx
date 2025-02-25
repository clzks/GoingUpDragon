// GoingUpDragon/my-app/src/components/qnAPage/answer/QnAAnswerContainer.jsx
import React from "react";
import LikeButton from "../../common/utilities/LikeButton";
import HorizontalLine from "../../common/icons/HorizontalLine";
import TagButton from "../../common/utilities/tag/TagButton";
import QnARecommend from "../sideComponent/QnARecommend";
import QuestionButton from "../sideComponent/QuestionButton";
import AnswerCard from "./AnswerCard";

// 외부 라이브러리
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";

const QnAAnswerContainer = ({ qnaData, replyData, sideQnAList }) => {
  function formatTimeStamp(timeStamp) {
    const date = new Date(timeStamp);
    const formattedDate = `${date.getFullYear() % 100}.${String(
      date.getMonth() + 1
    ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
    const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}`;
    return `${formattedDate} ${formattedTime} 작성`;
  }

  console.log("가져온 추천강의 데이터 : ", sideQnAList);

  return (
    <StyledContainer>
      <StyledLeftPanel>
        <StyledTitle>{qnaData?.title}</StyledTitle>
        <StyledSecondPanel>
          <DummyProfile></DummyProfile>
          <StyledNickName>{qnaData?.studentName}</StyledNickName>
          <StyledQuestionCount>
            작성한 질문 수 {qnaData?.studentQnACount}
          </StyledQuestionCount>
        </StyledSecondPanel>
        <StyledThirdPanel>
          {replyData?.length > 0 && (
            <StyledResolvedMark>✓ 해결된 질문</StyledResolvedMark>
          )}
          <StyledTimeDisplay>
            {formatTimeStamp(qnaData?.createAt)}
          </StyledTimeDisplay>
          <StyledEye></StyledEye>
          <StyledViewCount>{qnaData?.viewCount}</StyledViewCount>
        </StyledThirdPanel>
        <StyledFourthPanel>
          <LikeButton size="20px"></LikeButton>
          <StyledLikes>{qnaData?.qnaLike}</StyledLikes>
        </StyledFourthPanel>
        <StyledMain>{qnaData?.main}</StyledMain>
        <>
          {qnaData?.tag1 && (
            <TagButton tag={qnaData.tag1} margin="0px 20px 50px 10px" />
          )}
          {qnaData?.tag2 && (
            <TagButton tag={qnaData.tag2} margin="0px 20px 50px 10px" />
          )}
          {qnaData?.tag3 && (
            <TagButton tag={qnaData.tag3} margin="0px 20px 50px 10px" />
          )}
        </>

        <HorizontalLine></HorizontalLine>
        <StyledAnswerCountContainer>
          <span>답변</span>
          <StyledAnswerCount>{replyData?.length}</StyledAnswerCount>
        </StyledAnswerCountContainer>
        {Array.isArray(replyData) ? (
          replyData.map((item, index) => (
            <AnswerCard
              key={index}
              reply={item}
              timeStamp={formatTimeStamp(item.createAt)}
            />
          ))
        ) : (
          <p>답변이 없습니다.</p>
        )}
      </StyledLeftPanel>
      <StyledRightPanel>
        <QnARecommend isMain={false} sideQnAList={sideQnAList}></QnARecommend>
        <QuestionButton></QuestionButton>
      </StyledRightPanel>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledLeftPanel = styled.div`
  flex: 2;
  margin-right: 50px;
`;

const StyledRightPanel = styled.div`
  flex: 1;
  margin-top: 30px;
`;

const StyledTitle = styled.h4`
  margin-top: 20px;
  font-weight: 700;
`;

const StyledSecondPanel = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center; /* 자식들의 세로 중심 정렬 */
`;

const DummyProfile = styled.div`
  width: 30px; /* 동그라미의 가로 크기 */
  height: 30px; /* 동그라미의 세로 크기 */
  background-color: gray; /* 회색 배경 */
  border-radius: 50%; /* 완전한 원으로 만들기 */
`;

const StyledNickName = styled.span`
  margin-left: 5px;
  font-size: 20px;
`;

const StyledQuestionCount = styled.span`
  margin-left: 40px;
  font-size: 15px;
  color: gray;
`;

const StyledThirdPanel = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center; /* 자식들의 세로 중심 정렬 */
  margin-bottom: 10px;
`;

const StyledResolvedMark = styled.span`
  color: #4fadbb;
`;

const StyledTimeDisplay = styled.span`
  color: gray;
  margin-left: 30px;
`;

const StyledEye = styled(FaEye)`
  margin-left: 30px;
  color: gray;
`;

const StyledViewCount = styled.span`
  margin-left: 10px;
  color: gray;
`;

const StyledFourthPanel = styled.div`
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

const StyledMain = styled.div`
  margin-top: 50px;
  size: 18px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const StyledAnswerCountContainer = styled.div`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const StyledAnswerCount = styled.span`
  margin-left: 20px;
  color: #4fadbb;
`;

export default QnAAnswerContainer;
