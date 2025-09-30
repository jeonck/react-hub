import { useState } from 'react'
import { sections, featuredResources, quickLinks } from './data/sections'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Section from './components/Section'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSections = sections.filter(section => {
    if (activeSection !== 'all' && section.id !== activeSection) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query) ||
        section.items.some(item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
        )
      )
    }
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Navigation
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className="mt-12 space-y-12">
          {filteredSections.map(section => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {searchQuery && filteredSections.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">
              "{searchQuery}"에 대한 검색 결과가 없습니다.
            </p>
          </div>
        )}
      </div>

      <Footer quickLinks={quickLinks} />
    </div>
  )
}

export default App
