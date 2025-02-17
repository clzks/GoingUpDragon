import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const BasicInfo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/user/basic-info"); 
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        console.error("사용자 정보를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put("/api/user/basic-info", {
        email,
        phone,
        password: password ? password : undefined, 
      });
      alert("저장되었습니다.");
    } catch (error) {
      console.error("정보 저장 실패:", error);
      alert("저장에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    window.location.reload(); 
  };

  if (loading) {
    return <LoadingText>사용자 정보를 불러오는 중...</LoadingText>;
  }

  return (
    <BasicInfoWrapper>
      <Header>기본 정보</Header>
      <Form>
        <Label>
          이메일
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
        </Label>
        <Label>
          비밀번호 (변경 시 입력)
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </Label>
        <Label>
          전화번호
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;

  &:focus {
    outline: none;
    border-color: #7cd0d5;
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

const LoadingText = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 20px 0;
`;
