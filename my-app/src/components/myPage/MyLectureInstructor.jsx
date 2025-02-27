import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCourseList } from "../../apis/common/courseApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyLectureInstructor = ({ courseList, isHome, courseCount }) => {
  const [showAll, setShowAll] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const { infoId } = useParams();
  const [isFetched, setIsFetched] = useState(false); // 🔥 API에서 가져왔는지 여부
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return price === 0
      ? "무료"
      : new Intl.NumberFormat("ko-KR").format(price) + "원";
  };

  const formatRate = (rate) => {
    return Math.round(rate * 10) / 10;
  };

  // const displayedLectures = showAll
  //   ? Array.isArray(courseData)
  //     ? courseData
  //     : []
  //   : courseData?.slice(0, 4) || [];

  useEffect(() => {
    console.log(
      "🔥 useEffect 실행됨! isHome:",
      isHome,
      "infoId:",
      infoId,
      "isFetched:",
      isFetched
    );

    if (isHome) {
      console.log("🏠 홈 모드 - 기존 데이터 사용");
      setCourseData(courseList);
    } else {
      if (infoId) {
        if (isFetched) {
          console.log("⚡ 이미 불러온 강의 데이터 사용!");
          return; // 🚀 기존 데이터가 있으면 API 호출 X
        }

        console.log("📡 강사 데이터 요청 중...");
        getCourseList(infoId)
          .then((data) => {
            console.log("✅ 강의 리스트 불러오기 성공:", data);
            setCourseData(data);
            setIsFetched(true); // 🔥 API에서 데이터를 가져왔음을 표시
          })
          .catch((error) => console.error("강사 강의 가져오기 실패:", error));
      } else {
        console.log("❌ instructorId 없음! 데이터 요청 안함");
      }
    }
  }, [isHome, infoId]); // ✅ courseList 제거하여 불필요한 리렌더링 방지

  return (
    <LectureWrapper>
      <Header>
        <HeaderTitle>강의</HeaderTitle>
        <TotalCount>
          전체{" "}
          <TotalHighlight>
            {isHome ? courseCount : courseData?.length}개
          </TotalHighlight>
        </TotalCount>
      </Header>

      <LectureGrid hasLectures={courseData?.length > 0}>
        {isHome === false && isFetched === false ? ( // 🔥 강의 로딩 중 표시
          <NoLectureText>강의 로딩 중...</NoLectureText>
        ) : courseData?.length > 0 ? ( // ✅ 🔥 isFetched 완료되면 전체 강의 표시
          courseData.map((lecture) => (
            <LectureCard
              key={lecture.courseId}
              onClick={() => navigate(`/CourseDetail/${lecture.courseId}`)}
            >
              <Thumbnail src={lecture.thumbnail} alt={lecture.courseTitle} />
              <LectureInfo>
                <LectureTitle>{lecture.courseTitle}</LectureTitle>
                <Rating>
                  ⭐ {formatRate(lecture.rate)} ({lecture.reviewCount})
                </Rating>
                <Price>{formatPrice(lecture.price)}</Price>
              </LectureInfo>
            </LectureCard>
          ))
        ) : (
          <NoLectureText>등록된 강의가 없습니다.</NoLectureText> // ✅ 강의가 없을 때
        )}
      </LectureGrid>

      {/* {isHome &&
        courseData?.length > 0 && ( // ✅ 홈에서는 전체보기 버튼 유지
          <ButtonWrapper>
            <ViewAllButton onClick={() => setShowAll(!showAll)}>
              {showAll ? "돌아가기 >" : "전체보기 >"}
            </ViewAllButton>
          </ButtonWrapper>
        )} */}
    </LectureWrapper>
  );
};

export default MyLectureInstructor;

// 스타일 컴포넌트 (팀원 코드 적용)
const LectureWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const TotalCount = styled.span`
  font-size: 16px;
  color: #777;
`;

const TotalHighlight = styled.span`
  font-size: 16px;
  color: #7cd0d5;
  font-weight: bold;
`;

const LectureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  min-height: ${({ hasLectures }) => (hasLectures ? "auto" : "150px")};
  justify-items: start;
`;

const LectureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  align-items: center;
  width: 220px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  cursor: pointer; // ✅ 마우스 포인터 변경
`;

const Thumbnail = styled.img`
  width: 190px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
`;

const LectureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;

const LectureTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #ff9900;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: left;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ViewAllButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const NoLectureText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #888;
  width: 100%;
`;
