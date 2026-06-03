import { content } from '../config/content'

export default function Testimonial() {
  const { quote, author, role, backgroundImage } = content.testimonial
  return (
    <section
      className="relative bg-cover bg-center img-overlay section-pad"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large decorative quote mark */}
        <div
          className="text-8xl font-900 leading-none mb-4 select-none"
          style={{ color: 'var(--accent)', fontWeight: 900, lineHeight: 0.8 }}
          aria-hidden="true"
        >
          "
        </div>

        <blockquote
          className="text-2xl md:text-4xl font-700 text-white leading-snug mb-8"
          style={{ fontWeight: 700 }}
        >
          {quote}
        </blockquote>

        <div className="flex flex-col items-center gap-1">
          <div
            className="w-12 h-0.5 mb-4"
            style={{ backgroundColor: 'var(--accent)' }}
          />
          <p className="text-white font-600" style={{ fontWeight: 600 }}>{author}</p>
          <p className="text-sm" style={{ color: 'var(--text-faint)' }}>{role}</p>
        </div>
      </div>
    </section>
  )
}
