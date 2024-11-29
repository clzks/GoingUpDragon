// components/loginPage/SignUp.jsx
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import 필요한 외부 라이브러리와 내부 라이브러리 구분
import GoogleIcon from "../components/common/icons/GoogleIcon"; // GoogleIcon 컴포넌트 불러오기
import NaverIcon from "../components/common/icons/NaverIcon"; // NaverIcon 컴포넌트 불러오기

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 상태 선언 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // 이메일 유효성 검사
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    // 비밀번호 유효성 검사
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*])(?=.{8,})/;
    if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "비밀번호는 최소 8자 이상이며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.";
    }

    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);
  };

  return (
    <StyledContainer className="my-4">
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <StyledLogo
            src="/images/tplogo.png"
            alt="logo"
            onClick={() => (window.location.href = "/")}
          />
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center mt-5 mb-1">
          <StyledTitle>회원가입</StyledTitle>
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6}>
          <label>이메일</label>
          <StyledInput
            type="email"
            name="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <StyledErrorMessage>{errors.email}</StyledErrorMessage>
          )}
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6}>
          <label>비밀번호</label>
          <div style={{ position: "relative" }}>
            <StyledInput
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <StyledErrorMessage>{errors.password}</StyledErrorMessage>
          )}
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6}>
          <label>비밀번호 확인</label>
          <div style={{ position: "relative" }}>
            <StyledInput
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} // 상태 업데이트 함수 사용
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.confirmPassword && (
            <StyledErrorMessage>{errors.confirmPassword}</StyledErrorMessage>
          )}
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <StyledButton onClick={handleSubmit}>회원가입</StyledButton>
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center mt-4 mb-1">
          <p>
            "LECEcampus"의 뉴스레터 및 프로모션 정보 수신에 동의합니다.<br />언제든지
            수신 거부가 가능합니다.
          </p>
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <label>
            여러 혜택을 받아볼래요
            <input type="checkbox" style={{ marginLeft: "10px" }} />
          </label>
        </Col>
      </Row>
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center mt-4 mb-1">
          <p>
            간편 회원가입
          </p>
        </Col>
      </Row>      
      <Row className="mb-3 justify-content-center">
        <Col xs={12} md={6} className="text-center">
        <StyledIconWrapper>
            {/* 구글 및 네이버 아이콘 추가 */}
            <GoogleIcon width="48px" height="48px" />
            <NaverIcon width="48px" height="48px" />
          </StyledIconWrapper>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default SignupPage;

// Styled Components
const StyledLogo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

const StyledTitle = styled.h2`
  text-align: center;
  color: black;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: purple;
  color: white;
  &:hover {
    background-color: darkviolet;
  }
`;

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const StyledContainer = styled(Container)`
  padding-top: 10px;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 100px; /* 아이콘 사이의 간격 설정 */
`;