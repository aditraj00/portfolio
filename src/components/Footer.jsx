import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background:'#050505', borderTop:'1px solid #1E1E1E' }} className="py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <span style={{ fontFamily:'Space Grotesk, sans-serif', fontWeight:700, fontSize:'1.1rem' }}>
            <span style={{ color:'#FFD700' }}>AR</span><span style={{ color:'#FFFFFF' }}>.</span>
          </span>
          <span style={{ fontFamily:'Inter, sans-serif', fontSize:'0.8rem', color:'#444' }}>
            Adit Raj © {new Date().getFullYear()}
          </span>
        </div>

        <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'0.68rem', color:'#333' }}>
          Built with React · Tailwind · Framer Motion
        </p>

        <div className="flex gap-4">
          {[{ icon:Github, href:'https://github.com/aditraj00' },{ icon:Linkedin, href:'https://linkedin.com/in/adit-raj' },{ icon:Mail, href:'mailto:aditraj1102@gmail.com' }].map(({ icon:Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              style={{ color:'#333' }}
              onMouseEnter={e => e.currentTarget.style.color='#FFD700'}
              onMouseLeave={e => e.currentTarget.style.color='#333'}>
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
