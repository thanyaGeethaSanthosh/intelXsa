import { ArrowRight } from 'lucide-react'
import { content } from '../config/content'

export default function Hero() {
  const { hero } = content
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center img-overlay pt-20"
      style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
    >
      <div className="container-x py-24">
        <div className="max-w-3xl">
          <p className="eyebrow on-dark mb-8">BMS &amp; EMS Solution</p>
          <h1 className="display-heading text-white mb-6">
            {hero.headline}
          </h1>
          <h2
            className="font-heading italic text-2xl md:text-3xl mb-8"
            style={{ color: 'var(--accent)', fontWeight: 400 }}
          >
            {hero.subheadline}
          </h2>
          <div className="w-16 h-px mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.35)' }} />
          <p className="text-base md:text-lg text-white/75 max-w-2xl mb-12 leading-relaxed">
            {hero.description}
          </p>
          <a href="#contact" className="btn-accent">
            {hero.cta}
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
      />
    </section>
  )
}
