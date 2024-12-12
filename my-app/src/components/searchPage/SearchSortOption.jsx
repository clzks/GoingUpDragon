// GoingUpDragon/my-app/src/components/searchPage/SearchSortOption.jsx
import React from "react";

// GoingUpDragon/my-app/src/components
import SortOption from "../common/utilities/SortOption";

const SearchSortOption = () => {
  const handleDropdownSelect = (value) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <>
      <div>
        {/* 드롭다운 1 */}
        <SortOption
          options={["정확도순", "인기순", "최신순", "평점순", "좋아요순"]}
          defaultOption="정확도순"
          onSelect={handleDropdownSelect}
        ></SortOption>
      </div>
    </>
  );
};
export default SearchSortOption;