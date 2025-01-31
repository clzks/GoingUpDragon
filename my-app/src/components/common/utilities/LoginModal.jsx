// GoingUpDragon/my-app/src/components/common/utilities/LoginModal.jsx

// 외부 라이브러리와 컴포넌트 임포트
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 내부 컴포넌트 임포트
import Logo from "../layout/Logo";
import SocialLoginIcons from "../../common/icons/SocialLoginIcons";
import FindAndSignUpLinkButtons from "../icons/FindAndSignUpLinkButtons";
import { login } from "../../../apis/loginPage/LoginApi"; // login API 임포트

const LoginModal = ({ show, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError(true);
      setLoginError("이메일을 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      setLoginError("유효하지 않은 이메일 형식입니다.");
      return;
    }

    setEmailError(false);

    if (!password) {
      setLoginError("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const data = await login(email, password);
      if (data.success) {
        localStorage.setItem('authToken', data.token); // Save the JWT token to localStorage
        console.log('로그인 성공:', data);
        onLoginSuccess(data); // Pass data to parent on login success
        onClose(); // Close modal on success
      } else {
        setLoginError(data.message || "로그인 실패: 잘못된 이메일 또는 비밀번호입니다.");
      }
    } catch (error) {
      setError(error.message || '로그인 요청 중 오류 발생');
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <StyledModalHeader closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </StyledModalHeader>

      <Modal.Body>
        <Container>
          {/* Logo */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </Col>
          </Row>

          {/* Email input */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <StyledInput
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                hasError={emailError}
                required
              />
              {emailError && <StyledErrorText>{loginError}</StyledErrorText>}
            </Col>
          </Row>

          {/* Password input */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <StyledPasswordWrapper>
                <StyledInput
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <StyledEyeIcon onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </StyledEyeIcon>
              </StyledPasswordWrapper>
            </Col>
          </Row>

          {/* Login button */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              {error && <StyledErrorText>{error}</StyledErrorText>}
              <StyledLoginButton onClick={handleLogin}>
                로그인
              </StyledLoginButton>
            </Col>
          </Row>

          {/* Additional links */}
          <FindAndSignUpLinkButtons />

          {/* Social Login */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <StyledSimpleLogin>간편 로그인</StyledSimpleLogin>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <StyledIconWrapper>
                <SocialLoginIcons />
              </StyledIconWrapper>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

// 스타일 정의 유지
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledModalHeader = styled(Modal.Header)`
  border-bottom: none;
  .btn-close {
    outline: none !important;
    font-size: 1rem !important;
    background-color: white !important;
    box-shadow: none !important;
    &:hover {
      transform: scale(1.2) !important;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: ${({ hasError }) => (hasError ? "1px solid red" : "1px solid #ccc")};
  margin-top: 10px;

  &:focus {
    border: 1px solid ${({ hasError }) => (hasError ? "red" : "#B0E8F1")};
    outline: none;
  }
`;


const StyledPasswordWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

const StyledEyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const StyledLoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #8a2be2;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: darkviolet;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const StyledErrorText = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;

const StyledSimpleLogin = styled.p`
  text-align: center;
  font-size: 1em;
  margin-top: 30px;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
