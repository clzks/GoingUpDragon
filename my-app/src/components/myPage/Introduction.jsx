import React from "react";
import styled from "styled-components";

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <Header>
        <Title>소개</Title>
        <EditButton>수정하기</EditButton>
      </Header>
      <Content>
        소개글이 비어 있어요.
      </Content>
    </IntroductionWrapper>
  );
};

export default Introduction;

const IntroductionWrapper = styled.div`
 width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
`;

const EditButton = styled.button`
  background-color: #ffffff;
  color: #000000;
 
  padding: 10px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const Content = styled.div`
  font-size: 14px;
  color: #666;
  min-height: 200px;
`;
