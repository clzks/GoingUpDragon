// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 임포트
import MainLayout from "./layouts/mainPage/MainLayout";
import CourseDetailLayout from "./layouts/courseDetailPage/courseDetailLayout";
import MyPageLayoutStudent from "./layouts/myPage/MyPageLayoutStudent";
import MyPageLayoutInstructor from "./layouts/myPage/MyPageLayoutInstructor";
import SearchLayout from "./layouts/searchPage/SearchLayout";
import PolicyLayout from "./layouts/policyPage/PolicyLayout";
import SignUpPage from "./layouts/loginPage/SignUpPage";
import LoginModal from "./components/common/utilities/LoginModal";


function App() {
  return <MainLayout></MainLayout>;
}
export default App;
