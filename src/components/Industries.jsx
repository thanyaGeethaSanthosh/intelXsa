import { Factory, Car, Film, UtensilsCrossed, Building2, Package, Truck, Flame } from 'lucide-react'
import { content } from '../config/content'

const iconMap = { Factory, Car, Film, UtensilsCrossed, Building2, Package, Truck, Flame }

export default function Industries() {
  const { heading, subheading, items } = content.industries
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">Who We Serve</p>
          <h2 className="section-heading mb-4">{heading}</h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-8 card-lift cursor-default border border-divider"
                style={{ borderColor: 'var(--border-base)' }}
              >
                <div
                  className="flex items-center justify-center w-14 h-14 mb-4 rounded-full"
                  style={{ backgroundColor: 'var(--section-dark)' }}
                >
                  {Icon && <Icon size={24} className="text-white" />}
                </div>
                <span className="text-sm font-600" style={{ fontWeight: 600, color: 'var(--text-base)' }}>
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
