import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#05050d]">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Global background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #9333ea 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="orb-delay absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="orb absolute top-3/4 left-1/2 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <main className="w-full flex flex-col items-center">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App
