import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { FaSync } from "react-icons/fa";
import styled from "styled-components";
import { fetchCategories } from "../../apis/common/categoryApi";

const SkillSearchModal = (props) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tags, setTags] = useState([]);

  const handleCategoryClick = (tag) => {
    setSelectedTags((prevTags) => {
      const exists = prevTags.some((item) => item.id === tag.id);
      return exists
        ? prevTags.filter((item) => item.id !== tag.id)
        : [...prevTags, tag];
    });
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        // console.log("props", props);
        const data = await fetchCategories();
        let extractedTags = [];
        // console.log("data = ", data);
        if (
          props.selectedCategoryId == 0 &&
          !props.selectedSubCategoryId
        ) {
          // console.log("1");
          extractedTags = data
            .flatMap((category) =>
              category.subCategories.flatMap((subCategory) =>
                subCategory.tags.map((tag) =>
                  tag && tag.subjectTagName
                    ? { id: tag.subjectTagId, name: tag.subjectTagName }
                    : null
                )
              )
            )
            .filter(Boolean);
            console.log("extg = ", extractedTags);
        } else if (!props.selectedSubCategoryId ) {
          // console.log("2");
          extractedTags = data
            .filter(
              (category) => category.categoryId == props.selectedCategoryId
            )
            .flatMap((category) =>
              category.subCategories.flatMap((subCategory) =>
                subCategory.tags.map((tag) =>
                  tag && tag.subjectTagName
                    ? { id: tag.subjectTagId, name: tag.subjectTagName }
                    : null
                )
              )
            )
            .filter(Boolean);
            // console.log("extg2 ", extractedTags);
        } else {
          // console.log("3");
          extractedTags = data
            .flatMap((category) =>
              category.subCategories
                .filter(
                  (subCategory) =>
                    subCategory.categoryId === props.selectedSubCategoryId
                )
                .flatMap((subCategory) =>
                  subCategory.tags.map((tag) =>
                    tag && tag.subjectTagName
                      ? { id: tag.subjectTagId, name: tag.subjectTagName }
                      : null
                  )
                )
            )
            .filter(Boolean);
        }

        const uniqueTags = Array.from(
          new Map(extractedTags.map((tag) => [tag.id, tag])).values()
        );
        setTags(uniqueTags);
        // console.log("utg = ", uniqueTags);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, [props.selectedCategoryId, props.selectedSubCategoryId]);

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
            placeholder="기술검색"
            aria-label="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form>
        <SelectedTagsContainer>
          {selectedTags.map((tag) => (
            <SelectedCategory key={tag.id}>{tag.name}</SelectedCategory>
          ))}
        </SelectedTagsContainer>
        <CategoryList>
          {tags
            .filter((tag) =>
              tag?.name?.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((tag) => (
              <CategoryButton
                key={tag.id}
                onClick={() => handleCategoryClick(tag)}
                selected={selectedTags.some((item) => item.id === tag.id)}
              >
                {tag.name}
              </CategoryButton>
            ))}
        </CategoryList>
      </Modal.Body>
      <Modal.Footer>
        <StyledResetButton
          onClick={() => {
            setSelectedTags([]);
            setSearchText("");
          }}
        >
          <FaSync /> 초기화
        </StyledResetButton>
        <StyledApplyButton
          onClick={() => {
            props.onHide();
            props.selectedTags(selectedTags.map((tag) => tag.id));
          }}
        >
          적용
        </StyledApplyButton>
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

const SelectedTagsContainer = styled.div`
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
