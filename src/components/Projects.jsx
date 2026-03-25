import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const useInView = (threshold = 0.1) => {
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

// Project preview SVGs
const JobPortalPreview = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="220" fill="#08081a"/>
    {/* Header bar */}
    <rect width="400" height="40" fill="rgba(109,40,217,0.2)"/>
    <rect x="16" y="13" width="60" height="14" rx="3" fill="rgba(168,85,247,0.7)"/>
    <rect x="240" y="14" width="40" height="12" rx="6" fill="rgba(168,85,247,0.4)"/>
    <rect x="288" y="14" width="40" height="12" rx="6" fill="rgba(168,85,247,0.4)"/>
    <rect x="344" y="11" width="40" height="18" rx="9" fill="rgba(109,40,217,0.8)"/>
    {/* Search bar */}
    <rect x="40" y="56" width="320" height="32" rx="8" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.25)" strokeWidth="1"/>
    <rect x="56" y="70" width="140" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="320" y="62" width="24" height="20" rx="5" fill="rgba(109,40,217,0.6)"/>
    {/* Job cards */}
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x={16 + i*130} y="102" width="118" height="90" rx="8" fill="rgba(13,13,30,0.8)" stroke="rgba(168,85,247,0.15)" strokeWidth="1"/>
        <rect x={28 + i*130} y="114" width="30" height="30" rx="6" fill={`rgba(${i===0?'109,40,217':i===1?'124,58,237':'168,85,247'},0.3)`}/>
        <rect x={64 + i*130} y="118" width="55" height="7" rx="3" fill="rgba(255,255,255,0.5)"/>
        <rect x={64 + i*130} y="131" width="40" height="5" rx="2.5" fill="rgba(168,85,247,0.5)"/>
        <rect x={28 + i*130} y="152" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.12)"/>
        <rect x={28 + i*130} y="163" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
        <rect x={28 + i*130} y="176" width="40" height="9" rx="4" fill="rgba(109,40,217,0.5)"/>
        <rect x={74 + i*130} y="176" width="34" height="9" rx="4" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.3)" strokeWidth="1"/>
      </g>
    ))}
  </svg>
)

const EcommercePreview = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="220" fill="#08081a"/>
    {/* Sidebar */}
    <rect width="80" height="220" fill="rgba(13,13,30,0.9)"/>
    <rect x="12" y="20" width="56" height="8" rx="4" fill="rgba(168,85,247,0.7)"/>
    {[40,56,72,88,104].map((y, i) => (
      <rect key={i} x="12" y={y} width={i===0?56:44} height="6" rx="3" fill={i===0?"rgba(168,85,247,0.4)":"rgba(255,255,255,0.1)"}/>
    ))}
    {/* Header */}
    <rect x="80" width="320" height="38" fill="rgba(9,9,20,0.95)"/>
    <rect x="220" y="11" width="60" height="16" rx="8" fill="rgba(13,13,30,1)" stroke="rgba(168,85,247,0.3)" strokeWidth="1"/>
    <rect x="226" y="15" width="8" height="8" rx="1" fill="rgba(168,85,247,0.5)"/>
    <rect x="340" y="11" width="48" height="16" rx="8" fill="rgba(109,40,217,0.7)"/>
    {/* Products grid */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x={88 + (i%2)*116} y={46 + Math.floor(i/2)*90} width="108" height="82" rx="8" fill="rgba(13,13,30,0.8)" stroke="rgba(168,85,247,0.12)" strokeWidth="1"/>
        <rect x={88 + (i%2)*116} y={46 + Math.floor(i/2)*90} width="108" height="46" rx="8" fill={`rgba(${i===0?'109,40,217':i===1?'124,58,237':i===2?'168,85,247':'196,132,252'},0.2)`}/>
        <rect x={96 + (i%2)*116} y={100 + Math.floor(i/2)*90} width="60" height="6" rx="3" fill="rgba(255,255,255,0.4)"/>
        <rect x={96 + (i%2)*116} y={113 + Math.floor(i/2)*90} width="40" height="5" rx="2.5" fill="rgba(168,85,247,0.6)"/>
        <rect x={156 + (i%2)*116} y={110 + Math.floor(i/2)*90} width="22" height="14" rx="7" fill="rgba(109,40,217,0.6)"/>
      </g>
    ))}
    {/* Cart indicator */}
    <rect x="296" y="12" width="36" height="14" rx="7" fill="rgba(13,13,30,0.8)" stroke="rgba(168,85,247,0.2)" strokeWidth="1"/>
    <circle cx="327" cy="10" r="5" fill="#a855f7"/>
    <text x="324" y="13" fontSize="6" fill="white" fontFamily="sans-serif" fontWeight="bold">2</text>
  </svg>
)

const PortfolioPreview = () => (
  <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="400" height="220" fill="#05050d"/>
    {/* Grid */}
    <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="80" y1="0" x2="80" y2="220" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="160" y1="0" x2="160" y2="220" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="240" y1="0" x2="240" y2="220" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    <line x1="320" y1="0" x2="320" y2="220" stroke="rgba(168,85,247,0.05)" strokeWidth="1"/>
    {/* Glow */}
    <circle cx="200" cy="110" r="80" fill="rgba(109,40,217,0.08)"/>
    {/* Nav */}
    <rect width="400" height="36" fill="rgba(5,5,13,0.9)" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="0 0"/>
    <rect x="16" y="12" width="60" height="12" rx="3" fill="rgba(168,85,247,0.6)"/>
    {[200,240,280,320].map((x,i) => <rect key={i} x={x} y="15" width="32" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>)}
    <rect x="360" y="11" width="28" height="14" rx="7" fill="rgba(109,40,217,0.7)"/>
    {/* Hero text */}
    <rect x="80" y="60" width="120" height="20" rx="4" fill="rgba(196,132,252,0.7)"/>
    <rect x="80" y="86" width="180" height="14" rx="3" fill="rgba(255,255,255,0.5)"/>
    <rect x="80" y="106" width="150" height="10" rx="3" fill="rgba(255,255,255,0.2)"/>
    <rect x="80" y="126" width="80" height="22" rx="11" fill="rgba(109,40,217,0.7)"/>
    <rect x="170" y="126" width="80" height="22" rx="11" fill="transparent" stroke="rgba(168,85,247,0.5)" strokeWidth="1"/>
    {/* Illustration */}
    <rect x="260" y="55" width="120" height="95" rx="10" fill="rgba(13,13,30,0.6)" stroke="rgba(168,85,247,0.2)" strokeWidth="1"/>
    {[0,1,2,3,4].map(i => (
      <rect key={i} x="272" y={68 + i*14} width={i%2===0?80:60} height="6" rx="3" fill={i===0?"rgba(168,85,247,0.5)":i===2?"rgba(52,211,153,0.4)":"rgba(255,255,255,0.1)"}/>
    ))}
  </svg>
)

const projects = [
  {
    id: 1,
    title: "Povis Collections",
    subtitle: "Shopping Platform",
    liveLink: "https://poviscollections.whydev.co.in/",
    description:
      "A modern e-commerce platform designed for showcasing exclusive jewellery collections inspired by Povis designs. It features product categorization, advanced filtering, user authentication, cart and order management, and a smooth, secure checkout system.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Auth",
      "REST API",
      "Redux-Toolkit"
    ],
    preview: <JobPortalPreview />,
    accent: "#9333ea",
    features: [
      "JWT Authentication",
      "Role-Based Access",
      "Job Search & Filter",
      "Application Tracking",
    ],
    status: "Completed",
  },
  {
    id: 2,
    title: "Tanya Naturals",
    subtitle: "Shopping Platform",
    liveLink: "https://tanyanaturals.whydev.co.in/",
    description:
      "A complete e-commerce solution with product listings, cart management, user authentication, order system, and an admin dashboard for inventory management.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Redux",
    ],
    preview: <EcommercePreview />,
    accent: "#7c3aed",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "User Auth",
      "Admin Dashboard",
    ],
    status: "Completed",
  },
  {
    id: 3,
    title: "Wesleys School",
    subtitle: "Educational Platform",
    liveLink: "https://wesleysschool.com/",
    description:
      "A user-friendly school website that provides information about courses, admissions, and student activities while promoting a balanced and supportive learning experience.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Responsive"],
    preview: <PortfolioPreview />,
    accent: "#a855f7",
    features: [
      "Smooth Animations",
      "Responsive Design",
      "Dark Theme",
      "Contact Form",
    ],
    status: "Live",
  },
];

const ProjectCard = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card overflow-hidden group cursor-default relative"
      style={{
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        borderColor: hovered ? `${project.accent}50` : undefined,
        boxShadow: hovered ? `0 20px 60px ${project.accent}20` : undefined,
        transform: hovered ? "translateY(-6px)" : undefined,
      }}
    >
      {/* Preview area */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${project.accent}15 0%, transparent 70%)`,
          }}
        />
        {project.preview}

        {/* Overlay on hover */}
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center gap-4 md:opacity-0 md:group-hover:opacity-100"
          style={{
            background: "rgba(5,5,13,0.85)",
            backdropFilter: "blur(4px)",
          }}
        >
          <button
            onClick={() => window.open(project.liveLink, "_blank")}
            className="btn-primary text-sm py-2 px-5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </button>
        </motion.div>

        {/* Status badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(5,5,13,0.85)] border border-white/10 backdrop-blur-sm">
          <span
            className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-emerald-400" : "bg-purple-400"}`}
          />
          <span className="font-mono text-[10px] text-white/60">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-purple-400/70 mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <span className="font-mono text-xs text-white/20 mt-1">
            0{project.id}
          </span>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5 mb-5">
          {project.features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-1.5 text-white/40 text-xs"
            >
              <span className="w-1 h-1 rounded-full bg-purple-500/60 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-900/30 text-purple-300/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-800/40 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="section-label mb-3">What I've built</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg">
            A selection of projects built with the MERN stack, each
            demonstrating different aspects of full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Want to see more?</p>
          <button
            onClick={() =>
              window.open("https://github.com/gracelin-jeba", "_blank")
            }
            className="btn-outline gap-3"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            View GitHub Profile
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects
