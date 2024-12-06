import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import HorizontalLine from "../../common/icons/HorizontalLine";

const CourseNavigation = ({ refList }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeKey, setActiveKey] = useState(null); // 활성화된 항목 상태
  const navRef = useRef(null);
  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    // 초기 위치 저장
    setInitialOffset(navRef.current?.offsetTop || 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > initialOffset);

      // 섹션 위치 계산
      if (refList.curriculumRef.current) {
        const curriculumTop = refList.curriculumRef.current.offsetTop;
        const infoTop = refList.infoRef.current.offsetTop;
        const reviewTop = refList.reviewRef.current.offsetTop;

        if (scrollTop >= reviewTop - 100) {
          setActiveKey("link-3");
        } else if (scrollTop >= infoTop - 100) {
          setActiveKey("link-2");
        } else if (scrollTop >= curriculumTop - 100) {
          setActiveKey("link-1");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialOffset, refList]);

  const handleSelect = (eventKey) => {
    const offset = -50; // 원하는 오프셋 값 (위로 50px)

    let targetRef;

    switch (eventKey) {
      case "link-1":
        targetRef = refList.curriculumRef;
        break;
      case "link-2":
        targetRef = refList.infoRef;
        break;
      case "link-3":
        targetRef = refList.reviewRef;
        break;
      default:
        break;
    }

    if (targetRef?.current) {
      const targetPosition = targetRef.current.offsetTop + offset; // 오프셋 적용
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <StyledNavigationContainer ref={navRef} isSticky={isSticky}>
      <StyledNavigationBar>
        <Nav variant="underline" onSelect={handleSelect} activeKey={activeKey}>
          <Nav.Item>
            <StyledNavLink eventKey="link-1">커리큘럼</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink eventKey="link-2">강의 소개</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink eventKey="link-3">수강평</StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink eventKey="link-4">Q&A</StyledNavLink>
          </Nav.Item>
        </Nav>
      </StyledNavigationBar>
      <HorizontalLine></HorizontalLine>
    </StyledNavigationContainer>
  );
};

const StyledNavigationContainer = styled.div`
  background-color: white;
  z-index: 10;
  ${({ isSticky }) =>
    isSticky &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}
`;

const StyledNavigationBar = styled(Container)`
  padding-left: 60px;
`;

const StyledNavLink = styled(Nav.Link)`
  margin-right: 30px;
  color: gray; /* 기본 상태 색상 */
  font-weight: normal; /* 기본 상태 */

  &.active {
    color: black; /* 활성화 상태 색상 */
    font-weight: bold; /* 활성화 시 강조 */
  }

  &:hover {
    color: darkgray; /* 호버 상태 */
  }
`;
export default CourseNavigation;
