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
  }
];
