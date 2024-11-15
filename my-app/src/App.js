// App.js
import "./App.css";
import Layout from "./components/common/Layout"; // 레이아웃 컴포넌트 import
import { Container } from "react-bootstrap";
import TwoGrids from "./components/common/TwoGrids";
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 임포트
import MainCards from "./components/common/MainCards";
import MainCardsPick from "./components/common/MainCardsPick";

function App() {
  return (
    <Layout>
      <Container className="my-4">
        <TwoGrids />
      </Container>

      <Container className="my-4">
        <MainCards />
        <MainCardsPick />
      </Container>
    </Layout>
  );
}
export default App;
