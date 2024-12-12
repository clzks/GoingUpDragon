// GoingUpDragon/my-app/src/components/common/utilities/LoginModal.jsx
import React, { useState } from "react";

// 외부 라이브러리
import { Col, Container, Modal, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// GoingUpDragon/my-app/src/components/common
import GoogleIcon from "../icons/GoogleIcon";
import NaverIcon from "../icons/NaverIcon";

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
      // 로그인 처리 로직 추가 예정
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    //헤더와 연동 후 아래의 show={true}를 show={show}로 바꾸기
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
          <Row className="justify-content-md-center">
            <Col xs={12} md={12}>
              <StyledLogo src="/images/tplogo.png" alt="Logo" />
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <StyledCol xs={12} md={12}>
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
            </StyledCol>
          </Row>

          <Row className="justify-content-md-center">
            <StyledCol xs={12} md={12}>
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
            </StyledCol>
          </Row>

          <Row className="justify-content-md-center">
            <StyledCol xs={12} md={12}>
              <StyledLoginButton onClick={handleLogin}>
                로그인
              </StyledLoginButton>
              {loginError && (
                <StyledErrorText>
                  이메일 또는 비밀번호가 잘못되었습니다.
                </StyledErrorText>
              )}
            </StyledCol>
          </Row>

          <StyledCenterRow>
            <Col xs={4} md={4}>
              <StyledLinkButton>ID(e-mail) 찾기</StyledLinkButton>
            </Col>
            <Col xs={4} md={4}>
              <StyledLinkButton>Password 찾기</StyledLinkButton>
            </Col>
            <Col xs={4} md={4}>
              <StyledLinkButton>회원가입</StyledLinkButton>
            </Col>
          </StyledCenterRow>

          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <StyledSimpleLogin>간편 로그인</StyledSimpleLogin>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
              <StyledIconWrapper>
                {/* 구글 및 네이버 아이콘 추가 */}
                <GoogleIcon width="48px" height="48px" />
                <NaverIcon width="48px" height="48px" />
              </StyledIconWrapper>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

// 모달 헤더 스타일 커스터마이징
const StyledModalHeader = styled(Modal.Header)`
  border-bottom: none; // 하단 테두리를 제거하여 검정 실선 제거
`;

// Styled Components
const StyledLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px; /* 원하는 너비로 설정 */
  height: auto; /* 비율을 유지하며 높이 자동 조정 */
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: ${(props) => (props.hasError ? "2px solid red" : "1px solid #ccc")};
  &:focus {
    border: 2px solid ${(props) => (props.hasError ? "red" : "#000")};
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
  background-color: purple;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
`;

const StyledErrorText = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;

const StyledLinkButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 2px solid green;
  color: black;
  margin-top: 20px;
  cursor: pointer;
`;

const StyledSimpleLogin = styled.p`
  text-align: center;
  font-size: 1.2em;
  margin-top: 30px;
  color: black;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const StyledCenterRow = styled(Row)`
  display: flex;
  justify-content: center; /* 가로 방향 중앙 정렬 */
  align-items: center; /* 세로 방향 중앙 정렬 */
  text-align: center; /* 내부 텍스트 중앙 정렬 */
`;

const StyledCol = styled(Col)`
  text-align: center;
`;
