import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Check, Home, ChevronRight } from 'lucide-react'
import { content } from '../config/content'
import CallToAction from '../components/CallToAction'

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--text-faint)' }}>
      <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
        <Home size={12} /><span>Home</span>
      </Link>
      <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
      <span className="text-white font-medium">About</span>
    </nav>
  )
}

export default function AboutPage() {
  const { about } = content

  useEffect(() => {
    document.title = 'About | intelXsa'
    return () => { document.title = 'intelXsa — BMS Engineering Support' }
  }, [])

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex items-end bg-cover bg-center img-overlay pt-16"
        style={{ backgroundImage: `url('${about.heroImage}')` }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Breadcrumb />
          <p className="eyebrow mb-3">{about.eyebrow}</p>
          <h1 className="section-heading mb-4" style={{ color: 'var(--heading-on-dark)' }}>
            {about.heading}
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {about.description}
          </p>
        </div>
      </section>

      {/* ── Mission / Who We Are ──────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-3">Our Mission</p>
              <h2 className="section-heading mb-5" style={{ color: 'var(--text-base)' }}>
                {about.mission.heading}
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                {about.mission.body}
              </p>
              <Link to="/contact" className="btn-accent text-xs">Work With Us</Link>
            </div>
            <div className="relative">
              <img
                src={about.mission.sectionImage}
                alt="intelXsa engineering team"
                className="w-full object-cover"
                style={{ height: '420px' }}
                loading="lazy"
              />
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 pointer-events-none"
                style={{ backgroundColor: 'var(--accent)', opacity: 0.15 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: 'var(--section-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-5xl font-900 mb-2 leading-none"
                  style={{ color: 'var(--accent)', fontWeight: 900 }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-500 uppercase tracking-widest" style={{ color: 'var(--text-faint)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Expertise ───────────────────────────────────── */}
      <section
        id={about.expertise.id}
        className="section-pad"
        style={{ backgroundColor: 'var(--section-alt)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Capabilities</p>
              <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>
                {about.expertise.heading}
              </h2>
            </div>
            <ul className="space-y-4">
              {about.expertise.items.map((item) => (
                <li key={item} className="flex items-start gap-4 p-4 bg-white" style={{ borderLeft: '3px solid var(--accent)' }}>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-5 h-5 mt-0.5"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-base)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
