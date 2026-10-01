import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { content } from '../config/content'
import PageHero from '../components/PageHero'
import CallToAction from '../components/CallToAction'

export default function AboutPage() {
  const { about } = content

  useEffect(() => {
    document.title = 'About | intelXsa'
    return () => { document.title = 'intelXsa — BMS Engineering Support' }
  }, [])

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: 'About' }]}
        eyebrow={<p className="eyebrow on-dark">{about.eyebrow}</p>}
        title={about.heading}
        description={about.description}
        image={about.heroImage}
      />

      {/* ── Mission / Who We Are ──────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <p className="eyebrow mb-6">Our Mission</p>
              <h2 className="section-heading mb-8" style={{ color: 'var(--text-base)' }}>
                {about.mission.heading}
              </h2>
              <p className="lead mb-10">
                {about.mission.body}
              </p>
              <Link to="/contact" className="btn-dark">
                Work With Us
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="img-frame aspect-[4/3] lg:aspect-[5/6]">
                <img src={about.mission.sectionImage} alt="intelXsa engineering team" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: 'var(--section-dark)' }}>
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {about.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-6 lg:px-10 text-center lg:text-left hairline-d ${i % 2 === 1 ? 'border-l' : ''} ${i > 0 ? 'lg:border-l' : ''}`}
              >
                <div
                  className="font-heading text-4xl sm:text-5xl mb-3 leading-none"
                  style={{ color: 'var(--accent)', fontWeight: 500 }}
                >
                  {stat.value}
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em]" style={{ color: 'var(--text-faint)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Expertise ───────────────────────────────────── */}
      <section id={about.expertise.id} className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-6">Capabilities</p>
              <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>
                {about.expertise.heading}
              </h2>
            </div>
            <ol className="lg:col-span-8 border-t hairline">
              {about.expertise.items.map((item, i) => (
                <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-b hairline">
                  <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[0.95rem] leading-relaxed" style={{ color: 'var(--text-base)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
