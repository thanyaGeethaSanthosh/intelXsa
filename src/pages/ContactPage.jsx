import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Globe, Clock, Home, ChevronRight, Pencil, Lock, Send } from 'lucide-react'
import { content } from '../config/content'

const iconMap = { Mail, Globe, Clock }

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--text-faint)' }}>
      <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
        <Home size={12} /><span>Home</span>
      </Link>
      <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
      <span className="text-white font-medium">Contact</span>
    </nav>
  )
}

function buildEmailBody(f) {
  const service = f.service || 'General Enquiry'
  const phone   = f.phone   || 'Not provided'
  return `Dear intelXsa Team,

I am reaching out to enquire about your ${service} services.

─── Contact Details ───────────────────
Name:    ${f.name    || '[Your Name]'}
Company: ${f.company || '[Company Name]'}
Email:   ${f.email   || '[Your Email]'}
Phone:   ${phone}
Service: ${service}

─── Project Details ───────────────────
${f.message || '[Please describe your project or requirements]'}

──────────────────────────────────────
Looking forward to your response.

Best regards,
${f.name    || '[Your Name]'}
${f.company || '[Company Name]'}`
}

function buildSubject(f) {
  const service = f.service ? `${f.service}` : 'BMS Engineering Support'
  const company = f.company ? ` | ${f.company}` : ''
  return `BMS Enquiry — ${service}${company}`
}

const EMPTY = { name: '', company: '', email: '', phone: '', service: '', message: '' }

export default function ContactPage() {
  const { contact } = content
  const [form,      setForm]      = useState(EMPTY)
  const [emailBody, setEmailBody] = useState(buildEmailBody(EMPTY))
  const [editing,   setEditing]   = useState(false)
  const [sent,      setSent]      = useState(false)

  useEffect(() => {
    document.title = 'Contact | intelXsa'
    return () => { document.title = 'intelXsa — BMS Engineering Support' }
  }, [])

  // Regenerate preview only when NOT in manual edit mode
  useEffect(() => {
    if (!editing) setEmailBody(buildEmailBody(form))
  }, [form, editing])

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSend(e) {
    e.preventDefault()
    const subject = encodeURIComponent(buildSubject(form))
    const body    = encodeURIComponent(emailBody)
    window.open(`mailto:${contact.toEmail}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputCls = `w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-accent`
  const inputStyle = { borderColor: 'var(--border-base)', color: 'var(--text-base)', backgroundColor: '#fff' }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative flex items-end bg-cover bg-center img-overlay pt-16"
        style={{ minHeight: '40vh', background: `linear-gradient(135deg, var(--primary) 0%, var(--section-dark) 100%)` }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-8">
          <Breadcrumb />
          <p className="eyebrow mb-3">{contact.eyebrow}</p>
          <h1 className="section-heading mb-3" style={{ color: 'var(--heading-on-dark)' }}>
            {contact.heading}
          </h1>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
            {contact.description}
          </p>
        </div>
      </section>

      {/* ── Info Cards ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--section-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {contact.cards.map((card) => {
              const Icon = iconMap[card.icon]
              return (
                <div key={card.label} className="flex items-center gap-4 px-6 py-7">
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    {Icon && <Icon size={18} className="text-white" />}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      {card.label}
                    </p>
                    <p className="text-sm font-600 text-white" style={{ fontWeight: 600 }}>
                      {card.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Email Preview ──────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ── Left: Form ───────────────────────────────────────── */}
            <div className="bg-white p-8" style={{ border: '1px solid var(--border-base)' }}>
              <h2 className="text-xl font-700 mb-6" style={{ fontWeight: 700, color: 'var(--text-base)' }}>
                Send Us a Message
              </h2>

              <form onSubmit={handleSend} className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-600 uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                      Full Name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      required placeholder="John Smith"
                      className={inputCls} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-600 uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                      Company <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      required placeholder="Acme Corp"
                      className={inputCls} style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-600 uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                      Email <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      required placeholder="you@company.com"
                      className={inputCls} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-600 uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                      Phone
                    </label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 000-000-0000"
                      className={inputCls} style={inputStyle}
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="block text-xs font-600 uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                    Service Required <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    required className={inputCls} style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">— Select a service —</option>
                    {contact.serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-600 uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)', fontWeight: 600 }}>
                    Project Details <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    required rows={5}
                    placeholder="Describe your project, timeline, and any specific requirements..."
                    className={`${inputCls} resize-none`} style={inputStyle}
                  />
                </div>

                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Fields marked <span style={{ color: 'var(--accent)' }}>*</span> are required. Review the generated email on the right before sending.
                </p>
              </form>
            </div>

            {/* ── Right: Email Preview ──────────────────────────────── */}
            <div className="flex flex-col">
              <div
                className="flex-1 bg-white p-8 flex flex-col"
                style={{ border: '1px solid var(--border-base)' }}
              >
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-700" style={{ fontWeight: 700, color: 'var(--text-base)' }}>
                    Generated Email
                  </h2>
                  <button
                    type="button"
                    onClick={() => setEditing((v) => !v)}
                    className="flex items-center gap-2 text-xs font-600 px-3 py-2 transition-colors"
                    style={{
                      fontWeight: 600,
                      color: editing ? '#fff' : 'var(--accent)',
                      backgroundColor: editing ? 'var(--accent)' : 'transparent',
                      border: '1px solid var(--accent)',
                    }}
                  >
                    {editing
                      ? <><Lock size={12} /> Lock Content</>
                      : <><Pencil size={12} /> Edit Content</>
                    }
                  </button>
                </div>

                {/* To / Subject preview */}
                <div
                  className="text-xs mb-3 px-3 py-2 space-y-1"
                  style={{ backgroundColor: 'var(--section-alt)', borderLeft: '3px solid var(--accent)' }}
                >
                  <p style={{ color: 'var(--text-muted)' }}>
                    <span className="font-600" style={{ fontWeight: 600, color: 'var(--text-base)' }}>To: </span>
                    {content.contact.toEmail}
                  </p>
                  <p style={{ color: 'var(--text-muted)' }}>
                    <span className="font-600" style={{ fontWeight: 600, color: 'var(--text-base)' }}>Subject: </span>
                    {buildSubject(form)}
                  </p>
                </div>

                {/* Email body */}
                <div className="flex-1 min-h-0">
                  {editing ? (
                    <textarea
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                      className="w-full h-full min-h-64 p-4 text-xs font-mono leading-relaxed resize-none outline-none"
                      style={{
                        border: '1px solid var(--accent)',
                        color: 'var(--text-base)',
                        backgroundColor: '#fafafa',
                      }}
                    />
                  ) : (
                    <pre
                      className="w-full h-full min-h-64 p-4 text-xs font-mono leading-relaxed overflow-auto whitespace-pre-wrap"
                      style={{
                        border: '1px solid var(--border-base)',
                        color: 'var(--text-base)',
                        backgroundColor: '#fafafa',
                      }}
                    >
                      {emailBody}
                    </pre>
                  )}
                </div>

                {editing && (
                  <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                    You are editing the email body directly. Click <strong>Lock Content</strong> to save your changes.
                  </p>
                )}
              </div>

              {/* Send button */}
              <button
                type="button"
                onClick={handleSend}
                disabled={!form.name || !form.company || !form.email || !form.service || !form.message}
                className="flex items-center justify-center gap-2 w-full py-4 text-sm font-700 uppercase tracking-widest transition-all mt-4"
                style={{
                  fontWeight: 700,
                  backgroundColor: sent ? 'var(--section-dark)' : 'var(--accent)',
                  color: '#fff',
                  opacity: (!form.name || !form.company || !form.email || !form.service || !form.message) ? 0.45 : 1,
                  cursor: (!form.name || !form.company || !form.email || !form.service || !form.message) ? 'not-allowed' : 'pointer',
                }}
              >
                <Send size={16} />
                {sent ? 'Email Client Opened ✓' : `Send to ${content.contact.toEmail}`}
              </button>
              <p className="text-xs text-center mt-2" style={{ color: 'var(--text-muted)' }}>
                Opens your default email client with the message pre-filled and ready to send.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
