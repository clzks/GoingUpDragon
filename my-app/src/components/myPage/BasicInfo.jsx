import React, { useState } from "react";
import styled from "styled-components";

const BasicInfo = () => {
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("*******");
  const [phone, setPhone] = useState("010-1234-5678");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSave = () => {
    alert("저장되었습니다.");
  };

  const handleCancel = () => {
    alert("변경사항이 취소되었습니다.");
    // 취소 시 기존 데이터로 복원 로직 추가 가능
  };

  return (
    <BasicInfoWrapper>
      <Header>기본 정보</Header>
      <Form>
        <Label>
          이메일
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@example.com"
          />
        </Label>
        <Label>
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호를 입력하세요"
          />
        </Label>
        <Label>
          전화번호
          <Input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="전화번호를 입력하세요"
          />
        </Label>
      </Form>
      <ButtonGroup>
        <CancelButton onClick={handleCancel}>취소</CancelButton>
        <SaveButton onClick={handleSave}>저장</SaveButton>
      </ButtonGroup>
    </BasicInfoWrapper>
  );
};

export default BasicInfo;

// 스타일 정의
const BasicInfoWrapper = styled.div`
   width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const Header = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;

  span {
    color: red;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: #7a57d1;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #333;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #7cd0d5;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5bb0b8;
  }
`;
