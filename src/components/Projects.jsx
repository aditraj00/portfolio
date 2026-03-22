import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'

const PROJECTS = [
  {
    num:'01', title:'Virtual Event Hosting Platform', date:'Dec 2025',
    desc:'Full-stack MERN application featuring live event hosting, attendee registration, session scheduling, real-time chat, polls, and role-based dashboards for organizers and attendees.',
    tags:['React','Node.js','Express','MongoDB','Tailwind CSS'],
    live:'#', github:'https://github.com/aditraj00/Streamly',
  },
  {
    num:'02', title:'Traffic Management System', date:'May 2025',
    desc:'Responsive reservation & order management system with real-time backend updates, dynamic UI interactions, and a clean admin interface for traffic flow control.',
    tags:['PHP','MySQL','Tailwind CSS','JavaScript','jQuery'],
    live:'#', github:'https://github.com/aditraj00/traffic-and-accident-mangement',
  },
  
]

export default function Projects() {
  return (
    <section id="Projects" className="sec bg-alt">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Featured <span>Projects</span></h2>
          <div className="yellow-bar" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.num} className="card flex flex-col overflow-hidden"
              initial={{ opacity:0, y:36 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i * 0.12 }}>

              {/* Top stripe */}
              <div style={{ height:'3px', background:'linear-gradient(90deg,#FFD700,#FFC200,#1A1500)' }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.65rem', color:'#FFD700', opacity:0.45 }}>PROJECT {p.num}</span>
                  <span className="flex items-center gap-1" style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.7rem', color:'#444' }}>
                    <Calendar size={11} /> {p.date}
                  </span>
                </div>

                <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#FFFFFF', lineHeight:1.3, marginBottom:'12px' }}>{p.title}</h3>

                <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.85rem', color:'#9CA3AF', lineHeight:1.75, marginBottom:'20px', flex:1 }}>{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div className="flex gap-3">
                  <a href={p.live} className="btn-yellow" style={{ padding:'9px 18px', fontSize:'0.8rem' }}>
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a href={p.github} className="btn-ghost" style={{ padding:'8px 18px', fontSize:'0.8rem' }}>
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
