import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import HorizontalLine from "../../common/icons/HorizontalLine";

const CourseNavigation = () => {
  return (
    <div>
      <StyledNavigationContainer>
        <Nav variant="underline">
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
      </StyledNavigationContainer>
      <HorizontalLine></HorizontalLine>
    </div>
  );
};

const StyledNavigationContainer = styled(Container)`
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
