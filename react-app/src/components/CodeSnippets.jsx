import { useState } from 'react';

export default function CodeSnippets({ snippets }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedSnippet, setExpandedSnippet] = useState(null);

  const toggleSnippet = (idx) => {
    setExpandedSnippet(expandedSnippet === idx ? null : idx);
  };

  return (
    <section className="mb-12">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-4xl">💻</span>
          자주 사용하는 코드 스니펫
        </h2>
        <p className="text-blue-200/80 mb-8">
          실무에서 바로 사용 가능한 React 코드 패턴
        </p>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {snippets.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setExpandedSnippet(null);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === idx
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.category}
            </button>
          ))}
        </div>

        {/* Snippets List */}
        <div className="space-y-4">
          {snippets[activeCategory].snippets.map((snippet, idx) => (
            <div
              key={idx}
              className="bg-black/20 rounded-xl border border-white/10 overflow-hidden"
            >
              {/* Snippet Header */}
              <button
                onClick={() => toggleSnippet(idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {snippet.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {snippet.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-1 bg-purple-500/20 text-purple-200 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-white/60">
                  {expandedSnippet === idx ? '▼' : '▶'}
                </div>
              </button>

              {/* Snippet Code */}
              {expandedSnippet === idx && (
                <div className="px-6 pb-6">
                  <div className="relative bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <pre className="text-white font-mono text-sm overflow-x-auto">
                      <code>{snippet.code}</code>
                    </pre>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(snippet.code);
                      }}
                      className="absolute top-2 right-2 px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 rounded text-xs transition-colors"
                    >
                      복사
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Usage Tips */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
          <div className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
            <span>📚</span>
            스니펫 활용 가이드
          </div>
          <ul className="space-y-2 text-blue-200/80 text-sm">
            <li>• 각 코드는 복사 버튼으로 클립보드에 복사 가능</li>
            <li>• 프로젝트에 맞게 변수명과 스타일 수정 필요</li>
            <li>• TypeScript 사용 시 타입 정의 추가 권장</li>
            <li>• 더 많은 예제: <a href="https://react.dev/reference/react" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">React 공식 API 문서</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
