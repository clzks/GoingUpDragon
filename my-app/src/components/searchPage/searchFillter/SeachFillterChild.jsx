import React, { useState } from "react";

// 외부 라이브러리
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

// GoingUpDragon/my-app/src/components
import HorizontalLine from "../../common/icons/HorizontalLine";

const CourseOptions = ({ data, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(""); // ✅ 문자열로 변경 (하나만 선택 가능)
  const [showOptions, setShowOptions] = useState(true);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    let newValue = selectedOption === name ? "" : name; // ✅ 같은 값이면 해제, 아니면 변경
    setSelectedOption(newValue);

    // ✅ 기본값 설정
    let selectedValue = "모두";

    // ✅ 강의 시간 필터일 경우 → `null` 반환
    if (data.key === "time") {
      selectedValue =
        newValue === "1 ~ 10시간"
          ? "short"
          : newValue === "10 ~ 40시간"
          ? "medium"
          : newValue === "40 ~ 70시간"
          ? "long"
          : null; // 모두 해제되면 null
    }
    // ✅ level / language 필터일 경우 → "모두" 반환
    else if (newValue) {
      selectedValue = newValue;
    }

    if (onSelect) {
      onSelect(data.key, selectedValue);
    }
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
        <StyledOptions show={showOptions}>
          {data.items.map((item) => (
            <StyledLabelContainer key={item}>
              <StyledLabel>
                <StyledCheckbox
                  type="checkbox"
                  name={item}
                  checked={selectedOption === item} // ✅ 하나만 선택되도록 수정
                  onChange={handleCheckboxChange}
                />
                {item}
              </StyledLabel>
            </StyledLabelContainer>
          ))}
        </StyledOptions>
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
  font-weight: bold;
`;

const StyledToggleIcon = styled.div`
  font-size: 24px;
`;

const StyledOptions = styled.div`
  max-height: ${(props) => (props.show ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
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
