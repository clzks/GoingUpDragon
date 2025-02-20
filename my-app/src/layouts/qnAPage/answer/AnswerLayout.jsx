import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../../components/common/layout/Layout";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import QnAHeader from "../../../components/qnAPage/header/QnAHeader";
import QnAAnswerContainer from "../../../components/qnAPage/answer/QnAAnswerContainer";
import {
  getQnA,
  getReplyList,
  getRandomQnAsByMainCategory,
} from "../../../apis/qnAPage/qnaApi";

const AnswerLayout = () => {
  const { qnaId } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [qnaData, setQnAData] = useState();
  const [replyData, setReplyData] = useState([]);
  const [sideQnAList, setSideQnAList] = useState([]);

  useEffect(() => {
    if (!qnaId) return;

    getQnA(qnaId)
      .then((data) => {
        setTitle(data.courseTitle);
        setDesc(data.courseDesc);
        setQnAData(data);
      })
      .catch((error) => console.error("QnA 가져오기 실패:", error));
  }, [qnaId]);

  useEffect(() => {
    if (!qnaData?.courseId) return;

    getRandomQnAsByMainCategory(qnaData.courseId)
      .then((data) => {
        console.log("가져온 추천 QnA 데이터:", data); // ✅ 데이터 확인용
        setSideQnAList(data);
      })
      .catch((error) => console.error("추천 QnA 가져오기 실패:", error));
  }, [qnaData]); // ✅ qnaData가 변경될 때 실행

  useEffect(() => {
    if (!qnaId) return;

    getReplyList(qnaId)
      .then((data) => {
        setReplyData(data);
      })
      .catch((error) => console.error("답변 가져오기 실패", error));
  }, [qnaId]);

  return (
    <Layout>
      <QnAHeader
        title={title}
        desc={desc}
        courseId={qnaData?.courseId}
      ></QnAHeader>
      <QnAAnswerContainer
        qnaData={qnaData}
        replyData={replyData}
        sideQnAList={sideQnAList}
      ></QnAAnswerContainer>
    </Layout>
  );
};

export default AnswerLayout;
