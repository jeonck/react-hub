export default function Navigation({ sections, activeSection, setActiveSection }) {
  return (
    <nav className="mt-8">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setActiveSection('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeSection === 'all'
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          전체
        </button>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeSection === section.id
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            <span className="mr-2">{section.emoji}</span>
            {section.title.replace(/^[🚀📚⚡🛠️🔄🎨🧪🚢👥📈]\s*/, '')}
          </button>
        ))}
      </div>
    </nav>
  )
}
