import { Link } from 'react-router-dom'
import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'
import { ArrowRight } from 'lucide-react'

export default function OtherServices({ currentSlug }) {
  const others = content.services.items.filter((s) => s.slug !== currentSlug)

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Our Services</p>
          <h2 className="section-heading mb-3" style={{ color: 'var(--text-base)' }}>
            Explore Our Other Services
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Each service is available as a standalone engagement or as part of a complete BMS project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((service) => {
            const Icon = serviceIconMap[service.icon]
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col p-6 bg-white border card-lift"
                style={{ borderColor: 'var(--border-base)' }}
              >
                <div
                  className="flex items-center justify-center w-11 h-11 mb-4 flex-shrink-0 transition-colors duration-200"
                  style={{ backgroundColor: 'var(--section-dark)' }}
                >
                  {Icon && <Icon size={20} className="text-white" />}
                </div>
                <h3
                  className="text-sm font-700 mb-2 leading-snug"
                  style={{ fontWeight: 700, color: 'var(--text-base)' }}
                >
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-muted)' }}>
                  {service.description.slice(0, 90)}…
                </p>
                <span
                  className="inline-flex items-center gap-1 text-xs font-700 uppercase tracking-widest mt-auto transition-colors duration-200"
                  style={{ color: 'var(--accent)', fontWeight: 700 }}
                >
                  View Service
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
