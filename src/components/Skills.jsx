import { motion } from 'framer-motion'

const CATS = [
  { title:'Languages',             icon:'⌨️', skills:['C++','JavaScript','C','Python','Java'] },
  { title:'Frameworks & Libraries',icon:'🧩', skills:['HTML5','CSS3','Tailwind CSS','React.js','Node.js','PHP'] },
  { title:'Tools & Platforms',     icon:'🛠️', skills:['Git / GitHub','MySQL','MongoDB','VS Code','Supabase','Lovable'] },
  { title:'Soft Skills',           icon:'🌟', skills:['Problem-Solving','Leadership','Work Ethic','Communication'] },
]

export default function Skills() {
  return (
    <section id="Skills" className="sec bg-main">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-14" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Skills & <span>Technologies</span></h2>
          <div className="yellow-bar" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CATS.map((cat, ci) => (
            <motion.div key={cat.title} className="card p-6"
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: ci * 0.08 }}>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:600, fontSize:'0.95rem', color:'#FFFFFF' }}>{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <motion.span key={s} className="tag"
                    initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }} transition={{ delay: ci*0.08 + si*0.04 }}>
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
