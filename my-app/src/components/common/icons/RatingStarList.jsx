import React from "react";
import RatingStar from "./RatingStar";

const RatingStarList = ({ rating, size }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const starPosition = index + 1; // 1부터 5까지 별의 위치 계산
        const type =
          rating >= starPosition // 현재 별보다 평점이 크거나 같으면
            ? "full"
            : rating > starPosition - 1 // 평점이 현재 별보다 소수점 만큼 클 경우
            ? "half"
            : "empty"; // 나머지는 empty

        return <RatingStar key={index} type={type} size={size}></RatingStar>;
      })}
    </div>
  );
};

export default RatingStarList;
