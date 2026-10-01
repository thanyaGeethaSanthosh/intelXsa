import { content } from '../config/content'

export default function Testimonial() {
  const { quote, author, role, backgroundImage } = content.testimonial
  return (
    <section
      className="relative bg-cover bg-center img-overlay section-pad"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container-x">
        <figure className="max-w-4xl mx-auto text-center">
          <div
            className="font-heading text-7xl leading-none mb-6 select-none"
            style={{ color: 'var(--accent)', lineHeight: 0.6 }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote
            className="font-heading italic text-2xl md:text-[2.4rem] text-white leading-snug mb-12"
            style={{ fontWeight: 400 }}
          >
            {quote}
          </blockquote>

          <figcaption className="flex flex-col items-center gap-1">
            <div className="w-10 h-px mb-5" style={{ backgroundColor: 'var(--accent)' }} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{author}</p>
            <p className="text-sm" style={{ color: 'var(--text-faint)' }}>{role}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
