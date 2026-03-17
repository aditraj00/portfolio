import { motion } from 'framer-motion'
import { GitBranch } from 'lucide-react'

export default function OpenSource() {
  return (
    <section className="sec bg-alt">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Open <span>Source</span></h2>
          <div className="yellow-bar" />
        </motion.div>

        <motion.div className="card p-8 text-center max-w-lg mx-auto mb-10"
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <GitBranch size={34} style={{ color:'#FFD700', margin:'0 auto 12px' }} />
          <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.9rem', color:'#9CA3AF', lineHeight:1.7 }}>
            Currently exploring open source — contributions coming soon!
          </p>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.2 }}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=aditraj00&show_icons=true&theme=dark&title_color=FFD700&icon_color=FFD700&border_color=1E1E1E&bg_color=111111&text_color=FFFFFF"
            alt="GitHub Stats" className="rounded-xl max-w-full" style={{ border:'1px solid #1E1E1E' }} />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=aditraj00&layout=compact&title_color=FFD700&border_color=1E1E1E&bg_color=111111&text_color=FFFFFF"
            alt="Top Languages" className="rounded-xl max-w-full" style={{ border:'1px solid #1E1E1E' }} />
        </motion.div>
      </div>
    </section>
  )
}
