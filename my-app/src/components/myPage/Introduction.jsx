import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Introduction = ({ myPageData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [introduction, setIntroduction] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/user/introduction", { introduction });
      setIsEditing(false);
      alert("소개글이 저장되었습니다.");
    } catch (error) {
      console.error("소개글 저장 실패:", error);
      alert("소개글 저장에 실패했습니다.");
    }
  };

  const handleChange = (e) => {
    setIntroduction(e.target.value);
  };

  return (
    <IntroductionWrapper>
      <Header>
        <Title>소개</Title>
        {isEditing ? (
          <SaveButton onClick={handleSave}>저장하기</SaveButton>
        ) : (
          <EditButton onClick={handleEditClick}>수정하기</EditButton>
        )}
      </Header>
      {isEditing ? (
        <Textarea value={introduction} onChange={handleChange} />
      ) : (
        <Content>{myPageData?.bio || "소개글이 비어 있어요."}</Content>
      )}
    </IntroductionWrapper>
  );
};

export default Introduction;

// 스타일 정의
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

const SaveButton = styled(EditButton)`
  background-color: #7cd0d5;
  color: white;

  &:hover {
    background-color: #5bb0b8;
  }
`;

const Content = styled.div`
  font-size: 14px;
  color: #666;
  min-height: 200px;
  white-space: pre-wrap;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #7cd0d5;
  }
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;
