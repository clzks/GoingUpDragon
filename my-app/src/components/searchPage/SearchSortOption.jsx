// GoingUpDragon/my-app/src/components/searchPage/SearchSortOption.jsx
import React from "react";

// GoingUpDragon/my-app/src/components
import SortOption from "../common/utilities/SortOption";

const SearchSortOption = ({ handleDropdownSelect }) => {
  //
  return (
    <>
      <div>
        {/* 드롭다운 1 */}
        <SortOption
          options={["최신순", "인기순", "평점순", "좋아요순"]}
          defaultOption="최신순"
          onSelect={handleDropdownSelect}
        ></SortOption>
      </div>
    </>
  );
};
export default SearchSortOption;
