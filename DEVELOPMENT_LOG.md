# React Hub 개발 로그

## 프로젝트 개요
- **프로젝트명**: React Hub
- **설명**: 리액트 개발자를 위한 종합 학습 허브 - React 19 정보, 공식 문서 기반 가이드
- **기술 스택**: Vite + React 18.2.0 + Tailwind CSS 3.3.0
- **배포**: GitHub Pages (https://jeonck.github.io/react-hub/)

## 개발 일정

### 초기 설정
1. **프로젝트 초기화** (`/init vite+react+tailwind`)
   - Vite + React + Tailwind CSS 템플릿 생성
   - GitHub 저장소 생성 및 연결
   - GitHub Actions 자동 배포 설정

### 핵심 기능 구현

#### 1단계: 학습 리소스 섹션 구현
- **10개 주요 섹션 생성** (`src/data/sections.js`)
  1. 시작하기 - 리액트 입문 가이드
  2. 핵심 개념 - JSX, Hooks, State, Effects
  3. 고급 주제 - React 19, Compiler, 성능 최적화
  4. 프레임워크 & 도구 - Next.js, Remix, Vite
  5. 상태 관리 - Context API, Redux, Zustand
  6. 스타일링 - Tailwind CSS, CSS Modules
  7. 테스팅 - React Testing Library, Vitest
  8. 배포 - Vercel, Netlify, GitHub Pages
  9. 커뮤니티 - 공식 문서, React Conf, Discord
  10. 최신 트렌드 - React 19, Server Components, CRA 종료

- **컴포넌트 아키텍처**
  - `Header.jsx` - 헤더 및 타이틀
  - `SearchBar.jsx` - 실시간 검색 기능
  - `Navigation.jsx` - 카테고리 네비게이션
  - `Section.jsx` - 섹션 콘텐츠 표시
  - `Footer.jsx` - 퀵링크 및 푸터
  - `App.jsx` - 메인 오케스트레이터

#### 2단계: 이모지 인코딩 문제 해결
- **문제**: 이모지가 "�" 로 표시됨
- **시도한 해결책**:
  1. `<html lang="ko">` 추가
  2. UTF-8 meta description 추가
- **최종 해결책**: 모든 이모지 제거
  - `sections.js`에서 emoji 필드를 빈 문자열로 변경
  - `Section.jsx`에서 이모지 렌더링 코드 제거
  - `Navigation.jsx` 단순화

#### 3단계: 빠른 시작 가이드 및 코드 스니펫 추가
- **Quick Start Guide** (`src/data/quickstart.js`)
  - 4단계 인터랙티브 튜토리얼
  - Vite + React + Tailwind 프로젝트 생성 가이드
  - 복사 가능한 명령어 및 코드 블록

- **초기 코드 스니펫** (8개 카테고리, 50+ 패턴)
  1. State 관리 (useState, useReducer)
  2. Side Effects (useEffect, cleanup)
  3. 폼 처리 (제어 컴포넌트)
  4. 리스트 렌더링 (map, keys)
  5. 조건부 렌더링 (4가지 패턴)
  6. 커스텀 훅 (useLocalStorage, useFetch)
  7. Context API (전역 상태)
  8. 성능 최적화 (memo, useMemo, useCallback)

- **컴포넌트**
  - `QuickStart.jsx` - 단계별 가이드 네비게이션
  - `CodeSnippets.jsx` - 아코디언 스타일 스니펫 브라우저

#### 4단계: UX 개선 - 네비게이션 접근성
- **문제**: 카테고리 네비게이션이 QuickStart/CodeSnippets 아래에 위치
- **해결**: Navigation 컴포넌트를 QuickStart 위로 이동
- **새 순서**: SearchBar → Navigation → QuickStart → CodeSnippets → Sections

#### 5단계: 코드 스니펫 2배 확장
- **추가된 8개 카테고리** (총 16개, 100+ 패턴)
  9. Refs & DOM (useRef, forwardRef)
  10. 에러 처리 (Error Boundary, try-catch)
  11. 라우팅 (React Router v6)
  12. 데이터 페칭 (TanStack Query)
  13. 애니메이션 (Framer Motion)
  14. 인증 패턴 (Protected Route)
  15. 무한 스크롤 (Intersection Observer)
  16. 디바운스 & 쓰로틀

#### 6단계: 프로젝트 문서화
- **README.md 작성**
  - 프로젝트 소개 및 특징
  - 설치 및 사용 방법
  - 프로젝트 구조
  - 기술 스택
  - 배포 가이드
  - 기여 가이드라인
  - v2.0 로드맵

#### 7단계: Stack Overflow 이슈 기반 스니펫 추가
- **리서치**: 2024년 Stack Overflow React 이슈 분석
- **추가된 4개 카테고리** (총 20개, 130+ 패턴)
  17. **useState 흔한 실수** (3 패턴)
      - 비동기 State 업데이트 문제 (함수형 업데이터)
      - State 직접 변경 (Mutation) 문제 (불변성 패턴)
      - Stale Closure 문제 (useRef 해결책)

  18. **useEffect 흔한 실수** (3 패턴)
      - 의존성 배열 누락
      - Race Condition (경쟁 상태) - AbortController/ignore 플래그
      - 무한 루프 문제 - useMemo 수정

  19. **Hydration 에러 (Next.js)** (3 패턴)
      - Date/Time 불일치 문제 (useEffect 클라이언트 전용)
      - Browser API 사용 문제 (typeof window 체크, dynamic import)
      - HTML 중첩 오류 (시맨틱 HTML)

  20. **TypeScript 타입 문제** (3 패턴)
      - Event 타입 지정 (ChangeEvent, FormEvent, MouseEvent)
      - Props 타입 정의 (interface vs type vs inline)
      - useState 제네릭 타입 (Union types, 타입 추론)

- **스니펫 형식**: ❌ 잘못된 방법 vs ✅ 올바른 방법

#### 8단계: 코드 스니펫 접근성 개선
- **문제**: 다른 카테고리 탭 선택 시 코드 스니펫 사라짐
- **해결**: CodeSnippets를 모든 카테고리에서 표시하도록 수정
  - 이전: `activeSection === 'all'`일 때만 표시
  - 변경: 모든 카테고리에서 표시 (검색 중 제외)
  - Quick Start는 여전히 '전체' 탭에서만 표시

## 주요 기능

### 검색 기능
- 제목, 설명, 태그 기반 실시간 필터링
- 대소문자 무시 검색
- 검색 결과 없음 메시지

### 카테고리 네비게이션
- '전체' + 10개 섹션 탭
- 활성 탭 하이라이트
- 부드러운 전환 효과

### 코드 스니펫
- 20개 카테고리, 130+ 패턴
- 아코디언 스타일 UI
- 복사 버튼 (clipboard API)
- Stack Overflow 실전 이슈 포함

### 반응형 디자인
- 모바일/태블릿/데스크톱 최적화
- Tailwind CSS 유틸리티 클래스
- 그라디언트 배경 및 유리 모피즘 효과

## 기술 세부사항

### 빌드 정보
- **번들 크기**: 199.22 kB JS (62.92 kB gzipped)
- **CSS 크기**: 18.31 kB (4.10 kB gzipped)
- **빌드 도구**: Vite 4.5.14
- **빌드 시간**: ~1초

### GitHub Actions 배포
- **트리거**: main 브랜치 push
- **환경**: Node.js 18, ubuntu-latest
- **배포 시간**: ~30초
- **URL**: https://jeonck.github.io/react-hub/

### 의존성
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "vite": "^4.4.5",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24"
  }
}
```

## 해결한 문제들

### 1. 이모지 인코딩 오류
- **증상**: "� 시작하기" 같은 깨진 문자 표시
- **원인**: UTF-8 인코딩 및 한글 환경에서 이모지 처리 문제
- **해결**: 완전한 이모지 제거 전략

### 2. 네비게이션 접근성
- **증상**: 카테고리 버튼이 너무 아래에 위치
- **원인**: 컴포넌트 배치 순서
- **해결**: Navigation을 QuickStart 위로 이동

### 3. 코드 스니펫 가시성
- **증상**: 다른 카테고리 선택 시 스니펫 사라짐
- **원인**: `activeSection === 'all'` 조건
- **해결**: 조건 제거, 항상 표시

### 4. Git 경로 문제
- **증상**: `fatal: pathspec 'README.md' did not match any files`
- **원인**: react-app/ 서브디렉토리에서 실행
- **해결**: `cd ..` 후 git 명령 실행

## 커밋 히스토리

1. `feat: Initial project setup` - 초기 Vite+React+Tailwind 설정
2. `feat: Add 10 learning sections with 80+ resources` - 학습 리소스 추가
3. `fix: Remove emojis to fix encoding issues` - 이모지 제거
4. `feat: Add Quick Start guide and code snippets` - 빠른 시작 가이드
5. `feat: Move Navigation above QuickStart for better UX` - UX 개선
6. `feat: Double code snippets - 16 categories, 100+ patterns` - 스니펫 2배 확장
7. `docs: Add comprehensive README.md` - 문서화
8. `feat: Add Stack Overflow common issues (2024) - 4 new categories` - SO 이슈 추가
9. `fix: Show code snippets on all category tabs` - 스니펫 접근성 개선

## 최신 리소스 출처

- [React 공식 문서](https://react.dev) - React 19 최신 정보
- [Vite 공식 문서](https://vitejs.dev) - 빌드 도구
- [Tailwind CSS 공식 문서](https://tailwindcss.com) - 스타일링
- [Next.js 공식 문서](https://nextjs.org) - 프레임워크
- [TanStack Query 공식 문서](https://tanstack.com/query) - 데이터 페칭
- Stack Overflow React 이슈 (2024) - 실전 문제 해결

## 향후 계획 (v2.0 로드맵)

- [ ] 다크 모드 지원
- [ ] 북마크 기능
- [ ] 사용자 커스텀 스니펫
- [ ] 코드 실행 환경 (Sandpack)
- [ ] 다국어 지원 (영어, 한국어)
- [ ] 오프라인 지원 (PWA)

## 통계

- **총 개발 시간**: ~2시간
- **커밋 수**: 13개
- **배포 횟수**: 13회
- **파일 수**: 20+
- **코드 라인**: ~3000+
- **학습 리소스**: 80+
- **코드 스니펫**: 130+
- **카테고리**: 20개

---

**마지막 업데이트**: 2025-10-01
**개발자**: [@jeonck](https://github.com/jeonck) with Claude Code
**라이센스**: MIT
