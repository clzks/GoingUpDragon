// 검색어 자동완성

// export const fetchSuggestions = async (searchQuery) => {
//     if (!searchQuery) return [];

//     try {
//         const response = await fetch(`http://localhost:8080/api/search/suggest?searchQuery=${searchQuery}`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch suggestions");
//         }
//         return await response.json();
//     } catch (error) {
//         console.error("Error fetching suggestions:", error);
//         return [];
//     }
// };

import { debounce } from "lodash";

export const fetchSuggestions = debounce(async (searchQuery, setRecords) => {
    if (!searchQuery.trim()) {
        setRecords([]);
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/api/search/suggest?searchQuery=${searchQuery}`);
        if (!response.ok) {
            throw new Error("Failed to fetch suggestions");
        }
        const data = await response.json();
        setRecords([...new Set(data)]); // 중복 제거
    } catch (error) {
        console.error("Error fetching suggestions:", error);
        setRecords([]);
    }
}, 300);  // 300ms 디바운스 적용
