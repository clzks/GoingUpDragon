// GoingUpDragon/my-app/src/components/qnAPage/main/QnAMainConainer.jsx
import React from "react";

// 외부 라이브러리
import { Container } from "react-bootstrap";
import styled from "styled-components";
import QnACard from "../../common/card/QnACard";

const QnAMainConainer = () => {
  return (
    <Container>
      <StyledLeftPanel>
        <QnACard></QnACard>
        <QnACard></QnACard>
        <QnACard></QnACard>
      </StyledLeftPanel>
      <StyledRightPanel></StyledRightPanel>
    </Container>
  );
};

const StyledLeftPanel = styled.div`
  flex: 2;
`;

const StyledRightPanel = styled.div`
  flex: 1;
`;

export default QnAMainConainer;
