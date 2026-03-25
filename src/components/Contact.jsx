import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

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

const contactInfo = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "gracelinjeba2002@gmail.com",
  },
  {
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
    label: "GitHub",
    value: "github.com/gracelin-jeba",
  },
  {
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
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/gracelin-jeba-22ab2a2bb/",
  },
];

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-mono text-xs text-white/40 tracking-widest uppercase">
      {label} {required && <span className="text-purple-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border border-white/3 rounded-xl px-4 py-3 text-white/80 text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-purple-600/60 focus:bg-purple-950/20 transition-all duration-200"
    />
  </div>
);

const Contact = () => {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setError('')
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const autoReplyTemplateId = import.meta.env
      .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

    if (!serviceId || !templateId || !publicKey) {
      setError('EmailJS is not configured. Please add your credentials to the .env file.')
      setLoading(false)
      return
    }

    try {
      // ✅ 1. Send message to YOU
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject || "(No subject)",
          message: form.message,
        },
        publicKey,
      );

      // ✅ 2. Send auto reply to USER
      const autoReplyTemplateId = import.meta.env
        .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          name: form.name,
          email: form.email,
        },
        publicKey,
      );

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Failed to send message. Please try again or email me directly.",
      );
    } finally {
      setLoading(false);
    }
   
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-800/40 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(109,40,217,0.1) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="section-label mb-3">Let's talk</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg">
            Open to new opportunities and collaborations. Drop me a message and
            I'll get back to you soon!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 justify-items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Availability card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/30 border border-emerald-700/30 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-emerald-400">
                      <span className="block w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
                    Status
                  </p>
                  <p className="text-emerald-400 text-sm font-semibold">
                    Available for Work
                  </p>
                </div>
              </div>
              <p className="text-white/40 text-sm">
                Currently open to full-time roles and freelance opportunities in
                MERN stack development.
              </p>
            </div>

            {/* Contact details */}
            <div className="glass-card p-6 flex flex-col gap-5">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-900/20 border border-purple-800/20 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white/70 text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-3 gap-5">
                <InputField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Grace"
                  required
                />
                <InputField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Grace@example.com"
                  required
                />
              </div>

              <InputField
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Project Collaboration"
              />

              {/* Textarea */}
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-white/40 tracking-widest uppercase">
                  Message <span className="text-purple-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  required
                  rows={5}
                  className="w-full bg-transparent border border-white/3 rounded-xl px-4 py-3 text-white/80 text-sm font-body placeholder:text-white/20 focus:outline-none focus:border-purple-600/60 focus:bg-purple-950/20 transition-all duration-200 resize-none"
                />
              </div>

              {/* Error message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl bg-red-950/30 border border-red-700/30 text-red-400 text-sm"
                  >
                    <svg
                      className="flex-shrink-0 mt-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={
                  !loading && !submitted
                    ? {
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(168,85,247,0.4)",
                      }
                    : {}
                }
                whileTap={!loading && !submitted ? { scale: 0.98 } : {}}
                className="btn-primary justify-center py-3.5 mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.span
                      key="loading"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending...
                    </motion.span>
                  ) : submitted ? (
                    <motion.span
                      key="sent"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact
