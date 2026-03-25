import React from "react";
import { motion } from "framer-motion";

const useInView = (threshold = 0.15) => {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
};

/* ================= ICONS ================= */

// React
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// Node
const NodeIcon = () => (
  <svg viewBox="0 0 256 289" className="w-8 h-8">
    <path d="M128 0L0 73.9v141.8L128 289l128-73.3V73.9z" fill="#3C873A" />
  </svg>
);

// Mongo
const MongoIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    className="w-6 h-8"
  />
);

// Express
const ExpressIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    className="w-8 h-6 bg-white rounded"
  />
);

// Tailwind
const TailwindIcon = () => (
  <img
    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    alt="Tailwind CSS"
    className="w-8 h-8"
  />
);
// HTML
const HTMLIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    className="w-6 h-8"
  />
);

// CSS
const CSSIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    className="w-6 h-8"
  />
);

// JS
const JSIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    className="w-8 h-8"
  />
);

// Bootstrap
const BootstrapIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    className="w-8 h-8"
  />
);

// Tools
const GitIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    className="w-8 h-8"
  />
);

const GithubIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    className="w-8 h-8 bg-white rounded-full"
  />
);

const VSCodeIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    className="w-8 h-8"
  />
);

const FigmaIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    className="w-8 h-8"
  />
);

const PostmanIcon = () => (
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    className="w-8 h-8"
  />
);

/* ================= DATA ================= */

const skillCategories = [
  {
    category: "Frontend",
    color: "#61DAFB",
    skills: [
      { name: "React.js", icon: <ReactIcon />, level: 85 },
      { name: "JavaScript", icon: <JSIcon />, level: 80 },
      { name: "HTML5", icon: <HTMLIcon />, level: 90 },
      { name: "CSS3", icon: <CSSIcon />, level: 85 },
      { name: "Tailwind", icon: <TailwindIcon />, level: 80 },
      { name: "Bootstrap", icon: <BootstrapIcon />, level: 75 },
    ],
  },
  {
    category: "Backend",
    color: "#3C873A",
    skills: [
      { name: "Node.js", icon: <NodeIcon />, level: 80 },
      { name: "Express", icon: <ExpressIcon />, level: 78 },
    ],
  },
  {
    category: "Database",
    color: "#4CAF50",
    skills: [{ name: "MongoDB", icon: <MongoIcon />, level: 75 }],
  },
  {
    category: "Tools",
    color: "#a855f7",
    skills: [
      { name: "Git", icon: <GitIcon />, level: 85 },
      { name: "GitHub", icon: <GithubIcon />, level: 85 },
      { name: "VS Code", icon: <VSCodeIcon />, level: 90 },
      { name: "Figma", icon: <FigmaIcon />, level: 75 },
      { name: "Postman", icon: <PostmanIcon />, level: 80 },
    ],
  },
];

/* ================= SKILL BAR ================= */

const SkillBar = ({ name, level, inView, delay }) => (
  <div className="flex items-center gap-4">
    <span className="text-xs text-white/50 w-24">{name}</span>

    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, delay }}
        className="h-full bg-gradient-to-r from-purple-500 to-purple-300"
      />
    </div>

    <span className="text-xs text-purple-400">{level}%</span>
  </div>
);

/* ================= MAIN ================= */

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My <span className="text-purple-500">Skills</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold mb-4 text-purple-400">
                {cat.category}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    {skill.icon}
                    <span className="text-xs text-white/60">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-lg mb-6 text-purple-400">Proficiency</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.flatMap((cat, ci) =>
              cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  inView={inView}
                  delay={(ci + si) * 0.1}
                />
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
