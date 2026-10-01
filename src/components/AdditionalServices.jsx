import { content } from '../config/content'

export default function AdditionalServices() {
  const { heading, items, backgroundImage } = content.additionalServices

  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--section-alt)' }}>
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left: heading + image */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="section-heading mb-10" style={{ color: 'var(--text-base)' }}>
                {heading}
              </h2>
              <div className="img-frame aspect-[4/3] lg:aspect-[4/5]">
                <img src={backgroundImage} alt="" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Right: numbered list */}
          <div className="lg:col-span-7">
            <ol className="border-t hairline">
              {items.map((item, i) => (
                <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 py-10 border-b hairline">
                  <span className="index-num pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3
                      className="font-heading text-2xl leading-snug mb-4"
                      style={{ fontWeight: 500, color: 'var(--text-base)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
