import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DemoSection from './components/DemoSection'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import SEO from './components/SEO'
import ScrollToTop from './components/ScrollToTop'
import { useLanguage } from './context/LanguageContext'

function App({ children }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO
        title={t.seo.title}
        description={t.seo.description}
        keywords={t.seo.keywords}
      />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <DemoSection />
      <Services />
      <About />

      {children}

      <div id="contact" className='bg-gray-50 dark:bg-gray-950 transition-colors duration-300'>
        <Footer />
      </div>
    </div>
  )
}

export default App
