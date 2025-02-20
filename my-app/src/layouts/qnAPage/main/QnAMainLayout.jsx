import React, { useState, useEffect } from "react";
import Layout from "../../../components/common/layout/Layout";
import styled from "styled-components";
import QnAHeader from "../../../components/qnAPage/header/QnAHeader";
import QnAMainConainer from "../../../components/qnAPage/main/QnAMainConainer";
import {
  getQnAsByCourseId,
  getRandomQnAsByMainCategory,
} from "../../../apis/qnAPage/qnaApi";
import { useParams } from "react-router-dom";

const QnAMainLayout = () => {
  const [qnaData, setQnAData] = useState([]);
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sideQnAList, setSideQnAList] = useState([]);

  useEffect(() => {
    if (!courseId) return; // ✅ courseId 없으면 실행 안 함

    getQnAsByCourseId(courseId)
      .then((data) => {
        if (data.length > 0) {
          setTitle(data[0].courseTitle); // ✅ 첫 번째 QnA의 title 저장
          setDesc(data[0].courseDesc); // ✅ 첫 번째 QnA의 desc 저장
        }
        setQnAData(data); // ✅ 전체 QnA 데이터 저장
      })
      .catch((error) => console.error("QnA 가져오기 실패:", error));
  }, [courseId]);

  useEffect(() => {
    if (!courseId) return; // ✅ courseId 없으면 실행 안 함

    getRandomQnAsByMainCategory(courseId)
      .then((data) => {
        setSideQnAList(data); // ✅ 전체 QnA 데이터 저장
      })
      .catch((error) => console.error("QnA 가져오기 실패:", error));
  }, [courseId]);

  return (
    <Layout>
      <QnAHeader title={title} desc={desc} courseId={courseId}></QnAHeader>
      <QnAMainConainer
        qnaData={qnaData}
        sideQnAList={sideQnAList}
      ></QnAMainConainer>
    </Layout>
  );
};

export default QnAMainLayout;
