// App.js

// 전역 스타일
import "./App.css";

// 외부 라이브러리리
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 임포트
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// GoingUpDragon\my-app\src
import MainLayout from "./layouts/mainPage/MainLayout";
import CourseDetailLayout from "./layouts/courseDetailPage/courseDetailLayout";
import MyPageLayoutStudent from "./layouts/myPage/MyPageLayoutStudent";
import MyPageLayoutInstructor from "./layouts/myPage/MyPageLayoutInstructor";
import SearchLayout from "./layouts/searchPage/SearchLayout";
import PolicyLayout from "./layouts/policyPage/PolicyLayout";
import SignupPage from "./layouts/signUpPage/SignUpLayout";
import LoginModal from "./components/common/utilities/LoginModal";
import QnAMainLayout from "./layouts/qnAPage/main/QnAMainLayout";
import AccountRecoveryTabs from "./layouts/findAccountPage/AccountRecoveryTabs";
import AnswerLayout from "./layouts/qnAPage/answer/AnswerLayout";
import RouteChangeScroll from "./components/common/layout/RouteChangeScroll";

// 장바구니 상태 유지를 위한 context
import { CartProvider } from "../src/components/common/layout/context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <RouteChangeScroll></RouteChangeScroll>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">메인 페이지</Link>
              </li>
              <li>
                <Link to="/Search/?mainCategory=0">검색 페이지</Link>
              </li>
              <li>
                <Link to="/CourseDetail/5641">강의 상세 페이지</Link>
              </li>
              <li>
                <Link to="/myPage/student/2000">마이 페이지</Link>
              </li>
              <li>
                <Link to="/myPage/instructor/501">강사 마이 페이지</Link>
              </li>
              <li>
                <Link to="/Policy">약관 페이지</Link>
              </li>
              <li>
                <Link to="/SignUp">회원가입 페이지</Link>
              </li>
              <li>
                <Link to="/LoginModal">로그인 페이지</Link>
              </li>
              <li>
                <Link to="/qna/course/500">QnA 메인 페이지</Link>
              </li>
              <li>
                <Link to="/AccountRecoveryTabs">계정 찾기 페이지</Link>
              </li>
              <li>
                <Link to="/qna/1">QnA 답변 페이지</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/Search" element={<SearchLayout />} />
            <Route
              path="/CourseDetail/:courseId"
              element={<CourseDetailLayout />}
            />{" "}
            {/* ✅ 강의 ID 추가 */}
            {/* <Route path="/MyPage" element={<MyPageLayout />} /> */}
            <Route
              path="/myPage/student/:infoId"
              element={<MyPageLayoutStudent />}
            />
            <Route
              path="/myPage/instructor/:infoId"
              element={<MyPageLayoutInstructor />}
            />
            <Route path="/Policy" element={<PolicyLayout />} />
            <Route path="/SignUp" element={<SignupPage />} />
            <Route path="/LoginModal" element={<LoginModal />} />
            <Route path="/qna/course/:courseId" element={<QnAMainLayout />} />
            <Route
              path="/AccountRecoveryTabs"
              element={<AccountRecoveryTabs />}
            />
            <Route path="/qna/:qnaId" element={<AnswerLayout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
export default App;
