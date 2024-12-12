// GoingUpDragon/my-app/src/components/searchPage/SkillSearchModal.jsx
import React, { useState } from "react";

// 외부 라이브러리
import { Form, Button, Modal } from "react-bootstrap";
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

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchText, setSearchText] = useState(""); // 검색 텍스트 상태 추가

  // 카테고리 선택 시 선택한 카테고리 저장
  const handleCategoryClick = (category) => {
    // 카테고리가 이미 선택되었으면 제거하고, 아니면 추가
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
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
            value={searchText} // 입력 값 상태 연결
            onChange={(e) => setSearchText(e.target.value)} // 입력 이벤트 처리
          />
        </Form>
        {/* 선택된 카테고리들 표시 */}
        <SelectedCategories>
          {selectedCategories.map((category) => (
            <SelectedCategory key={category}>{category}</SelectedCategory>
          ))}
        </SelectedCategories>
        <CategoryList>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              onClick={() => handleCategoryClick(category)}
              selected={selectedCategories.includes(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryList>
      </Modal.Body>
      <Modal.Footer>
        {/* 초기화 버튼 */}
        <StyledResetButton
          onClick={() => {
            setSelectedCategories([]);
            setSearchText("");
          }}
        >
          <FaSync />
          초기화
        </StyledResetButton>
        {/* 적용 버튼 */}
        <StyledApplyButton onClick={props.onHide}>적용</StyledApplyButton>
      </Modal.Footer>
    </Modal>
  );
};

export default SkillSearchModal;

const StyledFormControl = styled(Form.Control)`
  margin-right: 0.5rem;

  &:focus {
    border-color: #7cd0d5 !important;
    border: 1px solid #7cd0d5;
    box-shadow: none;
    outline: 3px solid #7cd0d5;
  }
`;

const SelectedCategories = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SelectedCategory = styled.span`
  background-color: #e6f7ff;
  color: #000;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const CategoryButton = styled.button`
  background-color: ${(props) => (props.selected ? "#e6f7ff" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "#000" : "#333")};
  padding: 8px 16px;
  border: 1px solid ${(props) => (props.selected ? "#e6f7ff" : "#ccc")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e6f7ff;
    color: #000;
  }
`;

const StyledResetButton = styled(Button)`
  background-color: #e6f7ff;
  color: #000;
  border: 1px solid #e6f7ff;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #cceeff;
    color: #000;
  }
`;

const StyledApplyButton = styled(Button)`
  background-color: #e6f7ff;
  color: #000;
  border: 1px solid #e6f7ff;

  &:hover {
    background-color: #cceeff;
    color: #000;
  }
`;
