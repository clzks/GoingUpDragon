// import React from "react";
// import { FaRegCopy } from "react-icons/fa";

// const MainCategoryDatas = () => {
//   // 대분류 카테고리 데이터들
//   const MainCategoryDatas = [
//     {
//       id: 1,
//       icon: <FaRegCopy />,
//       label: "전체",
//     },
//   ];

//   return (
//     <>
//       {MainCategoryDatas.map((item) => (
//         <StyledIconLabelCenter key={item.id}>
//           <StyledFaRegCopy></StyledFaRegCopy>
//           <StyledSpanSearch>{item.label}</StyledSpanSearch>
//         </StyledIconLabelCenter>
//       ))}
//     </>
//   );
// };

// export default MainCategoryDatas;

// const StyledIconLabelCenter = styled.div`
//   display: flex;
//   flex-direction: column; /* 수직 정렬 */
//   align-items: center; /* 가운데 정렬 */
// `;

// const StyledFaRegCopy = styled.i`
//   font-size: 24px; /* 아이콘 크기 조정 */
//   margin-bottom: 8px; /* 아이콘과 텍스트 간 간격 */
// `;