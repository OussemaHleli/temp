import { useState } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'
import { signLanguageCategories } from '../data/mockData'

const ContentCard = ({ translation, index }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [imageError, setImageError] = useState(false)

  const category = signLanguageCategories.find(cat => cat.id === translation.category)

  const handleImageError = () => {
    setImageError(true)
  }

  const toggleVideo = () => {
    setIsPlaying(!isPlaying)
    // In a real app, this would control video playback
  }

  return (
    <div className="card hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins font-semibold text-lg text-gray-900">
              Translation #{index + 1}
            </h3>
            {category && (
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.color}`}>
                {category.name}
              </span>
            )}
          </div>

          {/* Original Text */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-700 mb-2">Original Text:</h4>
            <p className="text-gray-900 text-right" dir="rtl">
              {translation.originalText}
            </p>
          </div>

          {/* Simplified Translation */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-700 mb-2">Simplified Translation:</h4>
            <p className="text-blue-900 font-medium">
              {translation.simplifiedText}
            </p>
          </div>
        </div>

        {/* Sign Language Visual */}
        <div className="lg:w-80 space-y-4">
          <h4 className="font-medium text-gray-700">Sign Language Visual:</h4>
          
          {/* Image/Video Container */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
            {!imageError ? (
              <img
                src={translation.signLanguageImage}
                alt={`Sign language for: ${translation.simplifiedText}`}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">👋</span>
                  </div>
                  <p className="text-sm text-gray-600">Sign Language Visual</p>
                </div>
              </div>
            )}

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={toggleVideo}
                className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                {isPlaying ? (
                  <PauseIcon className="h-6 w-6" />
                ) : (
                  <PlayIcon className="h-6 w-6 ml-1" />
                )}
              </button>
            </div>

            {/* Video Status Indicator */}
            {isPlaying && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                Playing
              </div>
            )}
          </div>

          {/* Video Controls */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Sign Language Demo</span>
            <button
              onClick={toggleVideo}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {isPlaying ? 'Pause' : 'Play'} Video
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentCard
