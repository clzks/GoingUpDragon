import React from "react";
import Layout from "../../../components/common/layout/Layout";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import QnAHeader from "../../../components/qnAPage/header/QnAHeader";
import QnAAnswerContainer from "../../../components/qnAPage/answer/QnAAnswerContainer";
const AnswerLayout = () => {
  const questionInfo = {
    userInfo: {
      nickName: "천재",
      questionCount: 3,
      timeStamp: "2025-01-01T12:00:00Z",
    }
  };

  return (
    <Layout>
      <QnAHeader></QnAHeader>
      <QnAAnswerContainer></QnAAnswerContainer>
    </Layout>
  );
};

const StyledLeftContainer = styled(Container)``;

const StyledMainPanel = styled.div``;

const StyledAnswerPanel = styled.div``;

const StyledRightContainer = styled.div``;
export default AnswerLayout;
