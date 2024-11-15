// App.js
// 외부 라이브러리
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 추가
import MainCards from "./components/common/MainCards"; // MainCards 컴포넌트 임포트

function App() {
  return (
    <div className="App">
      <MainCards />
    </div>
  );
}

export default App;