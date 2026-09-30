import { content } from '../config/content'
import { serviceIconMap } from '../config/icons'

export default function ServiceHighlights() {
  const { heading, description, backgroundImage, items } = content.serviceHighlights
  return (
    <section
      id="services"
      className="relative bg-cover bg-center img-overlay"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="eyebrow mb-3">Remote Project Support</p>
          <h2 className="section-heading mb-4" style={{ color: 'var(--heading-on-dark)' }}>
            {heading}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-faint)' }}>
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/15">
          {items.map((item) => {
            const Icon = serviceIconMap[item.icon]
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center px-5 py-8 bg-black/80 card-lift cursor-default group"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 mb-5 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  {Icon && <Icon size={24} className="text-white" />}
                </div>
                <h3 className="text-white font-700 text-base mb-2 leading-snug" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
