import { ArrowRight } from 'lucide-react'
import { content } from '../config/content'

// Points are written as "Title: description" — split so the title can be set apart.
function splitPoint(point) {
  const idx = point.indexOf(':')
  if (idx === -1) return { title: null, body: point }
  return { title: point.slice(0, idx + 1), body: point.slice(idx + 1).trim() }
}

export default function WhyChooseUs() {
  const { eyebrow, heading, description, points, cta, backgroundImage } = content.whyChooseUs
  return (
    <section
      className="relative bg-cover bg-center img-overlay section-pad"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow on-dark mb-6">{eyebrow}</p>
            <h2 className="section-heading mb-6 whitespace-pre-line" style={{ color: 'var(--heading-on-dark)' }}>
              {heading}
            </h2>
            <p className="text-white/70 text-[1.0625rem] leading-relaxed mb-10">{description}</p>
            <a href="#contact" className="btn-accent">
              {cta}
              <ArrowRight size={15} />
            </a>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t hairline-d">
            {points.map((point, i) => {
              const { title, body } = splitPoint(point)
              return (
                <li key={point} className="py-8 border-b hairline-d on-dark">
                  <span className="index-num block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  {title && (
                    <h3 className="font-heading text-xl text-white mb-3" style={{ fontWeight: 500 }}>
                      {title}
                    </h3>
                  )}
                  <p className="text-sm leading-relaxed text-white/65">{body}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
