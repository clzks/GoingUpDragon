import React from "react";
import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStar = ({ type = "full", size = "24px", color = "gold" }) => {
  if (type === "full") {
    return <FaStar size={size} color={color} />; // 채워진 별
  }
  if (type === "empty") {
    return <FaRegStar size={size} color={color} />; // 비어 있는 별
  }
  if (type === "half") {
    return (
      <HalfStarWrapper size={size}>
        <FaStar className="full" size={size} color={color} />
        <FaRegStar className="empty" size={size} color={color} />
      </HalfStarWrapper>
    );
  }
  return null;
};

const HalfStarWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .full {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  }

  .empty {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  }
`;

export default RatingStar;