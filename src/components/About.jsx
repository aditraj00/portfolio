import { motion } from 'framer-motion'
import profileImg from '../assets/profile.jpg'
import { GraduationCap, MapPin, Code2, Cpu } from 'lucide-react'

const EDU = [
  { school:'Lovely Professional University', degree:'B.Tech — Computer Science & Engineering', period:'Aug 2023 – Present', score:'CGPA: 7.12' },
  { school:'Holy Cross School', degree:'Intermediate — PCM', period:'Jul 2020 – Mar 2022', score:'71.6%' },
  { school:'Holy Cross School', degree:'Matriculation', period:'Mar 2019 – May 2020', score:'82.4%' },
]

export default function About() {
  return (
    <section id="About" className="sec bg-alt">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">About <span>Me</span></h2>
          <div className="yellow-bar" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Left */}
          <motion.div className="md:col-span-2 flex flex-col gap-6"
            initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>

            <div className="relative w-fit">
              <img 
                src={profileImg}
                alt="Profile"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-yellow-400"
                style={{ background:'#1A1500' }}
              />
              <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full border-2 border-[#0E0E0E]" style={{ background:'#22c55e' }} />
            </div>

            <div>
              <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'1.15rem', color:'#FFFFFF', marginBottom:'4px' }}>Adit Raj</h3>
              <div className="flex items-center gap-1.5 mb-4" style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.72rem', color:'#FFD700' }}>
                <MapPin size={11} /> LPU, Punjab, India
              </div>
              <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.875rem', color:'#9CA3AF', lineHeight:1.8 }}>
                Passionate CS student who loves building full-stack web applications and solving algorithmic challenges. I thrive at the intersection of clean code and great user experience — turning complex problems into elegant, working solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[{ icon:Code2, label:'Focus', val:'Full Stack' },{ icon:Cpu, label:'Degree', val:'B.Tech CSE' }].map(({ icon:Icon, label, val }) => (
                <div key={label} className="card p-4">
                  <Icon size={15} style={{ color:'#FFD700', marginBottom:'6px' }} />
                  <div style={{ fontFamily:'Inter, sans-serif', fontSize:'0.68rem', color:'#555', marginBottom:'2px' }}>{label}</div>
                  <div style={{ fontFamily:'Inter, sans-serif', fontSize:'0.85rem', fontWeight:600, color:'#FFFFFF' }}>{val}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — education */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} style={{ color:'#FFD700' }} />
              <span style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:600, fontSize:'1rem', color:'#FFFFFF' }}>Education Timeline</span>
            </div>

            {EDU.map((e, i) => (
              <motion.div key={i} className="card p-5" style={{ borderLeft:'3px solid #FFD700' }}
                initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.12 }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:600, fontSize:'0.95rem', color:'#FFFFFF' }}>{e.school}</div>
                    <div style={{ fontFamily:'Inter, sans-serif', fontSize:'0.8rem', color:'#9CA3AF', marginTop:'3px' }}>{e.degree}</div>
                  </div>
                  <span className="tag shrink-0">{e.score}</span>
                </div>
                <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.7rem', color:'#444', marginTop:'6px' }}>{e.period}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
