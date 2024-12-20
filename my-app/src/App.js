// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 임포트
import MainLayout from "./layouts/mainPage/MainLayout";
import CourseDetailLayout from "./layouts/courseDetailPage/courseDetailLayout";
import MyPageLayout from "./layouts/myPage/MyPageLayout";
import SearchLayout from "./layouts/searchPage/SearchLayout";
import PolicyLayout from "./layouts/policyPage/PolicyLayout";
import LoginModal from "./components/common/utilities/LoginModal";
import AnswerLayout from "./layouts/qnAPage/answer/AnswerLayout";
import QnAMainLayout from "./layouts/qnAPage/main/QnAMainLayout";
import SignupPage from "./layouts/signUpPage/SignUpLayout";

function App() {
  return <MainLayout></MainLayout>;
}
export default App;
