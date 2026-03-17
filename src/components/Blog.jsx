import { motion } from 'framer-motion'
import { PenLine } from 'lucide-react'

export default function Blog() {
  return (
    <section className="section-pad mesh-bg">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-4xl font-bold text-text-primary mb-2 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          Blog & Technical Writing
        </motion.h2>
        <motion.div className="w-16 h-1 bg-accent mx-auto mb-12 rounded-full"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} />

        <motion.div
          className="rounded-2xl border-2 border-dashed border-accent-light p-10 text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <PenLine className="text-accent-light mx-auto mb-3" size={36} />
          <p className="font-body text-text-secondary">
            Blog posts and technical articles coming soon. Stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
