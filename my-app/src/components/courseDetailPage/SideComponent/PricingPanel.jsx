import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ShareButton from "../../common/utilities/ShareButton";
import HorizontalLine from "../../common/icons/HorizontalLine";
const PricingPanel = ({ data, count }) => {
  const formatPrice = data.price.toLocaleString();
  const [isLike, setLike] = useState(false);

  const [isSticky, setIsSticky] = useState(false); // 고정 여부
  const panelRef = useRef(null);
  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    // 배너의 초기 위치 저장
    const rect = panelRef.current?.getBoundingClientRect();
    const scrollY = window.scrollY;
    setInitialOffset(rect.top + scrollY);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // 배너가 화면에 나타난 이후에 고정
      if (scrollTop > initialOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialOffset]);

  function likeButtonClickHandler() {
    setLike((prev) => !prev);
  }
  return (
    <StyledContainer ref={panelRef} isSticky={isSticky}>
      <StyledPriceText>{formatPrice}원</StyledPriceText>
      <StyledPurchaseButton>수강신청</StyledPurchaseButton>
      <StyledAddCartButton>바구니에 담기</StyledAddCartButton>
      <StyledIconWrapper>
        <StyledLikeButton onClick={likeButtonClickHandler}>
          {isLike ? (
            <StyledClickedHeart></StyledClickedHeart>
          ) : (
            <FaRegHeart></FaRegHeart>
          )}
          <span> 좋아요</span>
        </StyledLikeButton>
        <StyledSharePanel>
          <ShareButton size="20px"></ShareButton>
          <span> 공유</span>
        </StyledSharePanel>
      </StyledIconWrapper>
      <StyledInfoSection>
        <HorizontalLine></HorizontalLine>
        <StyledInfoRow>
          <StyledLabel>강사</StyledLabel>
          <StyledContent>{data.instructor}</StyledContent>
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>수업 수</StyledLabel>
          <StyledContent>{count}</StyledContent>
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>수강기한</StyledLabel>
          <StyledContent>{data.duration}</StyledContent>
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>배지</StyledLabel>
          <StyledContent>{data.badge}</StyledContent>
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>난이도</StyledLabel>
          <StyledContent>{data.difficulty}</StyledContent>
        </StyledInfoRow>
      </StyledInfoSection>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 400px;
  height: 560px;
  border: 1px solid #cccccc;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  z-index: 1000;
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  top: ${({ isSticky }) =>
    isSticky ? "70px" : "-150px"}; /* 고정 시 화면 상단에서 20px */
`;

const StyledPriceText = styled.h3`
  margin-top: 10px;
  margin-bottom: 50px;
  margin-left: 20px;
  font-weight: 600;
`;

const StyledPurchaseButton = styled.button`
  width: 70%;
  height: 50px;
  margin-left: 15%;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 0px solid;
  background-color: #7cd0d5;
  font-size: 24px;
  font-weight: 600;
  color: white;
  &:hover {
    background-color: #b0e8f1;
  }
`;

const StyledAddCartButton = styled.button`
  width: 70%;
  height: 50px;
  margin-left: 15%;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: transparent;
  font-size: 24px;
  font-weight: 600;
  color: black;
  &:hover {
    background-color: #eeeeee;
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center; /* 선택: 가운데 정렬 */
`;

const StyledLikeButton = styled.button`
  border: none;
  background-color: transparent;
`;

const StyledClickedHeart = styled(FaHeart)`
  color: red; /* 아이콘의 색상 변경 */
  background-color: transparent; /* 배경색은 필요시 설정 */
`;

const StyledSharePanel = styled.button`
  padding-left: 30px;
  border: none;
  background-color: transparent;
`;

const StyledInfoSection = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledInfoRow = styled.div`
  display: flex; /* 라벨과 내용 가로 배치 */
  align-items: flex-start; /* 상단 정렬 */
  margin-top: 10px; /* 각 행 간격 */
`;

const StyledLabel = styled.div`
  width: 50%; /* 라벨의 고정 너비 */
  font-weight: bold; /* 라벨 강조 */
  text-align: left; /* 왼쪽 정렬 */
  color: gray;
`;

const StyledContent = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  text-align: left; /* 왼쪽 정렬 */
  font-weight: bold;
`;

export default PricingPanel;
