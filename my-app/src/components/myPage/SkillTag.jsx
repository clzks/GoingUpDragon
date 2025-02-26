import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const SkillTag = ({ skills }) => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchSkills = async () => {
  //     try {
  //       const response = await axios.get("/api/user/skills");
  //       setSkills(response.data);
  //     } catch (error) {
  //       console.error("스킬 태그를 불러오는데 실패했습니다:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSkills();
  // }, []);

  console.log("스킬s :", skills);

  return (
    <SkillTagWrapper>
      <Header>
        <Title>스킬태그</Title>
      </Header>
      <TagList>
        {skills?.length > 0 ? (
          skills?.map((skill, index) => <Tag key={index}>{skill}</Tag>)
        ) : (
          <NoSkillsText>등록된 스킬 태그가 없습니다.</NoSkillsText>
        )}
      </TagList>
    </SkillTagWrapper>
  );
};

export default SkillTag;

// 스타일 정의
const SkillTagWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f9f9f9;
  font-size: 14px;
  color: #333;
  text-align: center;
  cursor: default;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const NoSkillsText = styled.div`
  font-size: 14px;
  color: #888;
  text-align: center;
  width: 100%;
`;

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;
