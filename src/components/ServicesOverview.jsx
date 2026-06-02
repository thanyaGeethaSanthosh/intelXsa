import { Lightbulb, Wind, Sun, TrendingUp, Briefcase } from 'lucide-react'
import { content } from '../config/content'

const iconMap = { Lightbulb, Wind, Sun, TrendingUp, Briefcase }

export default function ServicesOverview() {
  const { heading, subheading, items } = content.services
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">What We Offer</p>
          <h2 className="section-heading mb-4">{heading}</h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="bg-white p-8 card-lift border border-divider"
                style={{ borderColor: 'var(--border-base)' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-5"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  {Icon && <Icon size={22} className="text-white" />}
                </div>
                <h3 className="text-lg font-700 mb-3" style={{ fontWeight: 700, color: 'var(--text-base)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-5 text-xs font-700 tracking-widest uppercase transition-colors"
                  style={{ color: 'var(--accent)', fontWeight: 700 }}
                  onClick={(e) => e.preventDefault()}
                >
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
