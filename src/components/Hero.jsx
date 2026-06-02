import { content } from '../config/content'

export default function Hero() {
  const { hero } = content
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center img-overlay pt-16"
      style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
    >
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="eyebrow mb-4">Energy Solutions</p>
        <h1 className="section-heading text-white mb-3">
          {hero.headline}
        </h1>
        <h2
          className="text-4xl md:text-6xl font-800 mb-6"
          style={{ color: 'var(--accent)', fontWeight: 800 }}
        >
          {hero.subheadline}
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.description}
        </p>
        <a href="#contact" className="btn-accent text-sm">
          {hero.cta}
        </a>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
      />
    </section>
  )
}
