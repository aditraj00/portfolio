import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const CERTS = [
  { title:'Mastering Data Structures & Algorithms', issuer:'Board Infinity',    date:'Jul 2025' },
  { title:'Build Gen AI Apps with No-Code Tools',   issuer:'Udemy',             date:'Dec 2025' },
  { title:'Master Gen AI & AI Tools',               issuer:'Udemy',             date:'Dec 2025' },
  { title:'Data Structures and Algorithm Training', issuer:'Training Program',  date:'Jun – Jul 2025' },
]

export default function Certifications() {
  return (
    <section id="Certifications" className="sec bg-main">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Certifications <span>&</span> Courses</h2>
          <div className="yellow-bar" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CERTS.map((c, i) => (
            <motion.div key={c.title} className="card p-5 flex gap-4 items-start"
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i * 0.09 }}>

              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background:'#1A1500', border:'1px solid rgba(255,215,0,0.25)' }}>
                <Award size={18} style={{ color:'#FFD700' }} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 style={{ fontFamily:'Inter, sans-serif', fontWeight:600, fontSize:'0.88rem', color:'#FFFFFF', lineHeight:1.45, marginBottom:'5px' }}>{c.title}</h4>
                <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.78rem', color:'#9CA3AF', marginBottom:'10px' }}>{c.issuer}</p>
                <span style={{ background:'#FFD700', color:'#000', fontFamily:'JetBrains Mono, monospace', fontSize:'0.68rem', fontWeight:700, padding:'3px 10px', borderRadius:'999px' }}>{c.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
