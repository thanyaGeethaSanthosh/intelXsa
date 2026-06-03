import { Check } from 'lucide-react'
import { content } from '../config/content'

export default function TaxCredit() {
  const { eyebrow, heading, description, highlights, cta, backgroundImage } = content.taxCredit
  return (
    <section
      className="relative bg-cover bg-center img-overlay section-pad"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl ml-auto text-right">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="section-heading text-white mb-5">{heading}</h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">{description}</p>

          <ul className="space-y-3 mb-10 text-left inline-block">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mt-0.5"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <Check size={11} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-white/85 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <a href="#" className="btn-accent text-xs" onClick={(e) => e.preventDefault()}>
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
