## 아키텍처

```plaintext
public
└── images

src
├── components              # 재사용 가능한 UI 컴포넌트
│   ├── common              # 공통 컴포넌트
│   │   └── Header.js       # styled-components 사용
│   ├── mainPage            # 메인 페이지 관련 컴포넌트
│   ├── searchPage          # 검색 페이지 관련 컴포넌트
│   ├── navigation          # 네비게이션 바 관련 컴포넌트
│   ├── sidebar             # 사이드바 관련 컴포넌트
│   └── footer              # 푸터 관련 컴포넌트
├── layouts                 # 주요 기능별 레이아웃 (예: 홈, 검색, 구독 페이지 등)
│   ├── HomePage
│   │   └── Home.js         # styled-components 사용
│   ├── SearchPage
│   └── SubscriptionPage
├── pages                   # 주요 페이지 컴포넌트 모음
│   ├── Home.js
│   ├── Search.js
│   └── VideoDetail.js
├── App.js                  # 루트 컴포넌트
└── index.js                # 프로젝트 진입점

## 컴포넌트 포맷

```

// components/common/header.jsx
import React from 'react'

const header = () => {

    function func() {

    };
    
    const func2 = () => {
    
    };

    return (
        <div>

        </div>
    )
}

export default header

```

## 코딩 컨벤션

1. css는 styled-component 사용합니다.

2. 모든 컴포넌트는 2번이상 사용 시 common 폴더로 옮겨줍니다.

3. 폴더명은 LowCamelCase, 컴포넌트는 HighCamelCase 방식으로 작성합니다.

4. 전역 스타일은 App.css에서 관리합니다.

5. 이름이 긴 컴포넌트의 경우 자유롭게 축약해서 선언가능. 축약했을 경우 컨벤션에 메모를 남겨주세요.

6. import는 작은 따옴표, 함수는 큰 따옴표로 작성합니다.

7. 최상단에 주석으로 경로와 파일이름 표시, 외부 라이브러리, 내부 라이브러리를 구분해서 표시합니다.

8. 컴포넌트 확장자는 jsx로 합니다

9. 모든 태그는 <Item> </Item> 와 같이 여는 태그 + 닫는 태그로 작성합니다.

10. 함수의 경우 기본 선언방식과 화살표 함수 중 편한 것으로 사용하시면 됩니다. 