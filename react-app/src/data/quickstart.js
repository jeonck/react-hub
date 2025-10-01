export const quickStartSteps = [
  {
    step: 1,
    title: 'Vite로 React 프로젝트 생성',
    description: 'Create React App 대신 Vite 사용 (공식 권장, 2025.02부터 CRA 종료)',
    commands: [
      {
        label: 'npm으로 생성',
        code: 'npm create vite@latest my-react-app -- --template react',
        language: 'bash'
      },
      {
        label: 'TypeScript 템플릿',
        code: 'npm create vite@latest my-react-app -- --template react-ts',
        language: 'bash'
      }
    ],
    tips: [
      '⚡ Vite는 빠른 HMR(Hot Module Replacement) 제공',
      '📦 번들 크기 최적화 자동 지원',
      '🚀 프로덕션 빌드 속도 향상'
    ]
  },
  {
    step: 2,
    title: 'Tailwind CSS 설치 및 설정',
    description: 'Utility-first CSS 프레임워크로 빠른 스타일링',
    commands: [
      {
        label: '의존성 설치',
        code: 'npm install -D tailwindcss postcss autoprefixer',
        language: 'bash'
      },
      {
        label: 'Tailwind 초기화',
        code: 'npx tailwindcss init -p',
        language: 'bash'
      },
      {
        label: 'tailwind.config.js 설정',
        code: `export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
        language: 'javascript'
      },
      {
        label: 'src/index.css에 Tailwind 추가',
        code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        language: 'css'
      }
    ],
    tips: [
      '🎨 VS Code Extension: Tailwind CSS IntelliSense 설치 권장',
      '📖 공식 문서: tailwindcss.com/docs',
      '💡 Prettier Plugin으로 클래스명 자동 정렬 가능'
    ]
  },
  {
    step: 3,
    title: '프로젝트 실행 및 빌드',
    description: '개발 서버 시작 및 프로덕션 빌드',
    commands: [
      {
        label: '프로젝트 디렉토리로 이동',
        code: 'cd my-react-app',
        language: 'bash'
      },
      {
        label: '의존성 설치',
        code: 'npm install',
        language: 'bash'
      },
      {
        label: '개발 서버 실행',
        code: 'npm run dev',
        language: 'bash',
        result: '➜ Local: http://localhost:5173/'
      },
      {
        label: '프로덕션 빌드',
        code: 'npm run build',
        language: 'bash',
        result: '✓ dist/ 폴더에 최적화된 파일 생성'
      },
      {
        label: '빌드 미리보기',
        code: 'npm run preview',
        language: 'bash',
        result: '➜ Local: http://localhost:4173/'
      }
    ],
    tips: [
      '🔥 HMR로 코드 변경 시 자동 새로고침',
      '📦 dist/ 폴더를 Vercel, Netlify 등에 배포',
      '⚙️ vite.config.js로 빌드 옵션 커스터마이징'
    ]
  },
  {
    step: 4,
    title: '첫 번째 컴포넌트 만들기',
    description: 'Tailwind CSS를 활용한 React 컴포넌트',
    commands: [
      {
        label: 'src/App.jsx',
        code: `function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Hello, React!
        </h1>
        <p className="text-gray-600">
          Vite + React + Tailwind CSS로 시작하기
        </p>
      </div>
    </div>
  )
}

export default App`,
        language: 'jsx'
      }
    ],
    tips: [
      '📐 Tailwind의 Flexbox/Grid 유틸리티로 레이아웃 구성',
      '🎨 color palette: blue-500, gray-800 등',
      '📱 반응형: sm:, md:, lg: 접두사 사용'
    ]
  }
];

export const essentialSnippets = [
  {
    category: 'State 관리',
    icon: '🔄',
    snippets: [
      {
        title: 'useState - 간단한 상태',
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <p className="text-xl mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}`,
        tags: ['useState', 'hook', '기본']
      },
      {
        title: 'useReducer - 복잡한 상태',
        code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="space-x-2">
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}`,
        tags: ['useReducer', 'hook', '고급']
      }
    ]
  },
  {
    category: 'Side Effects',
    icon: '⚡',
    snippets: [
      {
        title: 'useEffect - 데이터 페칭',
        code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(\`/api/users/\${userId}\`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // userId 변경 시 재실행

  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
}`,
        tags: ['useEffect', 'fetch', '비동기']
      },
      {
        title: 'useEffect - 클린업',
        code: `import { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
    }, 1000);

    // 클린업 함수: 컴포넌트 언마운트 시 실행
    return () => clearInterval(interval);
  }, []); // 빈 배열: 마운트 시 한 번만 실행

  return <div>Timer running...</div>;
}`,
        tags: ['useEffect', 'cleanup', '타이머']
      }
    ]
  },
  {
    category: '폼 처리',
    icon: '📝',
    snippets: [
      {
        title: '제어 컴포넌트 (Controlled)',
        code: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}`,
        tags: ['form', 'controlled', 'useState']
      }
    ]
  },
  {
    category: '리스트 렌더링',
    icon: '📋',
    snippets: [
      {
        title: 'map()으로 리스트 렌더링',
        code: `function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build a project', done: false },
    { id: 3, text: 'Deploy to production', done: false }
  ];

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={\`p-3 rounded \${
            todo.done ? 'bg-green-100' : 'bg-gray-100'
          }\`}
        >
          <span className={\`\${todo.done ? 'line-through' : ''}\`}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}`,
        tags: ['map', 'key', 'list']
      }
    ]
  },
  {
    category: '조건부 렌더링',
    icon: '🔀',
    snippets: [
      {
        title: '여러 조건부 렌더링 패턴',
        code: `function StatusMessage({ status, user }) {
  // 1. && 연산자
  if (!user) {
    return <div>Please log in</div>;
  }

  // 2. 삼항 연산자
  return (
    <div>
      {status === 'loading' ? (
        <Spinner />
      ) : (
        <Content />
      )}

      {/* 3. && 조건부 렌더링 */}
      {user.isAdmin && <AdminPanel />}

      {/* 4. 즉시 실행 함수 */}
      {(() => {
        switch (status) {
          case 'idle': return <IdleState />;
          case 'loading': return <LoadingState />;
          case 'success': return <SuccessState />;
          case 'error': return <ErrorState />;
          default: return null;
        }
      })()}
    </div>
  );
}`,
        tags: ['conditional', 'rendering', 'pattern']
      }
    ]
  },
  {
    category: '커스텀 훅',
    icon: '🎣',
    snippets: [
      {
        title: 'useLocalStorage - 로컬 스토리지 동기화',
        code: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}

// 사용 예시
function App() {
  const [name, setName] = useLocalStorage('name', 'Guest');

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}`,
        tags: ['custom hook', 'localStorage', '재사용']
      },
      {
        title: 'useFetch - 데이터 페칭 훅',
        code: `import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network error');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// 사용 예시
function Users() {
  const { data, loading, error } = useFetch('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{data?.map(user => <div key={user.id}>{user.name}</div>)}</div>;
}`,
        tags: ['custom hook', 'fetch', 'async']
      }
    ]
  },
  {
    category: 'Context API',
    icon: '🌐',
    snippets: [
      {
        title: 'Context로 전역 상태 관리',
        code: `import { createContext, useContext, useState } from 'react';

// 1. Context 생성
const ThemeContext = createContext();

// 2. Provider 컴포넌트
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 커스텀 훅
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. 사용 예시
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={\`\${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}\`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}`,
        tags: ['Context', 'global state', 'provider']
      }
    ]
  },
  {
    category: '성능 최적화',
    icon: '⚡',
    snippets: [
      {
        title: 'React.memo - 불필요한 리렌더링 방지',
        code: `import { memo } from 'react';

// 무거운 컴포넌트 (props가 같으면 리렌더링 안 함)
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
});

// 커스텀 비교 함수
const UserCard = memo(
  function UserCard({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // true 반환 시 리렌더링 생략
    return prevProps.user.id === nextProps.user.id;
  }
);`,
        tags: ['memo', '최적화', 'performance']
      },
      {
        title: 'useMemo & useCallback',
        code: `import { useState, useMemo, useCallback } from 'react';

function SearchList({ items }) {
  const [query, setQuery] = useState('');

  // 비용이 큰 계산 메모이제이션
  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]); // items나 query 변경 시만 재계산

  // 함수 메모이제이션
  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []); // 의존성 없음, 함수는 항상 동일

  return (
    <div>
      <input
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {filteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`,
        tags: ['useMemo', 'useCallback', '최적화']
      }
    ]
  },
  {
    category: 'Tailwind 패턴',
    icon: '🎨',
    snippets: [
      {
        title: '버튼 컴포넌트 (variants)',
        code: `function Button({ variant = 'primary', children, ...props }) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 사용 예시
<Button variant="primary">Save</Button>
<Button variant="danger">Delete</Button>`,
        tags: ['Tailwind', 'button', 'component']
      },
      {
        title: '카드 레이아웃',
        code: `function Card({ title, description, image, tags }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}`,
        tags: ['Tailwind', 'card', 'layout']
      }
    ]
  },
  {
    category: 'Refs & DOM',
    icon: '🎯',
    snippets: [
      {
        title: 'useRef - DOM 조작',
        code: `import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // 컴포넌트 마운트 시 input에 포커스
    inputRef.current?.focus();
  }, []);

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}`,
        tags: ['useRef', 'DOM', 'focus']
      },
      {
        title: 'forwardRef - Ref 전달',
        code: `import { forwardRef } from 'react';

const CustomInput = forwardRef(function CustomInput(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className="px-4 py-2 border rounded"
    />
  );
});

// 사용 예시
function Parent() {
  const inputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}`,
        tags: ['forwardRef', 'ref', 'component']
      }
    ]
  },
  {
    category: '에러 처리',
    icon: '🛡️',
    snippets: [
      {
        title: 'Error Boundary',
        code: `import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // 에러 로깅 서비스로 전송 (예: Sentry)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 rounded">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-red-500">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// 사용 예시
<ErrorBoundary>
  <App />
</ErrorBoundary>`,
        tags: ['Error Boundary', '에러', 'class component']
      },
      {
        title: 'try-catch 패턴',
        code: `import { useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/data');

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <div className="text-red-500">Error: {error}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}`,
        tags: ['try-catch', '에러 처리', 'async']
      }
    ]
  },
  {
    category: '라우팅 (React Router)',
    icon: '🛣️',
    snippets: [
      {
        title: 'React Router v6 기본 설정',
        code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`,
        tags: ['React Router', '라우팅', 'v6']
      },
      {
        title: 'useNavigate & useParams',
        code: `import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams(); // URL 파라미터
  const navigate = useNavigate(); // 프로그래밍 방식 네비게이션

  const handleBack = () => {
    navigate(-1); // 이전 페이지
  };

  const handleHome = () => {
    navigate('/', { replace: true }); // 히스토리 교체
  };

  return (
    <div>
      <h1>User ID: {id}</h1>
      <button onClick={handleBack}>Go Back</button>
      <button onClick={handleHome}>Go Home</button>
    </div>
  );
}`,
        tags: ['useNavigate', 'useParams', 'navigation']
      }
    ]
  },
  {
    category: '데이터 페칭 (TanStack Query)',
    icon: '🔄',
    snippets: [
      {
        title: 'useQuery 기본 사용',
        code: `import { useQuery } from '@tanstack/react-query';

function UserList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // 5분
    cacheTime: 10 * 60 * 1000, // 10분
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`,
        tags: ['TanStack Query', 'useQuery', 'fetch']
      },
      {
        title: 'useMutation - 데이터 변경',
        code: `import { useMutation, useQueryClient } from '@tanstack/react-query';

function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newUser) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      return res.json();
    },
    onSuccess: () => {
      // 성공 시 캐시 무효화 및 재페칭
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name: 'New User' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create User'}
      </button>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
    </form>
  );
}`,
        tags: ['useMutation', 'POST', 'cache']
      }
    ]
  },
  {
    category: '애니메이션',
    icon: '✨',
    snippets: [
      {
        title: 'Framer Motion - 기본 애니메이션',
        code: `import { motion } from 'framer-motion';

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="w-32 h-32 bg-blue-500"
    />
  );
}

function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}`,
        tags: ['Framer Motion', 'animation', 'transition']
      },
      {
        title: 'CSS Transition 훅',
        code: `import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}

function Accordion() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <div
        className={\`overflow-hidden transition-all duration-300 \${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }\`}
      >
        <p className="p-4">Accordion content here...</p>
      </div>
    </div>
  );
}`,
        tags: ['CSS', 'transition', 'accordion']
      }
    ]
  },
  {
    category: '인증 패턴',
    icon: '🔐',
    snippets: [
      {
        title: 'Protected Route',
        code: `import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
}

// 사용 예시
<Routes>
  <Route path="/login" element={<Login />} />
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute isAuthenticated={user !== null}>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>`,
        tags: ['auth', 'protected route', 'router']
      },
      {
        title: 'Auth Context',
        code: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}`,
        tags: ['auth', 'context', 'login']
      }
    ]
  },
  {
    category: '무한 스크롤',
    icon: '♾️',
    snippets: [
      {
        title: 'Intersection Observer',
        code: `import { useEffect, useRef, useState } from 'react';

function useInfiniteScroll(callback) {
  const observer = useRef(null);
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    if (node) observer.current.observe(node);

    return () => observer.current?.disconnect();
  }, [node, callback]);

  return setNode;
}

// 사용 예시
function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    fetch(\`/api/items?page=\${page}\`)
      .then(res => res.json())
      .then(data => {
        setItems(prev => [...prev, ...data]);
        setPage(p => p + 1);
      });
  };

  const lastItemRef = useInfiniteScroll(loadMore);

  return (
    <div>
      {items.map((item, idx) => (
        <div
          key={item.id}
          ref={idx === items.length - 1 ? lastItemRef : null}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}`,
        tags: ['infinite scroll', 'observer', 'pagination']
      }
    ]
  },
  {
    category: '디바운스 & 쓰로틀',
    icon: '⏱️',
    snippets: [
      {
        title: 'useDebounce 훅',
        code: `import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// 사용 예시 - 검색
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // API 호출은 500ms 후에만 실행
      fetch(\`/api/search?q=\${debouncedSearch}\`);
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`,
        tags: ['debounce', 'performance', 'search']
      },
      {
        title: 'useThrottle 훅',
        code: `import { useRef, useCallback } from 'react';

function useThrottle(callback, delay = 1000) {
  const lastRun = useRef(Date.now());

  return useCallback((...args) => {
    const now = Date.now();

    if (now - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = now;
    }
  }, [callback, delay]);
}

// 사용 예시 - 스크롤 이벤트
function ScrollTracker() {
  const handleScroll = useThrottle(() => {
    console.log('Scroll position:', window.scrollY);
  }, 1000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return <div>Scroll to see throttled logs</div>;
}`,
        tags: ['throttle', 'performance', 'scroll']
      }
    ]
  },
  {
    category: 'useState 흔한 실수',
    icon: '⚠️',
    snippets: [
      {
        title: '비동기 State 업데이트 문제',
        code: `import { useState } from 'react';

// ❌ 잘못된 방법 - 이전 값 기반 업데이트
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // ❌ 이전 state 직접 참조
    setCount(count + 1); // ❌ 여전히 0 + 1 = 1
    console.log(count); // ❌ 아직 0 (비동기)
  };

  return <button onClick={handleClick}>{count}</button>;
}

// ✅ 올바른 방법 - 함수형 업데이트
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1); // ✅ 이전 값 기반
    setCount(prev => prev + 1); // ✅ 정확히 2 증가
    // 즉시 확인이 필요하면 useEffect 사용
  };

  return <button onClick={handleClick}>{count}</button>;
}`,
        tags: ['useState', '비동기', '함수형 업데이트']
      },
      {
        title: 'State 직접 변경 (Mutation) 문제',
        code: `import { useState } from 'react';

// ❌ 잘못된 방법 - 객체/배열 직접 변경
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    todos.push({ id: Date.now(), text }); // ❌ 직접 변경
    setTodos(todos); // ❌ React가 감지 못함
  };

  return <div>{todos.length} todos</div>;
}

// ✅ 올바른 방법 - 새 배열/객체 생성
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos(prev => [...prev, { id: Date.now(), text }]); // ✅ 새 배열
  };

  const updateTodo = (id, newText) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo // ✅ 새 객체
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id)); // ✅ 새 배열
  };

  return <div>{todos.length} todos</div>;
}`,
        tags: ['useState', 'immutable', '배열', '객체']
      },
      {
        title: 'Stale Closure 문제',
        code: `import { useState, useEffect } from 'react';

// ❌ 잘못된 방법 - Stale Closure
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1); // ❌ 항상 0 + 1 = 1
    }, 1000);

    return () => clearInterval(interval);
  }, []); // ❌ 빈 의존성 배열

  return <div>{count}</div>;
}

// ✅ 해결책 1: 함수형 업데이트
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1); // ✅ 최신 값 사용
    }, 1000);

    return () => clearInterval(interval);
  }, []); // ✅ 의존성 없어도 동작

  return <div>{count}</div>;
}

// ✅ 해결책 2: useRef 사용
function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count; // 항상 최신 값 유지
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Current count:', countRef.current); // ✅ 최신 값
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
}`,
        tags: ['closure', 'useEffect', 'useRef']
      }
    ]
  },
  {
    category: 'useEffect 흔한 실수',
    icon: '🔄',
    snippets: [
      {
        title: '의존성 배열 누락',
        code: `import { useState, useEffect } from 'react';

// ❌ 잘못된 방법 - 의존성 누락
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, []); // ❌ userId 의존성 누락 - userId 변경 시 업데이트 안 됨

  return <div>{user?.name}</div>;
}

// ✅ 올바른 방법 - 모든 의존성 포함
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // ✅ userId 포함 - 변경 시 재실행

  if (loading) return <div>Loading...</div>;
  return <div>{user?.name}</div>;
}`,
        tags: ['useEffect', 'dependencies', 'fetch']
      },
      {
        title: 'Race Condition (경쟁 상태)',
        code: `import { useState, useEffect } from 'react';

// ❌ 잘못된 방법 - Race Condition
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(setResults); // ❌ 이전 요청 결과가 나중에 도착하면 덮어씀
  }, [query]);

  return <div>{results.length} results</div>;
}

// ✅ 해결책 1: AbortController 사용
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(\`/api/search?q=\${query}\`, {
      signal: controller.signal // ✅ 취소 가능
    })
      .then(res => res.json())
      .then(setResults)
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        }
      });

    return () => controller.abort(); // ✅ 이전 요청 취소
  }, [query]);

  return <div>{results.length} results</div>;
}

// ✅ 해결책 2: 무시 플래그
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch(\`/api/search?q=\${query}\`)
      .then(res => res.json())
      .then(data => {
        if (!ignore) { // ✅ 최신 요청만 반영
          setResults(data);
        }
      });

    return () => {
      ignore = true; // ✅ 이전 요청 무시
    };
  }, [query]);

  return <div>{results.length} results</div>;
}`,
        tags: ['race condition', 'AbortController', 'fetch']
      },
      {
        title: '무한 루프 문제',
        code: `import { useState, useEffect } from 'react';

// ❌ 잘못된 방법 - 무한 루프
function InfiniteLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // ❌ count 변경 → 리렌더 → useEffect 재실행 → 무한 루프
  }); // ❌ 의존성 배열 없음 - 매 렌더마다 실행

  return <div>{count}</div>;
}

// ❌ 또 다른 실수 - 객체/배열 의존성
function InfiniteLoop2() {
  const [data, setData] = useState([]);
  const options = { page: 1 }; // ❌ 매 렌더마다 새 객체

  useEffect(() => {
    fetch(\`/api/data?page=\${options.page}\`)
      .then(res => res.json())
      .then(setData);
  }, [options]); // ❌ options는 항상 다른 객체 - 무한 루프

  return <div>{data.length}</div>;
}

// ✅ 해결책 1: 빈 의존성 배열
function Fixed1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1); // ✅ 마운트 시 한 번만
  }, []); // ✅ 빈 배열 - 한 번만 실행

  return <div>{count}</div>;
}

// ✅ 해결책 2: 원시 값 의존성
function Fixed2() {
  const [data, setData] = useState([]);
  const page = 1; // ✅ 원시 값

  useEffect(() => {
    fetch(\`/api/data?page=\${page}\`)
      .then(res => res.json())
      .then(setData);
  }, [page]); // ✅ 원시 값 - 안전

  return <div>{data.length}</div>;
}

// ✅ 해결책 3: useMemo로 객체 메모이제이션
function Fixed3() {
  const [data, setData] = useState([]);
  const options = useMemo(() => ({ page: 1 }), []); // ✅ 메모이제이션

  useEffect(() => {
    fetch(\`/api/data?page=\${options.page}\`)
      .then(res => res.json())
      .then(setData);
  }, [options]); // ✅ 같은 객체 참조

  return <div>{data.length}</div>;
}`,
        tags: ['infinite loop', '무한 루프', 'dependencies']
      }
    ]
  },
  {
    category: 'Hydration 에러 (Next.js)',
    icon: '💧',
    snippets: [
      {
        title: 'Date/Time 불일치 문제',
        code: `import { useState, useEffect } from 'react';

// ❌ 잘못된 방법 - 서버/클라이언트 시간 불일치
function CurrentTime() {
  return (
    <div>
      Current time: {new Date().toLocaleTimeString()} {/* ❌ Hydration 에러 */}
    </div>
  );
}

// ✅ 해결책 1: useEffect로 클라이언트 전용 렌더링
function CurrentTime() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString()); // ✅ 클라이언트에서만

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      Current time: {time || 'Loading...'} {/* ✅ SSR 시 기본값 */}
    </div>
  );
}

// ✅ 해결책 2: suppressHydrationWarning 사용 (조심스럽게)
function CurrentTime() {
  return (
    <div suppressHydrationWarning>
      Current time: {new Date().toLocaleTimeString()}
    </div>
  );
}`,
        tags: ['hydration', 'Next.js', 'Date']
      },
      {
        title: 'Browser API 사용 문제',
        code: `// ❌ 잘못된 방법 - window/localStorage 직접 사용
function UserPreference() {
  const theme = localStorage.getItem('theme') || 'light'; // ❌ SSR 시 에러

  return <div className={theme}>Theme: {theme}</div>;
}

// ✅ 해결책 1: useEffect 사용
function UserPreference() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return <div className={theme}>Theme: {theme}</div>;
}

// ✅ 해결책 2: typeof window 체크
function UserPreference() {
  const theme = typeof window !== 'undefined'
    ? localStorage.getItem('theme') || 'light'
    : 'light'; // ✅ SSR 기본값

  return <div className={theme}>Theme: {theme}</div>;
}

// ✅ 해결책 3: Next.js dynamic import (ssr: false)
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false } // ✅ SSR 비활성화
);

function Page() {
  return <ClientOnlyComponent />;
}`,
        tags: ['hydration', 'localStorage', 'window', 'Next.js']
      },
      {
        title: 'HTML 중첩 오류',
        code: `// ❌ 잘못된 방법 - 잘못된 HTML 중첩
function BadNesting() {
  return (
    <div>
      {/* ❌ <p> 안에 <div> 불가 */}
      <p>
        <div>This is wrong</div>
      </p>

      {/* ❌ <a> 안에 <a> 불가 */}
      <a href="/outer">
        <a href="/inner">Click</a>
      </a>

      {/* ❌ <button> 안에 <button> 불가 */}
      <button>
        <button>Click</button>
      </button>
    </div>
  );
}

// ✅ 올바른 방법 - 올바른 HTML 구조
function GoodNesting() {
  return (
    <div>
      {/* ✅ <div> 안에 <div> */}
      <div>
        <div>This is correct</div>
      </div>

      {/* ✅ 중첩 없이 별도 링크 */}
      <div>
        <a href="/outer">Outer Link</a>
        <a href="/inner">Inner Link</a>
      </div>

      {/* ✅ <span>이나 <div>로 스타일링 */}
      <button onClick={() => {}}>
        <span className="button-content">Click</span>
      </button>
    </div>
  );
}`,
        tags: ['hydration', 'HTML', 'nesting']
      }
    ]
  },
  {
    category: 'TypeScript 타입 문제',
    icon: '🔷',
    snippets: [
      {
        title: 'Event 타입 지정',
        code: `import { ChangeEvent, FormEvent, MouseEvent } from 'react';

// ❌ 잘못된 방법 - any 사용
function Form() {
  const handleChange = (e: any) => { // ❌ any
    console.log(e.target.value);
  };

  const handleSubmit = (e: any) => { // ❌ any
    e.preventDefault();
  };

  return <form onSubmit={handleSubmit}>...</form>;
}

// ✅ 올바른 방법 - 정확한 타입
function Form() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { // ✅
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { // ✅
    e.preventDefault();
    console.log('Submitted:', value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => { // ✅
    console.log('Clicked at:', e.clientX, e.clientY);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>Submit</button>
    </form>
  );
}`,
        tags: ['TypeScript', 'event', 'type']
      },
      {
        title: 'Props 타입 정의',
        code: `import { ReactNode, FC } from 'react';

// ❌ 잘못된 방법 - 타입 없음
function Button({ children, onClick, variant }) { // ❌
  return <button onClick={onClick}>{children}</button>;
}

// ✅ 방법 1: interface 사용
interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary'; // optional
  disabled?: boolean;
}

function Button({ children, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

// ✅ 방법 2: type 사용
type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return <button onClick={onClick}>{children}</button>;
};

// ✅ 방법 3: inline type
function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return <button onClick={onClick}>{children}</button>;
}`,
        tags: ['TypeScript', 'props', 'interface']
      },
      {
        title: 'useState 제네릭 타입',
        code: `import { useState } from 'react';

// ❌ 타입 추론에만 의존
function UserProfile() {
  const [user, setUser] = useState(null); // ❌ null 타입만

  // 에러: user가 null일 수 있음
  return <div>{user.name}</div>;
}

// ✅ 올바른 방법 - 제네릭 타입
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null); // ✅ Union 타입

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then((data: User) => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return <div>{user.name}</div>; // ✅ 타입 안전
}

// ✅ 초기값으로 타입 추론
function Counter() {
  const [count, setCount] = useState(0); // ✅ number로 추론
  const [items, setItems] = useState<string[]>([]); // ✅ 빈 배열은 명시 필요

  return <div>{count}</div>;
}`,
        tags: ['TypeScript', 'useState', 'generic']
      }
    ]
  }
];
