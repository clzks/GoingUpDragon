// GoingUpDragon/my-app/src/components/signUpPage/PasswordInput.jsx
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';

const PasswordInput = ({ name, label, value, showPassword, onToggle, onChange }) => (
  <>
    <label>{label}</label>
    <div style={{ position: "relative" }}>
      <StyledInput
        type={showPassword ? "text" : "password"}
        name={name}
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

export default PasswordInput;

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
