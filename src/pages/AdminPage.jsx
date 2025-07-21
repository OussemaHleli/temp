import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import FileUpload from '../components/FileUpload'
import Loading from '../components/Loading'
import ContentCard from '../components/ContentCard'
import { supportedLanguages, mockTranslations } from '../data/mockData'
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  DocumentTextIcon,
  LanguageIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const AdminPage = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState('ar')
  const [isProcessing, setIsProcessing] = useState(false)
  const [translations, setTranslations] = useState([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    // Animate page elements on mount
    gsap.fromTo(
      '.admin-content',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: 'power3.out'
      }
    )
  }, [])

  const handleFileSelect = (file) => {
    setSelectedFile(file)
    setShowResults(false)
    setTranslations([])
  }

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value)
  }

  const simulateTranslation = async () => {
    if (!selectedFile) return

    setIsProcessing(true)
    setShowResults(false)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    // Mock translation results
    setTranslations(mockTranslations)
    setIsProcessing(false)
    setShowResults(true)

    // Animate results
    setTimeout(() => {
      gsap.fromTo(
        '.result-card',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: 'power2.out'
        }
      )
    }, 100)
  }

  const resetForm = () => {
    setSelectedFile(null)
    setTranslations([])
    setShowResults(false)
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="admin-content text-center mb-12">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload documents and generate visual sign language translations for better accessibility
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            {/* Upload Section */}
            <div className="admin-content card mb-8">
              <div className="flex items-center mb-6">
                <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="font-poppins text-2xl font-semibold text-gray-900">
                  Document Upload
                </h2>
              </div>
              
              <FileUpload 
                onFileSelect={handleFileSelect}
                acceptedTypes=".pdf,.doc,.docx,.txt"
                maxSize={10}
              />
            </div>

            {/* Language Selection */}
            <div className="admin-content card mb-8">
              <div className="flex items-center mb-6">
                <LanguageIcon className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="font-poppins text-2xl font-semibold text-gray-900">
                  Source Language
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {supportedLanguages.map((language) => (
                  <label
                    key={language.code}
                    className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedLanguage === language.code
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="language"
                      value={language.code}
                      checked={selectedLanguage === language.code}
                      onChange={handleLanguageChange}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{language.flag}</span>
                      <div>
                        <div className="font-medium text-gray-900">{language.name}</div>
                        <div className="text-sm text-gray-500">{language.code}</div>
                      </div>
                    </div>
                    {selectedLanguage === language.code && (
                      <CheckCircleIcon className="absolute top-2 right-2 h-5 w-5 text-blue-500" />
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <div className="admin-content text-center">
              <button
                onClick={simulateTranslation}
                disabled={!selectedFile || isProcessing}
                className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                  !selectedFile || isProcessing
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'btn-primary hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing Document...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5 mr-3" />
                    Generate Translation
                  </>
                )}
              </button>
              
              {!selectedFile && (
                <p className="mt-4 text-sm text-gray-500 flex items-center justify-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  Please upload a document first
                </p>
              )}
            </div>

            {/* Processing State */}
            {isProcessing && (
              <div className="mt-12">
                <Loading message="Analyzing document and generating sign language translations..." />
              </div>
            )}
          </div>
        ) : (
          /* Results Section */
          <div className="max-w-6xl mx-auto">
            <div className="result-card flex items-center justify-between mb-8">
              <div>
                <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-2">
                  Translation Results
                </h2>
                <p className="text-gray-600">
                  Document: <span className="font-medium">{selectedFile?.name}</span> • 
                  Language: <span className="font-medium">
                    {supportedLanguages.find(lang => lang.code === selectedLanguage)?.name}
                  </span>
                </p>
              </div>
              <button
                onClick={resetForm}
                className="btn-secondary"
              >
                Upload New Document
              </button>
            </div>

            <div className="space-y-8">
              {translations.map((translation, index) => (
                <div key={translation.id} className="result-card">
                  <ContentCard translation={translation} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPage
