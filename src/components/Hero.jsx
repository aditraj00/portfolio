import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, ArrowRight } from 'lucide-react'

const ROLES = ['Full Stack Developer','DSA Enthusiast','Problem Solver','CS Student @ LPU']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = ROLES[idx]
    let t
    if (!del && txt.length < cur.length)       t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 75)
    else if (!del && txt.length === cur.length) t = setTimeout(() => setDel(true), 2000)
    else if (del && txt.length > 0)             t = setTimeout(() => setTxt(txt.slice(0, -1)), 40)
    else { setDel(false); setIdx((idx + 1) % ROLES.length) }
    return () => clearTimeout(t)
  }, [txt, del, idx])

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="Home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-main"
      style={{ background: 'radial-gradient(ellipse 70% 55% at 0% 0%, rgba(255,215,0,0.06) 0%, transparent 65%), radial-gradient(ellipse 50% 45% at 100% 100%, rgba(255,215,0,0.04) 0%, transparent 60%), #0A0A0A' }}>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        backgroundSize: '64px 64px'
      }} />

      {/* Floating rings */}
      {[{s:480,t:'-18%',l:'-14%',o:0.05},{s:260,t:'62%',l:'76%',o:0.06},{s:160,t:'8%',l:'82%',o:0.08}].map((r,i) => (
        <motion.div key={i} className="absolute rounded-full pointer-events-none"
          style={{ width:r.s, height:r.s, top:r.t, left:r.l, opacity:r.o, border:'1.5px solid #FFD700' }}
          animate={{ y:[0,-22,0] }} transition={{ duration:7+i*2, repeat:Infinity, ease:'easeInOut' }} />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Status badge */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
          style={{ background:'#1A1500', border:'1px solid rgba(255,215,0,0.3)', fontFamily:'JetBrains Mono, monospace', fontSize:'0.72rem', color:'#FFD700' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
          style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, lineHeight:1.1, marginBottom:'1rem', fontSize:'clamp(2.8rem,7vw,5.5rem)' }}>
          <span style={{ color:'#FFFFFF' }}>Hi, I'm </span>
          <span style={{ color:'#FFD700' }}>Adit Raj</span>
          <span style={{ color:'#FFFFFF' }}> 👋</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35 }}
          className="flex items-center justify-center mb-6" style={{ height:'2.5rem' }}>
          <span style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:500, fontSize:'1.25rem', color:'#FFFFFF' }}>
            {txt}<span style={{ color:'#FFD700' }} className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
          className="max-w-xl mx-auto mb-10"
          style={{ fontFamily:'Inter, sans-serif', fontSize:'1rem', color:'#9CA3AF', lineHeight:1.75 }}>
          B.Tech CSE student passionate about building full-stack web apps and solving algorithmic problems.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={() => go('Projects')} className="btn-yellow">
            View Projects <ArrowRight size={16} />
          </button>
          <a href="/assets/Adit_CV.pdf" download className="btn-ghost">
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.85 }}
          className="flex justify-center gap-12 mt-16 pt-8" style={{ borderTop:'1px solid #1E1E1E' }}>
          {[['2+','Projects Built'],['4+','Certifications'],['1','Hackathon Final']].map(([n,l]) => (
            <div key={l} className="text-center">
              <div style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'1.6rem', color:'#FFD700' }}>{n}</div>
              <div style={{ fontFamily:'Inter, sans-serif', fontSize:'0.72rem', color:'#555', marginTop:'2px' }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button onClick={() => go('About')} className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color:'#FFD700' }} animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity }}>
        <ChevronDown size={26} />
      </motion.button>
    </section>
  )
}
