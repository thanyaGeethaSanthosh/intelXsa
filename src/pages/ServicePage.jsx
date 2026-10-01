import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'
import PageHero from '../components/PageHero'
import OtherServices from '../components/OtherServices'
import CallToAction from '../components/CallToAction'

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
      <PageHero
        crumbs={[{ label: 'Services' }, { label: service.title }]}
        eyebrow={Icon && (
          <span
            className="inline-flex items-center justify-center w-14 h-14 border"
            style={{ borderColor: 'rgba(255,255,255,0.3)' }}
          >
            <Icon size={24} strokeWidth={1.4} style={{ color: 'var(--accent)' }} />
          </span>
        )}
        title={service.title}
        description={service.description}
        image={service.heroImage}
      >
        <a href="#contact" className="btn-accent mt-10">
          Get Support Now
          <ArrowRight size={15} />
        </a>
      </PageHero>

      {/* ── Overview ──────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-6">Overview</p>
              <h2 className="section-heading mb-10" style={{ color: 'var(--text-base)' }}>
                What We Deliver
              </h2>
              {page.overviewPoints ? (
                <div className="border-t hairline mb-10">
                  {page.overviewPoints.map((point, i) => (
                    <div key={point.title} className="grid grid-cols-[2.5rem_1fr] gap-3 py-6 border-b hairline">
                      <span className="index-num pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-heading text-xl mb-2" style={{ fontWeight: 500, color: 'var(--text-base)' }}>
                          {point.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="lead mb-10">
                  {page.intro}
                </p>
              )}
              <a href="#contact" className="btn-dark">
                Start a Project
                <ArrowRight size={15} />
              </a>
            </div>
            <div className="lg:col-span-6">
              <div className="img-frame aspect-[4/3]">
                <img src={page.sectionImage} alt={service.title} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-6">Deliverables</p>
              <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>
                What's Included
              </h2>
            </div>
            <p className="lead lg:col-span-6">
              Every engagement includes clean, organized files delivered in your preferred format.
            </p>
          </div>
          <div className={page.deliverablesImage
            ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] gap-12 items-center'
            : ''}
          >
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t hairline">
              {page.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-4 py-5 border-b hairline">
                  <Check size={16} strokeWidth={2} className="flex-shrink-0 mt-1" style={{ color: 'var(--accent-dark)' }} />
                  <span className="text-[0.95rem] leading-relaxed" style={{ color: 'var(--text-base)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {page.deliverablesImage && (
              <div className="img-frame max-h-[420px]">
                <img src={page.deliverablesImage} alt={`${service.title} deliverables example`} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── For Whom ──────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mb-14">
            <p className="eyebrow mb-6">Who It's For</p>
            <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>
              Perfect For
            </h2>
          </div>
          <div className={page.forWhomImage
            ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-12 items-stretch'
            : ''}
          >
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${page.forWhomImage ? '' : 'lg:grid-cols-4'} gap-x-10`}>
              {page.forWhom.map((item, i) => (
                <div key={item.title} className="py-8 border-t hairline">
                  <span className="index-num block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-heading text-xl mb-3" style={{ fontWeight: 500, color: 'var(--text-base)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            {page.forWhomImage && (
              <div className="img-frame min-h-[260px] max-h-[440px]">
                <img src={page.forWhomImage} alt={`${service.title} programming interface`} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Other Services ────────────────────────────────────────── */}
      <div className="border-t hairline">
        <OtherServices currentSlug={slug} />
      </div>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CallToAction />
    </>
  )
}
