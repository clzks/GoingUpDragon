// components/common/controlledTabs.jsx
// 외부 라이브러리
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

// 내부 라이브러리

const ControlledTabs = () => {
  const [activeKey, setActiveKey] = useState("terms");

  function handleSelect(selectedKey) {
    setActiveKey(selectedKey);
  }

  return (
    <Container>
      <StyledTabs
        id="controlled-tab-example"
        activeKey={activeKey}
        onSelect={handleSelect}
        className="mb-3"
      >
        <Tab
          eventKey="terms"
          title={
            <StyledTabTitle active={activeKey === "terms"}>
              이용약관
            </StyledTabTitle>
          }
        >
          <StyledContent>
            <div class="terms-container">
              <h1>LECEcampus 이용약관</h1>

              <h3>제 1 조 (목적)</h3>
              <p>
                본 약관은 LECEcampus(이하 "사이트")에서 제공하는 평생교육 학습
                콘텐츠와 관련하여 사이트와 이용자 간의 권리, 의무 및 책임사항을
                규정함을 목적으로 합니다.
              </p>

              <h3>제 2 조 (정의)</h3>
              <ul>
                <li>
                  "사이트"란 LECEcampus가 제공하는 모든 학습 콘텐츠 및 서비스를
                  말합니다.
                </li>
                <li>
                  "회원"이란 본 약관에 동의하고 사이트에 가입하여 서비스를
                  이용하는 자를 말합니다.
                </li>
                <li>
                  "콘텐츠"란 회원이 구매하여 학습할 수 있는 동영상 강의 및 관련
                  자료를 의미합니다.
                </li>
              </ul>

              <h3>제 3 조 (약관의 효력 및 변경)</h3>
              <ul>
                <li>
                  본 약관은 사이트 초기 화면에 게시하거나 기타의 방법으로
                  공지함으로써 효력을 발생합니다.
                </li>
                <li>
                  사이트는 약관의 내용을 변경할 수 있으며, 변경된 약관은 공지 후
                  효력을 갖습니다.
                </li>
                <li>
                  회원은 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고
                  탈퇴할 수 있습니다.
                </li>
              </ul>

              <h3>제 4 조 (회원 가입)</h3>
              <ul>
                <li>
                  회원 가입은 이용자가 본 약관에 동의하고, 정해진 절차에 따라
                  가입 신청을 완료한 후 사이트가 이를 승인함으로써 이루어집니다.
                </li>
                <li>
                  사이트는 가입 신청자에게 필요한 정보의 제공을 요구할 수
                  있습니다.
                </li>
              </ul>

              <h3>제 5 조 (서비스 이용)</h3>
              <ul>
                <li>
                  회원은 사이트에서 제공하는 다양한 학습 콘텐츠를 구매하고
                  학습할 수 있습니다.
                </li>
                <li>
                  사이트는 서비스 이용에 필요한 최소한의 기술 사양을 제공하며,
                  회원은 본인의 장비 및 네트워크 상태를 확인하여 서비스 이용에
                  필요한 환경을 마련해야 합니다.
                </li>
              </ul>

              <h3>제 6 조 (콘텐츠의 구매 및 결제)</h3>
              <ul>
                <li>
                  회원은 사이트에서 제공하는 동영상 강의를 구매하여 이용할 수
                  있습니다.
                </li>
                <li>
                  결제는 사이트에서 제공하는 방법에 따라 이루어지며, 환불 및
                  취소 규정은 별도로 공지된 내용을 따릅니다.
                </li>
              </ul>

              <h3>제 7 조 (서비스의 중단)</h3>
              <ul>
                <li>
                  사이트는 천재지변, 기술적 문제 등 불가피한 사유로 인해 서비스
                  제공이 일시적으로 중단될 수 있으며, 이에 대한 책임을 지지
                  않습니다.
                </li>
                <li>
                  서비스 중단 시 사이트는 사전에 공지하거나 사후에 회원에게
                  통지합니다.
                </li>
              </ul>

              <h3>제 8 조 (회원의 의무)</h3>
              <ul>
                <li>
                  회원은 본 약관 및 사이트에서 제공하는 공지사항을 준수해야
                  합니다.
                </li>
                <li>
                  회원은 타인의 정보를 도용하거나 부정 이용해서는 안 되며, 이에
                  따른 모든 책임은 회원에게 있습니다.
                </li>
              </ul>

              <h3>제 9 조 (사이트의 의무)</h3>
              <ul>
                <li>
                  사이트는 회원이 안정적으로 서비스를 이용할 수 있도록 최선을
                  다해 노력합니다.
                </li>
                <li>
                  회원의 개인 정보를 안전하게 보호하기 위해 필요한 기술적 및
                  관리적 조치를 취합니다.
                </li>
              </ul>

              <h3>제 10 조 (계약 해지 및 서비스 이용 제한)</h3>
              <ul>
                <li>
                  회원은 언제든지 서비스 이용을 원하지 않을 경우 탈퇴할 수
                  있습니다.
                </li>
                <li>
                  사이트는 회원이 본 약관을 위반하는 경우, 서비스 이용을
                  제한하거나 계약을 해지할 수 있습니다.
                </li>
              </ul>

              <h3>제 11 조 (저작권 및 지적재산권)</h3>
              <ul>
                <li>
                  사이트에서 제공하는 모든 콘텐츠에 대한 저작권은 사이트 또는
                  해당 콘텐츠 제공자에게 있습니다.
                </li>
                <li>
                  회원은 사이트에서 제공하는 콘텐츠를 무단 복제, 배포,
                  전송하거나 상업적으로 이용할 수 없습니다.
                </li>
              </ul>

              <h3>제 12 조 (면책 조항)</h3>
              <ul>
                <li>
                  사이트는 회원의 부주의로 발생한 손해에 대해 책임지지 않습니다.
                </li>
                <li>
                  사이트는 회원이 제공한 정보의 정확성, 신뢰성에 대해 보증하지
                  않습니다.
                </li>
              </ul>

              <h3>제 13 조 (서비스 이용)</h3>
              <ul>
                <li>
                  본 약관과 관련하여 사이트와 회원 간의 분쟁이 발생할 경우,
                  원만한 해결을 위해 노력합니다.
                </li>
                <li>
                  분쟁이 해결되지 않을 경우, 관할 법원에 소를 제기하여 해결할 수
                  있습니다.
                </li>
              </ul>

              <h3>부칙</h3>
              <ul>
                <li>본 약관은 2024년 11월 22일부터 시행됩니다.</li>
              </ul>
            </div>
          </StyledContent>
        </Tab>
        <Tab
          eventKey="privacy"
          title={
            <StyledTabTitle active={activeKey === "privacy"}>
              개인정보처리방침
            </StyledTabTitle>
          }
        >
          <StyledContent>
            <div class="terms-container">
              <h1>LECEcampus 개인정보처리방침</h1>

              <h3>제 1 조 (목적)</h3>
              <p>
                본 개인정보처리방침은 LECEcampus(이하 "사이트")가 회원의 개인
                정보를 어떻게 수집, 이용, 공유 및 보호하는지를 설명하는 것을
                목적으로 합니다.
              </p>

              <h3>제 2 조 (개인정보의 수집 항목 및 수집 방법)</h3>
              <ul>
                <li>
                  수집 항목
                  <ol>- 회원 가입 시: 이름, 이메일 주소, 비밀번호, 연락처</ol>
                  <ol>
                    - 서비스 이용 과정에서: 결제 정보, 이용 기록, IP 주소, 쿠키
                  </ol>
                </li>
                <li>
                  수집 방법
                  <ol>
                    - 회원 가입, 서비스 이용, 고객 문의 과정에서 직접 제공받음
                  </ol>
                  <ol>- 자동화된 수단을 통한 수집 (쿠키 등)</ol>
                </li>
              </ul>

              <h3>제 3 조 (개인정보의 수집 및 이용 목적)</h3>
              <ul>
                <li>
                  회원 관리: 회원 가입, 본인 인증, 서비스 제공에 따른 회원 식별
                </li>
                <li>서비스 제공: 동영상 강의 제공, 콘텐츠 구매 및 결제</li>
                <li>고객 지원: 문의 사항 처리, 서비스 이용 관련 불만 해결</li>
                <li>
                  마케팅 및 광고: 신규 서비스 안내, 이벤트 정보 제공 (회원의
                  동의가 있을 경우)
                </li>
              </ul>

              <h3>제 4 조 (개인정보의 제3자 제공)</h3>
              <ul>
                <li>
                  사이트는 법령에 특별한 규정이 있는 경우를 제외하고, 회원의
                  동의 없이 개인 정보를 제3자에게 제공하지 않습니다.
                </li>
                <li>
                  서비스 제공을 위해 필요한 경우 회원의 사전 동의를 받습니다.
                </li>
              </ul>

              <h3>제 5 조 (개인정보의 보유 및 이용 기간)</h3>
              <ul>
                <li>
                  회원 정보: 회원 탈퇴 시까지 보유하며, 탈퇴 후 지체 없이
                  파기합니다.
                </li>
                <li>
                  관련 법령에 의해 보관이 필요한 경우 해당 기간 동안 보유합니다.
                  <ol>- 계약 또는 청약 철회 기록: 5년</ol>
                  <ol>- 결제 및 재화 공급 기록: 5년</ol>
                  <ol>- 소비자 불만 또는 분쟁 처리 기록: 3년</ol>
                </li>
              </ul>

              <h3>제 6 조 (개인정보의 파기 절차 및 방법)</h3>
              <ul>
                <li>
                  파기 절차
                  <ol>
                    - 수집 목적 달성 후, 내부 방침 및 관련 법령에 따라
                    파기합니다.
                  </ol>
                </li>
                <li>
                  파기 방법
                  <ol>- 전자적 파일 형태: 복구 불가능한 방법으로 삭제</ol>
                  <ol>- 종이 문서: 분쇄기로 분쇄하거나 소각</ol>
                </li>
              </ul>

              <h3>제 7 조 (개인정보의 안전성 확보 조치)</h3>
              <ul>
                <li>관리적 조치: 개인정보 처리 직원의 최소화 및 교육 실시</li>
                <li>기술적 조치: 개인정보의 암호화, 접근 제한 조치</li>
                <li>물리적 조치: 개인정보가 저장된 장소에 대한 접근 통제</li>
              </ul>

              <h3>제 8 조 (회원의 권리와 그 행사 방법)</h3>
              <ul>
                <li>
                  회원은 언제든지 자신의 개인정보를 조회하거나 수정할 수
                  있습니다.
                </li>
                <li>
                  회원은 개인정보의 처리 정지, 삭제를 요청할 수 있으며, 이에
                  따라 사이트는 지체 없이 필요한 조치를 취합니다.
                </li>
              </ul>

              <h3>제 9 조 (개인정보 보호책임자)</h3>
              <ul>
                <li>
                  개인정보 보호책임자: 홍길동
                  <ol>- 연락처: privacy@lececampus.com</ol>
                  <ol>- 문의 사항은 이메일을 통해 접수 받습니다.</ol>
                </li>
              </ul>

              <h3>제 10 조 (쿠키의 사용)</h3>
              <ul>
                <li>
                  사이트는 회원의 이용 편의를 높이기 위해 쿠키를 사용합니다.
                </li>
                <li>
                  회원은 쿠키 설정을 거부할 수 있으며, 다만 이 경우 일부 서비스
                  이용에 제한이 있을 수 있습니다.
                </li>
              </ul>

              <h3>제 11 조 (개인정보처리방침의 변경)</h3>
              <ul>
                <li>
                  본 방침은 법령, 정책 또는 보안 기술의 변경에 따라 수정될 수
                  있으며, 변경 시 공지합니다.
                </li>
                <li>변경된 방침은 공지 후 효력을 갖습니다.</li>
              </ul>

              <h3>부칙</h3>
              <ul>
                <li>본 약관은 2024년 11월 22일부터 시행됩니다.</li>
              </ul>
            </div>
          </StyledContent>
        </Tab>
      </StyledTabs>
    </Container>
  );
};

export default ControlledTabs;

// 스타일 컴포넌트 정의
const StyledTabs = styled(Tabs)`
  width: 100%;
  background-color: transparent;
  border-radius: 0px;
  border-bottom: 1px solid #ccd5ae; /* 하단 경계선의 색상, 두께 조정 */
  padding: 10px;
  .nav-item .nav-link {
    border: none !important;
    outline: none !important;
  }
  margin: 50px auto; /* 컨테이너에 맞춰 중앙 정렬 */
`;

const StyledTabTitle = styled.span`
  font-size: ${({ active }) => (active ? "1.2em" : "1em")};
  color: ${({ active }) => (active ? "purple" : "black")};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: purple;
  }
`;

const StyledContent = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 50px 0; /* 상하 여백 설정 */
  h1 {
    margin-bottom: 50px; /* 문단 사이의 여백 설정 */
  }
  h3 {
    margin-bottom: 50px; /* 문단 사이의 여백 설정 */
  }
  p {
    margin-bottom: 50px; /* 문단 사이의 여백 설정 */
  }
  ul {
    margin-bottom: 50px; /* 문단 사이의 여백 설정 */
  }
`;
