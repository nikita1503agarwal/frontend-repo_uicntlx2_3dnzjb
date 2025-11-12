import React, { useEffect, useMemo, useState } from 'react'
import { Menu, Moon, Sun, Github, Mail, Linkedin, Globe, ChevronRight, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'E-Commerce Platform',
    stack: ['Laravel', 'MySQL', 'Tailwind'],
    description: 'Scalable e-commerce with product management, cart, and checkout.',
    link: '#',
  },
  {
    title: 'Company Profile CMS',
    stack: ['Laravel', 'PHP', 'Tailwind'],
    description: 'CMS for pages, blog, and media with role-based access.',
    link: '#',
  },
  {
    title: 'Internal Tools Suite',
    stack: ['Laravel', 'MySQL'],
    description: 'Dashboards and CRUD micro-apps for operations efficiency.',
    link: '#',
  },
]

const skills = [
  { name: 'Laravel', level: 90 },
  { name: 'PHP', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'MySQL', level: 80 },
  { name: 'REST APIs', level: 80 },
]

function useDarkMode() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = saved ? saved === 'dark' : prefers
    setEnabled(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled)
    localStorage.setItem('theme', enabled ? 'dark' : 'light')
  }, [enabled])

  return [enabled, setEnabled]
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useDarkMode()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/10 bg-navy/60 dark:bg-navy-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="font-semibold text-white">Arman Wiranda</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-white/80 hover:text-white transition">
                {n.label}
              </button>
            ))}
            <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="text-white hover:text-yellow-300 transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="text-white hover:text-yellow-300 transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen(!open)} className="text-white">
              <Menu />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {NAV_ITEMS.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left px-2 py-2 rounded hover:bg-white/10 text-white/90">
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-navy text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/50 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
            <span className="h-1 w-1 rounded-full bg-blue-400 animate-pulse" /> Available for freelance
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Arman Wiranda
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">Web Developer</span>
          </h1>
          <p className="text-white/80 max-w-xl">
            I craft fast, maintainable web apps with Laravel, PHP, Tailwind CSS, and MySQL. Clean code, clean UI, real results.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 bg-white text-navy font-semibold px-5 py-3 rounded hover:bg-blue-50 transition">
              View Projects <ChevronRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-5 py-3 rounded hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com/" target="_blank" className="hover:text-blue-300"><Github /></a>
            <a href="mailto:hello@example.com" className="hover:text-blue-300"><Mail /></a>
            <a href="https://www.linkedin.com/" target="_blank" className="hover:text-blue-300"><Linkedin /></a>
            <a href="https://armanwiranda.com" target="_blank" className="hover:text-blue-300"><Globe /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-navy-950 text-navy dark:text-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden ring-1 ring-navy/10 dark:ring-white/10">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop" alt="Coding desk" className="w-full h-80 object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-navy/80 dark:text-white/80">
            I specialize in building modern, responsive web applications. My focus is on performance, accessibility, and clean, maintainable code.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            <li className="p-3 rounded border border-navy/10 dark:border-white/10">5+ years of experience</li>
            <li className="p-3 rounded border border-navy/10 dark:border-white/10">Full-stack with Laravel</li>
            <li className="p-3 rounded border border-navy/10 dark:border-white/10">Tailwind-first design</li>
            <li className="p-3 rounded border border-navy/10 dark:border-white/10">MySQL optimization</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-navy-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-navy dark:text-white">Projects</h2>
          <a href="#" className="text-sm inline-flex items-center gap-1 text-navy/70 dark:text-white/70 hover:underline">See all <ExternalLink size={16} /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a href={p.link} key={p.title} className="group rounded-xl bg-white dark:bg-navy-950 border border-navy/10 dark:border-white/10 p-6 hover:-translate-y-1 hover:shadow-xl transition">
              <div className="h-40 rounded-lg bg-gradient-to-br from-blue-200/40 to-purple-200/40 dark:from-blue-400/10 dark:to-purple-400/10 mb-4" />
              <h3 className="font-semibold text-navy dark:text-white">{p.title}</h3>
              <p className="text-sm text-navy/70 dark:text-white/70 mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded bg-blue-50 text-navy dark:bg-white/10 dark:text-white/80">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-navy dark:text-white mb-10">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="p-6 rounded-xl border border-navy/10 dark:border-white/10 bg-white dark:bg-navy-900">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-navy dark:text-white">{s.name}</span>
                <span className="text-sm text-navy/60 dark:text-white/60">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded bg-navy/10 dark:bg-white/10">
                <div className="h-2 rounded bg-gradient-to-r from-blue-400 to-purple-400" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Let’s build something great</h2>
          <p className="text-navy/70 dark:text-white/70 mb-6">I’m open to freelance, full-time roles, and collaborations.</p>
          <div className="space-y-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-navy dark:text-white hover:underline"><Mail size={18}/> hello@example.com</a>
            <a href="https://www.linkedin.com/" target="_blank" className="inline-flex items-center gap-2 text-navy dark:text-white hover:underline"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 text-navy dark:text-white hover:underline"><Github size={18}/> GitHub</a>
          </div>
        </div>
        <form className="p-6 rounded-xl bg-white dark:bg-navy-950 border border-navy/10 dark:border-white/10">
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-navy/70 dark:text-white/70">Name</label>
              <input className="mt-1 w-full px-3 py-2 rounded bg-slate-100 dark:bg-white/10 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-navy/70 dark:text-white/70">Email</label>
              <input type="email" className="mt-1 w-full px-3 py-2 rounded bg-slate-100 dark:bg-white/10 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-sm text-navy/70 dark:text-white/70">Message</label>
              <textarea rows="4" className="mt-1 w-full px-3 py-2 rounded bg-slate-100 dark:bg-white/10 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tell me about your project" />
            </div>
            <button type="button" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-5 py-3 rounded hover:opacity-90">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70">© {new Date().getFullYear()} Arman Wiranda. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#projects" className="hover:text-blue-300">Projects</a>
          <a href="#skills" className="hover:text-blue-300">Skills</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950">
      <Nav />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
