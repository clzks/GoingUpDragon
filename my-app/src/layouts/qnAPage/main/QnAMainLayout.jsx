import React from "react";
import Layout from "../../../components/common/layout/Layout";
import styled from "styled-components";
import QnAHeader from "../../../components/qnAPage/header/QnAHeader";
import QnAMainConainer from "../../../components/qnAPage/main/QnAMainConainer";

const QnAMainLayout = () => {
  return (
    <Layout>
      <QnAHeader></QnAHeader>
      <QnAMainConainer></QnAMainConainer>
    </Layout>
  );
};

export default QnAMainLayout;
