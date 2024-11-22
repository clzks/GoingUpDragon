// layouts/searchPage/SearchLayout.jsx
import React from "react";

// 외부 라이브러리
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// 공통 컴포넌트
import Layout from "../../components/common/layout/Layout";
import SearchCategory from "../../components/searchPage/SearchCategory";

// 검색 페이지 컴포넌트

const SearchLayout = () => {
  return (
    <>
      <Layout>
        <StyledSection>
          <Container>
            <Row>
              <Col xs={1}>
                <SearchCategory></SearchCategory>
              </Col>
            </Row>
          </Container>
        </StyledSection>
      </Layout>
    </>
  );
};

export default SearchLayout;

const StyledSection = styled.section`
  padding: 16px;
`;

// const StyledCol = styled(Col)`
//   display: flex;
//   align-items: center; /* 가운데 정렬 */
// `;