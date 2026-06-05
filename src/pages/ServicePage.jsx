import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Check, Home, ChevronRight } from 'lucide-react'
import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'
import OtherServices from '../components/OtherServices'
import CallToAction from '../components/CallToAction'

function Breadcrumb({ title }) {
  return (
    <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--text-faint)' }}>
      <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
        <Home size={12} />
        <span>Home</span>
      </Link>
      <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
      <span style={{ color: 'var(--text-faint)' }}>Services</span>
      <ChevronRight size={12} style={{ color: 'var(--text-muted)' }} />
      <span className="text-white font-medium">{title}</span>
    </nav>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = content.services.items.find((s) => s.slug === slug)

  useEffect(() => {
    if (service) document.title = `${service.title} | intelXsa`
    return () => { document.title = 'intelXsa — BMS Engineering Support' }
  }, [service])

  if (!service) return <Navigate to="/" replace />

  const Icon = serviceIconMap[service.icon]
  const { page } = service

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-end bg-cover bg-center img-overlay pt-16"
        style={{ backgroundImage: `url('${service.heroImage}')` }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Breadcrumb title={service.title} />
          <div className="flex items-center gap-4 mb-4">
            <div
              className="flex items-center justify-center w-14 h-14 flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              {Icon && <Icon size={26} className="text-white" />}
            </div>
          </div>
          <h1 className="section-heading mb-4" style={{ color: 'var(--heading-on-dark)' }}>
            {service.title}
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.78)' }}>
            {service.description}
          </p>
          <a href="#contact" className="btn-accent text-xs">Get Support Now</a>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="section-heading mb-5" style={{ color: 'var(--text-base)' }}>
                What We Deliver
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
                {page.intro}
              </p>
              <a href="#contact" className="btn-accent text-xs">Start a Project</a>
            </div>
            <div className="relative">
              <img
                src={page.sectionImage}
                alt={service.title}
                className="w-full object-cover"
                style={{ height: '400px' }}
                loading="lazy"
              />
              <div
                className="absolute -bottom-3 -left-3 w-24 h-24"
                style={{ backgroundColor: 'var(--accent)', opacity: 0.15 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: 'var(--section-dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Deliverables</p>
            <h2 className="section-heading mb-3" style={{ color: 'var(--heading-on-dark)' }}>
              What's Included
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-faint)' }}>
              Every engagement includes clean, organized files delivered in your preferred format.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {page.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderLeft: `3px solid var(--accent)` }}>
                <span
                  className="flex-shrink-0 flex items-center justify-center w-5 h-5 mt-0.5"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <Check size={11} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Whom ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Who It's For</p>
            <h2 className="section-heading mb-3" style={{ color: 'var(--text-base)' }}>
              Perfect For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.forWhom.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 card-lift"
                style={{ borderTop: `3px solid var(--accent)` }}
              >
                <h3
                  className="text-sm font-700 mb-2"
                  style={{ fontWeight: 700, color: 'var(--text-base)' }}
                >
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ────────────────────────────────────────── */}
      <OtherServices currentSlug={slug} />

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CallToAction />
    </>
  )
}
