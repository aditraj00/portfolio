import { motion } from 'framer-motion'
import { Code2, CheckCircle2 } from 'lucide-react'

const TOPICS = ['Arrays','Linked Lists','Stacks','Queues','Trees','Graphs','Algorithmic Techniques']

export default function Experience() {
  return (
    <section id="Experience" className="sec bg-alt">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Experience <span>&</span> Training</h2>
          <div className="yellow-bar" />
        </motion.div>

        <motion.div className="card max-w-3xl mx-auto overflow-hidden" style={{ borderLeft:'3px solid #FFD700' }}
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>

          <div style={{ height:'3px', background:'linear-gradient(90deg,#FFD700,transparent)' }} />

          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background:'#1A1500', border:'1px solid rgba(255,215,0,0.25)' }}>
                  <Code2 size={20} style={{ color:'#FFD700' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'1.1rem', color:'#FFFFFF' }}>DSA Training Program</h3>
                  <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.78rem', color:'#9CA3AF', marginTop:'2px' }}>Intensive Algorithmic Training</p>
                </div>
              </div>
              <span style={{ background:'#FFD700', color:'#000', fontFamily:'JetBrains Mono, monospace', fontSize:'0.7rem', fontWeight:700, padding:'5px 14px', borderRadius:'999px', whiteSpace:'nowrap' }}>
                Jun – Jul 2025
              </span>
            </div>

            <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.875rem', color:'#9CA3AF', lineHeight:1.8, marginBottom:'20px' }}>
              Intensive training in Data Structures & Algorithms covering core concepts and advanced problem-solving techniques used in competitive programming.
            </p>

            <div className="mb-5">
              <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.68rem', color:'#FFD700', letterSpacing:'0.1em', marginBottom:'10px' }}>TOPICS COVERED</p>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background:'#1A1500', border:'1px solid rgba(255,215,0,0.15)' }}>
              <CheckCircle2 size={16} style={{ color:'#FFD700', marginTop:'2px', flexShrink:0 }} />
              <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.875rem', color:'#FFFFFF', lineHeight:1.65 }}>
                Capstone: Built an <strong style={{ color:'#FFD700' }}>Inventory Management System</strong> using custom data structures from scratch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
