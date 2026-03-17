import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export default function Research() {
  return (
    <section className="sec bg-main">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Research <span>&</span> Publications</h2>
          <div className="yellow-bar" />
        </motion.div>

        <motion.div className="card p-10 text-center max-w-lg mx-auto"
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <BookOpen size={34} style={{ color:'#FFD700', margin:'0 auto 12px' }} />
          <h4 style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:600, fontSize:'1rem', color:'#FFFFFF', marginBottom:'8px' }}>No Publications Yet</h4>
          <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.875rem', color:'#9CA3AF', lineHeight:1.7 }}>
            Actively exploring research opportunities in systems, algorithms, and applied AI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
