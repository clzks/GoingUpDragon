import React from "react";
import styled from "styled-components";

const SkillTag = () => {
  // 스킬 태그 데이터
  const skills = ["html", "css", "JavaScript", "React"];

  return (
    <SkillTagWrapper>
      <Header>
        <Title>스킬태그</Title>
      </Header>
      <TagList>
        {skills.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </TagList>
    </SkillTagWrapper>
  );
};

export default SkillTag;

// Styled-components 스타일 정의
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
