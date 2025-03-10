// GoingUpDragon/my-app/src/components/common/utilities/LikeButton.jsx
import React, { useState } from "react";

// 외부 라이브러리
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

const LikeButton = ({
  size = "16px",
  activeColor = "#7CD0D5",
  inactiveColor = "#6C757D",
}) => {
  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked((prev) => !prev); // 좋아요 상태 토글
  }

  return (
    <div onClick={toggleLike} style={{ cursor: "pointer" }}>
      {isLiked ? (
        <FaThumbsUp size={size} color={activeColor} /> // 좋아요 상태
      ) : (
        <FaRegThumbsUp size={size} color={inactiveColor} /> // 기본 상태
      )}
    </div>
  );
};

export default LikeButton;
