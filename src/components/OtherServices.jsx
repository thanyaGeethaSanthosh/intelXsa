import { Link } from 'react-router-dom'
import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'
import { ArrowRight } from 'lucide-react'

export default function OtherServices({ currentSlug }) {
  const others = content.services.items.filter((s) => s.slug !== currentSlug)

  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">Our Services</p>
            <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>
              Explore Our Other Services
            </h2>
          </div>
          <p className="lead lg:col-span-6">
            Each service is available as a standalone engagement or as part of a complete BMS project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((service) => {
            const Icon = serviceIconMap[service.icon]
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col p-8 bg-white border hairline card-lift"
              >
                {Icon && <Icon size={26} strokeWidth={1.4} className="mb-8" style={{ color: 'var(--accent-dark)' }} />}
                <h3
                  className="font-heading text-xl mb-3 leading-snug"
                  style={{ fontWeight: 500, color: 'var(--text-base)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-8" style={{ color: 'var(--text-muted)' }}>
                  {service.description.slice(0, 90)}…
                </p>
                <span className="text-link mt-auto self-start">
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
