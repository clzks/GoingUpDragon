import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaSync } from "react-icons/fa";
import styled from "styled-components";

const SkillSearchModal = (props) => {
  const categories = [
    "JavaScript",
    "Python",
    "Java",
    "React",
    "Node.js",
    "PHP",
    "Ruby",
    "Swift",
    "HTML5",
    "CSS3",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  // 카테고리 선택 시 선택한 카테고리 저장
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">기술</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <StyledFormControl
            type="search"
            placeholder="강의검색"
            aria-label="Search"
          ></StyledFormControl>
        </Form>
        <CategoryList>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              onClick={() => handleCategoryClick(category)}
              selected={category === selectedCategory}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryList>
      </Modal.Body>
      <Modal.Footer>
        <StyledButton>
          <FaSync />
          초기화
        </StyledButton>
        <Button onClick={props.onHide}>적용</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SkillSearchModal;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 텍스트 간 간격 추가 */
`;

const StyledFormControl = styled(Form.Control)`
  margin-right: 0.5rem;

  &:focus {
    border-color: #7cd0d5 !important; /* 원하는 보더 색상으로 변경 */
    border: 1px solid #7cd0d5;
    box-shadow: none;
    outline: 3px solid #7cd0d5; /* 원하는 색상으로 변경 */
  }
`;

// Styled Components
const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const CategoryButton = styled.button`
  background-color: ${(props) => (props.selected ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  padding: 8px 16px;
  border: 1px solid ${(props) => (props.selected ? "#0056b3" : "#ccc")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;