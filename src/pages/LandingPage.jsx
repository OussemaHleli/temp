import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroScene from '../components/HeroScene'
import { 
  DocumentTextIcon, 
  EyeIcon, 
  HandRaisedIcon,
  GlobeAltIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

gsap.registerPlugin(ScrollTrigger)

const LandingPage = () => {
  const heroRef = useRef()
  const featuresRef = useRef()
  const ctaRef = useRef()

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out',
        stagger: 0.2
      }
    )

    // Features animation on scroll
    gsap.fromTo(
      '.feature-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // CTA section animation
    gsap.fromTo(
      '.cta-content',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const features = [
    {
      icon: DocumentTextIcon,
      title: 'Document Upload',
      description: 'Upload Arabic and Tunisian documents in various formats for instant processing.'
    },
    {
      icon: HandRaisedIcon,
      title: 'Sign Language Translation',
      description: 'Get visual sign language representations for better accessibility and understanding.'
    },
    {
      icon: EyeIcon,
      title: 'Visual Learning',
      description: 'Learn through interactive visual elements that make complex content simple.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Support for Arabic, Tunisian Arabic, and other regional dialects.'
    },
    {
      icon: UserGroupIcon,
      title: 'Admin & Worker Views',
      description: 'Separate interfaces for administrators and end-users for optimal workflow.'
    },
    {
      icon: SparklesIcon,
      title: 'Modern Interface',
      description: 'Clean, intuitive design with smooth animations and responsive layout.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroScene />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="hero-content font-poppins text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              LangViz
            </h1>
            <p className="hero-content text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Understand Your World Visually
            </p>
            <p className="hero-content text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Transform Arabic and Tunisian documents into accessible visual content with 
              real sign language translations. Breaking barriers, building bridges.
            </p>
            
            <div className="hero-content flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admin" className="btn-primary text-lg px-8 py-4">
                Upload Document
              </Link>
              <Link to="/viewer" className="btn-secondary text-lg px-8 py-4">
                View Translation
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make documents accessible and understandable for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="font-poppins text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already making their documents more accessible
              with LangViz's innovative visual translation technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admin"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Start Translating
              </Link>
              <Link
                to="/viewer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
