import React from 'react'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/gracelin-jeba",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gracelin-jeba-22ab2a2bb/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/gracelin_ebinezar",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-2.83-2.83 4 4 0 0 1 2.83 2.83z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-16 pb-8">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700/40 to-transparent"/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent blur-sm"/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-extrabold mb-4">
              <span className="text-gradient">GJ</span>
              <span className="text-white/60">.</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              MERN Stack Developer passionate about building performant and scalable web applications.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-700/40 hover:bg-purple-900/20 transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/45 text-sm hover:text-purple-400 transition-colors text-left w-fit group flex items-center gap-2"
                >
                  <span className="w-0 h-px bg-purple-500 group-hover:w-3 transition-all duration-200"/>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-5">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'JavaScript', 'Bootstarp', 'HTML', 'CSS'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2.5 py-1.5 rounded-md bg-purple-950/30 border border-purple-900/25 text-purple-400/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/25">
            © {new Date().getFullYear()} Gracelin Jeba. Built with React & ❤️
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>
            <span className="font-mono text-xs text-white/25">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
