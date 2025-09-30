export default function Section({ section }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{section.emoji}</span>
          <div>
            <h2 className="text-2xl font-bold text-white">
              {section.title.replace(/^[🚀📚⚡🛠️🔄🎨🧪🚢👥📈]\s*/, '')}
            </h2>
            <p className="text-blue-200/60">{section.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {section.items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 hover:bg-white/10 rounded-xl p-5 border border-white/10 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm mt-2">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
