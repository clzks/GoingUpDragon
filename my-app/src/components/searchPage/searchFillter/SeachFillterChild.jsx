import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import HorizontalLine from "../../common/icons/HorizontalLine";

const CourseOptions = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(true);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setSelectedOption((prevOption) => (prevOption === name ? "" : name));
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <StyledContainer>
      <HorizontalLine />
      <StyledSection>
        <StyledSectionHeader onClick={toggleOptions}>
          <StyledSectionTitle>{data.title}</StyledSectionTitle>
          <StyledToggleIcon>
            {showOptions ? <FaChevronUp /> : <FaChevronDown />}
          </StyledToggleIcon>
        </StyledSectionHeader>
        {showOptions && data.items.map((item) => (
          <StyledLabelContainer key={item}>
            <StyledLabel>
              <StyledCheckbox
                type="checkbox"
                name={item}
                checked={selectedOption === item}
                onChange={handleCheckboxChange}
              />
              {item}
            </StyledLabel>
          </StyledLabelContainer>
        ))}
      </StyledSection>
    </StyledContainer>
  );
};

export default CourseOptions;

const StyledContainer = styled.div`
  width: 200px;
`;

const StyledSection = styled.div`
  margin-top: 10px;
`;

const StyledSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledSectionTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: bold; /* 제목에 bold 스타일 추가 */
`;

const StyledToggleIcon = styled.div`
  font-size: 24px;
`;

const StyledLabelContainer = styled.div``;

const StyledLabel = styled.label`
  margin-bottom: 8px;
  padding-left: 8px;
  font-size: 18px;
`;

const StyledCheckbox = styled.input`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;
