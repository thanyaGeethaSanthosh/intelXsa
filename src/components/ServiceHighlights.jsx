import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'

export default function ServiceHighlights() {
  const { heading, description, backgroundImage, items } = content.serviceHighlights
  const slugs = content.services.items.map((s) => s.slug)

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        {/* Header: heading left, description right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">Remote Project Support</p>
            <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>
              {heading}
            </h2>
          </div>
          <p className="lead lg:col-span-6">
            {description}
          </p>
        </div>

        {/* Wide image band */}
        <div className="img-frame aspect-[16/9] sm:aspect-[21/8] mb-20">
          <img src={backgroundImage} alt="" loading="lazy" />
        </div>

        {/* Service list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t hairline">
          {items.map((item, i) => {
            const Icon = serviceIconMap[item.icon]
            return (
              <Link
                key={item.title}
                to={`/services/${slugs[i]}`}
                className="group flex flex-col pt-8 pb-10 sm:pr-8 lg:px-6 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-b lg:border-b-0 hairline transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="index-num">{String(i + 1).padStart(2, '0')}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-faint transition-all duration-200 group-hover:text-accent-dark group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                {Icon && <Icon size={26} strokeWidth={1.4} className="mb-5" style={{ color: 'var(--accent-dark)' }} />}
                <h3
                  className="font-heading text-xl leading-snug mb-3 transition-colors group-hover:text-accent-dark"
                  style={{ fontWeight: 500, color: 'var(--text-base)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
