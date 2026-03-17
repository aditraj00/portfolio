import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Projects      from './components/Projects'
import Certifications from './components/Certifications'
import Experience    from './components/Experience'
import Hackathons    from './components/Hackathons'
import OpenSource    from './components/OpenSource'
import Research      from './components/Research'
import Contact       from './components/Contact'
import Footer        from './components/Footer'
import PDFViewer     from './components/PDFViewer'

export default function App() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const [pdfOpen, setPdfOpen] = useState(false)

  useEffect(() => {
    const move = e => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px' }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px' }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />

      <Navbar onViewCV={() => setPdfOpen(true)} />
      <main>
        <Hero onViewCV={() => setPdfOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Hackathons />
        <OpenSource />
        <Research />
        <Contact />
      </main>
      <Footer />
      <PDFViewer isOpen={pdfOpen} onClose={() => setPdfOpen(false)} />

      {/* Floating Resume FAB */}
      <motion.a
        href="/assets/Adit_CV.pdf" download
        className="btn-yellow fixed bottom-6 right-6 z-50"
        style={{ padding:'11px 22px', fontSize:'0.82rem', boxShadow:'0 0 24px rgba(255,215,0,0.25)' }}
        animate={{ scale:[1, 1.06, 1] }}
        transition={{ duration:2.2, repeat:Infinity, ease:'easeInOut' }}
        whileHover={{ scale:1.1 }}>
        <Download size={15} /> Resume
      </motion.a>
    </>
  )
}
