// GoingUpDragon/my-app/src/components/signUpPage/EmailInput.jsx
import React from 'react';
import styled from 'styled-components';

const EmailInput = ({ value, onChange }) => (
  <>
    <label>이메일</label>
    <StyledInput
      type="email"
      name="email"
      placeholder="example@example.com"
      value={value}
      onChange={onChange}
    />
  </>
);

export default EmailInput;

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
