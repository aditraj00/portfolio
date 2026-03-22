import { motion } from 'framer-motion'
import { Trophy, Zap, Film, Users } from 'lucide-react'

const ITEMS = [
  { icon:Trophy, title:'Binary Blitz 24-Hour Hackathon', org:'Coding Ninjas × LPU',           badge:'🏆 Finalist',    desc:'Reached the final round of the 24-hour competitive hackathon.' },
  { icon:Users, title:'State-Level Cricketer', org:'Jharkhand/East Zone', badge:'🏏 Player', desc:'Represented Jharkhand as a cricketer at the state level.' },
  { icon:Zap,    title:'AWS One Day Online Conference',  org:'Amazon Web Services',             badge:'☁️ Attendee',   desc:'Attended the AWS online conference, gaining insights into cloud architecture.' },
  { icon:Film,   title:'Cinemania Event Coordinator',   org:'Lovely Professional University',  badge:'🎬 Coordinator', desc:'Coordinated and managed the Cinemania university event end-to-end.' },
  { icon:Users,  title:'Active Member — Cinema Society', org:'LPU Cinema Society',             badge:'🎭 Member',     desc:'Active member contributing to cultural and creative events at the university.' },
]

export default function Hackathons() {
  return (
    <section id="Achievements" className="sec bg-main">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Achievements</h2>
          <div className="yellow-bar" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {ITEMS.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div key={a.title} className="card p-5 flex gap-4 items-start"
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.09 }}>

                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background:'#1A1500', border:'1px solid rgba(255,215,0,0.25)' }}>
                  <Icon size={20} style={{ color:'#FFD700' }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 style={{ fontFamily:'Inter, sans-serif', fontWeight:600, fontSize:'0.88rem', color:'#FFFFFF' }}>{a.title}</h4>
                    <span style={{ background:'#FFD700', color:'#000', fontFamily:'JetBrains Mono, monospace', fontSize:'0.62rem', fontWeight:700, padding:'2px 8px', borderRadius:'999px' }}>{a.badge}</span>
                  </div>
                  <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.7rem', color:'#FFD700', opacity:0.75, marginBottom:'6px' }}>{a.org}</p>
                  <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.82rem', color:'#9CA3AF', lineHeight:1.65 }}>{a.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
