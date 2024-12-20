// GoingUpDragon/my-app/src/components/findAccountPage/findIdInput.jsx
import React, { useState } from 'react'; // 외부 라이브러리
import styled from 'styled-components'; // 스타일드 컴포넌트 라이브러리

// GoingUpDragon/my-app/src/components/findAccountPage/..
import FindIdOutput from './FindIdOutput'; // 내부 컴포넌트

const FindIdInput = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [verificationRequested, setVerificationRequested] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    function handlePhoneNumberChange(e) {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    }

    function handleRequestVerification() {
        if (/^\d{10,11}$/.test(phoneNumber)) {
            setIsPhoneValid(true);
            setVerificationRequested(true);
        } else {
            setIsPhoneValid(false);
            setVerificationRequested(false);
        }
    }

    function handleVerificationCodeChange(e) {
        setVerificationCode(e.target.value);
    }

    function handleVerify() {
        if (verificationCode === '123456') {
            setIsVerified(true); // 인증 성공 시 상태 변경
        } else {
            alert('잘못된 인증번호입니다.');
        }
    }

    if (isVerified) {
        return <FindIdOutput />;
    }

    return (
        <StyledContentWrapper>
            <div>
                <StyledInputLabel>휴대폰 번호 입력(숫자만 입력)</StyledInputLabel>
                <StyledInputWrapper>
                    <StyledPhoneNumberInput
                        type="text"
                        placeholder="01012345678"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        isInvalid={!isPhoneValid}
                    />
                    <StyledRequestButton onClick={handleRequestVerification}>
                        {verificationRequested ? '재전송' : '인증 요청'}
                    </StyledRequestButton>
                </StyledInputWrapper>
                {!isPhoneValid && (
                    <StyledErrorMessage>
                        적절한 형식의 휴대전화 번호 형식이 아닙니다.
                    </StyledErrorMessage>
                )}
            </div>
            {verificationRequested && (
                <StyledVerificationInputWrapper>
                    <StyledVerificationInput
                        type="text"
                        placeholder="123456"
                        value={verificationCode}
                        onChange={handleVerificationCodeChange}
                    />
                    <StyledVerifyButton onClick={handleVerify}>
                        인증
                    </StyledVerifyButton>
                </StyledVerificationInputWrapper>
            )}
        </StyledContentWrapper>
    );
};

export default FindIdInput;

/* --- Styled Components Section --- */

const StyledContentWrapper = styled.div`
    margin-left: 150px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const StyledInputLabel = styled.label`
    display: block;
    font-size: 0.8em;
    font-weight: bold;
    color: grey;
    margin-bottom: 10px;
`;

const StyledInputWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative; /* 비밀번호와 인증 입력창에 사용된 스타일 */
`;

const StyledPhoneNumberInput = styled.input`
    width: 350px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;

    &:focus {
        outline: none;
        border-color: ${(props) => (props.isInvalid ? 'red' : '#B0E8F1')};
    }
`;

const StyledRequestButton = styled.button`
    width: ${(props) => props.width || '120px'};
    padding: 10px 20px;
    font-size: 1em;
    background-color: white;
    color: black;
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const StyledVerificationInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

const StyledVerificationInput = styled(StyledPhoneNumberInput)`
    margin-right: 0;
`;

const StyledVerifyButton = styled(StyledRequestButton)`
    background-color: #B0E8F1;
    color: white;

    &:hover {
        background-color: #98D8E2;
    }
`;

const StyledErrorMessage = styled.p`
    font-size: 0.8em;
    color: red;
    margin-top: 5px;
`;
