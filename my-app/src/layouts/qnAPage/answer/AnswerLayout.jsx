import React from "react";
import Layout from "../../../components/common/layout/Layout";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import QnAHeader from "../../../components/qnAPage/header/QnAHeader";
import QnAAnswerContainer from "../../../components/qnAPage/answer/QnAAnswerContainer";
const AnswerLayout = () => {
  const questionInfo = {
    userInfo: {
      nickName: "나천재",
      questionCount: 3,
      timeStamp: "2025-01-01T12:00:00Z",
    },
    QuestionInfo: {
      likes: 121,
      views: 350,
      title:
        '<form> 태그 안에서 <button>과 <input type="submit">의 차이점이 있나요?',
      main: 'HTML에서 <form> 태그를 사용할 때, 제출 버튼으로 <button>과 <input type="submit">을 모두 사용할 수 있는 것으로 알고 있습니다. 그런데 두 태그 간에 어떤 차이점이 있는지 궁금합니다. 예를 들어, <button> 태그는 버튼 내부에 아이콘이나 HTML 요소를 추가할 수 있다고 들었는데, 그렇다면 언제 <button>을 사용하고 언제 <input type="submit">을 사용하는 게 좋을까요? 그리고 두 태그 모두 <form>을 제출하는 역할을 하는 것 같은데, 실제로 제출 방식이나 이벤트 처리에서 차이가 있는지도 궁금합니다. 웹사이트를 만들 때, 적절한 버튼을 선택하는 기준이 무엇인지 알려주세요.',
      tags: ["Html", "form"],
    },
    AnswerInfo: [
      {
        likes: 3,
        timeStamp: "2025-01-03T09:30:23Z",
        nickName: "이순신",
        answer:
          '<button>과 <input type="submit">은 둘 다 <form>을 제출할 때 사용할 수 있지만, 기능적으로 약간의 차이가 있습니다. <input type="submit">은 단순히 제출 버튼으로만 동작하는 반면, <button>은 좀 더 유연합니다. 예를 들어, <button>은 <button type="submit">, <button type="button">, <button type="reset"> 등 여러 타입을 지정할 수 있으며, 내부에 아이콘이나 텍스트를 함께 넣어 스타일링하기 쉽습니다. 일반적으로 버튼에 텍스트 외에 다른 HTML 요소가 필요하거나 추가적인 JavaScript 이벤트 처리를 해야 하는 경우 <button>을 사용하는 게 좋습니다. 반대로, 단순히 제출 기능만 필요할 때는 <input type="submit">을 사용하는 것이 깔끔할 수 있습니다.',
      },
    ],
  };

  return (
    <Layout>
      <QnAHeader></QnAHeader>
      <QnAAnswerContainer questionInfo={questionInfo}></QnAAnswerContainer>
    </Layout>
  );
};

const StyledLeftContainer = styled(Container)``;

const StyledMainPanel = styled.div``;

const StyledAnswerPanel = styled.div``;

const StyledRightContainer = styled.div``;
export default AnswerLayout;
