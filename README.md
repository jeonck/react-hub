# React Hub

> 리액트 개발자를 위한 종합 학습 허브 - React 19 정보, 공식 문서 기반 가이드

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://jeonck.github.io/react-hub/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC)](https://tailwindcss.com)

## 🚀 Live Demo

**https://jeonck.github.io/react-hub/**

## 📋 목차

- [소개](#소개)
- [주요 기능](#주요-기능)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [기술 스택](#기술-스택)
- [콘텐츠](#콘텐츠)
- [로컬 개발](#로컬-개발)
- [배포](#배포)
- [기여하기](#기여하기)
- [라이센스](#라이센스)

## 소개

React Hub는 리액트 개발자를 위한 **올인원 학습 플랫폼**입니다. 초보자부터 전문가까지, 모든 단계의 개발자가 필요한 정보를 빠르게 찾을 수 있도록 설계되었습니다.

### 특징

- ✅ **공식 문서 기반**: React 19 최신 정보 반영 (react.dev)
- 🎯 **체계적 구성**: 10개 주요 섹션, 80+ 큐레이션된 리소스
- 💻 **100+ 코드 스니펫**: 실무에서 바로 사용 가능한 패턴
- 🚀 **빠른 시작 가이드**: Vite + React + Tailwind 4단계 튜토리얼
- 🔍 **실시간 검색**: 제목, 설명, 태그 기반 필터링
- 📱 **반응형 디자인**: 모바일/태블릿/데스크톱 최적화

## 주요 기능

### 1. 빠르게 시작하기

4단계 인터랙티브 튜토리얼로 Vite + React + Tailwind 프로젝트를 5분 안에 시작하세요.

- Step 1: Vite로 React 프로젝트 생성
- Step 2: Tailwind CSS 설치 및 설정
- Step 3: 프로젝트 실행 및 빌드
- Step 4: 첫 번째 컴포넌트 만들기

### 2. 코드 스니펫 (16개 카테고리, 100+ 패턴)

실무에서 자주 사용하는 React 패턴을 복사-붙여넣기로 바로 사용하세요.

**카테고리:**
- State 관리 (useState, useReducer)
- Side Effects (useEffect, cleanup)
- 폼 처리 (제어 컴포넌트)
- 리스트 렌더링 (map, keys)
- 조건부 렌더링 (4가지 패턴)
- 커스텀 훅 (useLocalStorage, useFetch)
- Context API (전역 상태)
- 성능 최적화 (memo, useMemo, useCallback)
- Refs & DOM (useRef, forwardRef)
- 에러 처리 (Error Boundary, try-catch)
- 라우팅 (React Router v6)
- 데이터 페칭 (TanStack Query)
- 애니메이션 (Framer Motion)
- 인증 패턴 (Protected Route)
- 무한 스크롤 (Intersection Observer)
- 디바운스 & 쓰로틀

### 3. 학습 리소스 (10개 섹션)

**섹션 구성:**
1. 🚀 시작하기 - 리액트 입문 가이드
2. 📚 핵심 개념 - JSX, Hooks, State, Effects
3. ⚡ 고급 주제 - React 19, Compiler, 성능 최적화
4. 🛠️ 프레임워크 & 도구 - Next.js, Remix, Vite
5. 🔄 상태 관리 - Context API, Redux, Zustand
6. 🎨 스타일링 - Tailwind CSS, CSS Modules
7. 🧪 테스팅 - React Testing Library, Vitest
8. 🚢 배포 - Vercel, Netlify, GitHub Pages
9. 👥 커뮤니티 - 공식 문서, React Conf, Discord
10. 📈 최신 트렌드 - React 19, Server Components, CRA 종료

## 시작하기

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/jeonck/react-hub.git

# 디렉토리 이동
cd react-hub/react-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 열기

## 프로젝트 구조

```
react-hub/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 자동 배포
├── react-app/                  # 메인 애플리케이션
│   ├── src/
│   │   ├── components/         # React 컴포넌트
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── QuickStart.jsx
│   │   │   ├── CodeSnippets.jsx
│   │   │   ├── Section.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/               # 데이터 소스
│   │   │   ├── sections.js     # 학습 리소스 (10개 섹션)
│   │   │   └── quickstart.js   # 빠른 시작 & 코드 스니펫
│   │   ├── App.jsx             # 메인 앱
│   │   ├── main.jsx            # 진입점
│   │   └── index.css           # Tailwind 스타일
│   ├── public/
│   │   └── vite.svg            # Favicon
│   ├── index.html              # HTML 템플릿
│   ├── package.json            # 의존성
│   ├── vite.config.js          # Vite 설정
│   ├── tailwind.config.js      # Tailwind 설정
│   └── postcss.config.js       # PostCSS 설정
├── CLAUDE.md                   # 프로젝트 문서
└── README.md
```

## 기술 스택

### 프론트엔드

- **React 18.2.0** - UI 라이브러리
- **Vite 4.4.5** - 빌드 도구 (Create React App 대체)
- **Tailwind CSS 3.3.0** - Utility-first CSS 프레임워크

### 개발 도구

- **ESLint** - 코드 품질
- **PostCSS** - CSS 전처리
- **Autoprefixer** - CSS 호환성

### 배포

- **GitHub Pages** - 정적 호스팅
- **GitHub Actions** - CI/CD 자동 배포

## 콘텐츠

### 데이터 소스

모든 콘텐츠는 **공식 문서**를 기반으로 작성되었습니다:

- [React 공식 문서](https://react.dev) - React 19 최신 정보
- [Vite 공식 문서](https://vitejs.dev) - 빌드 도구
- [Tailwind CSS 공식 문서](https://tailwindcss.com) - 스타일링
- [Next.js 공식 문서](https://nextjs.org) - 프레임워크
- [TanStack Query 공식 문서](https://tanstack.com/query) - 데이터 페칭

### 최신 정보 반영

- ✅ React 19 신기능 (Server Components, Actions, Compiler)
- ✅ Create React App 종료 안내 (2025년 2월)
- ✅ Vite 공식 권장
- ✅ React Compiler RC 단계

## 로컬 개발

### 개발 서버 실행

```bash
cd react-app
npm run dev
```

- Local: http://localhost:5173
- HMR (Hot Module Replacement) 지원
- 코드 변경 시 자동 새로고침

### 프로덕션 빌드

```bash
npm run build
```

- 결과물: `dist/` 폴더
- 최적화된 번들
- Gzip 압축

### 빌드 미리보기

```bash
npm run preview
```

- Local: http://localhost:4173/react-hub/
- 프로덕션 환경 시뮬레이션

## 배포

### GitHub Pages 자동 배포

이 프로젝트는 **GitHub Actions**를 사용하여 자동으로 배포됩니다.

**배포 트리거:**
- `main` 브랜치에 push 시 자동 배포
- 수동 트리거 가능 (workflow_dispatch)

**배포 과정:**
1. 코드 체크아웃
2. Node.js 18 설정
3. 의존성 설치 (`npm ci`)
4. 프로덕션 빌드 (`npm run build`)
5. GitHub Pages에 배포

**배포 설정:**
- Repository Settings → Pages
- Source: GitHub Actions
- URL: https://jeonck.github.io/react-hub/

### 수동 배포

```bash
# 빌드
npm run build

# dist/ 폴더를 원하는 호스팅 서비스에 배포
# 예: Vercel, Netlify, Cloudflare Pages
```

## 기여하기

기여를 환영합니다! 다음과 같은 방법으로 기여할 수 있습니다:

### 버그 리포트

Issue를 열어 버그를 신고해주세요:
- 예상 동작
- 실제 동작
- 재현 단계
- 스크린샷 (선택 사항)

### 기능 제안

새로운 기능이나 개선 사항을 제안해주세요:
- 제안 내용
- 사용 사례
- 예상 효과

### Pull Request

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 콘텐츠 업데이트

- 잘못된 정보 수정
- 새로운 리소스 추가
- 코드 스니펫 개선
- 번역 및 다국어 지원

## 로드맵

### v2.0 계획

- [ ] 다크 모드 지원
- [ ] 북마크 기능
- [ ] 사용자 커스텀 스니펫
- [ ] 코드 실행 환경 (Sandpack)
- [ ] 다국어 지원 (영어, 한국어)
- [ ] 오프라인 지원 (PWA)

## 라이센스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 크레딧

### 데이터 소스
- [React Official Documentation](https://react.dev)
- [Vite Official Documentation](https://vitejs.dev)
- [Tailwind CSS Official Documentation](https://tailwindcss.com)

### 제작
- Built with ⚛️ React + ⚡ Vite + 🎨 Tailwind CSS
- Deployed on GitHub Pages
- Created by [@jeonck](https://github.com/jeonck)

## 문의

- GitHub: [@jeonck](https://github.com/jeonck)
- Issues: [GitHub Issues](https://github.com/jeonck/react-hub/issues)

---

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**
