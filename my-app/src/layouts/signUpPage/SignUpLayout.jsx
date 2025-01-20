// GoingUpDragon/my-app/src/layouts/signUpPage/SignUpLayout.jsx
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

// 내부 라이브러리
// GoingUpDragon/my-app/src/components/signUpPage/..
import EmailInput from "../../components/signUpPage/EmailInput";
import PasswordInput from "../../components/signUpPage/PasswordInput";
import ConfirmPasswordInput from "../../components/signUpPage/ConfirmPasswordInput";
import SignupButton from "../../components/signUpPage/SignupButton";
import FindIdInput from "../../components/findAccountPage/FindIdInput";
//import ErrorMessage from '../../components/common/Message/ErrorMessage';

// GoingUpDragon/my-app/src/components/commonicons/SocialLoginIcons.jsx
import SocialLoginIcons from "../../components/common/icons/SocialLoginIcons";
import ErrorMessage from "../../components/common/utilities/ErrorMessage";

// 회원가입 페이지 컴포넌트
const SignupPage = () => {
  // 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 입력 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 폼 제출 처리
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
        "비밀번호는 최소 8자 이상이며 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.";
    }

    // 비밀번호 확인 검사
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);
  };

  return (
    <StyledContainer>
      {/* 로고 섹션 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <StyledLogo
            src="/images/tplogo.png"
            alt="logo"
            onClick={() => (window.location.href = "/")}
          />
        </Col>
      </Row>

      {/* 회원가입 제목 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center mt-5">
          <StyledTitle>회원가입</StyledTitle>
        </Col>
      </Row>

      {/* 이메일 입력 필드 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <EmailInput value={formData.email} onChange={handleChange} />
          <ErrorMessage message={errors.email} />
        </Col>
      </Row>

      {/* 비밀번호 입력 필드 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <PasswordInput
            label="비밀번호"
            name="password"
            value={formData.password}
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.password} />
        </Col>
      </Row>

      {/* 비밀번호 확인 필드 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <ConfirmPasswordInput
            value={formData.confirmPassword}
            showPassword={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.confirmPassword} />
        </Col>
      </Row>

       {/* 휴대폰 인증 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <FindIdInput isSignUp={true}></FindIdInput>
        </Col>
      </Row>

      {/* 회원가입 버튼 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <SignupButton onClick={handleSubmit} />
        </Col>
      </Row>

      {/* 소셜 로그인 아이콘 */}
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center mt-4">
          <SocialLoginIcons />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default SignupPage;

/* 스타일 정의 */
const StyledContainer = styled(Container)`
  padding-top: 10px;
`;

const StyledLogo = styled.img`
  width: 150px;
  height: auto;
  cursor: pointer;
`;

const StyledTitle = styled.h2`
  text-align: center;
  color: black;
`;
