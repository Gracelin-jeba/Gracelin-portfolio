import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[rgba(5,5,13,0.85)] backdrop-blur-xl border-b border-purple-900/20 shadow-lg shadow-black/30'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="relative group"
            whileHover={{ scale: 1.03 }}
          >
            <span className="font-display font-bold text-xl tracking-tight">
              <span className="text-gradient">GJ</span>
              <span className="text-white/80"></span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-violet-400 group-hover:w-full transition-all duration-300" />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-purple-400'
                    : 'text-white/50 hover:text-white/90'
                }`}
                whileHover={{ y: -1 }}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-purple-500 to-violet-400"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary text-sm py-2 px-5"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-purple-400 origin-center transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-4 h-0.5 bg-purple-400/70"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-purple-400 origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[rgba(5,5,13,0.97)] backdrop-blur-xl border-b border-purple-900/20 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`font-body text-base font-medium py-2 border-b border-white/5 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-purple-400'
                      : 'text-white/60'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-primary text-sm py-2.5 justify-center mt-2"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
