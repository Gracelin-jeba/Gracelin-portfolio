import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: 'text-violet-400' }, { t: 'developer', c: 'text-yellow-300' }, { t: ' = {', c: 'text-white/70' }] },
  { indent: 2, tokens: [{ t: 'name', c: 'text-purple-300' }, { t: ': ', c: 'text-white/50' }, { t: '"Gracelin Jeba"', c: 'text-emerald-400' }, { t: ',', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: 'role', c: 'text-purple-300' }, { t: ': ', c: 'text-white/50' }, { t: '"MERN Stack Dev"', c: 'text-emerald-400' }, { t: ',', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: 'exp', c: 'text-purple-300' }, { t: ': ', c: 'text-white/50' }, { t: '"1 Year"', c: 'text-emerald-400' }, { t: ',', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: 'location', c: 'text-purple-300' }, { t: ': ', c: 'text-white/50' }, { t: '"Chennai, TN"', c: 'text-emerald-400' }, { t: ',', c: 'text-white/50' }] },
  { indent: 2, tokens: [{ t: 'stack', c: 'text-purple-300' }, { t: ': [', c: 'text-white/50' }, { t: '"M"', c: 'text-orange-400' }, { t: ',', c: 'text-white/50' }, { t: '"E"', c: 'text-orange-400' }, { t: ',', c: 'text-white/50' }, { t: '"R"', c: 'text-orange-400' }, { t: ',', c: 'text-white/50' }, { t: '"N"', c: 'text-orange-400' }, { t: ']', c: 'text-white/50' }] },
  { indent: 0, tokens: [{ t: '}', c: 'text-white/70' }] },
]

const techTags = ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Javascript', 'Bootstrap', 'HTML', 'CSS']

// Inline SVG illustrations
const DevIllustration = () => (
  <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Monitor */}
    <rect x="80" y="60" width="320" height="210" rx="12" fill="rgba(13,13,30,0.9)" stroke="rgba(168,85,247,0.4)" strokeWidth="2"/>
    <rect x="96" y="76" width="288" height="178" rx="6" fill="#05050d"/>
    {/* Screen glow */}
    <rect x="96" y="76" width="288" height="178" rx="6" fill="url(#screenGlow)" opacity="0.4"/>
    {/* Monitor stand */}
    <rect x="210" y="270" width="60" height="30" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>
    <rect x="170" y="298" width="140" height="10" rx="5" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>

    {/* Code lines on screen */}
    <rect x="112" y="92" width="60" height="6" rx="3" fill="rgba(167,139,250,0.7)"/>
    <rect x="178" y="92" width="80" height="6" rx="3" fill="rgba(52,211,153,0.6)"/>
    <rect x="264" y="92" width="40" height="6" rx="3" fill="rgba(251,191,36,0.5)"/>

    <rect x="120" y="108" width="45" height="5" rx="2.5" fill="rgba(196,132,252,0.5)"/>
    <rect x="171" y="108" width="70" height="5" rx="2.5" fill="rgba(52,211,153,0.5)"/>

    <rect x="120" y="122" width="55" height="5" rx="2.5" fill="rgba(196,132,252,0.5)"/>
    <rect x="181" y="122" width="90" height="5" rx="2.5" fill="rgba(52,211,153,0.5)"/>

    <rect x="120" y="136" width="38" height="5" rx="2.5" fill="rgba(196,132,252,0.5)"/>
    <rect x="164" y="136" width="110" height="5" rx="2.5" fill="rgba(251,191,36,0.4)"/>

    <rect x="112" y="152" width="80" height="5" rx="2.5" fill="rgba(167,139,250,0.6)"/>
    <rect x="198" y="152" width="60" height="5" rx="2.5" fill="rgba(251,146,60,0.5)"/>

    <rect x="120" y="166" width="40" height="5" rx="2.5" fill="rgba(196,132,252,0.4)"/>
    <rect x="166" y="166" width="95" height="5" rx="2.5" fill="rgba(52,211,153,0.4)"/>

    <rect x="120" y="180" width="70" height="5" rx="2.5" fill="rgba(196,132,252,0.3)"/>
    <rect x="196" y="180" width="50" height="5" rx="2.5" fill="rgba(167,139,250,0.4)"/>

    {/* Blinking cursor */}
    <rect x="120" y="196" width="8" height="14" rx="1" fill="#a855f7" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite"/>
    </rect>

    {/* Floating badges */}
    <g>
      <rect x="10" y="80" width="60" height="28" rx="8" fill="rgba(13,13,30,0.9)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>
      <text x="23" y="99" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#52d3aa">React</text>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -6; 0 0" dur="3s" repeatCount="indefinite"/>
    </g>

    <g>
      <rect x="405" y="100" width="60" height="28" rx="8" fill="rgba(13,13,30,0.9)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>
      <text x="414" y="119" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#fb923c">Node</text>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 8; 0 0" dur="4s" repeatCount="indefinite"/>
    </g>

    <g>
      <rect x="30" y="260" width="70" height="28" rx="8" fill="rgba(13,13,30,0.9)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>
      <text x="40" y="279" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#4ade80">MongoDB</text>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 -5; 0 0" dur="5s" repeatCount="indefinite"/>
    </g>

    <g>
      <rect x="380" y="250" width="74" height="28" rx="8" fill="rgba(13,13,30,0.9)" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5"/>
      <text x="390" y="269" fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#a78bfa">Express</text>
      <animateTransform attributeName="transform" type="translate" values="0 0; 0 6; 0 0" dur="3.5s" repeatCount="indefinite"/>
    </g>

    {/* Connection lines */}
    <line x1="70" y1="94" x2="80" y2="120" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
    <line x1="405" y1="114" x2="400" y2="140" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="4 4"/>

    {/* Orbit dots */}
    <circle cx="240" cy="340" r="4" fill="#a855f7" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="350" r="3" fill="#7c3aed" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="280" cy="348" r="2.5" fill="#c084fc" opacity="0.5">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
    </circle>

    <defs>
      <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
)

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= codeLines.length) clearInterval(timer)
    }, 160)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-right overflow-hidden grid-bg pt-20"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-label">Available for hire</span>
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 relative">
                <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6"
            >
              Hi, I'm <span className="text-gradient block">Gracelin</span>
              <span className="text-white/90">Jeba E</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="font-mono text-purple-400 text-base md:text-lg tracking-wider cursor-blink">
                MERN Stack Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg mb-8"
            >
              Building scalable, responsive web applications using MongoDB,
              Express.js, React.js, and Node.js. I have 1 year of experience as
              a MERN Stack Developer.
            </motion.p>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-purple-800/50 text-purple-300/80 bg-purple-900/15"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(168,85,247,0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                View Projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Illustration + Code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col gap-6 mt-10 lg:mt-0"
          >
            {/* Dev illustration */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(109,40,217,0.15) 0%, transparent 70%)",
                }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <DevIllustration />
              </motion.div>
            </div>

            {/* Code block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden md:block glass-card p-5 font-mono text-xs leading-relaxed"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-white/20 text-xs">developer.js</span>
              </div>
              {codeLines.map((line, lineIdx) => (
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={lineIdx < visibleLines ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <span className="text-white/15 w-5 mr-4 text-right select-none">
                    {lineIdx + 1}
                  </span>
                  <span style={{ paddingLeft: `${line.indent * 0.75}rem` }}>
                    {line.tokens.map((token, ti) => (
                      <span key={ti} className={token.c}>
                        {token.t}
                      </span>
                    ))}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="section-label text-xs opacity-50">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-purple-800/50 rounded-full flex justify-center pt-1.5"
          >
            <span className="w-1 h-2 bg-purple-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero
