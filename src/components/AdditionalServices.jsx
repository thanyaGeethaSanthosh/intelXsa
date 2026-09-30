import { content } from '../config/content'

export default function AdditionalServices() {
  const { heading, items, backgroundImage } = content.additionalServices

  return (
    <section
      className="relative bg-cover bg-center img-overlay section-pad"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] gap-10 items-center">
          <h2 className="section-heading text-white text-center lg:text-left">
            {heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <article key={item.title} className="bg-white p-6">
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text-base)' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
