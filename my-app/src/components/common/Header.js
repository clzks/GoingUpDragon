import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Header.css';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#ffffff', padding: '1rem', textAlign: 'center' }}>
      <Container>
        <Row>
          {/* 로고 및 카테고리 */}
          <Col>
            <nav className="navbar">
              <Container fluid>
                <div className="navbar-brand">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/tplogo.png`}
                    alt="Logo"
                    className="header-image"
                  />
                </div>
                <ul className="navbar-nav me-auto my-2 my-lg-0">
                  <li className="nav-item category-dropdown">
                    <span className="nav-link">카테고리</span>
                    <ul className="submenu">
                      <li className="nav-dropdown-item">프로그래밍 언어</li>
                      <li className="nav-dropdown-item">웹 개발</li>
                      <li className="nav-dropdown-item">데이터 과학</li>
                      <li className="nav-dropdown-item has-submenu">
                        인공지능
                        <ul className="submenu">
                          <li className="nav-dropdown-item has-submenu">
                            AI/ChatGPT 활용
                            <ul className="submenu">
                              <li className="nav-dropdown-item">ChatGPT</li>
                              <li className="nav-dropdown-item">Python</li>
                              <li className="nav-dropdown-item">인공지능(AI)</li>
                            </ul>
                          </li>
                          <li className="nav-dropdown-item">딥러닝/머신러닝</li>
                          <li className="nav-dropdown-item">컴퓨터 비전</li>
                          <li className="nav-dropdown-item">자연어 처리</li>
                          <li className="nav-dropdown-item">인공지능 기타</li>
                        </ul>
                      </li>
                      <li className="nav-dropdown-item">클라우드 컴퓨팅</li>
                      <li className="nav-dropdown-item">게임 개발</li>
                      <li className="nav-dropdown-item">프론트엔드 디자인</li>
                      <li className="nav-dropdown-item">백엔드 기술</li>
                      <li className="nav-dropdown-item">소프트웨어 공학</li>
                    </ul>
                  </li>
                </ul>
              </Container>
            </nav>
          </Col>

          {/* 강의 검색창 */}
          <Col xs={6} className="d-flex justify-content-center align-items-center">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="강의검색"
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button type="submit" variant="outline-success" className="custom-button">
                검색
              </Button>
            </Form>
          </Col>

          {/* 로그인 및 회원가입 버튼 */}
          <Col className="d-flex justify-content-center align-items-center">
            <Button variant="outline-success" className="custom-button me-2">로그인</Button>
            <Button variant="outline-success" className="custom-button">회원가입</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
