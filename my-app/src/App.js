// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 임포트
import MainLayout from "./layouts/mainPage/MainLayout";
import CourseDetailLayout from "./layouts/courseDetailPage/courseDetailLayout";

function App() {
  return <CourseDetailLayout></CourseDetailLayout>;
}
export default App;
