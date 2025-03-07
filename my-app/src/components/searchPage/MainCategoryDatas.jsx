// // GoingUpDragon/my-app/src/components/searchPage/MainCategoryDatas.jsx
// import React, { useState, useEffect } from "react";
// import { fetchCategories } from "../../apis/common/categoryApi"; // API 호출 함수 가져오기

// // 외부 라이브러리
// import {
//   FaRegCopy,
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaPython,
//   FaJava,
//   FaPhp,
//   FaNode,
//   FaReact,
//   FaSwift,
//   FaDatabase,
//   FaGitAlt,
// } from "react-icons/fa";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; // ✅ useNavigate 가져오기

// // 아이콘 순서를 유지하는 배열
// const MainCategoryDatas1 = [
//   { id: 0, icon: <FaRegCopy />, label: "전체" }, // "전체"는 고정
//   { id: 1, icon: <FaHtml5 />, label: "" },
//   { id: 2, icon: <FaCss3Alt />, label: "" },
//   { id: 3, icon: <FaJsSquare />, label: "" },
//   { id: 4, icon: <FaPython />, label: "" },
//   { id: 5, icon: <FaJava />, label: "" },
//   { id: 6, icon: <FaPhp />, label: "" },
//   { id: 7, icon: <FaNode />, label: "" },
//   { id: 8, icon: <FaReact />, label: "" },
//   { id: 9, icon: <FaSwift />, label: "" },
//   { id: 10, icon: <FaDatabase />, label: "" },
//   { id: 11, icon: <FaGitAlt />, label: "" },
// ];

// const MainCategoryDatas = ({ onCategorySelect, onSubCategorySelect }) => {
//   const navigate = useNavigate(); // ✅ useNavigate 훅 사용
//   const [categories, setCategories] = useState([]);
//   // 클릭된 아이콘을 추적하는 상태
//   const [selectedIconId, setSelectedIconId] = useState(null);

//   // API에서 카테고리 데이터 가져오기
//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const data = await fetchCategories();
//         setCategories(data); // 가져온 데이터 상태에 저장
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     loadCategories();
//   }, []);

//   // 기존 배열에 API에서 가져온 라벨 값만 적용 (아이콘 순서 유지)
//   const combinedCategories = MainCategoryDatas1.map((item, index) => ({
//     ...item,
//     label:
//       index === 0 ? "전체" : categories[index - 1]?.categoryName || "기본값",
//   }));

//   const handleIconClick = (id) => {
//     setSelectedIconId(id);

//     // ✅ 클릭한 아이콘의 id에 따라 URL 이동
//     navigate(`/Search/?mainCategory=${id}`);

//     const selectedCategory = categories.find(
//       (category) => category.categoryId === id
//     );
//     console.log("Selected Category:", selectedCategory);

//     // 서브 카테고리 앞에 '전체' 추가
//     const updatedSubCategories = [
//       { categoryId: 0, categoryName: "전체" },
//       ...(selectedCategory?.subCategories || []),
//     ];

//     onCategorySelect(id);
//     onSubCategorySelect(updatedSubCategories); // 업데이트된 서브 카테고리 전달
//   };

//   return (
//     <StyledStack>
//       {combinedCategories.map((item) => (
//         <StyledIconLabelCenter key={item.id}>
//           <IconButton
//             onClick={() => handleIconClick(item.id)} // 클릭 시 상태 변경
//             isSelected={selectedIconId === item.id} // 선택된 아이콘인지 확인
//           >
//             <StyledIcon>{item.icon}</StyledIcon>
//             <StyledSpanSearch>{item.label}</StyledSpanSearch>
//           </IconButton>
//         </StyledIconLabelCenter>
//       ))}
//     </StyledStack>
//   );
// };

// export default MainCategoryDatas;

// const StyledStack = styled.div`
//   display: flex;
//   gap: 2rem; /* 간격 1rem = 16px */
// `;

// const StyledIconLabelCenter = styled.div`
//   display: flex;
//   flex-direction: column; /* 수직 */
//   align-items: center; /* 가운데 정렬 */
// `;

// const IconButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   gap: 8px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column; /* 수직 정렬 */
//   justify-content: center; /* 수직 가운데 정렬 */
//   align-items: center;
//   color: #333;
//   position: relative; /* 밑줄 위치를 위해 relative 설정 */

//   /* 밑줄 설정 */
//   &::after {
//     content: "";
//     position: absolute;
//     bottom: -17px; /* 텍스트 바로 아래에 밑줄을 위치 */
//     left: 0;
//     width: 100%; /* 버튼의 전체 너비에 맞춰 밑줄 추가 */
//     height: 2px; /* 밑줄 두께 */
//     background-color: #333; /* 기본 밑줄 색상 */
//     opacity: 0; /* 기본 상태에서는 밑줄을 보이지 않도록 */
//     transition: opacity 0.3s ease; /* 부드럽게 나타나도록 설정 */
//   }

//   &:hover {
//     color: #000; /* 호버 시 텍스트 색상 변경 */
//   }

//   &:hover::after {
//     opacity: 1; /* 호버 시 밑줄이 나타나도록 설정 */
//   }

//   /* 선택된 아이콘에 대한 스타일 */
//   ${({ isSelected }) =>
//     isSelected &&
//     `
//     color: #000; /* 클릭된 아이콘은 호버 상태로 유지 */
//     font-weight: bold; /* 선택된 아이콘에 대한 추가 스타일 */
//     &::after {
//       opacity: 1; /* 선택된 아이콘 밑줄 표시 */
//     }
//   `}
// `;

// const StyledSpanSearch = styled.span`
//   font-size: 1rem;
//   white-space: nowrap;
// `;

// const StyledIcon = styled.div`
//   font-size: 2rem; /* 아이콘 크기 조정 */
// `;

// GoingUpDragon/my-app/src/components/searchPage/MainCategoryDatas.jsx
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../apis/common/categoryApi"; // API 호출 함수 가져오기

// 외부 라이브러리
import {
  FaRegCopy,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaJava,
  FaPhp,
  FaNode,
  FaReact,
  FaSwift,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useNavigate 가져오기

// 아이콘 순서를 유지하는 배열
const MainCategoryDatas1 = [
  { id: 0, icon: <FaRegCopy />, label: "전체" }, // "전체"는 고정
  { id: 1, icon: <FaHtml5 />, label: "" },
  { id: 2, icon: <FaCss3Alt />, label: "" },
  { id: 3, icon: <FaJsSquare />, label: "" },
  { id: 4, icon: <FaPython />, label: "" },
  { id: 5, icon: <FaJava />, label: "" },
  { id: 6, icon: <FaPhp />, label: "" },
  { id: 7, icon: <FaNode />, label: "" },
  { id: 8, icon: <FaReact />, label: "" },
  { id: 9, icon: <FaSwift />, label: "" },
  { id: 10, icon: <FaDatabase />, label: "" },
  { id: 11, icon: <FaGitAlt />, label: "" },
];

const MainCategoryDatas = ({ onCategorySelect, onSubCategorySelect }) => {
  const navigate = useNavigate(); // ✅ useNavigate 훅 사용
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  // 클릭된 아이콘을 추적하는 상태
  const [selectedIconId, setSelectedIconId] = useState(null);

  // API에서 카테고리 데이터 가져오기
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data); // 가져온 데이터 상태에 저장
        console.log(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, []);

  useEffect(() => {
    // URL에서 mainCategory 값을 추출하여 selectedIconId 상태 업데이트
    const queryParams = new URLSearchParams(location.search);
    const mainCategoryId = Number(queryParams.get("mainCategory")); // 숫자로 변환
    setSelectedIconId(mainCategoryId || 0); // 기본값 0 (전체)
  }, [location.search]); // URL 변경될 때마다 실행

  // 기존 배열에 API에서 가져온 라벨 값만 적용 (아이콘 순서 유지)
  const combinedCategories = MainCategoryDatas1.map((item, index) => ({
    ...item,
    label:
      index === 0 ? "전체" : categories[index - 1]?.categoryName || "기본값",
  }));

  const handleIconClick = (id) => {
    setSelectedIconId(id);

    // ✅ 클릭한 아이콘의 id에 따라 URL 이동
    navigate(`/Search/?mainCategory=${id}`);

    const selectedCategory = categories.find(
      (category) => category.categoryId === id
    );
    console.log("Selected Category:", selectedCategory);

    // ✅ '전체' 아이콘 클릭 시 서브 카테고리 비우기
    const updatedSubCategories =
      id === 0
        ? []
        : [
            { categoryId: 0, categoryName: "전체" },
            ...(selectedCategory?.subCategories || []),
          ];

    onCategorySelect(id);
    onSubCategorySelect(updatedSubCategories); // 업데이트된 서브 카테고리 전달
  };

  return (
    <StyledStack>
      {combinedCategories.map((item) => (
        <StyledIconLabelCenter key={item.id}>
          <IconButton
            onClick={() => handleIconClick(item.id)} // 클릭 시 상태 변경
            isSelected={selectedIconId === item.id} // 선택된 아이콘인지 확인
          >
            <StyledIcon>{item.icon}</StyledIcon>
            <StyledSpanSearch>{item.label}</StyledSpanSearch>
          </IconButton>
        </StyledIconLabelCenter>
      ))}
    </StyledStack>
  );
};

export default MainCategoryDatas;

const StyledStack = styled.div`
  display: flex;
  gap: 2rem; /* 간격 1rem = 16px */
`;

const StyledIconLabelCenter = styled.div`
  display: flex;
  flex-direction: column; /* 수직 */
  align-items: center; /* 가운데 정렬 */
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  gap: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* 수직 정렬 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center;
  color: #333;
  position: relative; /* 밑줄 위치를 위해 relative 설정 */

  /* 밑줄 설정 */
  &::after {
    content: "";
    position: absolute;
    bottom: -17px; /* 텍스트 바로 아래에 밑줄을 위치 */
    left: 0;
    width: 100%; /* 버튼의 전체 너비에 맞춰 밑줄 추가 */
    height: 2px; /* 밑줄 두께 */
    background-color: #333; /* 기본 밑줄 색상 */
    opacity: 0; /* 기본 상태에서는 밑줄을 보이지 않도록 */
    transition: opacity 0.3s ease; /* 부드럽게 나타나도록 설정 */
  }

  &:hover {
    color: #000; /* 호버 시 텍스트 색상 변경 */
  }

  &:hover::after {
    opacity: 1; /* 호버 시 밑줄이 나타나도록 설정 */
  }

  /* 선택된 아이콘에 대한 스타일 */
  ${({ isSelected }) =>
    isSelected &&
    `
    color: #000; /* 클릭된 아이콘은 호버 상태로 유지 */
    font-weight: bold; /* 선택된 아이콘에 대한 추가 스타일 */
    &::after {
      opacity: 1; /* 선택된 아이콘 밑줄 표시 */
    }
  `}
`;

const StyledSpanSearch = styled.span`
  font-size: 1rem;
  white-space: nowrap;
`;

const StyledIcon = styled.div`
  font-size: 2rem; /* 아이콘 크기 조정 */
`;
