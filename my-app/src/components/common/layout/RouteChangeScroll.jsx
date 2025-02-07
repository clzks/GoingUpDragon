import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual"; // ✅ 기본 스크롤 저장 기능 차단
    window.scrollTo(0, 0); // ✅ 즉시 최상단 이동
  }, [pathname]);

  return null;
};
export default RouteChangeScroll;
