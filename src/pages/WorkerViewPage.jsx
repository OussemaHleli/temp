import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import ContentCard from '../components/ContentCard'
import { mockDocument, mockTranslations, signLanguageCategories } from '../data/mockData'
import { 
  FunnelIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CalendarIcon,
  TagIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const WorkerViewPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredTranslations, setFilteredTranslations] = useState(mockTranslations)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Animate page elements on mount
    gsap.fromTo(
      '.worker-content',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1,
        ease: 'power3.out'
      }
    )
  }, [])

  useEffect(() => {
    // Filter translations based on search and category
    let filtered = mockTranslations

    if (searchTerm) {
      filtered = filtered.filter(
        translation =>
          translation.originalText.toLowerCase().includes(searchTerm.toLowerCase()) ||
          translation.simplifiedText.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(translation => translation.category === selectedCategory)
    }

    setFilteredTranslations(filtered)
    setCurrentIndex(0)

    // Animate filtered results
    gsap.fromTo(
      '.translation-card',
      { opacity: 0, x: 20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.1,
        ease: 'power2.out'
      }
    )
  }, [searchTerm, selectedCategory])

  const handleNext = () => {
    if (currentIndex < filteredTranslations.length - 1) {
      setCurrentIndex(currentIndex + 1)
      animateTransition()
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      animateTransition()
    }
  }

  const animateTransition = () => {
    gsap.fromTo(
      '.current-translation',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="worker-content mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <h1 className="font-poppins text-3xl font-bold text-gray-900 mb-2">
                  Document Viewer
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <DocumentTextIcon className="h-4 w-4 mr-1" />
                    {mockDocument.title}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {mockDocument.uploadDate}
                  </div>
                  <div className="flex items-center">
                    <TagIcon className="h-4 w-4 mr-1" />
                    {mockDocument.originalLanguage}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  ✓ Translated
                </div>
                <div className="text-gray-500">
                  {filteredTranslations.length} sections
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="worker-content space-y-6">
              {/* Search */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4 flex items-center">
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  Search
                </h3>
                <input
                  type="text"
                  placeholder="Search translations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4 flex items-center">
                  <FunnelIcon className="h-5 w-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === 'all'
                        ? 'bg-blue-100 text-blue-800'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    All Categories ({mockTranslations.length})
                  </button>
                  {signLanguageCategories.map((category) => {
                    const count = mockTranslations.filter(t => t.category === category.id).length
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-800'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${category.color.split(' ')[0]}`}></span>
                        {category.name} ({count})
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-4 flex items-center">
                  <EyeIcon className="h-5 w-5 mr-2" />
                  Navigation
                </h3>
                <div className="space-y-3">
                  <div className="text-sm text-gray-600 text-center">
                    {filteredTranslations.length > 0 ? (
                      <>Section {currentIndex + 1} of {filteredTranslations.length}</>
                    ) : (
                      'No translations found'
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevious}
                      disabled={currentIndex === 0 || filteredTranslations.length === 0}
                      className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 rounded-lg transition-colors duration-200"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentIndex === filteredTranslations.length - 1 || filteredTranslations.length === 0}
                      className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 rounded-lg transition-colors duration-200"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="worker-content">
              {filteredTranslations.length > 0 ? (
                <div className="current-translation">
                  <ContentCard 
                    translation={filteredTranslations[currentIndex]} 
                    index={currentIndex}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MagnifyingGlassIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">
                    No translations found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              )}
            </div>

            {/* All Translations List (Optional) */}
            {filteredTranslations.length > 1 && (
              <div className="worker-content mt-8">
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-6">
                  All Sections ({filteredTranslations.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTranslations.map((translation, index) => (
                    <button
                      key={translation.id}
                      onClick={() => {
                        setCurrentIndex(index)
                        animateTransition()
                      }}
                      className={`translation-card text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        index === currentIndex
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="font-medium text-gray-900 mb-1">
                        Section {index + 1}
                      </div>
                      <div className="text-sm text-gray-600 truncate">
                        {translation.simplifiedText}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkerViewPage
