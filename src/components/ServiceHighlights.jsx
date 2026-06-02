import { Lightbulb, Wind, Sun, BadgeDollarSign, Hammer } from 'lucide-react'
import { content } from '../config/content'

const iconMap = { Lightbulb, Wind, Sun, BadgeDollarSign, Hammer }

export default function ServiceHighlights() {
  const { items } = content.serviceHighlights
  return (
    <section style={{ backgroundColor: 'var(--section-dark)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center px-6 py-10 card-lift cursor-default group"
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
