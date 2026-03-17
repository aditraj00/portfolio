import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'

const INFO = [
  { icon:Mail,    label:'Email',    value:'aditraj1102@gmail.com',        href:'mailto:aditraj1102@gmail.com' },
  { icon:Phone,   label:'Phone',    value:'+91-7667004151',               href:'tel:+917667004151' },
  { icon:Linkedin,label:'LinkedIn', value:'linkedin.com/in/adit-raj',     href:'https://linkedin.com/in/adit-raj' },
  { icon:Github,  label:'GitHub',   value:'github.com/aditraj00',         href:'https://github.com/aditraj00' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })

  const submit = e => {
    e.preventDefault()
    const text = encodeURIComponent(`Hi, I'm ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`https://wa.me/917667004151?text=${text}`, '_blank')
  }

  return (
    <section id="Contact" className="sec bg-alt">
      <div className="max-w-5xl mx-auto">

        <motion.div className="mb-4" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <h2 className="sec-title">Let's <span>Connect</span></h2>
          <div className="yellow-bar" />
        </motion.div>

        <motion.p className="mb-12" style={{ fontFamily:'Inter, sans-serif', fontSize:'0.9rem', color:'#9CA3AF' }}
          initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Info cards */}
          <motion.div className="flex flex-col gap-3"
            initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            {INFO.map(c => {
              const Icon = c.icon
              return (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background:'#1A1500', border:'1px solid rgba(255,215,0,0.25)' }}>
                    <Icon size={17} style={{ color:'#FFD700' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily:'Inter, sans-serif', fontSize:'0.7rem', color:'#555', marginBottom:'2px' }}>{c.label}</div>
                    <div style={{ fontFamily:'Inter, sans-serif', fontSize:'0.875rem', fontWeight:500, color:'#FFFFFF' }}>{c.value}</div>
                  </div>
                </a>
              )
            })}

            <div className="flex gap-3 mt-2">
              {[{ icon:Github, href:'https://github.com/aditraj00' },{ icon:Linkedin, href:'https://linkedin.com/in/adit-raj' },{ icon:Mail, href:'mailto:aditraj1102@gmail.com' }].map(({ icon:Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ border:'1px solid #1E1E1E', color:'#555' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='#FFD700'; e.currentTarget.style.color='#FFD700' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='#1E1E1E'; e.currentTarget.style.color='#555' }}>
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={submit} className="card p-6 flex flex-col gap-4"
            initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <input type="text" placeholder="Your Name" required className="inp"
              value={form.name} onChange={e => setForm({ ...form, name:e.target.value })} />
            <input type="email" placeholder="Your Email" required className="inp"
              value={form.email} onChange={e => setForm({ ...form, email:e.target.value })} />
            <textarea placeholder="Your Message" rows={5} required className="inp" style={{ resize:'none' }}
              value={form.message} onChange={e => setForm({ ...form, message:e.target.value })} />
            <button type="submit" className="btn-yellow justify-center">
              <Send size={15} /> Send on WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
