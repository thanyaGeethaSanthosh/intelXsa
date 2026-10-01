import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Shared header for inner pages.
// crumbs: [{ label, to? }] — the last crumb is the current page.
export default function PageHero({ crumbs, eyebrow, title, description, image, background, children }) {
  return (
    <section
      className="relative flex items-end bg-cover bg-center img-overlay pt-20 min-h-[60vh]"
      style={image ? { backgroundImage: `url('${image}')` } : { background }}
    >
      <div className="container-x pt-20 pb-20">
        <nav className="flex flex-wrap items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] mb-10" style={{ color: 'var(--text-faint)' }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <ChevronRight size={11} style={{ color: 'var(--text-muted)' }} />
              {i === crumbs.length - 1
                ? <span className="text-white">{crumb.label}</span>
                : <span>{crumb.label}</span>}
            </span>
          ))}
        </nav>
        <div className="max-w-3xl">
          {eyebrow && <div className="mb-6">{eyebrow}</div>}
          <h1 className="display-heading !text-[clamp(2.25rem,4.6vw,3.75rem)] mb-6" style={{ color: 'var(--heading-on-dark)' }}>
            {title}
          </h1>
          {description && (
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
