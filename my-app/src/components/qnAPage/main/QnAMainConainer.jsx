// GoingUpDragon/my-app/src/components/qnAPage/main/QnAMainConainer.jsx
import React, { useState } from "react";

// 외부 라이브러리
import { Container } from "react-bootstrap";
import styled from "styled-components";
import QnACard from "../../common/card/QnACard";
import Pagination from "../../searchPage/searchPagination/SearchPagination";
import QnARecommend from "../sideComponent/QnARecommend";
import QuestionButton from "../sideComponent/QuestionButton";

const ReviewData = new Array(113).fill(0);

const QnAMainConainer = () => {
  const IsMain = true;

  const ITEMS_PER_PAGE = 8; // 한 페이지당 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 페이지에 표시할 데이터 계산
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentData = ReviewData.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <StyledContainer>
      <StyledLeftPanel>
        {currentData.map((item, index) => (
          <QnACard key={index}></QnACard>
        ))}
        <Pagination
          totalItems={ReviewData.length}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        ></Pagination>
      </StyledLeftPanel>
      <StyledRightPanel>
        <QnARecommend isMain={IsMain}></QnARecommend>
        <QuestionButton></QuestionButton>
      </StyledRightPanel>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledLeftPanel = styled.div`
  flex: 2;
`;

const StyledRightPanel = styled.div`
  flex: 1;
  margin-top: 30px;
`;

export default QnAMainConainer;
