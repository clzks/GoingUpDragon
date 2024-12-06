import React from "react";
import styled from "styled-components";
import HorizontalLine from "../../components/common/icons/HorizontalLine";

const QnAThumbnail = () => {
  return (
    <StyledContainer>
      <StyledQnAThumbnail>
        <StyledThumnailImage imageUrl="/path/to/your/image.jpg"></StyledThumnailImage>
      </StyledQnAThumbnail>
      <HorizontalLine></HorizontalLine>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center; /* 세로 축 정렬 */
`;

const StyledQnAThumbnail = styled.button`
  display: flex;
  border: none;
`;

const StyledThumnailImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 30px;
`;
export default QnAThumbnail;
