import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'

export default function ServicesOverview() {
  const { heading, subheading, items } = content.services
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">What We Offer</p>
          <h2 className="section-heading mb-4" style={{ color: 'var(--text-base)' }}>{heading}</h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = serviceIconMap[item.icon]
            return (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group bg-white p-8 card-lift border flex flex-col"
                style={{ borderColor: 'var(--border-base)' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-5 flex-shrink-0"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  {Icon && <Icon size={22} className="text-white" />}
                </div>
                <h3
                  className="text-lg font-700 mb-3"
                  style={{ fontWeight: 700, color: 'var(--text-base)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 mt-5 text-xs font-700 tracking-widest uppercase transition-colors"
                  style={{ color: 'var(--accent)', fontWeight: 700 }}
                >
                  Learn More
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
