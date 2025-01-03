// App.js

// 전역 스타일
import "./App.css";

// 외부 라이브러리리
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 임포트
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// GoingUpDragon\my-app\src
import MainLayout from "./layouts/mainPage/MainLayout";
import CourseDetailLayout from "./layouts/courseDetailPage/courseDetailLayout";
import MyPageLayout from "./layouts/myPage/MyPageLayout";
import SearchLayout from "./layouts/searchPage/SearchLayout";
import PolicyLayout from "./layouts/policyPage/PolicyLayout";
import SignupPage from "./layouts/signUpPage/SignUpLayout";
import LoginModal from "./components/common/utilities/LoginModal";
import QnAMainLayout from "./layouts/qnAPage/main/QnAMainLayout";
import AccountRecoveryTabs from "./layouts/findAccountPage/AccountRecoveryTabs";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">메인 페이지</Link>
            </li>
            <li>
              <Link to="/Search">검색 페이지</Link>
            </li>
            <li>
              <Link to="/CourseDetail">강의 상세 페이지</Link>
            </li>
            <li>
              <Link to="/MyPage">마이 페이지</Link>
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
              <Link to="/QnAMainLayout">QnA 메인 페이지</Link>
            </li>
            <li>
              <Link to="/AccountRecoveryTabs">계정 찾기 페이지</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/Search" element={<SearchLayout />} />
          <Route path="/CourseDetail" element={<CourseDetailLayout />} />
          <Route path="/MyPage" element={<MyPageLayout />} />
          <Route path="/Policy" element={<PolicyLayout />} />
          <Route path="/SignUp" element={<SignupPage />} />
          <Route path="/LoginModal" element={<LoginModal />} />
          <Route path="/QnAMainLayout" element={<QnAMainLayout />} />
          <Route
            path="/AccountRecoveryTabs"
            element={<AccountRecoveryTabs />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
