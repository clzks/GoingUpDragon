// src/components/myPage/Item/QnAItem.jsx

export const qnaItems = [
    {
      id: 1,
      title: "HTML에서 이미지를 가운데 정렬하려면 어떻게 해야 하나요?",
      content:
        "HTML을 사용할 때 이미지를 중앙에 정렬하고 싶다면, CSS를 활용하는 것이 일반적입니다. 가장 간단한 방법은 'text-align: center;'를 사용하는 것입니다.",
      tags: ["HTML", "CSS"],
      date: "2024.10.14",
      views: 123,
      replies: 3,
    },
    {
      id: 2,
      title: "React에서 어떤 상태 관리 라이브러리가 가장 좋은가요?",
      content:
        "React에서 상태 관리를 위해 다양한 라이브러리를 사용할 수 있습니다. 가장 많이 사용되는 라이브러리는 Redux이며, MobX, Zustand, Recoil, Context API 등도 상황에 따라 유용하게 사용할 수 있습니다.",
      tags: ["React", "State"],
      date: "2023.9.12",
      views: 89,
      replies: 5,
    },
    {
      id: 3,
      title: "Python에서 데이터 프레임을 어떻게 다룰 수 있나요?",
      content:
        "Python에서 데이터 프레임을 다루기 위해 주로 Pandas 라이브러리를 사용합니다. Pandas는 데이터 조작 및 분석에 강력한 도구를 제공합니다.",
      tags: ["Python", "Pandas"],
      date: "2023.7.20",
      views: 102,
      replies: 4,
    },
    {
      id: 4,
      title: "JavaScript에서 이벤트 위임은 무엇인가요?",
      content:
        "이벤트 위임은 부모 요소에 이벤트 리스너를 추가하여 자식 요소들의 이벤트를 관리하는 기법입니다.",
      tags: ["JavaScript", "Event"],
      date: "2023.5.3",
      views: 67,
      replies: 2,
    },
    {
      id: 5,
      title: "CSS Flexbox의 기본 정렬 방법은 무엇인가요?",
      content:
        "Flexbox는 CSS에서 레이아웃을 구성하는 데 매우 유용한 도구입니다. 기본적으로 부모 요소에 'display: flex;'를 설정하고, 'justify-content'와 'align-items' 속성을 사용하여 정렬할 수 있습니다.",
      tags: ["CSS", "Flexbox"],
      date: "2023.3.18",
      views: 48,
      replies: 1,
    },
    {
      id: 6,
      title: "Node.js에서 Express를 어떻게 사용할 수 있나요?",
      content:
        "Express는 Node.js에서 널리 사용되는 웹 애플리케이션 프레임워크로, 간단한 코드로 서버를 구성하고 요청을 처리할 수 있습니다.",
      tags: ["Node.js", "Express"],
      date: "2023.2.25",
      views: 75,
      replies: 0,
    },
    {
      id: 7,
      title: "SQL에서 JOIN의 종류와 차이점은 무엇인가요?",
      content:
        "SQL JOIN은 두 개 이상의 테이블을 연결하여 데이터를 결합하는 데 사용됩니다. INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN이 있습니다.",
      tags: ["SQL", "Database"],
      date: "2023.1.11",
      views: 56,
      replies: 6,
    },
    {
      id: 8,
      title: "React에서 useEffect의 사용법이 궁금합니다.",
      content:
        "React에서 useEffect는 컴포넌트가 렌더링될 때 특정 작업을 실행할 수 있도록 도와주는 훅입니다. 의존성 배열을 설정하여 특정 상태가 변경될 때만 실행되도록 할 수 있습니다.",
      tags: ["React", "Hooks"],
      date: "2022.12.20",
      views: 150,
      replies: 8,
    },
    {
      id: 9,
      title: "TypeScript와 JavaScript의 차이점은 무엇인가요?",
      content:
        "TypeScript는 JavaScript의 슈퍼셋으로, 정적 타입 시스템을 제공합니다. 이를 통해 더 안정적인 코드를 작성할 수 있으며, IDE에서 더 나은 자동 완성 및 타입 체크 기능을 활용할 수 있습니다.",
      tags: ["TypeScript", "JavaScript"],
      date: "2022.10.05",
      views: 92,
      replies: 3,
    },
    {
      id: 10,
      title: "Docker와 Kubernetes의 차이점은?",
      content:
        "Docker는 컨테이너화 기술을 제공하며, Kubernetes는 여러 개의 컨테이너를 관리하는 오케스트레이션 도구입니다. Docker는 개별 애플리케이션을 컨테이너로 실행하는 반면, Kubernetes는 이를 자동으로 배포 및 스케일링하는 역할을 합니다.",
      tags: ["Docker", "Kubernetes"],
      date: "2022.8.15",
      views: 133,
      replies: 7,
    },
    {
      id: 11,
      title: "Vue.js와 React의 차이점은 무엇인가요?",
      content:
        "Vue.js와 React는 둘 다 프론트엔드 프레임워크이지만, React는 컴포넌트 기반 UI 라이브러리이고 Vue는 보다 선언적인 템플릿과 반응형 데이터 바인딩을 제공합니다.",
      tags: ["Vue.js", "React"],
      date: "2022.7.01",
      views: 110,
      replies: 5,
    },
    {
      id: 12,
      title: "Next.js의 장점과 단점은?",
      content:
        "Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 기능을 제공합니다. 이를 통해 SEO 성능이 향상되며, 빠른 로딩 속도를 제공합니다.",
      tags: ["Next.js", "React"],
      date: "2022.5.18",
      views: 140,
      replies: 9,
    },
  ];
  