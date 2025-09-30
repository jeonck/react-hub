export default function Header() {
  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-4xl">⚛️</span>
              React Hub
            </h1>
            <p className="text-blue-200/80 mt-1">
              리액트 개발자를 위한 종합 가이드 · React 19 Ready
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-100 rounded-lg transition-colors border border-blue-400/30"
            >
              공식 문서
            </a>
            <a
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
