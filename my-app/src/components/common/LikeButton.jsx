import React, { useState } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

function LikeButton({
  size = "40px",
  activeColor = "#7CD0D5",
  inactiveColor = "#6C757D",
}) {
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
}

export default LikeButton;
