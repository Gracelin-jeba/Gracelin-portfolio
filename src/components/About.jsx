import React from 'react'
import { motion } from 'framer-motion'

const useInView = (threshold = 0.15) => {
  const [inView, setInView] = React.useState(false)
  const ref = React.useRef(null)

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}

const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '3+', label: 'Projects Built' },
  { value: '5+', label: 'Tech Stack' },
  { value: '1', label: 'Internship' },
]

const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'MERN Stack',
    desc: 'Full-stack development from database to UI',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Responsive Design',
    desc: 'Mobile-first, pixel-perfect interfaces',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'REST APIs',
    desc: 'Secure, scalable backend architecture',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Wytap Internship',
    desc: 'Real-world product experience',
  },
]

const About = () => {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-28 relative">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-800/40 to-transparent" />

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="section-label mb-3">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center">
          {/* Left: Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8 w-full max-w-md"
          >
            {/* Avatar card */}
            <div className="glass-card p-8 relative overflow-hidden">
              {/* BG glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                style={{
                  background: "radial-gradient(circle, #a855f7, transparent)",
                }}
              />

              <div className="flex items-start gap-6">
                {/* Avatar circle */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-display font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    }}
                  >
                    GJ
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#05050d] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Gracelin Jeba
                  </h3>
                  <p className="text-purple-400 font-mono text-sm mb-2">
                    MERN Stack Developer
                  </p>
                  <div className="flex items-center gap-1.5 text-white/40 text-xs">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Chennai, Tamil Nadu
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gradient-to-r from-purple-800/30 via-purple-600/20 to-transparent" />

              <p className="text-white/55 text-sm leading-relaxed">
                I'm a passionate MERN Stack Developer with hands-on experience
                building scalable full-stack web applications. I have 1 year of
                work experience at
                <span className="text-purple-400 font-medium">
                  {" "}
                  WHY Global Services
                </span>
                , where I contributed to real-world products and enhanced my
                skills across the entire web development lifecycle.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="glass-card glass-card-hover p-5 text-center"
                >
                  <div className="font-display text-3xl font-extrabold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/45 text-xs font-mono tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 center-mobile"
          >
            <p className="text-white/60 text-base leading-relaxed mb-4">
              I thrive on turning complex ideas into clean, functional web
              applications. Whether it's architecting REST APIs, managing state
              in React, or designing MongoDB schemas — I approach every
              challenge with precision and creativity.
            </p>

            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass-card p-5 flex items-start gap-4 cursor-default border border-purple-900/20 hover:border-purple-700/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-900/30 border border-purple-700/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white/90 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/45 text-sm">{item.desc}</p>
                </div>
                <svg
                  className="ml-auto text-purple-800/60 flex-shrink-0 mt-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            ))}

            {/* Download resume CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="mt-2"
            >
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Gracelin_jeba_Resume.pdf"; // your file in public folder
                  link.download = "Gracelin_jeba_Resume.pdf";
                  link.click();
                }}
                className="btn-outline w-full justify-center gap-3 flex items-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About
