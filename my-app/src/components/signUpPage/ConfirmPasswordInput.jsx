// GoingUpDragon/my-app/src/components/signUpPage/ConfirmPasswordInput.jsx
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';

const ConfirmPasswordInput = ({
  value,
  showPassword,
  onToggle,
  onChange,
}) => (
  <>
    <label>비밀번호 확인</label>
    <div style={{ position: "relative" }}>
      <StyledInput
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="********"
        value={value}
        onChange={onChange}
      />
      <StyledPasswordIcon onClick={onToggle}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </StyledPasswordIcon>
    </div>
  </>
);

export default ConfirmPasswordInput;

/* 스타일 정의 */
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:focus {
    border: 1px solid #b0e8f1;
    outline: none;
  }
`;

const StyledPasswordIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
