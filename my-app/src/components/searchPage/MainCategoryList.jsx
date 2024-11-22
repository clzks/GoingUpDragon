// import React, { useState } from "react";

// // 외부 라이브러리
// import { FaSearch, FaRegCopy } from "react-icons/fa";
// import styled from "styled-components";
// import Col from "react-bootstrap/esm/Col";
// import Stack from "react-bootstrap/Stack";


// const MainCategoryList = () => {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleSearch = () => {
//     setIsSearchActive((prev) => !prev); // 검색창 활성화 상태 토글
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value); // 입력값 업데이트
//   };

//   return (
//     <StyledSection>
//       <Container>
//         <Row>
//           <StyledCol>
//             <Stack direction="horizontal" gap={5}>
//               <StyledIconLabelCenter>
//                 <StyledFaRegCopy></StyledFaRegCopy>
//                 <StyledSpanSearch>전체</StyledSpanSearch>
//               </StyledIconLabelCenter>
//             </Stack>
//           </StyledCol>
//         </Row>
//       </Container>
//     </StyledSection>
//   );
// };

// export default MainCategoryList;


