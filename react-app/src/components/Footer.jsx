export default function Footer({ quickLinks }) {
  return (
    <footer className="mt-20 bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">⚛️ React Hub</h3>
            <p className="text-white/60 text-sm">
              리액트 개발자를 위한 종합 학습 허브입니다.
              <br />
              최신 React 19 정보와 공식 문서 기반 가이드를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-blue-300 transition-colors text-sm flex items-center gap-2"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">주요 업데이트</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>✨ React 19 정보 업데이트 (2024.12)</li>
              <li>🚀 React Compiler RC 단계</li>
              <li>⚠️ Create React App 종료 (2025.02)</li>
              <li>📦 Server Components 안정화</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            Built with ⚛️ React + ⚡ Vite + 🎨 Tailwind CSS
            <br />
            Data sources: React Official Docs (react.dev)
          </p>
        </div>
      </div>
    </footer>
  )
}
