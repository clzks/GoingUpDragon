// // GoingUpDragon/my-app/src/components/searchPage/MiddleCategoryBox.jsx
// import React, { useState, useRef, useEffect } from "react";

// // 외부 라이브러리
// import styled from "styled-components";

// // GoingUpDragon/my-app/src/components
// import ArrowButtonLeft from "../common/icons/ArrowButtonLeft";
// import ArrowButtonRight from "../common/icons/ArrowButtonRight";

// const MiddleCategoryBox = ({ subCategories, onSubCategoryChange }) => {
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const innerContainerRef = useRef(null); // InnerContainer ref

//   useEffect(() => {
//     if (subCategories.length > 0) {
//       setSelectedCategoryId(subCategories[0].categoryId); // 첫 번째 서브 카테고리를 기본 선택
//     }
//   }, [subCategories]); // 서브 카테고리가 변경될 때 실행

//   // 카테고리 클릭 시 id 값 전달
//   const handleCategoryClick = (id) => {
//     setSelectedCategoryId(id);
//     onSubCategoryChange(id);
//   };

//   // 좌우 200씩 이동하는 스크롤롤
//   const scrollLeft = () => {
//     if (innerContainerRef.current) {
//       innerContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (innerContainerRef.current) {
//       innerContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   return (
//     <OuterContainer>
//       <ArrowButtonLeft scrollLeft={scrollLeft} />
//       <InnerContainer ref={innerContainerRef}>
//         {subCategories.length > 0 ? (
//           subCategories.map((item) => (
//             <CategoryItem
//               key={item.categoryId}
//               onClick={() => handleCategoryClick(item.categoryId)}
//               isSelected={selectedCategoryId === item.categoryId}
//             >
//               <CategoryIcon>{item.categoryName}</CategoryIcon>
//             </CategoryItem>
//           ))
//         ) : (
//           <div>서브 카테고리가 없습니다.</div>
//         )}
//       </InnerContainer>
//       <ArrowButtonRight scrollRight={scrollRight} />
//     </OuterContainer>
//   );
// };

// export default MiddleCategoryBox;

// // Styled Components
// const OuterContainer = styled.div`
//   display: flex;
//   gap: 2rem;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid #ccc;
//   border-radius: 10px;
//   padding: 10px;
//   max-width: 100%;
// `;

// const InnerContainer = styled.div`
//   display: flex;
//   gap: 2rem;
//   overflow-x: hidden;
//   scroll-behavior: smooth;
//   white-space: nowrap; /* 항목이 줄 바꿈 되지 않도록 설정 */
// `;

// const CategoryItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 5px 10px;
//   border: 1px solid #e0e0e0;
//   border-radius: 5px;
//   background-color: #f9f9f9;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   min-width: 200px; /* 각 항목의 너비를 고정 */
//   max-width: 300px; /* 항목이 커지지 않도록 제한 */
//   text-align: center; /* 텍스트 가운데 정렬 */
//   overflow: hidden; /* 텍스트가 넘칠 경우 숨기기 */
//   text-overflow: ellipsis; /* 텍스트가 넘치면 '...' 표시 */

//   &:hover {
//     background-color: #e6f7ff;
//   }

//   ${({ isSelected }) =>
//     isSelected &&
//     `
//     background-color: #e6f7ff;
//     color: black;
//     font-weight: bold;
//   `}
// `;

// const CategoryIcon = styled.div`
//   font-size: 16px; /* 텍스트 크기 조정 */

//   transition: font-weight 0.3s ease;

//   ${({ isSelected }) =>
//     isSelected &&
//     `
//     font-weight: bold;
//   `}
// `;

// GoingUpDragon/my-app/src/components/searchPage/MiddleCategoryBox.jsx
import React, { useState, useRef, useEffect } from "react";

// 외부 라이브러리
import styled from "styled-components";

// GoingUpDragon/my-app/src/components
import ArrowButtonLeft from "../common/icons/ArrowButtonLeft";
import ArrowButtonRight from "../common/icons/ArrowButtonRight";

const MiddleCategoryBox = ({ subCategories, onSubCategoryChange }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const innerContainerRef = useRef(null); // InnerContainer ref

  useEffect(() => {
    if (subCategories.length > 0) {
      setSelectedCategoryId(subCategories[0].categoryId); // 첫 번째 서브 카테고리를 기본 선택
    }
  }, [subCategories]); // 서브 카테고리가 변경될 때 실행

  // 카테고리 클릭 시 id 값 전달
  const handleCategoryClick = (id) => {
    setSelectedCategoryId(id);
    onSubCategoryChange(id);
  };

  // 좌우 200씩 이동하는 스크롤롤
  const scrollLeft = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (innerContainerRef.current) {
      innerContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

    // ✅ 서브 카테고리가 없으면 전체 뷰 자체를 렌더링하지 않음
    if (subCategories.length === 0) return null;

  return (
    <OuterContainer>
      <ArrowButtonLeft scrollLeft={scrollLeft} />
      <InnerContainer ref={innerContainerRef}>
        {subCategories.length > 0 &&
          subCategories.map((item) => (
            <CategoryItem
              key={item.categoryId}
              onClick={() => handleCategoryClick(item.categoryId)}
              isSelected={selectedCategoryId === item.categoryId}
            >
              <CategoryIcon>{item.categoryName}</CategoryIcon>
            </CategoryItem>
          ))}
      </InnerContainer>

      <ArrowButtonRight scrollRight={scrollRight} />
    </OuterContainer>
  );
};

export default MiddleCategoryBox;

// Styled Components
const OuterContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  max-width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
  scroll-behavior: smooth;
  white-space: nowrap; /* 항목이 줄 바꿈 되지 않도록 설정 */
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;
  min-width: 200px; /* 각 항목의 너비를 고정 */
  max-width: 300px; /* 항목이 커지지 않도록 제한 */
  text-align: center; /* 텍스트 가운데 정렬 */
  overflow: hidden; /* 텍스트가 넘칠 경우 숨기기 */
  text-overflow: ellipsis; /* 텍스트가 넘치면 '...' 표시 */

  &:hover {
    background-color: #e6f7ff;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #e6f7ff;
    color: black;
    font-weight: bold;
  `}
`;

const CategoryIcon = styled.div`
  font-size: 16px; /* 텍스트 크기 조정 */

  transition: font-weight 0.3s ease;

  ${({ isSelected }) =>
    isSelected &&
    `
    font-weight: bold;
  `}
`;
