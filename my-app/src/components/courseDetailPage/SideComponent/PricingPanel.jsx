import React from "react";
import styled from "styled-components";

const PricingPanel = (data) => {
  return (
    <StyledContainer>
      <StyledPriceText>{data.price}</StyledPriceText>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #565656;
  display: flex;
`;

const StyledPriceText = styled.h2``;

export default PricingPanel;
