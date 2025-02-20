import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

const timeAgo = (date) => {
  if (!date) return "날짜 없음"; // ✅ null 또는 undefined 처리

  try {
    return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ko });
  } catch (error) {
    console.error("Invalid date format:", date);
    return "잘못된 날짜"; // ✅ 예외 처리
  }
};

export default timeAgo;
