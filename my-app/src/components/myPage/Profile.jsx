import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/user/profile"); 
        setNickname(response.data.nickname);
        setProfileUrl(response.data.profileUrl);
        setProfileImage(response.data.profileImage);
      } catch (error) {
        console.error("프로필 정보를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleProfileUrlChange = (e) => {
    setProfileUrl(e.target.value);
  };

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const response = await axios.post("/api/user/profile-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfileImage(response.data.profileImage);
      alert("프로필 이미지가 변경되었습니다!");
    } catch (error) {
      console.error("프로필 이미지 변경 실패:", error);
      alert("프로필 이미지 변경에 실패했습니다.");
    }
  };

  const handleSave = async () => {
    try {
      await axios.put("/api/user/profile", {
        nickname,
        profileUrl,
      });
      alert("프로필이 저장되었습니다.");
    } catch (error) {
      console.error("프로필 저장 실패:", error);
      alert("프로필 저장에 실패했습니다.");
    }
  };

  if (loading) {
    return <LoadingText>프로필 정보를 불러오는 중...</LoadingText>;
  }

  return (
    <ProfileWrapper>
      <Header>내 프로필</Header>
      <ProfileImageSection>
        <ProfileImage src={profileImage || "https://via.placeholder.com/80"} alt="프로필 이미지" />
        <ChangeButton htmlFor="profileImageUpload">변경</ChangeButton>
        <input
          id="profileImageUpload"
          type="file"
          accept=".jpg, .png, .jpeg"
          style={{ display: "none" }}
          onChange={handleProfileImageChange}
        />
        <ImageHint>jpg, png, jpeg 확장자 1MB 이하의 이미지</ImageHint>
      </ProfileImageSection>
      <Form>
        <Label>
          닉네임<span>*</span>
          <Input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="닉네임을 입력하세요"
          />
        </Label>
        <Label>
          프로필주소<span>*</span>
          <Input
            type="text"
            value={profileUrl}
            onChange={handleProfileUrlChange}
            placeholder="프로필 주소를 입력하세요"
          />
        </Label>
      </Form>
      <ButtonGroup>
        <SaveButton onClick={handleSave}>저장</SaveButton>
      </ButtonGroup>
    </ProfileWrapper>
  );
};

export default Profile;

// 스타일 정의
const ProfileWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const Header = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProfileImageSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #ccc;
`;

const ChangeButton = styled.label`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #7cd0d5;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5bb0b8;
  }
`;

const ImageHint = styled.p`
  font-size: 12px;
  color: #888;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;

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
    border-color: #7cd0d5;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
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
