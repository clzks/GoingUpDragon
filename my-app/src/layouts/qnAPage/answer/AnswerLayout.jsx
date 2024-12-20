import React from "react";
import Layout from "../../../components/common/layout/Layout";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const AnswerLayout = () => {
  return (
    <Layout>
      <StyledLeftContainer>
        <StyledMainPanel></StyledMainPanel>
        <StyledAnswerPanel></StyledAnswerPanel>
      </StyledLeftContainer>
      <StyledRightContainer></StyledRightContainer>
    </Layout>
  );
};

const StyledLeftContainer = styled(Container)``;

const StyledMainPanel = styled.div``;

const StyledAnswerPanel = styled.div``;

const StyledRightContainer = styled.div``;
export default AnswerLayout;
