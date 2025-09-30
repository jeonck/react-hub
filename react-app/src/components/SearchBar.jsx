export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="검색: Hook, Next.js, TypeScript, 성능..."
        className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <svg
          className="w-5 h-5 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}
