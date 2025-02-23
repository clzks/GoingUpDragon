import React from "react";
import Review from "../Review";

const ReviewInstructor = ({ reviewList, isHome }) => {
  return (
    <>
      <Review reviewList={reviewList} isHome={isHome}/>
    </>
  );
};

export default ReviewInstructor;
