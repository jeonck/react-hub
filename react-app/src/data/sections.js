export const sections = [
  {
    id: 'getting-started',
    title: '시작하기',
    emoji: '',
    description: '리액트 입문 가이드와 환경 설정',
    items: [
      {
        title: '리액트란 무엇인가?',
        description: '컴포넌트 기반, Virtual DOM, 단방향 데이터 흐름',
        link: 'https://react.dev/learn',
        tags: ['기초', '입문']
      },
      {
        title: '환경 설정',
        description: 'Vite로 프로젝트 시작하기 (Create React App은 2025년 2월 종료 예정)',
        link: 'https://react.dev/learn/start-a-new-react-project',
        tags: ['설치', 'Vite', 'Next.js']
      },
      {
        title: '첫 번째 컴포넌트',
        description: 'JSX 기본 문법과 함수형 컴포넌트',
        link: 'https://react.dev/learn/your-first-component',
        tags: ['JSX', '컴포넌트']
      }
    ]
  },
  {
    id: 'core-concepts',
    title: '핵심 개념',
    emoji: '',
    description: '리액트의 기본 원리와 필수 개념',
    items: [
      {
        title: 'UI 표현하기',
        description: 'JSX, Props, 조건부 렌더링, 리스트',
        link: 'https://react.dev/learn/describing-the-ui',
        tags: ['JSX', 'Props', '기초']
      },
      {
        title: '상호작용 추가하기',
        description: '이벤트, State, 렌더링 이해',
        link: 'https://react.dev/learn/adding-interactivity',
        tags: ['State', '이벤트', 'Hook']
      },
      {
        title: '상태 관리',
        description: 'State 구조, Context API, Reducer 패턴',
        link: 'https://react.dev/learn/managing-state',
        tags: ['State', 'Context', 'Reducer']
      },
      {
        title: '리액트 훅(Hooks)',
        description: 'useState, useEffect, useContext, useReducer, 커스텀 훅',
        link: 'https://react.dev/reference/react/hooks',
        tags: ['Hooks', 'useState', 'useEffect']
      },
      {
        title: 'Escape Hatches',
        description: 'Refs, Effects, 커스텀 훅으로 고급 패턴 구현',
        link: 'https://react.dev/learn/escape-hatches',
        tags: ['Refs', 'Effects', '고급']
      }
    ]
  },
  {
    id: 'advanced',
    title: '고급 주제',
    emoji: '',
    description: '실무 최적화와 고급 기술',
    items: [
      {
        title: 'React 19 신기능',
        description: 'Server Components, Actions, use API, Compiler',
        link: 'https://react.dev/blog/2024/04/25/react-19',
        tags: ['React 19', 'Server Components', '최신']
      },
      {
        title: 'React Compiler',
        description: '자동 메모이제이션으로 성능 최적화 (RC 단계)',
        link: 'https://react.dev/learn/react-compiler',
        tags: ['성능', 'Compiler', '최적화']
      },
      {
        title: '성능 최적화',
        description: 'memo, useMemo, useCallback, 코드 스플리팅',
        link: 'https://react.dev/reference/react/memo',
        tags: ['성능', '최적화', 'memo']
      },
      {
        title: 'Server Components',
        description: 'RSC로 서버 렌더링 최적화 (Next.js App Router)',
        link: 'https://react.dev/reference/rsc/server-components',
        tags: ['SSR', 'Next.js', 'RSC']
      },
      {
        title: 'TypeScript',
        description: '타입 안전성을 위한 TypeScript 통합',
        link: 'https://react.dev/learn/typescript',
        tags: ['TypeScript', '타입']
      }
    ]
  },
  {
    id: 'frameworks',
    title: '프레임워크 & 도구',
    emoji: '',
    description: '프로덕션 환경을 위한 도구',
    items: [
      {
        title: 'Next.js',
        description: 'Full-stack React 프레임워크 (공식 추천)',
        link: 'https://nextjs.org',
        tags: ['Next.js', 'SSR', 'Full-stack']
      },
      {
        title: 'Remix',
        description: 'Web Standards 기반 Full-stack 프레임워크',
        link: 'https://remix.run',
        tags: ['Remix', 'Full-stack']
      },
      {
        title: 'Vite',
        description: '빠른 빌드 도구 (Create React App 대체)',
        link: 'https://vitejs.dev',
        tags: ['Vite', '빌드', '도구']
      },
      {
        title: 'React Router',
        description: '클라이언트 사이드 라우팅',
        link: 'https://reactrouter.com',
        tags: ['Router', '라우팅']
      },
      {
        title: 'TanStack Query',
        description: '서버 상태 관리 (구 React Query)',
        link: 'https://tanstack.com/query',
        tags: ['데이터', '비동기', 'Query']
      }
    ]
  },
  {
    id: 'state-management',
    title: '상태 관리',
    emoji: '',
    description: '글로벌 상태 관리 솔루션',
    items: [
      {
        title: 'Context API',
        description: '리액트 내장 상태 공유 (공식 추천)',
        link: 'https://react.dev/learn/passing-data-deeply-with-context',
        tags: ['Context', '내장', '기본']
      },
      {
        title: 'Redux Toolkit',
        description: '대규모 앱을 위한 예측 가능한 상태 관리',
        link: 'https://redux-toolkit.js.org',
        tags: ['Redux', 'RTK']
      },
      {
        title: 'Zustand',
        description: '간단하고 빠른 상태 관리',
        link: 'https://github.com/pmndrs/zustand',
        tags: ['Zustand', '간편']
      },
      {
        title: 'Jotai',
        description: 'Atomic 상태 관리',
        link: 'https://jotai.org',
        tags: ['Jotai', 'Atomic']
      },
      {
        title: 'Recoil',
        description: 'Meta의 상태 관리 라이브러리',
        link: 'https://recoiljs.org',
        tags: ['Recoil', 'Meta']
      }
    ]
  },
  {
    id: 'styling',
    title: '스타일링',
    emoji: '',
    description: '컴포넌트 스타일링 방법',
    items: [
      {
        title: 'Tailwind CSS',
        description: 'Utility-first CSS 프레임워크',
        link: 'https://tailwindcss.com',
        tags: ['Tailwind', 'CSS', 'Utility']
      },
      {
        title: 'CSS Modules',
        description: '스코프가 지정된 CSS',
        link: 'https://github.com/css-modules/css-modules',
        tags: ['CSS Modules', 'Scoped']
      },
      {
        title: 'Styled Components',
        description: 'CSS-in-JS 라이브러리',
        link: 'https://styled-components.com',
        tags: ['CSS-in-JS', 'Styled']
      },
      {
        title: 'shadcn/ui',
        description: '복사 가능한 컴포넌트 라이브러리',
        link: 'https://ui.shadcn.com',
        tags: ['UI', 'Components', 'Tailwind']
      },
      {
        title: 'Framer Motion',
        description: '프로덕션 레벨 애니메이션',
        link: 'https://www.framer.com/motion',
        tags: ['Animation', 'Motion']
      }
    ]
  },
  {
    id: 'testing',
    title: '테스팅',
    emoji: '',
    description: '안정적인 앱을 위한 테스트',
    items: [
      {
        title: 'React Testing Library',
        description: '사용자 중심 컴포넌트 테스트 (공식 추천)',
        link: 'https://testing-library.com/react',
        tags: ['Testing', 'RTL', '유닛']
      },
      {
        title: 'Vitest',
        description: 'Vite 기반 고속 테스트 러너',
        link: 'https://vitest.dev',
        tags: ['Vitest', '유닛', '빠름']
      },
      {
        title: 'Playwright',
        description: 'E2E 테스트 자동화',
        link: 'https://playwright.dev',
        tags: ['E2E', 'Playwright']
      },
      {
        title: 'Storybook',
        description: 'UI 컴포넌트 개발 환경',
        link: 'https://storybook.js.org',
        tags: ['Storybook', 'UI', '문서화']
      }
    ]
  },
  {
    id: 'deployment',
    title: '배포',
    emoji: '',
    description: '프로덕션 배포 플랫폼',
    items: [
      {
        title: 'Vercel',
        description: 'Next.js 최적화 배포 (공식 추천)',
        link: 'https://vercel.com',
        tags: ['Vercel', 'Next.js', 'Edge']
      },
      {
        title: 'Netlify',
        description: 'JAMstack 배포 플랫폼',
        link: 'https://netlify.com',
        tags: ['Netlify', 'JAMstack']
      },
      {
        title: 'Cloudflare Pages',
        description: '엣지 배포와 빠른 성능',
        link: 'https://pages.cloudflare.com',
        tags: ['Cloudflare', 'Edge']
      },
      {
        title: 'GitHub Pages',
        description: '정적 사이트 무료 호스팅',
        link: 'https://pages.github.com',
        tags: ['GitHub', '무료', '정적']
      }
    ]
  },
  {
    id: 'community',
    title: '커뮤니티',
    emoji: '',
    description: '학습 자료와 커뮤니티',
    items: [
      {
        title: 'React 공식 문서',
        description: 'react.dev - 최신 공식 가이드',
        link: 'https://react.dev',
        tags: ['공식', '문서']
      },
      {
        title: 'React Conf',
        description: '연례 리액트 컨퍼런스',
        link: 'https://conf.react.dev',
        tags: ['컨퍼런스', '이벤트']
      },
      {
        title: 'r/reactjs',
        description: 'Reddit 리액트 커뮤니티',
        link: 'https://reddit.com/r/reactjs',
        tags: ['Reddit', '커뮤니티']
      },
      {
        title: 'React Discord',
        description: '실시간 채팅 커뮤니티',
        link: 'https://discord.gg/react',
        tags: ['Discord', '채팅']
      },
      {
        title: 'Dan Abramov Blog',
        description: 'Overreacted.io - React 핵심 개발자 블로그',
        link: 'https://overreacted.io',
        tags: ['블로그', 'Dan Abramov']
      }
    ]
  },
  {
    id: 'trends',
    title: '최신 트렌드',
    emoji: '',
    description: '2025년 리액트 생태계 트렌드',
    items: [
      {
        title: 'React 19 릴리즈',
        description: 'Server Components, Actions, use() Hook (2024년 12월 예정)',
        link: 'https://react.dev/blog',
        tags: ['React 19', '최신', '릴리즈']
      },
      {
        title: 'Server Components',
        description: 'Next.js App Router와 RSC 패러다임',
        link: 'https://nextjs.org/docs/app',
        tags: ['RSC', 'Next.js', '트렌드']
      },
      {
        title: 'Create React App 종료',
        description: 'Vite, Next.js로 마이그레이션 (2025년 2월)',
        link: 'https://react.dev/learn/start-a-new-react-project',
        tags: ['CRA', 'Vite', '마이그레이션']
      },
      {
        title: 'React Compiler',
        description: '자동 최적화 컴파일러 (RC 단계)',
        link: 'https://react.dev/learn/react-compiler',
        tags: ['Compiler', '최적화', '트렌드']
      },
      {
        title: 'AI와 리액트',
        description: 'Vercel AI SDK, ChatGPT UI 통합',
        link: 'https://sdk.vercel.ai',
        tags: ['AI', 'Vercel', 'ChatGPT']
      }
    ]
  }
];

export const featuredResources = [
  {
    title: '공식 튜토리얼: Tic-Tac-Toe',
    description: '리액트 핵심 개념을 게임으로 배우기',
    link: 'https://react.dev/learn/tutorial-tic-tac-toe',
    tags: ['튜토리얼', '초급', '공식']
  },
  {
    title: 'Thinking in React',
    description: '리액트식 사고방식 이해하기',
    link: 'https://react.dev/learn/thinking-in-react',
    tags: ['개념', '사고방식', '공식']
  },
  {
    title: 'Next.js Learn',
    description: 'Next.js 14 App Router 실전 가이드',
    link: 'https://nextjs.org/learn',
    tags: ['Next.js', '실전', 'App Router']
  },
  {
    title: 'React TypeScript Cheatsheet',
    description: 'TypeScript + React 완벽 가이드',
    link: 'https://react-typescript-cheatsheet.netlify.app',
    tags: ['TypeScript', 'Cheatsheet']
  }
];

export const quickLinks = [
  { name: 'React 공식 문서', url: 'https://react.dev', icon: '📘' },
  { name: 'Next.js', url: 'https://nextjs.org', icon: '▲' },
  { name: 'Vite', url: 'https://vitejs.dev', icon: '⚡' },
  { name: 'React Router', url: 'https://reactrouter.com', icon: '🛣️' },
  { name: 'TanStack Query', url: 'https://tanstack.com/query', icon: '🔄' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com', icon: '🎨' }
];
