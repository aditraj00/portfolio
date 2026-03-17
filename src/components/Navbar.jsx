import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = ['Home','About','Skills','Projects','Certifications','Experience','Achievements','Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const fn = () => {
      setSolid(window.scrollY > 40)
      const cur = LINKS.map(id => {
        const el = document.getElementById(id)
        return el ? { id, top: el.getBoundingClientRect().top } : null
      }).filter(Boolean).filter(o => o.top <= 110).at(-1)
      if (cur) setActive(cur.id)
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: solid ? 'rgba(10,10,10,0.96)' : 'transparent', borderBottom: solid ? '1px solid #1E1E1E' : 'none', backdropFilter: solid ? 'blur(18px)' : 'none' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <button onClick={() => go('Home')} className="font-display font-bold text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span style={{ color: '#FFD700' }}>AR</span><span style={{ color: '#FFFFFF' }}>.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <li key={l}>
              <button onClick={() => go(l)} className="relative text-sm font-medium pb-1 transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif', color: active === l ? '#FFD700' : '#888' }}>
                {l}
                {active === l && <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full" style={{ background: '#FFD700' }} />}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden" style={{ color: '#FFFFFF' }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-5" style={{ background: '#0E0E0E', borderTop: '1px solid #1E1E1E' }}>
          {LINKS.map(l => (
            <button key={l} onClick={() => go(l)} className="text-left text-sm font-medium"
              style={{ fontFamily: 'Inter, sans-serif', color: active === l ? '#FFD700' : '#888' }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
