import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/common/layout/Layout";
import SidebarInstructor from "../../components/myPage/Sidebar/SidebarInstructor";
import { Container, Row, Col } from "react-bootstrap";
import HomeInstructor from "../../components/myPage/Instructor/HomeInstructor";
import ReviewInstructor from "../../components/myPage/Instructor/ReviewInstructor";
import MyAllLectureInstructor from "../../components/myPage/Instructor/MyAllLectureInstructor";
import QnA from "../../components/myPage/QnA";
import ScrollTopButton from "../../components/common/utilities/ScrollTopButton";
import { getInstructorMyPageSampleInfo } from "../../apis/myPage/myPageApi";

const MyPageLayoutInstructor = () => {
  const [selectedMenu, setSelectedMenu] = useState("홈");
  const { infoId } = useParams();
  //const [myPageData, setMyPageData] = useState(null); // ✅ 초기값 `null`로 설정
  const [sampleData, setSamepleData] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ 로딩 상태 추가

  useEffect(() => {
    if (!infoId) return;

    setLoading(true); // ✅ 데이터 요청 전 로딩 시작
    getInstructorMyPageSampleInfo(infoId)
      .then((data) => {
        console.log(data);
        setSamepleData(data);
      })
      .catch((error) => {
        console.error(
          "마이페이지 데이터 가져오기 실패: MyPageLayoutInstructor",
          error
        );
      })
      .finally(() => {
        setLoading(false); // ✅ 데이터 요청 완료 후 로딩 종료
      });
  }, [infoId]);

  const componentMap = useMemo(
    () => ({
      홈: <HomeInstructor myPageData={sampleData} isHome={true}/>,
      "내 강의": (
        <MyAllLectureInstructor courseList={sampleData?.courseList || []} isHome={false} />
      ),
      수강평: <ReviewInstructor reviewList={sampleData?.reviewList || []} isHome={false}/>,
      "Q&A": <QnA qnAList={sampleData?.qnAList || []} isHome={false}/>,
    }),
    [sampleData]
  );

  // ✅ 로딩 중이면 표시
  if (loading) {
    return (
      <Layout>
        <StyledContainer>
          <Row>
            <StyledSidebar xs={3}>
              <SidebarInstructor
                selectedMenu={selectedMenu}
                onMenuSelect={setSelectedMenu}
              />
            </StyledSidebar>
            <StyledContent xs={9}>
              <Container>
                <LoadingText>로딩 중...</LoadingText> {/* ✅ 로딩 중 표시 */}
              </Container>
            </StyledContent>
          </Row>
        </StyledContainer>
      </Layout>
    );
  }

  // ✅ 데이터가 없을 때 예외 처리
  if (!sampleData) {
    return (
      <Layout>
        <StyledContainer>
          <Row>
            <StyledSidebar xs={3}>
              <SidebarInstructor
                selectedMenu={selectedMenu}
                onMenuSelect={setSelectedMenu}
              />
            </StyledSidebar>
            <StyledContent xs={9}>
              <Container>
                <ErrorText>데이터를 불러올 수 없습니다.</ErrorText>{" "}
                {/* ✅ 에러 표시 */}
              </Container>
            </StyledContent>
          </Row>
        </StyledContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <StyledContainer>
        <Row>
          <StyledSidebar xs={3}>
            <SidebarInstructor
              myPageData={sampleData}
              selectedMenu={selectedMenu}
              onMenuSelect={setSelectedMenu}
            />
          </StyledSidebar>
          <StyledContent xs={9}>
            <Container>
              {componentMap[selectedMenu] || componentMap["홈"]}
            </Container>
          </StyledContent>
        </Row>
      </StyledContainer>
      <ScrollTopButton />
    </Layout>
  );
};

export default MyPageLayoutInstructor;

// 스타일 정의
const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledContent = styled(Col)`
  flex: 1;
  overflow-y: auto;
`;

const StyledSidebar = styled(Col)`
  padding: 0;
`;

// ✅ 로딩 및 에러 메시지 스타일 추가
const LoadingText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  margin-top: 50px;
`;

const ErrorText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: red;
  margin-top: 50px;
`;
