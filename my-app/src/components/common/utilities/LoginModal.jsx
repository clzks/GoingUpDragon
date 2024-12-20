// GoingUpDragon/my-app/src/components/common/utilities/LoginModal.jsx

// 외부 라이브러리와 컴포넌트 임포
import React, { useState } from 'react'; 
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/Container'; 
import Modal from 'react-bootstrap/Modal'; 
import Row from 'react-bootstrap/Row'; 
import styled from 'styled-components'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

// GoingUpDragon/my-app/src/components/common/layout/Logo.jsx
import Logo from '../layout/Logo'; 

// GoingUpDragon/my-app/src/components/commonicons/..
import SocialLoginIcons from '../../common/icons/SocialLoginIcons';
import FindAndSignUpLinkButtons from '../icons/FindAndSignUpLinkButtons';

// LoginModal 컴포넌트 정의
const LoginModal = ({ show, onHide }) => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 
  const [emailError, setEmailError] = useState(false); 
  const [loginError, setLoginError] = useState(false); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
    setEmailError(!/\S+@\S+\.\S+/.test(e.target.value)); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); 
  };

  const handleLogin = () => {
    if (!emailError && email && password) {
      setLoginError(false); 
    } else {
      setLoginError(true); 
    }
  };

  return (
    <Modal
      show={true}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <StyledModalHeader closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </StyledModalHeader>

      <Modal.Body>
        <Container>
          {/* 로고 출력 */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </Col>
          </Row>

          {/* 이메일 입력 필드 */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <StyledInput
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="이메일"
                hasError={emailError}
              />
              {emailError && (
                <StyledErrorText>
                  유효한 이메일 주소를 입력해주세요.
                </StyledErrorText>
              )}
            </Col>
          </Row>

          {/* 비밀번호 입력 필드 */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <StyledPasswordWrapper>
                <StyledInput
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="비밀번호"
                />
                <StyledEyeIcon onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </StyledEyeIcon>
              </StyledPasswordWrapper>
            </Col>
          </Row>

          {/* 로그인 버튼 */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <StyledLoginButton onClick={handleLogin}>
                로그인
              </StyledLoginButton>
              {loginError && (
                <StyledErrorText>
                  이메일 또는 비밀번호가 잘못되었습니다.
                </StyledErrorText>
              )}
            </Col>
          </Row>

          {/* 링크 버튼 컴포넌트 추가 */}
          <FindAndSignUpLinkButtons />

          {/* 간편 로그인 텍스트 */}
          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <StyledSimpleLogin>간편 로그인</StyledSimpleLogin>
            </Col>
          </Row>

          {/* 간편 로그인 아이콘 */}
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

// 로고 스타일 유지
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

// 모달 헤더 스타일
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

// 이메일 및 비밀번호 입력 필드 스타일
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: ${(props) => (props.hasError ? "1px solid red" : "1px solid #ccc")};
  margin-top: 10px;

  &:focus {
    border: 1px solid ${(props) => (props.hasError ? "red" : "#B0E8F1")};
    outline: none;
  }
`;

// 비밀번호 입력창 및 아이콘 래퍼 스타일 정의
const StyledPasswordWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

// 비밀번호 표시/숨기기 아이콘 스타일 정의
const StyledEyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

// 로그인 버튼 스타일 정의
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

// 오류 메시지 텍스트 스타일 정의
const StyledErrorText = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;


// 간편 로그인 텍스트 스타일 정의
const StyledSimpleLogin = styled.p`
  text-align: center;
  font-size: 1em;
  margin-top: 30px;
`;

// 간편 로그인 아이콘 래퍼 스타일 정의
const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
